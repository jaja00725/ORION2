const slides = window.GAME_SLIDES || [];
const HOME_PATH = "/";
const HOME_STORAGE_KEY = "orion_static_state_home";
const GAMES = [
  {
    id: "sepoty",
    path: "/sepoty-stromu/",
    aliases: ["/sepoty-stromu", "/šepoty-stromů", "/šepoty stromů"],
    startId: 1,
    endId: 50,
    storageKey: "orion_static_state_sepoty"
  },
  {
    id: "digitalni-past",
    path: "/digitalni-past/",
    aliases: ["/digitalni-past", "/digitální-past", "/digitální past"],
    startId: 51,
    endId: 124,
    storageKey: "orion_static_state_digitalni_past"
  }
];

const root = document.querySelector("#slideRoot");
const progressFill = document.querySelector("#progressFill");
const counter = document.querySelector("#slideCounter");
const slideType = document.querySelector("#slideType");
const chapterLabel = document.querySelector("#chapterLabel");
const backBtn = document.querySelector("#backBtn");
const forwardBtn = document.querySelector("#forwardBtn");
const resetBtn = document.querySelector("#resetBtn");

let state = loadState();
let localSelection = null;
let hintUsage = {};
let typewriterTimer = null;
let answerLocked = false;
let activeAudioMessage = null;

function normalizePath(path) {
  const decoded = decodeURIComponent(path || HOME_PATH).toLowerCase();
  return decoded.length > 1 ? decoded.replace(/\/$/, "") : decoded;
}

function gameByPath(path = window.location.pathname) {
  const normalized = normalizePath(path);
  return GAMES.find((game) => [game.path, ...game.aliases].map(normalizePath).includes(normalized)) || null;
}

function resolveAssetUrl(value) {
  const url = String(value || "");
  if (!url || url === "DOPLNIT_URL" || url === "#") return url;
  if (/^(https?:|data:|mailto:|tel:|\/)/i.test(url)) return url;
  if (!url.startsWith("assets/")) return url;
  return gameByPath() ? `../${url}` : url;
}

function gameBySlideId(id) {
  return GAMES.find((game) => id >= game.startId && id <= game.endId) || null;
}

function indexForSlideId(id) {
  return slides.findIndex((slide) => slide.id === id);
}

function gameBounds(game) {
  return {
    start: indexForSlideId(game.startId),
    end: indexForSlideId(game.endId)
  };
}

function emptyState(index = 0) {
  return { currentIndex: index, maxReachedIndex: index, answers: {} };
}

function loadState() {
  const routeGame = gameByPath();
  if (!routeGame) return emptyState(0);
  const bounds = gameBounds(routeGame);
  try {
    const parsed = JSON.parse(sessionStorage.getItem(routeGame.storageKey) || "");
    const currentIndex = Number.isInteger(parsed.currentIndex) ? parsed.currentIndex : bounds.start;
    const maxReachedIndex = Number.isInteger(parsed.maxReachedIndex) ? parsed.maxReachedIndex : currentIndex;
    if (currentIndex < bounds.start || currentIndex > bounds.end) return emptyState(bounds.start);
    return {
      currentIndex,
      maxReachedIndex: Math.min(Math.max(maxReachedIndex, currentIndex, bounds.start), bounds.end),
      answers: parsed.answers || {}
    };
  } catch {
    return emptyState(bounds.start);
  }
}

function saveState() {
  const slide = currentSlide();
  const game = slide ? gameBySlideId(slide.id) : gameByPath();
  sessionStorage.setItem(game?.storageKey || HOME_STORAGE_KEY, JSON.stringify(state));
}

function setPath(path, replace = false) {
  if (normalizePath(window.location.pathname) === normalizePath(path)) return;
  const method = replace ? "replaceState" : "pushState";
  window.history[method]({}, "", path);
}

function syncRouteForSlide(slide) {
  const game = gameBySlideId(slide.id);
  if (game) {
    setPath(game.path, true);
  } else {
    setPath(HOME_PATH, true);
  }
}

function startGame(startSlideId) {
  const game = gameBySlideId(startSlideId);
  if (!game) return;
  const startIndex = indexForSlideId(startSlideId);
  setPath(game.path);
  state = emptyState(startIndex);
  localSelection = null;
  hintUsage = {};
  saveState();
  render();
  scrollToSlideTop();
}

function goHome() {
  setPath(HOME_PATH);
  state = emptyState(0);
  localSelection = null;
  hintUsage = {};
  saveState();
  render();
  scrollToSlideTop();
}

function normalize(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function beep(type) {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const ctx = new AudioContext();
    const make = (freq, delay = 0, duration = 0.22, wave = "sine", gainValue = 0.13) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = wave;
      osc.frequency.value = freq;
      const t = ctx.currentTime + delay;
      gain.gain.setValueAtTime(gainValue, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + duration);
      osc.start(t);
      osc.stop(t + duration);
    };
    if (type === "wrong") make(120, 0, 0.55, "sawtooth", 0.18);
    else if (type === "correct") [440, 550, 660].forEach((freq, index) => make(freq, index * 0.11));
    else make(520, 0, 0.45);
  } catch {
    // Audio can be blocked until the first user gesture; gameplay still continues.
  }
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function currentSlide() {
  return slides[state.currentIndex];
}

function setStatus(slide) {
  const game = gameBySlideId(slide.id);
  const bounds = game ? gameBounds(game) : { start: 0, end: 0 };
  const total = game ? bounds.end - bounds.start + 1 : 1;
  const position = game ? state.currentIndex - bounds.start + 1 : 0;
  const pct = game ? (position / total) * 100 : 0;
  progressFill.style.width = `${pct}%`;
  counter.textContent = game ? `${String(position).padStart(2, "0")} / ${total}` : "";
  slideType.textContent = slide.type.replace("-", " ");
  chapterLabel.textContent = findChapterLabel();
  const isChoice = slide.type === "choice";
  backBtn.hidden = isChoice;
  forwardBtn.hidden = isChoice;
  const chapterStart = findChapterStartIndex();
  backBtn.disabled = state.currentIndex <= chapterStart;
  forwardBtn.disabled = state.currentIndex >= Math.min(state.maxReachedIndex, bounds.end);
}

function findChapterLabel() {
  const slide = currentSlide();
  const game = slide ? gameBySlideId(slide.id) : null;
  const bounds = game ? gameBounds(game) : { start: 0 };
  for (let i = state.currentIndex; i >= bounds.start; i--) {
    const slide = slides[i];
    if (slide?.type === "chapter") return `Kapitola ${slide.chapterNum}: ${slide.chapterTitle}`;
  }
  return game ? "Úvod případu" : "Výběr hry";
}

function findChapterStartIndex() {
  const slide = currentSlide();
  const game = slide ? gameBySlideId(slide.id) : null;
  const bounds = game ? gameBounds(game) : { start: 0 };
  for (let i = state.currentIndex; i >= 0; i--) {
    if (i < bounds.start) return bounds.start;
    if (slides[i]?.type === "chapter") return i;
  }
  return bounds.start;
}

function advance(answer) {
  document.activeElement?.blur?.();
  const slide = currentSlide();
  if (answer !== undefined && slide) state.answers[slide.id] = answer;
  const game = slide ? gameBySlideId(slide.id) : null;
  const bounds = game ? gameBounds(game) : { end: slides.length - 1 };
  state.currentIndex = Math.min(state.currentIndex + 1, bounds.end);
  state.maxReachedIndex = Math.max(state.maxReachedIndex, state.currentIndex);
  saveState();
  localSelection = null;
  answerLocked = false;
  render();
  scrollToSlideTop();
}

function goBack() {
  const chapterStart = findChapterStartIndex();
  if (state.currentIndex - 1 < chapterStart) return;
  state.currentIndex = state.currentIndex - 1;
  saveState();
  localSelection = null;
  answerLocked = false;
  render();
  scrollToSlideTop();
}

function goForward() {
  if (state.currentIndex >= state.maxReachedIndex) return;
  const game = gameBySlideId(currentSlide()?.id);
  const bounds = game ? gameBounds(game) : { end: slides.length - 1 };
  if (state.currentIndex >= bounds.end) return;
  state.currentIndex += 1;
  saveState();
  localSelection = null;
  answerLocked = false;
  render();
  scrollToSlideTop();
}

function scrollToSlideTop() {
  const jump = () => {
    const scroller = document.scrollingElement || document.documentElement;
    scroller.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    document.querySelectorAll(".game-main, .stage, .slide").forEach((element) => {
      element.scrollTop = 0;
    });
    window.scrollTo(0, 0);
  };

  jump();
  requestAnimationFrame(jump);
  [40, 120, 260, 520, 900, 1400].forEach((delay) => window.setTimeout(jump, delay));
}

function render() {
  stopAudioMessage();
  answerLocked = false;
  if (typewriterTimer) {
    clearTimeout(typewriterTimer);
    typewriterTimer = null;
  }
  const slide = currentSlide();
  if (!slide) {
    root.innerHTML = `<p class="copy">Chybí data hry.</p>`;
    return;
  }
  document.body.classList.toggle("theme-blue", slide.id >= 51);
  syncRouteForSlide(slide);
  
  const isRevisiting = state.currentIndex < state.maxReachedIndex;
  
  setStatus(slide);

  const renderers = {
    choice: renderChoice,
    intro: renderIntro,
    chapter: renderChapter,
    video: renderVideo,
    audio: renderAudio,
    interlude: renderInterlude,
    "conditional-interlude": renderConditionalInterlude,
    question: (s) => renderQuestion(s, isRevisiting),
    conclusion: renderConclusion
  };

  const content = renderers[slide.type]?.(slide) || `<p class="copy">Neznámý typ slidu.</p>`;
  root.innerHTML = content;
  bindSlide(slide, isRevisiting);
}

function header(label) {
  const game = gameBySlideId(currentSlide()?.id);
  const bounds = game ? gameBounds(game) : { start: 0 };
  const position = game ? state.currentIndex - bounds.start + 1 : state.currentIndex + 1;
  return `<div class="slide-header"><span class="badge">${escapeHtml(label)}</span><span class="meta">Evidence ${String(position).padStart(2, "0")}</span></div>`;
}

function renderChoice(slide) {
  const choicesHtml = slide.choices.map((choice, index) => `
    <div class="choice-box choice-box-${index === 0 ? "green" : "blue"}" data-choice="${index}">
      <img src="${escapeHtml(resolveAssetUrl(choice.image))}" alt="Volba ${index + 1}" class="choice-image">
      <p class="choice-label">${escapeHtml(choice.label)}</p>
    </div>
  `).join('');
  
  return `
    <div class="choice-screen">
      <div class="choices-container">
        ${choicesHtml}
      </div>
    </div>
  `;
}

function renderIntro(slide) {
  return `
    <header class="intro-head">
      <div class="meta">${escapeHtml(slide.department || "Obvodní oddělení - Hvozdná nad Rabduzou")}</div>
      <h2 class="title-xl">O.R.I.O.N.</h2>
      <div class="meta intro-sub">Interní systém - přístup povolen</div>
      <div class="meta">${escapeHtml(slide.caseNumber || "Případ № 2254578/2026")}</div>
    </header>
    <div class="video-box">${videoContent(slide.videoId)}</div>
    ${slide.audioUrl ? `<div class="actions"><button class="primary-btn audio-listen-btn" type="button" data-audio-message data-audio-src="${escapeHtml(resolveAssetUrl(slide.audioUrl))}">Detektiv audio</button></div><div class="audio-status" data-audio-status></div>` : ""}
    <div class="case-grid terminal-panel">
      <p><span>Případ:</span> <strong>${escapeHtml(slide.caseName || "Šepoty stromů")}</strong></p>
      <p><span>Stupeň utajení:</span> <strong class="warning-text">${escapeHtml(slide.classification || "Přísně tajné")}</strong></p>
      <p><span>Stav:</span> <strong class="status-active">● Aktivní šetření</strong></p>
      <p><span>Lokalita:</span> <strong>${escapeHtml(slide.location || "Podlesí, Česká republika")}</strong></p>
    </div>
    <div class="actions"><button class="primary-btn start-btn" data-next>Zahájit šetření</button></div>
    <footer class="system-footer">▮▮▮▮ Veškerá data jsou šifrována ▮▮▮▮ Neoprávněný přístup je zakázán ▮▮▮▮</footer>
  `;
}

function renderChapter(slide) {
  return `
    <div class="terminal-panel chapter-panel">
      ${header(`Kapitola ${slide.chapterNum}`)}
      <h2 class="chapter-title">${escapeHtml(slide.chapterTitle)}</h2>
      <div class="chapter-divider"></div>
      ${slide.warning ? `<div class="chapter-warning-box"><strong>Varování</strong><span>${escapeHtml(slide.warning)}</span></div>` : ""}
      ${slide.note ? `<div class="chapter-note-box"><strong>Poznámka</strong><span>${escapeHtml(slide.note)}</span></div>` : ""}
      <div class="chapter-video video-box">${videoContent(slide.videoId)}</div>
      ${slide.audioUrl ? `<div class="actions"><button class="primary-btn audio-listen-btn" type="button" data-audio-message data-audio-src="${escapeHtml(resolveAssetUrl(slide.audioUrl))}">Detektiv audio</button></div><div class="audio-status" data-audio-status></div>` : ""}
      <div class="actions"><button class="primary-btn" data-next>${escapeHtml(slide.buttonText || "Pokračovat")}</button></div>
    </div>
  `;
}

function renderVideo(slide) {
  return `
    ${header("Video záznam")}
    <div class="video-box">${videoContent(slide.videoId)}</div>
    ${slide.audioUrl ? `<div class="actions"><button class="primary-btn audio-listen-btn" type="button" data-audio-message data-audio-src="${escapeHtml(resolveAssetUrl(slide.audioUrl))}">Detektiv audio</button></div><div class="audio-status" data-audio-status></div>` : ""}
    <div class="actions"><button class="primary-btn" data-next>${escapeHtml(slide.buttonText || "Pokračovat")}</button></div>
  `;
}

function renderAudio(slide) {
  return `
    ${header("Audio stopa")}
    <div class="audio-message-box terminal-panel">
      <button class="primary-btn audio-listen-btn" type="button" data-audio-message ${slide.audioUrl ? `data-audio-src="${escapeHtml(resolveAssetUrl(slide.audioUrl))}"` : ""}>${escapeHtml(slide.listenButtonText || "Poslechnout vzkaz od historika Tomáše Havelky")}</button>
      <div class="audio-visualizer" aria-hidden="true">
        <canvas data-audio-wave width="760" height="128"></canvas>
      </div>
      <div class="audio-status" data-audio-status>Vzorová zvuková stopa připravena</div>
    </div>
    <div class="audio-case-note">${escapeHtml(slide.infoText || "Nyní otevři spis a pokračuj v pátrání.")}</div>
    <div class="actions"><button class="primary-btn" data-next>${escapeHtml(slide.buttonText || "Pokračovat")}</button></div>
  `;
}

function renderInterlude(slide) {
  const linkUrl = slide.link?.url && slide.link.url !== "DOPLNIT_URL" ? resolveAssetUrl(slide.link.url) : "#";
  const extraAudioMessages = slide.extraAudioMessages || [];
  return `
    ${header("Záznam vyšetřovatele")}
    <div class="audio-message-box terminal-panel">
      <button class="primary-btn audio-listen-btn" type="button" data-audio-message ${slide.audioUrl ? `data-audio-src="${escapeHtml(resolveAssetUrl(slide.audioUrl))}"` : ""}>Poslechnout vzkaz od detektiva</button>
      <div class="audio-visualizer" aria-hidden="true">
        <canvas data-audio-wave width="760" height="128"></canvas>
      </div>
      <div class="audio-status" data-audio-status>Zvukový záznam připraven</div>
    </div>
    ${extraAudioMessages.map((audio) => `
      <div class="audio-message-box terminal-panel">
        <button class="primary-btn audio-listen-btn" type="button" data-audio-message ${audio.audioUrl ? `data-audio-src="${escapeHtml(resolveAssetUrl(audio.audioUrl))}"` : ""}>${escapeHtml(audio.listenButtonText || "Poslechnout vzkaz")}</button>
        <div class="audio-visualizer" aria-hidden="true">
          <canvas data-audio-wave width="760" height="128"></canvas>
        </div>
        <div class="audio-status" data-audio-status>Zvukový záznam připraven</div>
      </div>
    `).join("")}
    ${slide.noticeText ? `
      <div class="hints terminal-hints notice-terminal">
        <div class="hint-output" data-notice-output></div>
        <div class="hint-actions">
          <button class="hint-terminal-btn" type="button" data-notice-alert>
            <span class="hint-icon">!</span> UPOZORNĚNÍ
          </button>
        </div>
      </div>
    ` : ""}
    ${slide.link ? `<div class="case-link-slot"><a class="case-link" href="${escapeHtml(linkUrl)}" target="_blank" rel="noreferrer">${escapeHtml(slide.link.label)}</a></div>` : ""}
    ${renderHints(slide.hints)}
    <div class="actions"><button class="primary-btn" data-next>${escapeHtml(slide.buttonText || "Pokračovat")}</button></div>
  `;
}

function renderConditionalInterlude(slide) {
  const picked = state.answers[slide.conditionSlideId];
  const audioUrl = resolveAssetUrl(slide.conditionalAudioUrls?.[picked] || slide.audioUrl || "");
  const linkUrl = slide.link?.url && slide.link.url !== "DOPLNIT_URL" ? resolveAssetUrl(slide.link.url) : "#";
  return `
    ${header("Podmíněný záznam")}
    <div class="audio-message-box terminal-panel">
      <button class="primary-btn audio-listen-btn" type="button" data-audio-message ${audioUrl ? `data-audio-src="${escapeHtml(audioUrl)}"` : ""}>Poslechnout vzkaz od detektiva</button>
      <div class="audio-visualizer" aria-hidden="true">
        <canvas data-audio-wave width="760" height="128"></canvas>
      </div>
      <div class="audio-status" data-audio-status>Zvukový záznam připraven</div>
    </div>
    ${slide.link ? `<div class="case-link-slot"><a class="case-link" href="${escapeHtml(linkUrl)}" target="_blank" rel="noreferrer">${escapeHtml(slide.link.label)}</a></div>` : ""}
    <div class="actions"><button class="primary-btn" data-next>Pokračovat</button></div>
  `;
}

function renderConclusion(slide) {
  return `
    <div class="terminal-panel conclusion-panel">
      ${header("Závěr")}
      <h2 class="chapter-title">Případ uzavřen</h2>
      <div class="conclusion-status ${slide.hideConclusionDetail ? "conclusion-status-single" : ""}">
        <strong>Spis archivován</strong>
        ${slide.hideConclusionDetail ? "" : "<span>Rekonstrukce pr?chodu je dokon?ena.</span>"}
      </div>
      <div class="conclusion-video video-box">${videoContent(slide.videoId)}</div>
      ${slide.audioUrl ? `<div class="actions"><button class="primary-btn audio-listen-btn" type="button" data-audio-message data-audio-src="${escapeHtml(resolveAssetUrl(slide.audioUrl))}">Detektiv audio</button></div><div class="audio-status" data-audio-status></div>` : ""}
      ${slide.songAudioUrl ? `
        <div class="conclusion-song">
          <div class="music-note" aria-hidden="true">♫</div>
          <div class="actions"><button class="primary-btn audio-listen-btn" type="button" data-audio-message data-audio-src="${escapeHtml(resolveAssetUrl(slide.songAudioUrl))}">${escapeHtml(slide.songButtonText || "Poslechnout")}</button></div>
          <div class="audio-status" data-audio-status></div>
        </div>
      ` : ""}
      <div class="conclusion-note">Můžeš se vrátit na rozcestník a spustit další samostatný případ.</div>
      <div class="actions"><button class="primary-btn" data-home>Zpět na výběr hry</button></div>
    </div>
  `;
}

function videoContent(videoId) {
  return `<div class="youtube-placeholder" data-video-id="${escapeHtml(videoId || "")}"><div class="play-triangle"></div><div>Video zatím není k dispozici</div><small>[video bude doplněno později]</small></div>`;
}

function renderQuestion(slide, isRevisiting) {
  const body = {
    1: renderSingleChoice,
    2: renderTextFields,
    3: renderOpenText,
    4: renderMultiChoice,
    5: renderYesNo,
    6: renderDecision,
    7: renderKeyword
  }[slide.questionType]?.(slide, isRevisiting) || `<p class="copy">Nepodporovaný typ otázky.</p>`;

  return `
    ${header(`Otázka typ ${slide.questionType}`)}
    <div class="question-text">${escapeHtml(slide.text)}</div>
    ${body}
    ${isRevisiting ? "" : renderHints(slide.hints)}
  `;
}

function renderSingleChoice(slide, isRevisiting) {
  if (isRevisiting) {
    return reviewList([slide.options?.[slide.correctIndex] || "N/A"]);
  }
  return `
    <div class="options">
      ${(slide.options || []).map((option, index) => optionButton(option, index, "radio")).join("")}
    </div>
    <div class="actions"><button class="primary-btn" data-submit="single" disabled>Odeslat odpověď</button></div>
    <div id="feedbackSlot"></div>
  `;
}

function renderMultiChoice(slide, isRevisiting) {
  if (isRevisiting) {
    const correct = slide.correctIndices || [];
    return reviewList(correct.map((index) => slide.options?.[index] || "N/A"));
  }
  return `
    <p class="meta">Vyber všechny správné odpovědi</p>
    <div class="options">
      ${(slide.options || []).map((option, index) => optionButton(option, index, "checkbox")).join("")}
    </div>
    <div class="actions"><button class="primary-btn" data-submit="multi" disabled>Odeslat odpověď</button></div>
    <div id="feedbackSlot"></div>
  `;
}

function renderDecision(slide, isRevisiting) {
  if (isRevisiting) {
    const chosenIndex = state.answers[slide.id];
    return reviewList([slide.options?.[chosenIndex] || "N/A"]);
  }
  return `
    <div class="options">
      ${(slide.options || []).map((option, index) => optionButton(option, index, "radio")).join("")}
    </div>
    <div class="actions"><button class="primary-btn" data-submit="decision" disabled>Potvrdit rozhodnutí</button></div>
    <div id="feedbackSlot"></div>
  `;
}

function renderYesNo(slide, isRevisiting) {
  if (isRevisiting) {
    const answer = slide.yesNoCorrect === "both" ? state.answers[slide.id] : slide.yesNoCorrect;
    return reviewList([yesNoLabel(answer)]);
  }
  return `
    <div class="actions">
      <button class="primary-btn yesno-btn yesno-yes" data-yesno="yes">ANO</button>
      <button class="primary-btn yesno-btn yesno-no" data-yesno="no">NE</button>
    </div>
    <div id="feedbackSlot"></div>
  `;
}

function renderOpenText(slide, isRevisiting) {
  if (isRevisiting) {
    const answer = state.answers[slide.id] || "";
    return reviewList([displayTypedAnswer(answer)]);
  }
  return `
    <div class="input-row">
      <input class="game-input" data-open-input autocomplete="off" spellcheck="false" placeholder="Zadej odpověď...">
    </div>
    <div class="actions"><button class="primary-btn" data-submit="open" disabled>Potvrdit</button></div>
    <div id="feedbackSlot"></div>
  `;
}

function renderTextFields(slide, isRevisiting) {
  if (isRevisiting) {
    const labels = slide.fieldLabels || [];
    const count = labels.length || slide.fieldCount || slide.correctAnswers?.length || 1;
    const reviewValues = textFieldReviewValues(slide);
    return `
      <div class="input-grid">
        ${Array.from({ length: count }).map((_, index) => `
          <label class="input-row">
            <span class="field-label">${escapeHtml(labels[index] || `Slovo ${index + 1}`)}</span>
            ${reviewValue(reviewValues[index] || "")}
          </label>
        `).join("")}
      </div>
    `;
  }
  const labels = slide.fieldLabels || [];
  const count = labels.length || slide.fieldCount || slide.correctAnswers?.length || 1;
  return `
    <div class="input-grid">
      ${Array.from({ length: count }).map((_, index) => `
        <label class="input-row">
          <span class="field-label">${escapeHtml(labels[index] || `Slovo ${index + 1}`)}</span>
          <input class="game-input" data-field="${index}" autocomplete="off" spellcheck="false">
        </label>
      `).join("")}
    </div>
    <div class="actions"><button class="primary-btn" data-submit="fields" disabled>Odeslat odpovědi</button></div>
    <div id="feedbackSlot"></div>
  `;
}

function renderKeyword(slide, isRevisiting) {
  if (isRevisiting) {
    return reviewList([slide.correctAnswer || slide.keywordAnswers?.[0] || "N/A"]);
  }
  return `
    <div class="input-row">
      <input class="game-input" data-open-input autocomplete="off" spellcheck="false" placeholder="Zadej odpověď...">
    </div>
    <div class="actions"><button class="primary-btn" data-submit="keyword" disabled>Potvrdit</button></div>
    <div id="feedbackSlot"></div>
  `;
}

function storedFieldAnswers(slide) {
  const stored = state.answers[slide.id];
  if (Array.isArray(stored)) return stored;
  if (typeof stored !== "string") return [];
  try {
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function textFieldReviewValues(slide) {
  const correct = slide.correctAnswers || [];
  const stored = storedFieldAnswers(slide);

  const used = new Set();
  return correct.map((answer) => {
    const index = stored.findIndex((value, candidateIndex) => !used.has(candidateIndex) && normalize(value) === normalize(answer));
    if (index === -1) return answer;
    used.add(index);
    return displayTypedAnswer(stored[index]);
  });
}

function displayTypedAnswer(value) {
  return String(value || "").toLocaleUpperCase("cs-CZ");
}

function reviewValue(value) {
  return `<div class="option-review"><span>✓</span><strong>${escapeHtml(value || "N/A")}</strong></div>`;
}

function reviewList(values) {
  const list = values.filter((value) => value !== undefined && value !== null && String(value).trim() !== "");
  return `
    <div class="options options-review">
      ${(list.length ? list : ["N/A"]).map((value) => reviewValue(value)).join("")}
    </div>
  `;
}

function yesNoLabel(value) {
  return value === "yes" ? "ANO" : value === "no" ? "NE" : "ANO / NE";
}

function optionButton(option, index, type) {
  return `
    <button class="option" type="button" data-option="${index}" data-option-type="${type}">
      <span>${type === "checkbox" ? "☐" : "○"}</span>
      <span>${escapeHtml(option)}</span>
    </button>
  `;
}

function renderHints(hints) {
  const list = hints?.textHints || [];
  const audioCount = hints?.audioHintCount || 0;
  if (!list.length && !audioCount) return "";
  const usage = hintUsage[currentSlide()?.id] || { text: 0, audio: 0 };
  return `
    <div class="hints terminal-hints">
      <div class="hint-output" data-hint-output>
        ${list.slice(0, usage.text).map((hint, index) => `
          <div class="hint-line">
            <span>NÁPOVĚDA ${index + 1}:</span> ${escapeHtml(hint)}
          </div>
        `).join("")}
      </div>
      <div class="hint-actions">
        <button class="hint-terminal-btn" type="button" data-text-hint ${usage.text >= list.length ? "disabled" : ""}>
          <span class="hint-icon">💡</span> TEXTOVÁ NÁPOVĚDA (${usage.text}/${list.length})
        </button>
        <button class="hint-terminal-btn hint-voice-btn" type="button" data-audio-hint ${audioCount ? "" : "disabled"}>
          <span class="hint-icon">📞</span> HLASOVÁ NÁPOVĚDA (${usage.audio}/${audioCount})
        </button>
      </div>
    </div>
  `;
}

function bindSlide(slide) {
  root.querySelectorAll("[data-next]").forEach((btn) => btn.addEventListener("click", () => advance()));
  root.querySelectorAll("[data-home]").forEach((btn) => btn.addEventListener("click", goHome));
  root.querySelectorAll("[data-reset]").forEach((btn) => btn.addEventListener("click", reset));

  root.querySelectorAll(".choice-box").forEach((box) => {
  box.addEventListener("click", () => {

    const choiceIndex = Number(box.dataset.choice);
    const choice = slide.choices[choiceIndex];

    if (choice.nextSlide !== undefined) {
      startGame(choice.nextSlide);

    } else {
      advance();
    }

  });
});

  root.querySelectorAll("[data-option]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const index = Number(btn.dataset.option);
      if (btn.dataset.optionType === "checkbox") {
        const set = localSelection instanceof Set ? localSelection : new Set();
        set.has(index) ? set.delete(index) : set.add(index);
        localSelection = set;
      } else {
        localSelection = index;
      }
      updateOptionState();
    });
  });

  root.querySelectorAll("input").forEach((input) => {
    input.addEventListener("input", () => {
      syncInputUppercase(input);
      updateSubmitState();
    });
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        if (!answerLocked) root.querySelector("[data-submit]:not(:disabled)")?.click();
      }
    });
  });

  root.querySelectorAll("[data-submit]").forEach((btn) => {
    btn.addEventListener("click", () => submitQuestion(slide, btn.dataset.submit));
  });

  root.querySelectorAll("[data-yesno]").forEach((btn) => {
    btn.addEventListener("click", () => submitYesNo(slide, btn.dataset.yesno));
  });

  root.querySelectorAll("[data-text-hint]").forEach((btn) => {
    btn.addEventListener("click", () => showTextHint(slide));
  });

  root.querySelectorAll("[data-audio-hint]").forEach((btn) => {
    btn.addEventListener("click", () => useAudioHint(slide));
  });

  root.querySelectorAll("[data-audio-message]").forEach((btn) => {
    btn.addEventListener("click", () => playAudioMessage(btn));
  });

  root.querySelectorAll("[data-notice-alert]").forEach((btn) => {
    btn.addEventListener("click", () => showNotice(slide, btn));
  });
}

function syncInputUppercase(input) {
  const start = input.selectionStart;
  const end = input.selectionEnd;
  const upperValue = input.value.toLocaleUpperCase("cs-CZ");
  if (input.value === upperValue) return;
  input.value = upperValue;
  input.setSelectionRange?.(start, end);
}

function updateOptionState() {
  root.querySelectorAll("[data-option]").forEach((btn) => {
    const index = Number(btn.dataset.option);
    const selected = localSelection instanceof Set ? localSelection.has(index) : localSelection === index;
    btn.classList.toggle("selected", selected);
    btn.firstElementChild.textContent = btn.dataset.optionType === "checkbox" ? (selected ? "☑" : "☐") : (selected ? "●" : "○");
  });
  updateSubmitState();
}

function updateSubmitState() {
  const submit = root.querySelector("[data-submit]");
  if (!submit) return;
  if (submit.dataset.submit === "fields") {
    submit.disabled = Array.from(root.querySelectorAll("[data-field]")).some((input) => !input.value.trim());
  } else if (submit.dataset.submit === "open" || submit.dataset.submit === "keyword") {
    submit.disabled = !root.querySelector("[data-open-input]")?.value.trim();
  } else if (localSelection instanceof Set) {
    submit.disabled = localSelection.size === 0;
  } else {
    submit.disabled = localSelection === null;
  }
}

function submitQuestion(slide, mode) {
  if (answerLocked) return;
  if (mode === "single") {
    const correct = localSelection === slide.correctIndex;
    return handleResult(correct, slide.options?.[localSelection] || "");
  }

  if (mode === "multi") {
    const selected = Array.from(localSelection || []).sort((a, b) => a - b);
    const correct = [...(slide.correctIndices || [])].sort((a, b) => a - b);
    const ok = selected.length === correct.length && selected.every((value, index) => value === correct[index]);
    return handleResult(ok, selected);
  }

  if (mode === "decision") {
    return handleResult(true, slide.options?.[localSelection] || "", true);
  }

  if (mode === "open") {
    const value = root.querySelector("[data-open-input]")?.value.trim() || "";
    const ok = (slide.acceptedAnswers || []).some((answer) => normalize(answer) === normalize(value));
    return handleResult(ok, value);
  }

  if (mode === "fields") {
    const values = Array.from(root.querySelectorAll("[data-field]")).map((input) => input.value.trim());
    const correct = slide.correctAnswers || [];
    const ok = values.map(normalize).sort().join("|") === correct.map(normalize).sort().join("|");
    return handleResult(ok, JSON.stringify(values));
  }

  if (mode === "keyword") {
    const value = root.querySelector("[data-open-input]")?.value.trim() || "";
    const normalized = normalize(value);
    const ok = (slide.keywordAnswers || []).some((answer) => normalized.includes(normalize(answer)));
    return handleResult(ok, value);
  }
}

function submitYesNo(slide, answer) {
  if (answerLocked) return;
  handleResult(slide.yesNoCorrect === "both" || answer === slide.yesNoCorrect, answer);
}

function handleResult(ok, answer, noted = false) {
  const slot = root.querySelector("#feedbackSlot");
  if (!slot) return;
  if (ok) {
    answerLocked = true;
    document.activeElement?.blur?.();
    lockQuestionControls();
    beep(noted ? "noted" : "correct");
    slot.innerHTML = `<div class="feedback ${noted ? "note" : "ok"}"><strong>${noted ? "Bereme na vědomí" : "Schváleno"}</strong><span>${noted ? "Rozhodnutí bylo zaznamenáno." : "Odpověď potvrzena."}</span></div>`;
    setTimeout(() => advance(answer), noted ? 1200 : 1000);
  } else {
    beep("wrong");
    slot.innerHTML = `<div class="feedback bad"><strong>Bez důkazů</strong><span>Odpověď neodpovídá evidenci.</span></div>`;
  }
}

function lockQuestionControls() {
  root.querySelectorAll("[data-submit], [data-yesno], [data-option], input").forEach((element) => {
    element.disabled = true;
  });
}

function stopAudioMessage() {
  if (!activeAudioMessage) return;
  activeAudioMessage.stop?.();
  if (activeAudioMessage.frame) cancelAnimationFrame(activeAudioMessage.frame);
  activeAudioMessage = null;
}

function playAudioMessage(button) {
  stopAudioMessage();

  const box = button.closest(".audio-message-box");
  const canvas = box?.querySelector("[data-audio-wave]");
  const buttonRow = button.closest(".actions");
  const rowStatus = buttonRow?.nextElementSibling?.matches("[data-audio-status]") ? buttonRow.nextElementSibling : null;
  const status = box?.querySelector("[data-audio-status]") || rowStatus;
  const audioSrc = button.dataset.audioSrc;

  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) {
    if (status) status.textContent = "Audio není v tomto prohlížeči dostupné.";
    return;
  }

  button.textContent = "Poslechnout znovu";
  box?.classList.add("is-playing");
  if (status) status.textContent = "Přehrávám vzkaz";

  const audioContext = new AudioContext();
  audioContext.resume?.();
  const analyser = audioContext.createAnalyser();
  analyser.fftSize = 256;
  analyser.smoothingTimeConstant = 0.78;
  analyser.connect(audioContext.destination);

  const finish = () => {
    box?.classList.remove("is-playing");
    if (status) status.textContent = "Záznam připraven k opětovnému přehrání";
    if (activeAudioMessage?.context === audioContext) {
      if (activeAudioMessage.frame) cancelAnimationFrame(activeAudioMessage.frame);
      activeAudioMessage = null;
    }
    audioContext.close?.();
  };

  let stop;
  if (audioSrc) {
    const audio = new Audio(audioSrc);
    const source = audioContext.createMediaElementSource(audio);
    source.connect(analyser);
    audio.addEventListener("ended", finish, { once: true });
    stop = () => {
      audio.pause();
      audio.currentTime = 0;
      audioContext.close?.();
    };
    audio.play().catch(() => {
      if (status) status.textContent = "Přehrávání se nepodařilo spustit.";
      finish();
    });
  } else {
    const now = audioContext.currentTime;
    const syllables = [
      [0.00, 0.22, 132, 0.12],
      [0.26, 0.18, 158, 0.09],
      [0.48, 0.26, 118, 0.14],
      [0.86, 0.2, 176, 0.11],
      [1.1, 0.24, 142, 0.13],
      [1.44, 0.17, 126, 0.08],
      [1.68, 0.28, 188, 0.14],
      [2.08, 0.22, 151, 0.1],
      [2.35, 0.2, 113, 0.12],
      [2.66, 0.3, 166, 0.15],
      [3.08, 0.18, 130, 0.08],
      [3.32, 0.32, 146, 0.13]
    ];
    const master = audioContext.createGain();
    const formantA = audioContext.createBiquadFilter();
    const formantB = audioContext.createBiquadFilter();
    const formantC = audioContext.createBiquadFilter();
    const lowShelf = audioContext.createBiquadFilter();
    const createdNodes = [];

    master.gain.value = 0.9;
    lowShelf.type = "lowshelf";
    lowShelf.frequency.value = 220;
    lowShelf.gain.value = -3;
    formantA.type = "bandpass";
    formantA.frequency.value = 620;
    formantA.Q.value = 5;
    formantB.type = "bandpass";
    formantB.frequency.value = 1180;
    formantB.Q.value = 7;
    formantC.type = "bandpass";
    formantC.frequency.value = 2450;
    formantC.Q.value = 8;

    master.connect(lowShelf);
    lowShelf.connect(formantA);
    lowShelf.connect(formantB);
    lowShelf.connect(formantC);
    formantA.connect(analyser);
    formantB.connect(analyser);
    formantC.connect(analyser);

    syllables.forEach(([offset, length, pitch, volume], index) => {
      const start = now + offset;
      const stopAt = start + length;
      const voiceGain = audioContext.createGain();
      const osc = audioContext.createOscillator();
      const buzz = audioContext.createOscillator();
      osc.type = "sawtooth";
      buzz.type = "square";
      osc.frequency.setValueAtTime(pitch, start);
      osc.frequency.linearRampToValueAtTime(pitch + (index % 2 ? -18 : 22), stopAt);
      buzz.frequency.setValueAtTime(pitch / 2, start);
      voiceGain.gain.setValueAtTime(0.001, start);
      voiceGain.gain.exponentialRampToValueAtTime(volume, start + 0.035);
      voiceGain.gain.setValueAtTime(volume * 0.72, Math.max(start + 0.04, stopAt - 0.055));
      voiceGain.gain.exponentialRampToValueAtTime(0.001, stopAt);
      osc.connect(voiceGain);
      buzz.connect(voiceGain);
      voiceGain.connect(master);
      [osc, buzz].forEach((node) => {
        node.start(start);
        node.stop(stopAt);
        createdNodes.push(node);
      });
    });

    const duration = Math.max(...syllables.map(([offset, length]) => offset + length)) + 0.2;
    const ending = audioContext.createOscillator();
    ending.frequency.value = 1;
    ending.connect(audioContext.createGain());
    ending.start(now);
    ending.stop(now + duration);
    ending.addEventListener("ended", finish, { once: true });
    createdNodes.push(ending);
    stop = () => {
      createdNodes.forEach((node) => {
        try { node.stop(); } catch {}
      });
      audioContext.close?.();
    };
  }

  activeAudioMessage = {
    context: audioContext,
    stop,
    levels: []
  };
  if (canvas) activeAudioMessage.frame = drawAudioWave(canvas, analyser);
}

function drawAudioWave(canvas, analyser) {
  const context = canvas.getContext("2d");
  const data = new Uint8Array(analyser.fftSize);
  const draw = () => {
    if (!activeAudioMessage || activeAudioMessage.context !== analyser.context) return 0;
    const width = canvas.width;
    const height = canvas.height;
    analyser.getByteTimeDomainData(data);
    let sum = 0;
    for (let i = 0; i < data.length; i += 1) {
      const centered = (data[i] - 128) / 128;
      sum += centered * centered;
    }
    const rms = Math.sqrt(sum / data.length);
    const db = 20 * Math.log10(Math.max(rms, 0.00001));
    const normalized = Math.min(1, Math.max(0, (db + 52) / 42));

    context.clearRect(0, 0, width, height);
    context.fillStyle = "#000000";
    context.fillRect(0, 0, width, height);
    const style = getComputedStyle(canvas);
    const waveColor = style.getPropertyValue("--wave-color").trim() || "#ffd83d";
    const centerY = height / 2;
    const barCount = 150;
    const gap = 3;
    const barWidth = Math.max(2, Math.floor((width * 0.86) / barCount) - gap);
    const totalWidth = barCount * (barWidth + gap);
    const startX = (width - totalWidth) / 2;

    activeAudioMessage.levels.push(normalized);
    if (activeAudioMessage.levels.length > barCount) {
      activeAudioMessage.levels.shift();
    }
    const levels = activeAudioMessage.levels;

    context.fillStyle = waveColor;
    context.shadowColor = waveColor;
    context.shadowBlur = 10;

    for (let i = 0; i < barCount; i += 1) {
      const level = levels[i - (barCount - levels.length)] || 0;
      const edgeFade = i < 8 ? i / 8 : i > barCount - 9 ? (barCount - i) / 8 : 1;
      const idle = 0.025;
      const amplitude = Math.max(idle, Math.pow(level, 1.7) * edgeFade);
      const barHeight = Math.max(2, amplitude * height * 0.62);
      const x = startX + i * (barWidth + gap);
      context.fillRect(x, centerY - barHeight / 2, barWidth, barHeight);
    }
    activeAudioMessage.frame = requestAnimationFrame(draw);
    return activeAudioMessage.frame;
  };
  return requestAnimationFrame(draw);
}

function getHintUsage(slide) {
  if (!hintUsage[slide.id]) hintUsage[slide.id] = { text: 0, audio: 0 };
  return hintUsage[slide.id];
}

function showTextHint(slide) {
  const hints = slide.hints?.textHints || [];
  const usage = getHintUsage(slide);
  if (usage.text >= hints.length || typewriterTimer) return;
  if (usage.text === hints.length - 1) {
    return requestFinalHintConfirmation(slide);
  }
  revealTextHint(slide);
}

function requestFinalHintConfirmation(slide) {
  if (root.querySelector("[data-final-hint-confirm]")) return;
  const output = root.querySelector("[data-hint-output]");
  const textBtn = root.querySelector("[data-text-hint]");
  if (!output) return;
  if (textBtn) textBtn.disabled = true;

  const box = document.createElement("div");
  box.className = "hint-line final-hint-confirm";
  box.dataset.finalHintConfirm = "true";
  box.innerHTML = [
    "<span>KRAJN\u00cd NOUZE:</span> Tuto n\u00e1pov\u011bdu vyu\u017eijte pouze v p\u0159\u00edpad\u011b krajn\u00ed nouze. Opravdu chcete vyu\u017e\u00edt tuto n\u00e1pov\u011bdu?",
    "<div class=\"hint-confirm-actions\">",
    "<button class=\"hint-terminal-btn\" type=\"button\" data-confirm-final-hint>ANO, ZOBRAZIT</button>",
    "<button class=\"hint-terminal-btn hint-cancel-btn\" type=\"button\" data-cancel-final-hint>ZRU\u0160IT</button>",
    "</div>"
  ].join("");
  output.appendChild(box);
  beep("noted");

  box.querySelector("[data-confirm-final-hint]")?.addEventListener("click", () => {
    box.remove();
    revealTextHint(slide);
  });
  box.querySelector("[data-cancel-final-hint]")?.addEventListener("click", () => {
    box.remove();
    refreshHintButtons(slide);
  });
}

function revealTextHint(slide) {
  const hints = slide.hints?.textHints || [];
  const usage = getHintUsage(slide);
  if (usage.text >= hints.length || typewriterTimer) return;
  const text = hints[usage.text];
  usage.text += 1;
  beep("noted");

  const output = root.querySelector("[data-hint-output]");
  if (!output) return;
  typewriterLine(output, "N\u00c1POV\u011aDA " + usage.text + ":", text, () => refreshHintButtons(slide));
}
function showNotice(slide, button) {
  if (!slide.noticeText || typewriterTimer) return;
  const output = root.querySelector("[data-notice-output]");
  if (!output) return;
  output.innerHTML = "";
  button.disabled = true;
  beep("noted");
  typewriterLine(output, "UPOZORNĚNÍ:", slide.noticeText, () => {
    button.disabled = false;
  });
}

function typewriterLine(output, label, text, onDone) {
  const line = document.createElement("div");
  line.className = "hint-line";
  line.innerHTML = `<span>${escapeHtml(label)}</span> <span data-typewriter></span><span class="hint-cursor">█</span>`;
  output.appendChild(line);

  const target = line.querySelector("[data-typewriter]");
  const cursor = line.querySelector(".hint-cursor");
  let index = 0;
  const typeNext = () => {
    target.textContent = text.slice(0, index);
    if (index >= text.length) {
      typewriterTimer = null;
      cursor.remove();
      onDone?.();
      return;
    }

    const char = text[index];
    index += 1;
    let delay = 28 + Math.random() * 42;
    if (char === " ") delay += 8 + Math.random() * 16;
    if (",;:".includes(char)) delay += 65 + Math.random() * 55;
    if (".!?".includes(char)) delay += 110 + Math.random() * 100;
    if (Math.random() < 0.07) delay += 55 + Math.random() * 85;
    typewriterTimer = setTimeout(typeNext, delay);
  };
  typewriterTimer = setTimeout(typeNext, 80);
}

function useAudioHint(slide) {
  const usage = getHintUsage(slide);
  const max = slide.hints?.audioHintCount || 0;
  if (usage.audio >= max) return;
  usage.audio += 1;
  beep("noted");
  refreshHintButtons(slide);
}

function refreshHintButtons(slide) {
  const usage = getHintUsage(slide);
  const textBtn = root.querySelector("[data-text-hint]");
  const audioBtn = root.querySelector("[data-audio-hint]");
  const textTotal = slide.hints?.textHints?.length || 0;
  const audioTotal = slide.hints?.audioHintCount || 0;
  if (textBtn) {
    textBtn.innerHTML = `<span class="hint-icon">💡</span> TEXTOVÁ NÁPOVĚDA (${usage.text}/${textTotal})`;
    textBtn.disabled = usage.text >= textTotal || Boolean(typewriterTimer);
  }
  if (audioBtn) {
    audioBtn.innerHTML = `<span class="hint-icon">📞</span> HLASOVÁ NÁPOVĚDA (${usage.audio}/${audioTotal})`;
    audioBtn.disabled = usage.audio >= audioTotal || audioTotal === 0;
  }
}

function reset() {
  const game = gameBySlideId(currentSlide()?.id) || gameByPath();
  if (game) sessionStorage.removeItem(game.storageKey);
  state = game ? emptyState(gameBounds(game).start) : emptyState(0);
  localSelection = null;
  hintUsage = {};
  render();
}

backBtn.addEventListener("click", goBack);
forwardBtn.addEventListener("click", goForward);
resetBtn.addEventListener("click", reset);
window.addEventListener("popstate", () => {
  state = loadState();
  localSelection = null;
  hintUsage = {};
  render();
});

render();
