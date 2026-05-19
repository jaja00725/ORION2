window.GAME_SLIDES = [
    // ??? SLIDE 0: CHOICE ?????????????????????????????????????????
    {
        type: "choice",
        id: 0,
        choices: [
            {
                image: "assets/5.png",
                label: "Vstup do interní databáze",
                nextSlide: 1
            },
            {
                image: "assets/6.png",
                label: "Vstup do interní databáze",
                nextSlide: 51
            }
        ]
    },
    // ??? SLIDE 1: INTRO ?????????????????????????????????????????
    {
        type: "intro",
        id: 1,
        department: "Obvodní oddělení - Hvozdná nad Rabduzou",
        caseNumber: "Případ № 2254578/2026",
        caseName: "Šepoty stromů",
        classification: "Přísně tajné",
        location: "Podlesí, Česká republika",
        videoId: "IApLOlmcf_o",
        audioUrl: "assets/audio/uvody/uvod.mp3"
    },
    // ??? SLIDE 2: CHAPTER ?????????????????????????????????????????
    {
        type: "chapter",
        id: 2,
        chapterNum: 1,
        chapterTitle: "PRVNÍ SPIS",
        videoId: "eV3kr5du18w",
        audioUrl: "assets/audio/uvody/uvod1.mp3",
        warning: "Nejprve shlédni úvodní video, teprve pak otevři první spis.",
        buttonText: "Otevřít spis"
    },
    // ??? SLIDE 3: OT?ZKA TYP 1 ?????????????????????????????????????????
    {
        type: "question",
        id: 3,
        questionType: 1,
        text: "Jakou nesrovnalost jsme ve výpovědích přehlédli?",
        options: [
            "Lesník Král tvrdil, že volal z mýtiny, ale přitom se nacházel v Podlesí.",
            "Lesník Král tvrdil, že se opil v hospodě a byl tam minimálně do jedenácti, což není pravda.",
            "Dvořákovi nemohli jít spát tak, jak tvrdí, protože měli mít ještě otevřenou hospodu.",
            "Lesník Král si nemohl chodit pro závadnou vodu z Černého potoka, protože ho před jejími škodlivými účinky Jakub Dvořák varoval."
        ],
        correctIndex: 1,
        hints: {
            textHints: [
                "Podívej se na výslech lesníka Krále i manželů Dvořákových.",
                "Přesně to, že lesník Král tvrdil, že volal z mýtiny, ale přitom se nacházel v Podlesí, mu bylo u výslechu vyčteno, takže to nikdo z našich lidí určitě neopomněl.",
                "Jakub Dvořák sice lesníka Krále před škodlivými účinky vody z Černého potoka varoval, lesník Král si tam ale stejně pro vodu chodil. To víme z deníku Jakuba Dvořáka. V tomto tedy lesník určitě nelhal.",
                "Dvořákovi sice ještě měli mít otevřenou hospodu, ale sami uvedli, že toho dne všichni její návštěvníci odešli dřív, a tak nemělo smysl ji nechávat otevřenou.",
                "Ano, přehlédli jsme, že lesník Král tvrdil, že se opil v hospodě a byl tam minimálně do jedenácti. Přitom ve výpovědi manželů Dvořákových stojí, že lesník odešel neobvykle brzo. Takže zabít Jakuba Dvořáka mohl klidně stihnout."
            ],
            audioHintCount: 2
        }
    },
    // ??? SLIDE 4: OT?ZKA TYP 2 ?????????????????????????????????????????
    {
        type: "question",
        id: 4,
        questionType: 2,
        text: "Jaký je význam tří černobílých symbolů v deníku Jakuba Dvořáka? Do každého pole napiš jedno slovo.",
        fieldCount: 3,
        fieldLabels: ["První symbol", "Druhý symbol", "Třetí symbol"],
        correctAnswers: ["ROD", "ŘÁD", "OSUD"],
        hints: {
            textHints: [
                "První symbol odkazuje na stranu 127 v deníku. Druhý symbol odkazuje na stranu 126 a srovnává ji se stranou 103. Zkus to porovnat. A třetí symbol podle mě taky odkazuje na strany v deníku.",
                "K prvnímu symbolu. Dvořák zřejmě na některou mluvnickou kategorii zapomněl, nemyslíš?",
                "U druhého symbolu jsou ta písmena VTSVVMMA na straně 103 prvními písmeny z každého řádku druhého odstavce. Nepoužil něco podobného?",
                "Třetí symbol? Není to náhodou označení strany, řádku, slova a písmena?",
                "Čtyři mluvnické kategorie, které se určují u podstatných jmen jsou pád, číslo, rod a vzor. To nám dost pomůže. Na straně 126 první písmena básně také dávají dohromady slovo a třetí symbol už máš určitě rozluštěný.",
                "Správně je jsou ROD, ŘÁD a OSUD."
            ],
            audioHintCount: 2
        }
    },
    // ??? SLIDE 5: OT?ZKA TYP 7 ?????????????????????????????????????????
    {
        type: "question",
        id: 5,
        questionType: 7,
        text: "Koho kontaktujeme za účelem pomoci s odhalením významu symbolů nalezených na místě činu — na oltáři a na stromě v jeho blízkosti? Napiš jeho jméno.",
        keywordAnswers: ["HAVELK", "HISTOR"],
        correctAnswer: "Kontaktujeme historika Tomáše Havelku.",
        hints: {
            textHints: [
                "Zkus si ještě jednou a pozorněji prohlédnout Domažlický list Plzeňského kurýra.",
                "Zaměř se na druhou stranu novin a článek, který pojednává o vzácné návštěvě.",
                "Nemohl by nám s tím náhodou pomoci světově uznávaný historik Tomáš Havelka, který je zrovna v Česku?"
            ],
            audioHintCount: 1
        }
    },
    // ??? SLIDE 6: VIDEO ?????????????????????????????????????????
    {
        type: "video",
        id: 6,
        videoId: "IApLOlmcf_o",
        audioUrl: "assets/audio/uvody/zaver1.mp3",
        buttonText: "Pokračovat"
    },
    // ??? SLIDE 7: CHAPTER ?????????????????????????????????????????
    {
        type: "chapter",
        id: 7,
        chapterNum: 2,
        chapterTitle: "DRUHÝ SPIS",
        videoId: "IApLOlmcf_o",
        audioUrl: "assets/audio/uvody/uvod2.mp3",
        warning: "Druhý spis zatím neotevírej. Shlédni úvodní video a pak si poslechni vzkaz historika Tomáše Havelky.",
        buttonText: "Máte neposlechnutý vzkaz od Tomáše Havelky!"
    },
    // ??? SLIDE 8: AUDIO ?????????????????????????????????????????
    {
        type: "audio",
        id: 8,
        audioUrl: "assets/audio/Havelka2.mp3",
        infoText: "Nyní otevři spis a pokračuj v pátrání.",
        buttonText: "Otevřít spis"
    },
    // ??? SLIDE 9: OT?ZKA TYP 3 ?????????????????????????????????????????
    {
        type: "question",
        id: 9,
        questionType: 3,
        text: "Jaké má Jakub Dvořák heslo do své emailové schránky?",
        acceptedAnswers: ["Veles", "veles", "VELES"],
        hints: {
            textHints: [
                "Všimni si v té tabulce abeced v Dvořákově souboru různých barev. Neviděli jsme je už někde?",
                "Podívej se do deníku Jakuba Dvořáka. Jsou tam nakreslené symboly a každý je jinou barvou. Nemůže to souviset?",
                "Ty šipky vedle symbolů v deníku Jakuba Dvořáka mají jistě určovat směr, jakým se v abecedách máme od konkrétního písmene pohybovat.",
                "Nemůže to být náhodou Veles?"
            ],
            audioHintCount: 2
        }
    },
    // ??? SLIDE 10: OT?ZKA TYP 1 ?????????????????????????????????????????
    {
        type: "question",
        id: 10,
        questionType: 1,
        text: "Na jakém dokumentu je něco zvláštního a co to je?",
        options: [
            "Výslech Filipa Procházky. Podle konverzace ze sociálních sítí jasně vyplynulo, že se vůbec nesešli.",
            "Facebookový příspěvek Jakuba Dvořáka. Filip Procházka odhalil Jakubova vraha.",
            "Wikipedie historika Havelky — zvláštní poznámka v závorce odkazující na Peruna na nevhodném místě."
        ],
        correctIndex: 2,
        hints: {
            textHints: [
                "Projdi si znovu ty dokumenty, ať víš, o čem se tu přesně bavíme.",
                "Z konverzace Filipa Procházky a Jakuba Dvořáka určitě nevyplynulo, že se nesešli. Filip Procházka to navíc při výslechu objasnil.",
                "To, že je farář vrahem, zdaleka není jisté.",
                "Ta poznámka Perun je ale hodně zvláštní, co?"
            ],
            audioHintCount: 2
        }
    },
    // ??? SLIDE 11: OT?ZKA TYP 3 ?????????????????????????????????????????
    {
        type: "question",
        id: 11,
        questionType: 3,
        text: "Co znamená Mstitelův tajný vzkaz?",
        acceptedAnswers: ["Je čas!", "Je čas", "je čas!", "je čas", "JE ČAS", "JE ČAS!"],
        hints: {
            textHints: [
                "Podívej se na facebookový příspěvek Jakuba Dvořáka, tam ten vzkaz najdeš.",
                "Při bližším prozkoumání mi všechny ty tečky a čárky připomínají Morseův kód. Zkus ho použít, jestli se z toho nedá něco vyvodit.",
                "Byla to skutečně zpráva zašifrovaná Morseovou abecedou. Stálo v ní „Je čas!\" — nezapomeň na vykřičník."
            ],
            audioHintCount: 1
        }
    },
    // ??? SLIDE 12: VIDEO ?????????????????????????????????????????
    {
        type: "video",
        id: 12,
        videoId: "8r_u_j_8Bzg",
        audioUrl: "assets/audio/uvody/zaver2.mp3",
        buttonText: "Pokračovat"
    },
    // ??? SLIDE 13: CHAPTER ?????????????????????????????????????????
    {
        type: "chapter",
        id: 13,
        chapterNum: 3,
        chapterTitle: "TŘETÍ SPIS",
        videoId: "IApLOlmcf_o",
        audioUrl: "assets/audio/uvody/uvod3.mp3",
        warning: "Třetí spis zatím neotevírej. Shlédni úvodní video a pak si poslechni vzkaz historika Tomáše Havelky.",
        buttonText: "Máte neposlechnutý vzkaz od Tomáše Havelky!"
    },
    // ??? SLIDE 14: AUDIO ?????????????????????????????????????????
    {
        type: "audio",
        id: 14,
        audioUrl: "assets/audio/Havelka3.mp3",
        infoText: "Nyní otevři spis a pokračuj v pátrání.",
        buttonText: "Otevřít spis"
    },
    // ??? SLIDE 15: OT?ZKA TYP 1 ?????????????????????????????????????????
    {
        type: "question",
        id: 15,
        questionType: 1,
        text: "Ty nápisy v kostele na zdech musejí být z Bible. Ověřil sis, co říkají? V čem se shodují?",
        options: [
            "Připomínají, že utrpení je zkouškou víry spravedlivých.",
            "Varují, že pravda bude odhalena a vina nezůstane bez následků.",
            "Předpovídají příchod apokalyptických pohrom.",
            "Zdůrazňují milosrdenství, které převažuje nad trestem."
        ],
        correctIndex: 1,
        hints: {
            textHints: [
                "Verše nemluví o náhodném neštěstí. Vždy existuje příčina a odpověď na ni.",
                "Texty spojuje myšlenka, že nic nezůstane skryto a žádný čin nezůstane bez odezvy. To, co bylo zaseto, musí být sklizeno.",
                "Utrpení zde není jen osobní. Důsledky mohou přesahovat samotného viníka, vina se vrací.",
                "Nemůže to být varování?"
            ],
            audioHintCount: 2
        }
    },
    // ??? SLIDE 16: OT?ZKA TYP 3 ?????????????????????????????????????????
    {
        type: "question",
        id: 16,
        questionType: 3,
        text: "Jaký tajný vzkaz zanechal neznámý pachatel na náhrobní desce v kostele?",
        acceptedAnswers: ["smrt", "SMRT", "Smrt"],
        hints: {
            textHints: [
                "Zkus se pořádně podívat na tu náhrobní desku. Je tam něco, co tam nepatří.",
                "Kamínky na desce jsou systematicky rozmístěné a společně tvoří jeden celek.",
                "Když budeš číst písmena, pod kterými jsou kamínky v pořadí, v jakém se čte text, získáš slovo SMRT."
            ],
            audioHintCount: 1
        }
    },
    // ??? SLIDE 17: OT?ZKA TYP 3 ?????????????????????????????????????????
    {
        type: "question",
        id: 17,
        questionType: 3,
        text: "Jakým heslem se dostaneme do přílohy Dvořákova emailu?",
        acceptedAnswers: ["MORANA", "Morana", "morana"],
        hints: {
            textHints: [
                "Dvořák v emailu píše, že význam BSIUAP pochopí pouze ten, kdo zná KubDvorak87. Neviděli jsme už tuto formulaci někde?",
                "KubDvorak87 vytvořil českou verzi wikipedie o Tomáši Havelkovi. A zřejmě si tam něco ukryl. Něco nám už předtím přišlo podezřelé. A všechno to nějak souvisí s Vigenèrovou šifrou.",
                "Vigenèrova šifra funguje podobně jako Caesarova šifra. Tedy vezmu slovo, které chci zašifrovat, vytvořím si klíčové slovo, podle kterého budu šifrovat a pak vytvořím šifru. Šifru vytvářím tak, že každé písmeno posunu dopředu o počet míst, o kolik je vzdáleno dané písmeno klíčového slova od A.\n\nChci zašifrovat: ČESKÁ REPUBLIKA\n\nVymyslím si klíčové slovo:  PRAHA\n\nŠifrovat budeme takto\n\nC E S K A  R E P U B L I K A\nP R A H A  P R A H A P R A H\n\nPříklad prvního písmene: \nP je od A v mezinárodní abecedě vzdáleno 15 míst. Takže C z původního slova posunu o 15 míst dopředu. Výsledné písmeno je R\n\nPříklad druhého písmene: \nR je od A v mezinárodní abecedě vzdáleno 17 míst. Takže E z původního slova posunu o 17 míst dopředu. Výsledné písmeno je V\n\nCelá šifra je: RVSRA GVPBBAZKH",
                "Když kódujeme pomocí Vigenèra, posouváme písmena dopředu. My ale dekódujeme, takže posouváme písmena dozadu.",
                "Tak jsme to projeli systémem, který si s Vigenèrem hravě poradí. A vypadlo nám z toho jedno slovo. MORANA."
            ],
            audioHintCount: 2
        }
    },
    // ??? SLIDE 18: OT?ZKA TYP 3 ?????????????????????????????????????????
    {
        type: "question",
        id: 18,
        questionType: 3,
        text: "Objevila se zpětně nějaká nová nesrovnalost v některém z výslechů? Pokud ano, uveď jméno osoby, které se tato nesrovnalost týká.",
        acceptedAnswers: [
            "Kamila Dvořáková",
            "kamila dvořáková",
            "Kamily Dvořákové",
            "kamily dvořákové",
            "Dvořáková",
            "dvořáková",
            "dvořákové"
        ],
        hints: {
            textHints: [
                "Zkus si projít i starší výslechy.",
                "Detektive, myslím, že zmíněný výslech se objevil už v prvním spisu.",
                "Není náhodou ve výpovědích rodičů Jakuba Dvořáka nějaká nesrovnalost s tím, co si on sám zapsal do svého emailu?",
                "Nesrovnalost se jistě týká Kamily Dvořákové."
            ],
            audioHintCount: 1
        }
    },
    // ??? SLIDE 19: VIDEO ?????????????????????????????????????????
    {
        type: "video",
        id: 19,
        videoId: "eV3kr5du18w",
        audioUrl: "assets/audio/uvody/zaver3.mp3",
        buttonText: "Pokračovat"
    },
    // ??? SLIDE 20: CHAPTER ?????????????????????????????????????????
    {
        type: "chapter",
        id: 20,
        chapterNum: 4,
        chapterTitle: "ČTVRTÝ SPIS",
        videoId: "o3duATBwCSw",
        audioUrl: "assets/audio/uvody/uvod4.mp3",
        warning: "Čtvrtý spis zatím neotevírej. Shlédni úvodní video a pak si poslechni vzkaz historika Tomáše Havelky.",
        buttonText: "Máte neposlechnutý vzkaz od Tomáše Havelky!"
    },
    // ??? SLIDE 21: AUDIO ?????????????????????????????????????????
    {
        type: "audio",
        id: 21,
        audioUrl: "assets/audio/Havelka4.mp3",
        infoText: "Nyní otevři spis a pokračuj v pátrání.",
        buttonText: "Otevřít spis"
    },
    // ??? SLIDE 22: OT?ZKA TYP 1 ?????????????????????????????????????????
    {
        type: "question",
        id: 22,
        questionType: 1,
        text: "Výhružky u Dvořáka na sociálních sítích odkazují očividně znovu na biblické verše. Jaký je jejich hlavní společný význam?",
        options: [
            "Ujištění o Božím milosrdenství a odpuštění bez ohledu na vinu.",
            "Varování před nemocí a fyzickým utrpením způsobeným démony.",
            "Zdůraznění nevyhnutelného trestu, bolesti a následků hříchu, a to i skrze generace."
        ],
        correctIndex: 2,
        hints: {
            textHints: [
                "Detektive, ve všech citovaných úryvcích se objevuje silná emoce a reakce na předchozí čin. Nejde o náhodné utrpení. Vidíš to v tom?",
                "Texty spojuje myšlenka, že bolest není bez příčiny. Něco jí předchází a něco ji ospravedlňuje. Víš, co to je?",
                "Hele, ve všech verších se opakuje stejný vzorec: provinění a následek. Utrpení je zde chápáno jako odpověď na vinu. To už je vcelku jasné, ne?",
                "Já v tom vidím to, že každý hřích musí být nevyhnutelně potrestán."
            ],
            audioHintCount: 2
        }
    },
    // ??? SLIDE 23: OT?ZKA TYP 3 ?????????????????????????????????????????
    {
        type: "question",
        id: 23,
        questionType: 3,
        text: "Všiml sis u Dvořáka na sociálních sítích ještě něčeho? Není tam kromě biblických veršů i jiný vzkaz? Jak zní?",
        acceptedAnswers: ["Utrpení", "utrpení", "UTRPENÍ"],
        hints: {
            textHints: [
                "Zkus se podívat znovu na výhružky Dvořákovi. Jsou tam zvláštní bubliny.",
                "Bubliny se vzájemně prolínají z jednoho obrázku do druhého. Co to jen může znamenat?",
                "Všiml sis, detektive, že je v těch bublinách kromě písmene vždy ještě malá indexovaná číslice? Nemůže to být klíč?",
                "Já myslím, že je třeba ta písmena uspořádat podle těch čísel. Pak už to odhalíš snadno.",
                "Seřazené bubliny dávají dohromady slovo UTRPENÍ."
            ],
            audioHintCount: 2
        }
    },
    // ??? SLIDE 24: OT?ZKA TYP 1 ?????????????????????????????????????????
    {
        type: "question",
        id: 24,
        questionType: 1,
        text: "Kterou osobu můžeme zbavit podezření, protože má alibi?",
        options: [
            "Rostislava Dvořáka",
            "Filipa Procházku",
            "Kamilu Dvořákovou",
            "Františka Krále",
            "Břetislava Macha",
            "Růženu Machovou"
        ],
        correctIndex: 3,
        hints: {
            textHints: [
                "Zkus se podívat do místních novin, zda tam nenarazíš na užitečné informace.",
                "Jeden z nich to určitě spáchat nemohl, protože byl hospitalizován na protialkoholní záchytné stanici.",
                "Nemohl to spáchat František Král."
            ],
            audioHintCount: 1
        }
    },
    // ??? SLIDE 25: OT?ZKA TYP 4 ?????????????????????????????????????????
    {
        type: "question",
        id: 25,
        questionType: 4,
        text: "Dokážeš identifikovat alespoň dvě osoby z fotky u oltáře, kterou přinesl Dvořák?",
        options: [
            "Kamila Dvořáková",
            "Rostislav Dvořák",
            "Břetislav Mach",
            "Růžena Machová",
            "Jakub Dvořák",
            "Filip Procházka",
            "Norbert Malina"
        ],
        correctIndices: [2, 3],
        hints: {
            textHints: [
                "Máme školní fotku, která visí na nástěnce v hospodě. Nejsou na ní náhodou stejní lidé?",
                "Nemohl by to být někdo z našich podezřelých?",
                "Kdo dodnes v Podlesí dodržuje pohanské zvyky?",
                "Je tam Břetislav Mach a Růžena Machová."
            ],
            audioHintCount: 2
        }
    },
    // ??? SLIDE 26: INTERLUDE ?????????????????????????????????????????
    {
        type: "interlude",
        id: 26,
        audioUrl: "assets/audio/mezi/mezi4.mp3",
        text: "Detektive,\n\nještě jedna věc. Ten rodný list Jakuba Dvořáka je opravdu zajímavý. Chtělo by to o jeho původu zjistit trochu víc. Nemám teď čas, zkus napsat na analytické oddělení, zda by ti nezpracovali rešerši ze starých archivních dokumentů. Do mailu stačí napsat: „Prověřit rodný list Jakuba Dvořáka.\"",
        hints: {
            textHints: [
                "Zkus se podívat na adresář obvodního oddělení policie města Hvozdná nad Radbuzou.",
                "Napiš email na analytické oddělení a počkej na odpověď."
            ],
            audioHintCount: 1
        }
    },
    // ??? SLIDE 27: OT?ZKA TYP 3 ?????????????????????????????????????????
    {
        type: "question",
        id: 27,
        questionType: 3,
        text: "Kdo udal Barboru Novotnou v roce 1986 a kdo byl zároveň spolupracovníkem StB pod krycím jménem VAŘEČKA?",
        acceptedAnswers: [
            "Rostislav Dvořák",
            "rostislav dvořák",
            "Rostislava Dvořáka",
            "rostislava dvořáka",
            "Dvořák",
            "dvořák",
            "dvořáka"


        ],
        hints: {
            textHints: [
                "Zkus se zamyslet nad krycím jménem VAŘEČKA.",
                "Neříká ti něco adresa trvalého pobytu spolupracovníka StB? Neviděli jsme ji už někde?",
                "Nebydlel na adrese Podlesí 26 i Jakub Dvořák?",
                "Na adrese Podlesí 26 bydlí i Dvořákovi.",
                "Spolupracovníkem StB, který udal Barboru Novotnou, byl Rostislav Dvořák."
            ],
            audioHintCount: 2
        }
    },
    // ??? SLIDE 28: VIDEO ?????????????????????????????????????????
    {
        type: "video",
        id: 28,
        videoId: "mvlA1m8-Jqs",
        audioUrl: "assets/audio/uvody/zaver4.mp3",
        buttonText: "Pokračovat"
    },
    // ??? SLIDE 29: CHAPTER ?????????????????????????????????????????
    {
        type: "chapter",
        id: 29,
        chapterNum: 5,
        chapterTitle: "PÁTÝ SPIS",
        videoId: "8r_u_j_8Bzg",
        audioUrl: "assets/audio/uvody/uvod5.mp3",
        warning: "Pátý spis zatím neotevírej. Shlédni úvodní video a pak si poslechni vzkaz historika Tomáše Havelky.",
        buttonText: "Máte neposlechnutý vzkaz od Tomáše Havelky!"
    },
    // ??? SLIDE 30: AUDIO ?????????????????????????????????????????
    {
        type: "audio",
        id: 30,
        audioUrl: "assets/audio/Havelka5.mp3",
        infoText: "Nyní otevři spis a pokračuj v pátrání.",
        buttonText: "Otevřít spis"
    },
    // ??? SLIDE 31: OT?ZKA TYP 2 ?????????????????????????????????????????
    {
        type: "question",
        id: 31,
        questionType: 2,
        text: "Podařilo se ti zjistit, co se skrývá v ručně psaném vzkazu, který byl nalezen u Machových, vložený v knize? Vypiš všech 12 slov (pořadí není důležité).",
        fieldCount: 12,
        correctAnswers: [
            "přátelé",
            "vracím",
            "se",
            "co",
            "se",
            "stalo",
            "to",
            "se",
            "neodpouští",
            "potřebuji",
            "vaši",
            "pomoc"
        ],
        hints: {
            textHints: [
                "Vzkaz je na první pohled zvláštní, že, detektive? Tam, kde by měla být velká písmena, tam nejsou, a tam, kde by být neměla, tak jsou.",
                "Musí to mít něco společného s těmi velkými písmeny.",
                "Zkusme vzít v potaz jen slova s velkými písmeny na začátku.",
                "Je tam ukrytý vzkaz: „Přátelé vracím se co se stalo to se neodpouští potřebuji vaši pomoc.\""
            ],
            audioHintCount: 2
        }
    },
    // ??? SLIDE 32: OT?ZKA TYP 3 ?????????????????????????????????????????
    {
        type: "question",
        id: 32,
        questionType: 3,
        text: "Jaké je heslo k flashce Jakuba Dvořáka?",
        acceptedAnswers: ["STRIGA", "Striga", "striga"],
        hints: {
            textHints: [
                "Zkus si znovu projít věci nalezené na místě vraždy Jakuba Dvořáka.",
                "Mezi věcmi nalezenými na místě činu byly i klíče Jakuba Dvořáka a na nich přívěsek.",
                "Znaky, které jsou na přívěsku Jakuba Dvořáka, už jsme někde viděli, ne?",
                "Znaky na přívěsku jsou starým slovanským runovým písmem. Jejich transliteraci najdeme v knize Tomáše Havelky.",
                "Heslo k flashce Jakuba Dvořáka je STRIGA."
            ],
            audioHintCount: 2
        }
    },
    // ??? SLIDE 33: OT?ZKA TYP 3 ?????????????????????????????????????????
    {
        type: "question",
        id: 33,
        questionType: 3,
        text: "Už víme, že Jakub Dvořák byl adoptovaný. Jeho matkou byla Barbora Novotná. Tušíš však, kdo byl (je) jeho otcem?",
        acceptedAnswers: [
            "Tomáš Havelka",
            "tomáš havelka",
            "Tomáše Havelky",
            "tomáše havelky",
            "Tomáši Havelkovi",
            "Havelka",
            "havelka"
        ],
        hints: {
            textHints: [
                "Jméno Barbory Novotné jsme kromě rodného listu a výpisu z analytického oddělení viděli ještě někde jinde, ne?",
                "Prozkoumej rok narození Jakuba Dvořáka v jeho rodném listu a rok smrti Barbory Novotné ve Wikipedii o historikovi Tomáši Havelkovi. Možná ti to začne dávat smysl.",
                "Otcem Jakuba Dvořáka je Tomáš Havelka."
            ],
            audioHintCount: 1
        }
    },
    // ??? SLIDE 34: INTERLUDE ?????????????????????????????????????????
    {
        type: "interlude",
        id: 34,
        audioUrl: "assets/audio/mezi/mezi5.mp3",
        text: "Děkuji za tvou zprávu, detektive. Jdeš na to dobře. Kdo by to řekl, že heslo k flashce ti prozradí přívěšek na klíčích, na který se už dávno zapomnělo.\n\nCo je ale důležitější, je to, že vrah Jakuba i faráře je zřejmě ve spojení s Machovými. Jde jen o to přijít na to, jak moc o tom Machovi vědí.\n\nMusím teď na kobereček k šéfovi. Chce se mnou řešit, odkud prosakují informace o vraždách v Podlesí na veřejnost, a tak se na tu flashku nemám čas podívat. Každopádně jsem ti její obsah nasdílel. Můžeš se na to podívat ty?\n\nDíky. Ozvu se, jak to půjde.",
        link: {
            url: "https://drive.google.com/drive/folders/1kg-McevPge6wfLwh6kDiYlqXF-mRzXVC?usp=drive_link",
            label: "[ OTEVŘÍT FLASHKU ]"
        }
    },
    // ??? SLIDE 35: OT?ZKA TYP 7 ?????????????????????????????????????????
    {
        type: "question",
        id: 35,
        questionType: 7,
        text: "Komu patří pero nalezené na místě vraždy Jakuba Dvořáka?",
        keywordAnswers: ["HAVELK", "HISTORIK"],
        correctAnswer: "Pero patří historikovi Tomáši Havelkovi.",
        hints: {
            textHints: [
                "Nemůže být odpověď na tuto otázku na flashce Jakuba Dvořáka?",
                "Neodkazují některé odkazy v dokumentech na flashce na externí zdroje?",
                "Zkus se podívat do souboru Úkoly.",
                "V souboru Úkoly je externí odkaz na historickou anketu (Historia magistra vitae). Otevři si tuto webovou stránku.",
                "Nedostal toto ocenění Tomáš Havelka?",
                "Tomáš Havelka dostal ocenění, k němuž náleželo pero s nápisem „Historia magistra vitae 2022\"."
            ],
            audioHintCount: 2
        }
    },
    // ??? SLIDE 36: VIDEO ?????????????????????????????????????????
    {
        type: "video",
        id: 36,
        videoId: "IApLOlmcf_o",
        audioUrl: "assets/audio/uvody/zaver5.mp3",
        buttonText: "Pokračovat"
    },
    // ??? SLIDE 37: CHAPTER ?????????????????????????????????????????
    {
        type: "chapter",
        id: 37,
        chapterNum: 6,
        chapterTitle: "ŠESTÝ SPIS",
        videoId: "eV3kr5du18w",
        audioUrl: "assets/audio/uvody/uvod6.mp3",
        warning: "Nejprve shlédni úvodní video, teprve pak otevři šestý spis.",
        buttonText: "Otevřít spis"
    },
    // ??? SLIDE 38: OT?ZKA TYP 5 ?????????????????????????????????????????
    {
        type: "question",
        id: 38,
        questionType: 5,
        text: "Mohl se Tomáš Havelka dostat do Podlesí? Mohl to stihnout?",
        yesNoCorrect: "yes",
        hints: {
            textHints: [
                "Žádné auto kromě auta Filipa Procházky ten večer do Podlesí nepřijelo. Co takhle jiný dopravní prostředek?",
                "Nejlepší bude prověřit odjezdy autobusů z Plzně a porovnat je s koncem přednášky Tomáše Havelky.",
                "Detektive, zkus se nedívat jen do jízdních řádů, ale mrkni taky na starší dokumenty.",
                "Nepíše se o tom náhodou v novinách, které vyšly ještě před smrtí Jakuba Dvořáka?",
                "V novinách se píše o posílení spojů, které není uvedeno v běžném jízdním řádu. Takže ano, Tomáš Havelka se mohl do Podlesí dostat přidaným autobusem."
            ],
            audioHintCount: 2
        }
    },
    // ??? SLIDE 39: OT?ZKA TYP 7 ?????????????????????????????????????????
    {
        type: "question",
        id: 39,
        questionType: 7,
        text: "Komu patří prezentér nalezený na místě činu, kde byl zabit Jakub Dvořák?",
        keywordAnswers: ["PROCHÁZK"],
        correctAnswer: "Prezentér patří Filipu Procházkovi.",
        hints: {
            textHints: [
                "Zkus se podívat na detail rozebraného prezentéru.",
                "Není pod krytem prezentéru adresa?",
                "Vzpomeneš si, kdo na této škole učí?",
                "Neučí tam náhodou Filip Procházka?"
            ],
            audioHintCount: 1
        }
    },
    // ??? SLIDE 40: OT?ZKA TYP 7 ?????????????????????????????????????????
    {
        type: "question",
        id: 40,
        questionType: 7,
        text: "Kdo psal výhružný vzkaz faráři a stejně tak i vzkaz, který se objevil u Machů?",
        keywordAnswers: ["HISTORIK", "HAVELK"],
        correctAnswer: "Vzkazy psal historik Tom\u00e1\u0161 Havelka.",
        hints: {
            textHints: [
                "Vím, že nejsi grafolog, detektive. Ale rozhodně stojí za to písma na vzkazech prozkoumat.",
                "Neměli jsme tady ještě nějaký jiný rukopis, o kterém víme, komu patří?",
                "Mrkni na věnování v knize Jakuba Dvořáka.",
                "No je patrné, že písmo, kterým jsou napsané vzkazy, se shoduje s písmem, kterým napsal Tomáš Havelka Jakubovi věnování do knihy."
            ],
            audioHintCount: 1
        }
    },
    // ??? SLIDE 41: OT?ZKA TYP 6 ?????????????????????????????????????????
    {
        type: "question",
        id: 41,
        questionType: 6,
        text: "Koho zadržíme či po kom vyhlásíme pátrání? Rozhoduj moudře, detektive. Špatná volba může způsobit, že pachatele činu už nemusíme nikdy dopadnout.",
        options: ["Tomáše Havelku", "Filipa Procházku"],
        hints: {
            textHints: [],
            audioHintCount: 0
        }
    },
    // ??? SLIDE 42: CONDITIONAL-INTERLUDE ?????????????????????????????????????????
    {
        type: "conditional-interlude",
        id: 42,
        conditionSlideId: 41,
        baseText: "Tak to by mě nenapadlo, detektive. Havelka to skutečně mohl do Podlesí stihnout. Vždyť dle Domažlického listu byly kvůli Festivalu světel přidány i pozdější autobusy. Jenže on tvrdí, že jel hned z přednášky v Malostranské besedě do hotelu. Je potřeba to prověřit, ať ho můžeme zbavit podezření.\n\nNa místě činu bylo Havelkovo pero, to už víme. Ale tak trochu jsme opomněli, že se tam nacházel i prezentér Filipa Procházky. Prozradila nám to adresa školy uvnitř prezentéru, na které Filip Procházka učí. To nám vyšetřování trochu komplikuje.\n\nJenže proti Havelkovi svědčí i výhružný vzkaz, který napsal farářovi. Je to sice neurčitý vzkaz, ale člověk, který ho napsal, může mít na svědomí i malby citátů z Bible po kostele a kamínky na náhrobku. Mohl by být historik Mstitel?\n\nA teď k tvému rozhodnutí.\n\n",
        conditionalTexts: {
            "Tomáše Havelku": "Rozhodl ses zadržet Tomáše Havelku. Bylo to skutečně správné rozhodnutí? Přišly nám hotelové logy z hotelu, ve kterém se ubytoval Tomáš Havelka. Mrkni na ně a pak mi dej vědět, jestli má Havelka alibi.",
            "Filipa Procházku": "Rozhodl ses stíhat Filipa Procházku. Bylo to skutečně správné rozhodnutí? Přišly nám hotelové logy z hotelu, ve kterém se ubytoval Tomáš Havelka. Mrkni na ně a pak mi dej vědět, jestli má Havelka alibi."
        },
        conditionalAudioUrls: {
            "Tomáše Havelku": "assets/audio/mezi/mezi61.mp3",
            "Filipa Procházku": "assets/audio/mezi/mezi61.mp3"
        },
        link: {
            url: "https://drive.google.com/drive/folders/1-ynrbmy-PDGpO4RkHsi4s9QjCNVrs8GH?usp=drive_link",
            label: "[ OTEVŘÍT HOTELOVÉ LOGY ]"
        }
    },
    // ??? SLIDE 43: OT?ZKA TYP 6 ?????????????????????????????????????????
    {
        type: "question",
        id: 43,
        questionType: 6,
        text: "Má podle hotelových logů Havelka alibi? Nebo ti tam přijde něco podezřelého?",
        options: ["Má alibi", "Přijde mi tam něco podezřelého"],
        hints: {
            textHints: [
                "Projdi si soubor s hotelovými logy a porovnej důležitá data.",
                "Stěžejní je pro nás den konání přednášky, den, kdy někdo Malinovi pomaloval kostel, a den, kdy byl farář zavražděn.",
                "Jde o 9. 3., 12. 3. a 13. 3."
            ],
            audioHintCount: 1
        }
    },
    // ??? SLIDE 44: INTERLUDE ?????????????????????????????????????????
    {
        type: "interlude",
        id: 44,
        audioUrl: "assets/audio/mezi/mezilog.mp3",
        text: "Havelka byl podle hotelových logů skutečně na hotelu. Ale stačí to? Pro jistotu jsme kontaktovali i jeho asistentku, aby nám potvrdila jeho alibi.\n\n„Dobrý den, slečno Náhlíková, tady nadporučík Vávra. Volám vám ohledně potvrzení alibi Tomáše Havelky. Jde nám zejména o to, zda víte, kde se nacházel ihned po skončení přednášky v Měšťanské besedě. Prověřili jsme logy jeho pokoje 307, takže tohle už je jen formalita.\"\n\n„Dobrý den, pane nadporučíku. Jestli si dobře vzpomínám, tak autogramiáda skončila po 19. hodině. Pan Havelka se cítil unaven a tak si objednal taxi a kolem tři čtvrtě na osm odjel do hotelu. Já měla ještě nějaké administrativní povinnosti v budově, a tak jsem vyrazila o něco později. Ale na hotelu jsem byla něco před devátou.\"\n\n„Psala jsem panu Havelkovi a on mi potvrdil, že už se chystá ke spánku. Ráno jsme se už kolem osmé sešli na snídani. Takže ano, určitě byl na hotelu.\"\n\n— Ale nebyla jste přímo s ním?\n\n„No, nebyla.\"\n\n— Dobře. Děkuji vám za informaci.\n\n„Počkejte ještě. Vy jste říkal logy pokoje 307?\"\n\n— Ano, přístupy do pokoje Tomáše Havelky.\n\n„Tady muselo dojít k omylu. Pokoj 307 je můj. Pan Havelka je ubytovaný vedle. Na pokoji 305.\"\n\n— Děkuji vám, slečno."
    },
    // ??? SLIDE 45: OT?ZKA TYP 1 ?????????????????????????????????????????
    {
        type: "question",
        id: 45,
        questionType: 1,
        text: "Kdo zabil Jakuba Dvořáka a faráře Norberta Malinu?",
        options: ["Filip Procházka", "Tomáš Havelka"],
        correctIndex: 1,
        hints: {
            textHints: [],
            audioHintCount: 0
        }
    },
    // ??? SLIDE 46: OT?ZKA TYP 3 ?????????????????????????????????????????
    {
        type: "question",
        id: 46,
        questionType: 3,
        text: "Jak se Havelka dostal do Podlesí po přednášce v den vraždy Jakuba Dvořáka?",
        acceptedAnswers: ["autobusem", "Autobusem", "AUTOBUSEM", "autobus", "Autobus"],
        hints: {
            textHints: [
                "Žádné auto, kromě auta Filipa Procházky, ten večer na odbočce do Podlesí nesjelo.",
                "Pěšky by se tam určitě nedostal. Zbývá jediný způsob.",
                "Autobusem."
            ],
            audioHintCount: 1
        }
    },
    // ??? SLIDE 47: OT?ZKA TYP 2 ?????????????????????????????????????????
    {
        type: "question",
        id: 47,
        questionType: 2,
        text: "V kolik hodin vyjížděl Havelka autobusem z Plzně a v kolik měl být v Podlesí?",
        fieldLabels: ["ODJEZD Z PLZNĚ", "PŘÍJEZD DO PODLESÍ"],
        correctAnswers: ["20:00", "21:30"],
        hints: {
            textHints: [
                "Podívej se do jízdních řádů a zjisti, jak dlouho trvá cesta do Podlesí z Plzně CAN.",
                "Podívej se do novin, v kolik odjížděl jediný autobus do Podlesí, který mohl Havelka stihnout.",
                "Z Plzně odjížděl ve 20:00 a na místě byl ve 21:30."
            ],
            audioHintCount: 1
        }
    },
    // ??? SLIDE 48: OT?ZKA TYP 7 ?????????????????????????????????????????
    {
        type: "question",
        id: 48,
        questionType: 7,
        text: "Jak se Havelka dostal do Podlesí, když zanechal farářovi výhružné vzkazy a stejně tak, když ho zavraždil?",
        keywordAnswers: ["TAXI", "TAX\u00cd"],
        correctAnswer: "Havelka se do Podles\u00ed dostal tax\u00edkem.",
        hints: {
            textHints: [
                "Podívej se nejen na logy hotelového pokoje 305 ve dnech 12. a 13. 3., ale zkontroluj i další část dokumentu.",
                "Podívej se na Havelkovy objednávky odvozů.",
                "Taxíkem."
            ],
            audioHintCount: 1
        }
    },
    // ??? SLIDE 49: OT?ZKA TYP 7 ?????????????????????????????????????????
    {
        type: "question",
        id: 49,
        questionType: 7,
        text: "Kde byla v době těchto vražd asistentka Tomáše Havelky?",
        keywordAnswers: ["HOTEL", "POKOJ"],
        correctAnswer: "Asistentka byla v hotelov\u00e9m pokoji.",
        hints: {
            textHints: [
                "Podívej se do hotelových logů Havelkovy asistentky.",
                "Je to pokoj 307.",
                "Podle hotelových logů byla na pokoji."
            ],
            audioHintCount: 1
        }
    },
    // ??? SLIDE 50: CONCLUSION ?????????????????????????????????????????
    {
        type: "conclusion",
        id: 50,
        videoId: "o3duATBwCSw",
        audioUrl: "assets/audio/uvody/zaver.mp3",
        hideConclusionDetail: true,
    },
    // ??? SLIDE 51: INTRO ?????????????????????????????????????????
    {
        type: "intro",
        id: 51,
        department: "Oddělení kriminality a vyšetřování - Územní odbor pro Prahu III",
        caseNumber: "Případ № 2254578/2026",
        caseName: "Digitální past",
        classification: "Přísně tajné",
        location: "Praha 10, Česká republika",
        videoId: "LmaG4d0O9Gg",
        audioUrl: "assets/audio2/uvody/uvod.mp3"
    },
    // ??? SLIDE 52: CHAPTER ?????????????????????????????????????????
    {
        type: "chapter",
        id: 52,
        chapterNum: 1,
        chapterTitle: "PRVNÍ SPIS",
        videoId: "LmaG4d0O9Gg",
        audioUrl: "assets/audio2/uvody/uvod1.mp3",
        warning: "Nejprve shlédni úvodní video, teprve pak otevři první spis.",
        buttonText: "Otevřít spis"
    },
    // ??? SLIDE 53: OT?ZKA TYP 4 ?????????????????????????????????????????
    {
        type: "question",
        id: 53,
        questionType: 4,
        text: "Jaké nesrovnalosti či důkazy se v průběhu vyšetřování objevily? Potřebujeme alespoň tři, abychom mohli pokračovat ve vyšetřování. Vyber, ve kterých důkazních materiálech je najdeme.",
        options: [
            "pitevní protokol",
            "protokol o ohledání místa činu",
            "výslech Barbory Hladíkové",
            "QR kód",
            "telefonát Barbory Hladíkové",
            "kalendář Josefa Pospíšila",
            "výslech Lenky Pospíšilové",
            "plánek úklidu"
        ],
        correctIndices: [3, 4, 5],
        hints: {
            textHints: [
                "Zkus si prověřit jeden z důkazů podrobněji. Třeba tě dovede na externí web.",
                "Naskenuj QR kód a objeví se tajná zpráva. Co ty na to? ",
                "Josef Pospíšil si také někam dělal poznámky. Není v nich něco zvláštního?",
                "Josef Pospíšil si v poznámkách v kalendáři stěžuje, že mu někdo píše divné vzkazy a že mu někdo volá. Nemůže to být ono?",
                "Prověř také telefonní kontakt, který nám dala Barbora Hladíková. Je nanejvýš podezřelý.",
                "Prověření provedeš pomocí odkazu na kartičce s kontakty na policejní oddělení.",
                "Správně je QR kód, telefonát Barbory Hladíkové a kalendář Josefa Pospíšila."
            ],
            audioHintCount: 2
        }
    },
    // ??? SLIDE 54: OT?ZKA TYP 3 ?????????????????????????????????????????
    {
        type: "question",
        id: 54,
        questionType: 3,
        text: "Komu patří telefonní kontakt, který volal uklízečce Barboře Hladíkové?",
        acceptedAnswers: ["Bohuslava Němcová", "Bohuslavě Němcové","Němcová","Němcové"],
        hints: {
            textHints: [
                "Telefonní číslo je třeba prověřit, nemyslíš? ",
                " K prověření telefonních čísel a hovorů máme speciální databázi.",
                "Prohlédni si adresář kriminálky. Je tam odkaz, kde si můžeš číslo ověřit.",
                "Otevři si webovou stránku a zadej telefonní číslo, o které nám jde. Pak si můžeš přehrát hovory a uvidíš i majitele.",
                "Majitelkou telefonního čísla je podle databáze Bohuslava Němcová, ne?"
            ],
            audioHintCount: 1
        }
    },
    // ??? SLIDE 55: OT?ZKA TYP 7 ?????????????????????????????????????????
    {
        type: "question",
        id: 55,
        questionType: 7,
        text: "Proč tato osoba telefonovat nemohla?",
        keywordAnswers: ["mřela", "mrt", "zesnul", "žij"],
        correctAnswer: "Bohuslava Němcová byla v té době již mrtvá.",
        hints: {
            textHints: [
                "Když ověřuješ zprávy a hovory, dostaneš se přes proklik do podrobných informací o čísle, přes jméno se pak ale dostaneš ještě dál. Je to chytrá databáze.",
                "Prověř životní data Bohuslavy Němcové. Možná tě něco překvapí.",
                "Já myslím, že Bohuslava Němcová už nežije."
            ],
            audioHintCount: 0
        }
    },
    // ??? SLIDE 56: OT?ZKA TYP 3 ?????????????????????????????????????????
    {
        type: "question",
        id: 56,
        questionType: 3,
        text: "Povedlo se ti rozluštit alespoň část textu z QR kódu? Co tam stojí?",
        acceptedAnswers: ["Pomsta"],
        hints: {
            textHints: [
                "U jedné zašifrované části textu v QR kódu je znak zavináče. Neviděli jsme ho ještě někde?",
                "Znak zavináče se vyskytuje i přímo v emailu s QR kódem, který Josefu Pospíšilovi přišel. A jsou u něj nějaká čísla, viď?",
                "Ty čísla by mohla určovat pořadí, ne?",
                "Nemůže to být pořadí písmen v tom textu z QR kódu? Zkus to.",
                "Musí to být POMSTA."
            ],
            audioHintCount: 0
        }
    },
    // ??? SLIDE 57: VIDEO ?????????????????????????????????????????
    {
        type: "video",
        id: 57,
        videoId: "LmaG4d0O9Gg",
        audioUrl: "assets/audio2/uvody/zaver1.mp3",
        buttonText: "Pokračovat"
    },
    // ??? SLIDE 58: CHAPTER ?????????????????????????????????????????
    {
        type: "chapter",
        id: 58,
        chapterNum: 2,
        chapterTitle: "DRUHÝ SPIS",
        videoId: "LmaG4d0O9Gg",
        audioUrl: "assets/audio2/uvody/uvod2.mp3",
        warning: "Shlédni úvodní video a pak otevři spis.",
        buttonText: "Otevřít spis"
    },
    // ??? SLIDE 59: OT?ZKA TYP 3 ?????????????????????????????????????????
    {
        type: "question",
        id: 59,
        questionType: 3,
        text: "Podařilo se ti rozluštit další část QR kódu? Co v ní stojí?",
        acceptedAnswers: ["Vrazi skončí v pekle"],
        hints: {
            textHints: [
                "Detektive, možná by ses měl zaměřit na tu část s nesourodými písmenky.",
                "U té šifry je takový symbol se sloupky. Neviděli jsme už něco podobného někde?",
                "Podle mě to musí mít něco společného s transpoziční šifrou.",
                "Víš, detektive, taková ta transpoziční šifra, co byla v novinách. Jen ještě najít klíč.",
                "Nemohl by být ten klíč přímo v QR kódu? Tučně vyznačený?",
                "Zkus postupovat přesně podle systému, který je popsaný v novinách. Ale opačně, protože nešifrujeme, ale dešifrujeme.",
                "Co bys řekl na to, že je tam vzkaz Vrazi skončí v pekle?"
            ],
            audioHintCount: 0
        }
    },
    // ??? SLIDE 60: OT?ZKA TYP 6 ?????????????????????????????????????????
    {
        type: "question",
        id: 60,
        questionType: 6,
        text: "Přečetl sis podrobně oba výslechy? Jak výslech Václava Staňka, tak výslech Zbyňka France? Přijde ti některý z nich podezřelý?",
        options: [
            "Podezřelý mi přijde Václav Staněk.",
            "Podezřelý mi přijde Zbyněk Franc.",
            "Podezřelí mi přijdou oba."
        ],
        hints: {
            textHints: [],
            audioHintCount: 0
        }
    },
    // ??? SLIDE 61: OT?ZKA TYP 5 ?????????????????????????????????????????
    {
        type: "question",
        id: 61,
        questionType: 5,
        text: "Pojďme se podívat na Pospíšilův výpis z účtu. Skutečně to vypadá, že by se Josef Pospíšil topil v dluzích?",
        yesNoCorrect: "no",
        hints: {
            textHints: [
                "Nedostával Pospíšil pravidelnou \"výplatu\" na svůj účet? To nám hodně pomůže.",
                "Neměl náhodou Pospíšil vždy, až na výjimky, na účtu dostatečný obnos finančních prostředků?",
                "Podle mě se tedy Pospíšil v dluzích určitě netopil."
            ],
            audioHintCount: 0
        }
    },
    // ??? SLIDE 62: OT?ZKA TYP 7 ?????????????????????????????????????????
    {
        type: "question",
        id: 62,
        questionType: 7,
        text: "Pospíšil ze svého účtu platil kromě splátek dluhu Staňkovi a nájemného ještě něco. Za koho to pravděpodobně platil?",
        keywordAnswers: ["TAT", "OTE", "OTC", "POSP\u00cd\u0160", "T\u00c1T"],
        correctAnswer: "Za sv\u00e9ho otce - Zde\u0148ka Posp\u00ed\u0161ila.",
        hints: {
            textHints: [
                "Každý měsíc odcházel z Pospíšilova účtu nemalý obnos financí do Nemocnice Na Vršinách. To je zvláštní, ne?",
                "Pospíšil platil někomu nadstandardní péči. Zamysli se, neměl náhodou někoho blízkého v nemocnici?",
                "No ano, nadstandardní péči platil za svého otce."
            ],
            audioHintCount: 0
        }
    },
    // ??? SLIDE 63: OT?ZKA TYP 3 ?????????????????????????????????????????
    {
        type: "question",
        id: 63,
        questionType: 3,
        text: "Pospíšilovi chodily peníze pouze z jednoho zdroje. Jaká byla pracovní pozice muže, který mu pravidelně posílal platby?",
        acceptedAnswers: ["režisér"],
        hints: {
            textHints: [
                "Jméno u jediné příjmové transakce snad ve výpise dohledáš snadno, detektive.",
                "Neslyšeli jsme to jméno už někde?",
                "Zkus se podívat do novin.",
                "Jakub Straka pracuje v divadle. V novinách se píše na jaké pozici, pokud se nemýlím.",
                "Jakub Straka pracuje jako režisér."
            ],
            audioHintCount: 0
        }
    },
    // ??? SLIDE 64: OT?ZKA TYP 3 ?????????????????????????????????????????
    {
        type: "question",
        id: 64,
        questionType: 3,
        text: "Našels na výpise společnosti CLEAN s.r.o. nějaké zajímavé jméno?",
        acceptedAnswers: ["Vendula Staňková Němcová", "Vendula Staňková", "Vendula Němcová"],
        hints: {
            textHints: [
                "Podle mě jsme jméno jednoho z podílníků už někde slyšeli.",
                "Pokud si vzpomínám, tak jsme to jméno viděli, když jsme prověřovali telefonní číslo, které volalo Barboře Hladíkové. Tak se znovu mrkni.",
                "Nemohla to být Vendula Staňková Němcová?"
            ],
            audioHintCount: 0
        }
    },
    // ??? SLIDE 65: OT?ZKA TYP 2 ?????????????????????????????????????????
    {
        type: "question",
        id: 65,
        questionType: 2,
        text: "Jak se jmenovali rodiče Venduly Staňkové Němcové?",
        fieldCount: 2,
        fieldLabels: ["Matka", "Otec"],
        correctAnswers: ["Čeněk Němec", "Bohuslava Němcová"],
        hints: {
            textHints: [
                "Zkus se znovu podívat do databáze hovorů a prověř číslo, ze kterého bylo telefonováno Barboře Hladíkové. Jméno Venduly Staňkové Německé tam figuruje a určitě z toho můžeme odvodit i jména jejich rodičů.",
                "Je to jasné. Čeněk Němec a Bohuslava Němcová."
            ],
            audioHintCount: 0
        }
    },
    // ??? SLIDE 66: VIDEO ?????????????????????????????????????????
    {
        type: "video",
        id: 66,
        videoId: "LmaG4d0O9Gg",
        audioUrl: "assets/audio2/uvody/zaver2.mp3",
        buttonText: "Pokračovat"
    },
    // ??? SLIDE 67: CHAPTER ?????????????????????????????????????????
    {
        type: "chapter",
        id: 67,
        chapterNum: 3,
        chapterTitle: "TŘETÍ SPIS",
        videoId: "LmaG4d0O9Gg",
        audioUrl: "assets/audio2/uvody/uvod3.mp3",
        warning: "Shlédni úvodní video, otevři spis, prozkoumej pitevní protokol a protokol o ohledání místa činu a pak si poslechni vzkaz od patologa.",
        buttonText: "Máte neposlechnutý vzkaz od patologa Čáslavy"
    },
    // ─── SLIDE 68: AUDIO ───────────────────────────────────────────────
    {
        type: "audio",
        id: 68,
        audioUrl: "assets/audio2/patolog1.mp3",
        listenButtonText: "Poslechnout vzkaz od patologa Čáslavy",
        infoText: "Nyní pokračuj v prostudování třetího spisu.",
        buttonText: "Pokračovat"
    },
    // ─── SLIDE 69: OTÁZKA TYP 3 ─────────────────────────────────────────
    // ??? SLIDE 69: OT?ZKA TYP 3 ?????????????????????????????????????????
    {
        type: "question",
        id: 69,
        questionType: 3,
        text: "Do jaké třídy spolu určitě chodili Josef Pospíšil a Lukáš Havel?",
        acceptedAnswers: ["9.B", "9B", "9. B"],
        hints: {
            textHints: [
                "Podívej se na facebookový příspěvek Josefa Pospíšila a fotografii nalezenou na stole Lukáša Havla. Co si o tom myslíš?",
                 "Vypadá to jako fotka ze školy, ne?",
                "Na druhé straně fotografie je uvedena i třída, do které spolu chodili. Mrkni se."
            ],
            audioHintCount: 0
        }
    },
    // ??? SLIDE 70: OT?ZKA TYP 3 ?????????????????????????????????????????
    {
        type: "question",
        id: 70,
        questionType: 3,
        text: "Kdo je na společné školní fotografii? Dokážeš identifikovat i třetí osobu?",
        acceptedAnswers: ["Anežka Procházková","AnežkU Procházkovou"],
        hints: {
            textHints: [
                "Na druhé straně jsou rozházená písmena. Stačí vyškrtat písmena, která dávají jména Josef Pospíšil a Lukáš Havel, a zbydou nás písmenka, která dohromady tvoří jméno třetí osoby na fotografii. To dá celkem rozum, ne?",
                "Pozor, detektive. Nemusíš hádat jen tak. Na fotce jsou pod 9.B iniciály všech tří mladých lidí, takže je jasné, že dívka má iniciály A.P.",
                "Je to dívka, takže je logické, že její příjmení bude končit na -OVÁ. Z ostatních písmen pak už zkus poskládat jméno.",
                "Určitě je to Anežka Procházková."
            ],
            audioHintCount: 0
        }
    },
    // ??? SLIDE 71: OT?ZKA TYP 3 ?????????????????????????????????????????
    {
        type: "question",
        id: 71,
        questionType: 3,
        text: "Je v telefonních kontaktech Lukáše Havla a Josefa Pospíšila nějaké podezřelé číslo, na které bychom se měli zaměřit? Jaké je to číslo?",
        acceptedAnswers: ["222 558 4423", "2225584423"],
        hints: {
            textHints: [
                "Jedno číslo volá oběma pravidelně, hovory jsou však velmi krátké.",
                "Oběma toto číslo volalo těsně před vraždou.",
                "Je to jasně telefonní číslo 222 558 4423."
            ],
            audioHintCount: 0
        }
    },
    // ??? SLIDE 72: OT?ZKA TYP 3 ?????????????????????????????????????????
    {
        type: "question",
        id: 72,
        questionType: 3,
        text: "Podařilo se ti vyluštit alespoň část QR kódu nalezeného na místě vraždy Lukáše Havla? Tu s těmi šipkami?",
        acceptedAnswers: ["Zlomili mi srdce"],
        hints: {
            textHints: [
                "Podle mě půjde o první zašifrovanou část kódu. Je u ní symbol takového kola z šipek.",
                "Detektive, a co když je vodítkem právě to kolo šipek?",
                "Být tebou, tak si spočítám, do kolika směrů ty šipky vedou.",
                "Osm směrů. To mi něco připomíná.",
                "Vzpomeneš si, kde jsme si mohli zahrát osmisměrku?",
                "Budeme muset tu osmisměrku vyluštit. Vyškrtáváme slova, která jsou pod tím v nabídce. To, co nám zbyde, pak utvoří chybějící část tajenky.",
                "Podle mě to bude \"každé čtvrté písmeno\".",
                "Vezmi každé čtvrté písmeno ze šifry a vyjde ti: Zlomili mi srdce"
            ],
            audioHintCount: 0
        }
    },
    // ??? SLIDE 73: OT?ZKA TYP 3 ?????????????????????????????????????????
    {
        type: "question",
        id: 73,
        questionType: 3,
        text: "Ne že bychom na to měli úplně čas, ale stejně se zeptám. Zkusil sis zahrát o vstupenky do divadla? Dohledal sis ASCII? Co ti vyšlo?",
        acceptedAnswers: ["DIVADLO"],
        hints: {
            textHints: [
                "Dohledej si na internetu článek ve Wikipedii pojednávající o ASCII. Ta stránka je i v češtině.",
                "Najdeš tam tabulku s decimálními i hexadecimálními znaky pro každé naše písmenko i číslo. Tak to už je jednoduché, ne?",
                "Převěď čísla z letáku podle ASCII a vyjde ti DIVADLO."
            ],
            audioHintCount: 0
        }
    },
    // ??? SLIDE 74: OT?ZKA TYP 3 ?????????????????????????????????????????
    {
        type: "question",
        id: 74,
        questionType: 3,
        text: "Leták k představení Nemesis odkazuje i na záznam nahrávek, které složil Josef Pospíšil. Určitě by nebylo od věci si je poslechnout. Dostal ses k nim? Jaké je heslo?",
        acceptedAnswers: ["Očištění"],
        hints: {
            textHints: [
                "To heslo si musel Pospíšil někam poznamenat? Zkus prohledat jeho dokumenty.",
                "Nemohlo by to být v jeho kalendáři?",
                "Podle mě máme hledat někde v textu. A dost možná bude ten text souviset s Nemesis.",
                "Detektive, myslím si, že čísla mimo závorky říkají, o kolik písmenek musíme jít zpět nebo dopředu.",
                "Když je číslo před závorkou, znamená to jít o tolik písmen zpět, a když je za závorkou, znamená to jít o tolik písmen vpřed. Co myslíš?",
                "No a ta čísla v závorce? Stejně je označeno i něco v příběhu o Nemesis, že?",
                "Podle mě je to číslování písní v rámci příběhu.",
                "Heslo je OČIŠTĚNÍ."
            ],
            audioHintCount: 0
        }
    },
    // ??? SLIDE 75: INTERLUDE ?????????????????????????????????????????
    {
        type: "interlude",
        id: 75,
        audioUrl: "assets/audio2/mezi/mezi3.mp3",
        text: "No výborně, detektive. Spojení mezi Havlem a Pospíšilem skrze základní školu je očividné. Jakto, že nás to jen nenapadlo? Kontaktovali jsme Základní školu U Grébovky, kterou oba navštěvovali. Ředitel sice nebyl přítomen, ale zástupce slíbil, že se nám ozve. Zatím nám jeho sekretariát nasdílel některé velmi zajímavé dokumenty. Mrkneš se na ně? Posílám ti odkaz.",
        link: {
            url: "https://drive.google.com/drive/folders/1bT5eUI-EUob8zq1iIE2Pa0rFrURT30ig?usp=drive_link",
            label: "[ DOKUMENTY ZE ZŠ U GRÉBOVKY ]"
        },
        hints: {
            textHints: [],
            audioHintCount: 0
        }
    },
    // ??? SLIDE 76: OT?ZKA TYP 7 ?????????????????????????????????????????
    {
        type: "question",
        id: 76,
        questionType: 7,
        text: "Prospěch Josefa Pospíšila, Lukáše Havla i Anežky Procházkové se v posledním ročníku základní školy rapidně zhoršil. Z čeho ale byli nestandardně klasifikováni?",
        keywordAnswers: ["CHOV\u00c1N\u00cd"],
        correctAnswer: "z chov\u00e1n\u00ed",
        hints: {
            textHints: [
                "Určitě se to musí týkat jejich známek na vysvědčení.",
                  "Všem třem se v deváté třídy zhoršil prospěch. Je tam ale ještě něco zneklidňujícího?",
                "Nemohla by to být snížená známka z chování?"
            ],
            audioHintCount: 0
        }
    },
    // ??? SLIDE 77: OT?ZKA TYP 3 ?????????????????????????????????????????
    {
        type: "question",
        id: 77,
        questionType: 3,
        text: "Musíme si k výslechu pozvat třídního učitele Josefa Pospíšila, Lukáše Havla a Anežky Procházkové, který je vedl od 6. do 9. třídy. Jak zní jeho jméno?",
        acceptedAnswers: ["Jakub Dvořák"],
        hints: {
            textHints: [
                "Být tebou, tak prověřím seznam třídních učitelů.",
                "Když byli ti tři v deváté třídě, byl to školní rok 2014/2015. Abychom zjistili, kdo je učil, musíme zjistit rok jejich nástupu do první třídy.",
                "Jo, detektive. Myslím, že by to mohl být školní rok 2006/2007.",
                "Jak se na to tak dívám, tak musel být jejich třídním Jakub Dvořák."
            ],
            audioHintCount: 0
        }
    },
    // ??? SLIDE 78: VIDEO ?????????????????????????????????????????
    {
        type: "video",
        id: 78,
        videoId: "LmaG4d0O9Gg",
        audioUrl: "assets/audio2/uvody/zaver3.mp3",
        buttonText: "Pokračovat"
    },
    // ??? SLIDE 79: CHAPTER ?????????????????????????????????????????
    {
        type: "chapter",
        id: 79,
        chapterNum: 4,
        chapterTitle: "ČTVRTÝ SPIS",
        videoId: "LmaG4d0O9Gg",
        audioUrl: "assets/audio2/uvody/uvod4.mp3",
        warning: "Shlédni úvodní video, poslechni si vzkaz od ředitele Svobody a teprve pak otevři spis.",
        buttonText: "Máte neposlechnutý vzkaz od ředitele Svobody"
    },
    // ─── SLIDE 80: AUDIO ───────────────────────────────────────────────
    {
        type: "audio",
        id: 80,
        audioUrl: "assets/audio2/reditel.mp3",
        listenButtonText: "Poslechnout vzkaz od ředitele Svobody",
        infoText: "Nyní otevři spis a pokračuj v pátrání.",
        buttonText: "Otevřít spis"
    },
    // ─── SLIDE 81: OTÁZKA TYP 3 ─────────────────────────────────────────
    {
        type: "question",
        id: 81,
        questionType: 3,
        text: "Povedlo se ti vyluštit ještě nějakou část druhého QR kódu? Co v ní stojí?",
        acceptedAnswers: ["Anna"],
        hints: {
            textHints: [
                "Podle mě by to mohla být ta část s tou notou.",
                "Nota zřejmě odkazuje na jedno hudební dílo, se kterým jsme už měli co dočinění.",
                "Nemohly by nám náhodou pomoci skladby Josefa Pospíšila?",
                "Poslechni si písně k dramatu Nemesis a pozorně poslouchej.",
                "Jestli tě zajímá můj názor, tak podle mě to všechno stojí na titulní písní Nemesis.",
                "V písni Nemesis se zpívá: \"abys tajemství odhalil chtíčem, právě hřích je tím klíčem\". Co myslíš?",
                "Hřích je ten klíč, který hledáme.",
                "Zkus z těch písmen vyškrat ta, která obsahuje slovo hřích. Něco ti určitě vyjde.",
                "No tak je to jasné. Je to \"Anna\"."
            ],
            audioHintCount: 0
        }
    },
    // ??? SLIDE 82: INTERLUDE ?????????????????????????????????????????
    {
        type: "interlude",
        id: 82,
        audioUrl: "assets/audio2/mezi/mezi4.mp3",
        text: "No výborně. Takže teď máme potvrzeno, že to musí související s Annou Zlámalovou. Teď nám jde o to, zda Anežku Procházkovou, spolužačku Josefa Pospíšila a Lukáše Havla, můžeme považovat za podezřelou, nebo spíš za ohroženou. Prověř tu pevnou linku, která volala jak Josefu Pospíšilovi, tak i Lukáši Havlovi. Třeba z toho dostaneme nějaké užitečné informace.",
        hints: {
            textHints: [],
            audioHintCount: 0
        }
    },
    // ??? SLIDE 83: OT?ZKA TYP 5 ?????????????????????????????????????????
    {
        type: "question",
        id: 83,
        questionType: 5,
        text: "Volalo telefonní číslo, které obtěžovalo Josefa Pospíšila a Lukáše Havla, i Anežce Procházkové?",
        yesNoCorrect: "yes",
        hints: {
            textHints: [
                "Prověř telefonní číslo v policejní databázi telefonních hovorů. Přes prokliky se dá proklikat na informace o telefonním číslem."
            ],
            audioHintCount: 0
        }
    },
    // ??? SLIDE 84: OT?ZKA TYP 6 ?????????????????????????????????????????
    {
        type: "question",
        id: 84,
        questionType: 6,
        text: "Můžeme tedy Anežku Procházkovou považovat spíše za podezřelou nebo ohroženou?",
        options: ["podezřelou", "ohroženou"],
        hints: {
            textHints: ["Pokud číslo volalo i Anežce, pak bychom ji měli považovat za ohroženou."],
            audioHintCount: 0
        }
    },
    // ??? SLIDE 85: OT?ZKA TYP 7 ?????????????????????????????????????????
    {
        type: "question",
        id: 85,
        questionType: 7,
        text: "Komu patří telefonní číslo, které obtěžovalo Josefa Pospíšila, Lukáše Havla a Anežku Procházkovou?",
        keywordAnswers: ["T\u016eMOV"],
        correctAnswer: "MARII T\u016eMOV\u00c9",
        hints: {
            textHints: ["Když si v databázi telefonní číslo rozklikneš, zjistíš, komu patří."],
            audioHintCount: 0
        }
    },
    // ??? SLIDE 86: OT?ZKA TYP 3 ?????????????????????????????????????????
    {
        type: "question",
        id: 86,
        questionType: 3,
        text: "Jsou všechny hovory stejné? Jen funění na jedné straně a na druhé straně nechápaví příjemci hovoru? Nebo si objevil v některém hovoru něco zvláštního? Pokud ano, uveď ID hovoru.",
        acceptedAnswers: ["25031821496"],
        hints: {
            textHints: [
                "Poslechni si znovu všechny hovory a dobře poslouchej, zda neuslyšíš nějaké zvuky na pozadí.",
                "V jednom z hovorů se určitě vyskytuje zvuk na pozadí. Přijdeš na to ve kterém?",
                "Nebude to v hovoru ID 25031821496?"
            ],
            audioHintCount: 0
        }
    },
    // ??? SLIDE 87: INTERLUDE ?????????????????????????????????????????
    {
        type: "interlude",
        id: 87,
        audioUrl: "assets/audio2/mezi/mezi42.mp3",
        text: "No super. Ano. Skutečně. Taky jsem tam v pozadí toho hovoru něco slyšel. Poslal jsem ten hovor na analýzu a oni mi ten zvuk vytáhli a vyčistili. Poslechni si ho. Co to děláš, Aleši? Nějaká žena tam někoho oslovuje. Do toho bytu se budeme muset co nejdříve podívat. Teď mi ale ještě prověř znovu to telefonní číslo, ze kterého přišlo Anežce Procházkové, že se představení Nemesis ruší. Je to stejné číslo, které volalo v den smrti Josefa Pospíšila Barboře Hladíkové. Tak to nesmíme podcenit. Nezapomeň dát za číslo písmeno \"n\", ať se ti zobrazí aktualizovaný výpis hovorů.",
        hints: {
            textHints: [],
            audioHintCount: 0
        }
    },
    // ??? SLIDE 88: OT?ZKA TYP 3 ?????????????????????????????????????????
    {
        type: "question",
        id: 88,
        questionType: 3,
        text: "Víme už nyní, kdo používá telefonní číslo, které patřilo Bohuslavě Němcové?",
        acceptedAnswers: ["Václav Staněk"],
        hints: {
            textHints: [
                "Jeho hlas jsme slyšeli v obou telefonátech. Tak já myslím, že je to jasné.",
                "Mluvil i se svým otcem Zdeňkem Staňkem. Tak to dává smysl. Je to vnuk Bohuslavy Němcové.",
                "Je to určitě Václav Staněk."
            ],
            audioHintCount: 0
        }
    },
    // ??? SLIDE 89: INTERLUDE ?????????????????????????????????????????
    {
        type: "interlude",
        id: 89,
        audioUrl: "assets/audio2/mezi/mezi43.mp3",
        text: "Detektive, ten rozhovor mezi Pospíšilovou a Staňkem byl trochu zvláštní. Ona ho blokuje? Mluvili i o penězích a o firmě. Zkus prověřit firmu Pospíšil a dej vědět, jestli nenajdeš něco zajímavého.",
        hints: {
            textHints: [],
            audioHintCount: 0
        }
    },
    // ??? SLIDE 90: OT?ZKA TYP 3 ?????????????????????????????????????????
    {
        type: "question",
        id: 90,
        questionType: 3,
        text: "Tak co, našel jsi něco zvláštního na struktuře firmy Pospíšil? Je mezi společníky někdo, koho bychom tam nečekali?",
        acceptedAnswers: ["Václav Staněk","Václava Staňka"],
        hints: {
            textHints: [
                "Podívej se do sbírky listin a prověř podílníky.",
                "Všímej si taky dat zápisů a jejich výmazu. Otec Josefa Pospíšila před pár lety přepsal část svého podílu na někoho, koho už známe, ne?",
                "No opět nám tu figuruje Václav Staněk."
            ],
            audioHintCount: 0
        }
    },
    // ??? SLIDE 91: VIDEO ?????????????????????????????????????????
    {
        type: "video",
        id: 91,
        videoId: "LmaG4d0O9Gg",
        audioUrl: "assets/audio2/uvody/zaver4.mp3",
        buttonText: "Pokračovat"
    },
    // ??? SLIDE 92: CHAPTER ?????????????????????????????????????????
    {
        type: "chapter",
        id: 92,
        chapterNum: 5,
        chapterTitle: "PÁTÝ SPIS",
        videoId: "LmaG4d0O9Gg",
        audioUrl: "assets/audio2/uvody/uvod5.mp3",
        warning: "Shlédni úvodní video a pak otevři spis.",
        buttonText: "Otevřít spis"
    },
    // ??? SLIDE 93: OT?ZKA TYP 7 ?????????????????????????????????????????
    {
        type: "question",
        id: 93,
        questionType: 7,
        text: "Komu původně patřil skartovaný dokument?",
        keywordAnswers: ["DVO\u0158\u00c1K"],
        correctAnswer: "JAKUBU DVO\u0158\u00c1KOVI",
        hints: {
            textHints: [
                "Zkus jednotlivé části dokumentu složit tak, jak na sebe navazují.",
                "V tištěné části objevíš hlavičku v pravém horním rohu.",
                "Je to hlavička Jakuba Dvořáka."
            ],
            audioHintCount: 0
        }
    },
    // ??? SLIDE 94: OT?ZKA TYP 2 ?????????????????????????????????????????
    {
        type: "question",
        id: 94,
        questionType: 2,
        text: "Na zadní straně skartovaného dokumentu si někdo zkoušel hru náctiletých zvanou FLAMES. Napiš obě křestní jména, oddělená čárkou a mezerou, kterých se tato hra týkala.",
        fieldCount: 2,
        fieldLabels: ["První jméno", "Druhé jméno"],
        correctAnswers: ["Anna", "Václav"],
        hints: {
            textHints: ["Podívej se na skartovaný dokument.",
                 "Na zadní straně jsou zbylá písmena jmen.",
                 "Hra FLAMES se hraje tak, že se vezmou dvě jména a z nich se vyškrtnou společná písmena. My už tedy vidíme jen to, co zbylo.",
                    "Vyškrtaná písmena jsou tam také napsané. Tak ta jména zkus poskládat.",
                    "Že by to byla Anna a Václav?"
                ],
            audioHintCount: 0
        }
    },
    // ??? SLIDE 95: OT?ZKA TYP 3 ?????????????????????????????????????????
    {
        type: "question",
        id: 95,
        questionType: 3,
        text: "Podařilo se ti rozluštit část QR kódu, která byla společná u obou obětí?",
        acceptedAnswers: ["ZQPV FWYC JNOH ZXGVF", "ZQQPVFWYCJNOHZXGVF"],
        hints: {
            textHints: ["Podívej se na QR kódy obou obětí.", 
                "Část šifry se opakuje v obou kódech, že jo?",
            "Nepomůže nám k tomu list Jakuba Dvořáka? Ta čísla vypadají úplně jako kdyby byla zapsána v binární soustavě",
        "No že je můžeme převést do standarních číslic je jasné, ale co pak? Nemohli bychom z toho dostat nějaká písmenka?",
        "S převodem písmen na číslice a zase zpátky už jsme se někde setkali, viď?",
        "Nebylo náhodou v letáku k představení něco podobného?",
        "Použij ASCII a převeď ta výsledná čísla na písmenka. Třeba z toho něco vyleze.",
        "Ať to zkouším, jak to zkouším, tak to nic smysluplného nedává. Vyšlo mi ZQPV FWYC JNOH ZXGVF"
            ],
            audioHintCount: 0
        }
    },
    // ??? SLIDE 97: OT?ZKA TYP 5 ?????????????????????????????????????????
    {
        type: "question",
        id: 97,
        questionType: 5,
        text: "Psala dopis na rozloučenou a vzkaz o šikaně stejná osoba?",
        yesNoCorrect: "yes",
        hints: {
            textHints: ["Detektive, porovnej písmo u podpisu na obou dokumentech a bude ti to jasné."],
            audioHintCount: 0
        }
    },
    // ??? SLIDE 98: OT?ZKA TYP 5 ?????????????????????????????????????????
    {
        type: "question",
        id: 98,
        questionType: 5,
        text: "Psala oba dokumenty skutečně Anna Zlámalová?",
        yesNoCorrect: "no",
        hints: {
            textHints: [
                "Koukni se na přetržený podpis na starém vzkazu.",
                "Přijde ti, že by se tam dotyčná podepsala Anna?",

            ],
            audioHintCount: 0
        }
    },
    // ??? SLIDE 99: OT?ZKA TYP 1 ?????????????????????????????????????????
    {
        type: "question",
        id: 99,
        questionType: 1,
        text: "Kdo mohl být tím, kdo oba dokumenty napsal?",
        options: [
            "Josef Pospíšil",
            "Lukáš Havel",
            "Anežka Procházková",
            "Barbora Hladíková",
            "Václav Staněk",
            "Lenka Pospíšilová",
            "Bohuslava Německá",
            "Zbyněk Franc",
            "Jakub Dvořák",
            "Kristýna Francová"
        ],
        correctIndex: 2,
        hints: {
            textHints: [
                "Je jasné, že dopis na rozloučenou byl zfalšován, ale vzkaz na potrhaném papíře je pravý.",
                "Podle podpisu na vzkazu zkus odvodit, kdo ten vzkaz mohl napsat. Myslím, že tu osobu známe",
                "Můžeš se zkusit podívat na podpisy na výsleších. Třeba objevíš nějakou shodu.",
                "Podle mě v tom podpise na vzkazu následuje po An písmeno e, nemyslíš?",
                "Nemohla by to tedy být Anežka Procházková?"
            ],
            audioHintCount: 0
        }
    },
    // ─── SLIDE 100: OTÁZKA TYP 3 ────────────────────────────────────────
    {
        type: "question",
        id: 100,
        questionType: 3,
        text: "No jasně, detektive. Dopis na rozloučenou byl zfalšovaný. Ale proč by to někdo dělal? Šlo skutečně o sebevraždu, nebo mohlo jít o vraždu? Existuje způsob, jak i dlouho po pohřbu znovu prozkoumat tělo a odhalit skutečnou příčinu smrti. Už to mám schválené. Jen dej pokyn a provedeme to. Víš, jak se ta procedura nazývá?",
        acceptedAnswers: ["Exhumace"],
        hints: {
            textHints: [
                "V kriminalistice se tím myslí úředně povolené otevření hrobu a vyzdvižení ostatků, aby je mohl znovu prozkoumat patolog nebo soudní lékař.",
                "Začíná to na „ex-“ a znamená to v podstatě „vyjmout něco ven“ z místa, kam to bylo uloženo.",
                "Pokud nevíš, zkus to najít na internetu. Určitě se o tom někde píše.",
                "Určitě to bude exhumace."
                
            ],
            audioHintCount: 0
        }
    },
    // ??? SLIDE 101: INTERLUDE ?????????????????????????????????????????
    {
        type: "interlude",
        id: 101,
        audioUrl: "assets/audio2/mezi/mezi51.mp3",
        text: "Prosím tě, detektive. Nemám teď čas. Napiš na odbor kriminalistické techniky a expertíz, zda už mají hotové ty rozbory. Je to pro nás důležité. Stačí napsat: \"Máte výsledky rozborů z bytu Tůmové?\". Obdržel jsem výsledky rozborů z bytu Tůmové.",
        buttonText: "Obdržel jsem výsledky rozborů z bytu Tůmové",
        hints: {
            textHints: ["Napiš na emailovou adresu odboru kriminalistické techniky a expertíz. Kontakt najdeš v adresáři, který máš k dispozici."],
            audioHintCount: 0
        }
    },
    // ??? SLIDE 102: INTERLUDE ?????????????????????????????????????????
    {
        type: "interlude",
        id: 102,
        audioUrl: "assets/audio2/mezi/mezi52.mp3",
        extraAudioMessages: [
            {
                audioUrl: "assets/audio2/patolog2.mp3",
                listenButtonText: "Poslechnout vzkaz od patologa Čáslavy"
            }
        ],
        link: {
            url: "https://drive.google.com/drive/folders/18GRAOL8PrfbAAi3kof0FFDg9z3hXOoDw?usp=sharing",
            label: "[ SEZNAM ZAMĚSTNANCŮ ]"
        },
        text: "No, takže naše předpoklady se potvrdily. Zfalšovaný dopis na rozloučenou a písmo Anežky Procházkové. Kdo by ale čekal, že se v bytě Tůmové najdou otisky otce Anny Zlámalové. Detektive, mám novinky. Ozval se mi Čáslava. Patolog. Myslím, že by tě to mohlo zajímat. Poslechni si vzkaz, který mi nechal a pak se podívej na dokument, který mi poslal. Myslím, že už tě něco napadne. Poslechnout vzkaz.",
        hints: {
            textHints: [],
            audioHintCount: 0
        }
    },
    // ??? SLIDE 103: OT?ZKA TYP 7 ?????????????????????????????????????????
    {
        type: "question",
        id: 103,
        questionType: 7,
        text: "Troufneš si ze vzkazu patologa a seznamu zaměstnanců JIP Nemocnice Svatého Prokopa vyvodit závěry? Kdo mohl být tím zlodějem draslíku?",
        keywordAnswers: ["T\u016eMOV"],
        correctAnswer: "MARIE T\u016eMOV\u00c1",
        hints: {
            textHints: [
                "Detektive, projdi si všechna jména zaměstnanců oddělení.",
                "Není mezi těmi jmény náhodou některé, které jsme už slyšeli?",
                "No jasně. Marie Tůmová."
            ],
            audioHintCount: 0
        }
    },
    // ??? SLIDE 104: INTERLUDE ?????????????????????????????????????????
    {
        type: "interlude",
        id: 104,
        audioUrl: "assets/audio2/mezi/mezi53.mp3",
        text: "Detektive, přišly nám výsledky exhumace. A myslím, že se budeš divit. Prostuduj si je. Opět jsem ti je nasdílel.",
        link: {
            url: "https://drive.google.com/file/d/1_QjkRVkprQlxnVaho9KJ_mSKjEOIhNMy/view?usp=drive_link",
            label: "[ VÝSLEDKY EXHUMACE ]"
        },
        hints: {
            textHints: [],
            audioHintCount: 0
        }
    },
    // ??? SLIDE 105: OT?ZKA TYP 6 ?????????????????????????????????????????
    {
        type: "question",
        id: 105,
        questionType: 6,
        text: "Byla podle tebe, na základě výsledků exhumace, Anna Zlámalová zavražděna?",
        options: ["ANO", "NE"],
        hints: {
            textHints: [],
            audioHintCount: 0
        }
    },
    // ??? SLIDE 106: VIDEO ?????????????????????????????????????????
    {
        type: "video",
        id: 106,
        videoId: "LmaG4d0O9Gg",
        audioUrl: "assets/audio2/uvody/zaver5.mp3",
        buttonText: "Pokračovat"
    },
    // ??? SLIDE 107: CHAPTER ?????????????????????????????????????????
    {
        type: "chapter",
        id: 107,
        chapterNum: 6,
        chapterTitle: "ŠESTÁ KAPITOLA",
        videoId: "LmaG4d0O9Gg",
        audioUrl: "assets/audio2/uvody/uvod6.mp3",
        warning: "Shlédni úvodní video a pak otevři spis.",
        buttonText: "Otevřít spis"
    },
    // ??? SLIDE 108: OT?ZKA TYP 6 ?????????????????????????????????????????
    {
        type: "question",
        id: 108,
        questionType: 6,
        text: "Máme obvinit Zlámala? Jsme přesvědčeni o jeho vině?",
        options: ["ANO", "NE"],
        hints: {
            textHints: [],
            audioHintCount: 0
        }
    },
    // ??? SLIDE 109: INTERLUDE ?????????????????????????????????????????
    {
        type: "interlude",
        id: 109,
        audioUrl: "assets/audio2/mezi/mezi61.mp3",
        text: "Záznam hovoru s Anežkou Procházkovou: Oddělení kriminality a vyšetřování - Územní odbor pro Prahu III. \"Dobrý den, tady Anežka Procházková, potřebuji mluvit s kapitánem Vančurou.\" \"U telefonu.\" \"To jsem ráda, pane kapitáne. Něco se stalo, já nevím, co mám dělat.\" \"Uklidněte se, slečno Procházková, a řekněte mi v klidu, co se děje.\" \"Přišel mi email o tom, že moje dcery kradly v obchodě. A je v něm QR kód. Jestli prý chci vidět jejich kamerové záznamy, mám si ho rozkliknout. Je to celý hrozně divný. Bojím se.\" \"Slečno Procházková, okamžitě nám ten QR kód přepošlete.\" \"Jistě, pane kapitáne.\" \"A teď mě dobře poslouchejte. Za žádných, ale za žádných okolností ten QR kód neotevírejte.\" \"Rozumím.\" \"Ozveme se vám, jakmile budeme něco vědět.\" To, co jsi právě slyšel, je záznam rozhovoru s Anežkou Procházkovou. Zdá se, že věc ještě není u konce. Podívej se hned na ten QR kód a zjisti, zda už nejsme schopni odhalit, co ta poslední část, která byla ve všech třech QR kódech, skrývá. Tady je totiž něco navíc.",
        link: {
            url: "https://drive.google.com/file/d/105bZHt9BRvbpn8du2H9y_iXHDZ4Ngo78/view?usp=drive_link",
            label: "[ OTEVŘÍT EMAIL ]"
        },
        hints: {
            textHints: [],
            audioHintCount: 0
        }
    },
    // ??? SLIDE 110: OT?ZKA TYP 3 ?????????????????????????????????????????
    {
        type: "question",
        id: 110,
        questionType: 3,
        text: "Víš, co stojí v tom QR kódu?",
        acceptedAnswers: ["Anna byla moje dcera"],
        hints: {
            textHints: [
                "Každé písmeno z toho, co jsme již vyluštili, je podle mě třeba posunout.",
                "Ta čísla pod šifrou jistě znamenají, o kolik míst máme každé písmeno posunout.",
                "No a ty šipky? To úplně nevím, ale šipky vždycky značí směr, ne?",
                "Zkusil jsem to taky a vyšlo mi \"Anna byla moje dcera!\""
            ],
            audioHintCount: 0
        }
    },
    // ??? SLIDE 111: INTERLUDE ?????????????????????????????????????????
    {
        type: "interlude",
        id: 111,
        audioUrl: "assets/audio2/mezi/mezi62.mp3",
        text: "Takže jsme byli na správné stopě. Jedná se o rodiče, který se mstí za vraždu své dcery. Jenže Aleše Zlámala, otce Anny, jsme zadrželi a v současnosti sedí v naší zadržovací cele. Tak to tak úplně nedává smysl. Leda…leda že by vrahem byla Annina matka.",
        link: {
            url: "https://drive.google.com/file/d/1KmRSMHKBAmflEe_gzFFZvGhJ6K5HZYTZ/view?usp=drive_link",
            label: "[ OTEVŘÍT RODNÝ LIST ]"
        },
        hints: {
            textHints: [],
            audioHintCount: 0
        }
    },
    // ??? SLIDE 112: OT?ZKA TYP 7 ?????????????????????????????????????????
    {
        type: "question",
        id: 112,
        questionType: 7,
        text: "Kdo je matkou Anny Zlámalové? Jaké je její současné jméno?",
        keywordAnswers: ["HLAD\u00cdKOV"],
        correctAnswer: "BARBORA HLAD\u00cdKOV\u00c1",
        hints: {
            textHints: [
                "Podívej se na datum narození Barbory Zlámalové. Nenarazili jsme už na tohle datum ?",
                "Zkus se podívat na starší dokumenty.",
                "Podívej se na úplně první výslech po nalezení těla Josefa Pospíšila. To je velká náhoda, ne?",
                "Matkou Anny Zlámalové musí být Barbora Hladíková."
            ],
            audioHintCount: 0
        }
    },
    // ??? SLIDE 113: INTERLUDE ?????????????????????????????????????????
    {
        type: "interlude",
        id: 113,
        audioUrl: "assets/audio2/mezi/mezi63.mp3",
        text: "Ano, tohle začíná dávat smysl. Barbora Hladíková jako matka Anny Zlámalové a zároveň mstitel, který trestá provinilce za její smrt. Navíc to byla ona, kdo oznámil nález obou těl. Zpočátku jsme ji podezřívali, ale její výkon byl tak přesvědčivý. Ale prořekla se, že jí bylo padesát zrovna v den, kdy zabili Josefa Pospíšila. Tohle ale samo o sobě nestačí. Musíme lokalizovat signál jejího mobilu v době obou vražd. Pojďme to postupně prověřit. Heslo je KRIMI1628.",
        hints: {
            textHints: [],
            audioHintCount: 0
        }
    },
    // ??? SLIDE 114: OT?ZKA TYP 5 ?????????????????????????????????????????
    {
        type: "question",
        id: 114,
        questionType: 5,
        text: "Byla v době první vraždy přítomná v okolí místa činu?",
        yesNoCorrect: "yes",
        hints: {
            textHints: ["Přepnutí do lokalizačního módu najdeš v naší telefonní databázi",
                "Moje ID najdeš na kartičce s kontakty na naše oddělení.",
                "Heslo je jméno psa, se kterým mě ve Vršovicích často vídají. Psalo se o tom v novinách.",
                "V lokalizační databázi vyhledej telefonní číslo Barbory Hladíkové.",
                "Její číslo zjistíš v telefonní databázi. Volal jí přece Václav Staněk z telefonu Bohuslavy Němcové, ne?",
                "Zjisti si, kdy došlo k vraždě a prověř, kde v tu dobu byla a jak se pohybovala."
        
            ],
            audioHintCount: 0
        }
    },
    // ??? SLIDE 115: OT?ZKA TYP 7 ?????????????????????????????????????????
    {
        type: "question",
        id: 115,
        questionType: 7,
        text: "Kde se Barbora Hladíková nacházela v den vraždy Josefa Pospíšila v 17:00?",
        keywordAnswers: ["H\u0158BITOV"],
        correctAnswer: "NA VR\u0160OVICK\u00c9M H\u0158BITOV\u011a",
        hints: {
            textHints: ["Podívej se na lokalizaci mobilu.", "Mapa ti napoví, kde se v tu dobu nacházela."],
            audioHintCount: 0
        }
    },
    // ??? SLIDE 116: OT?ZKA TYP 7 ?????????????????????????????????????????
    {
        type: "question",
        id: 116,
        questionType: 7,
        text: "Co se na tom hřbitově v tu dobu konalo? Stačí jedním slovem.",
        keywordAnswers: ["PIET", "PAMÁTK", "UCTĚNÍ"],
        correctAnswer: "Pieta na počest Anny Zlámalové.",
        hints: {
            textHints: ["O tom, co se ten den a čas mělo na hřbitově konat, jsme už někde četli, ne?", "Nebylo ve Vršovickém obzoru?","V těch novinách se psalo o pietní akci na počest Anny Zlámalové."],
            audioHintCount: 0
        }
    },
    // ??? SLIDE 117: OT?ZKA TYP 7 ?????????????????????????????????????????
    {
        type: "question",
        id: 117,
        questionType: 7,
        text: "Kam zamířila Barbora Hladíková z Vršovického hřbitova?",
        keywordAnswers: ["divadl", "představen"],
        correctAnswer: "Ano, do divadla, kde hrála v představení Nemesis.",
        hints: {
            textHints: ["Podívej se do databáze na její pohyb.", "Neměla někde být? Nečetli jsme o tom také?","Podívej se do letáku k představení Nemesis. Barbora tam hrála, ne?","Tam, kde byl lokalizován její telefon, se nachází Vršovické divadlo."],
            audioHintCount: 0
        }
    },
    // ??? SLIDE 118: OT?ZKA TYP 5 ?????????????????????????????????????????
    {
        type: "question",
        id: 118,
        questionType: 5,
        text: "Tak dobře. Na místě vraždy se pohybovala už od rána. Ale to potvrdila při výslechu, že si tam šla pro nějaký čistící prostředek, takže to ještě samo o sobě není důkaz. Lokalizace mobilu navíc není zase tak přesná a Donská je v tak těsné blízkosti Krymské, že to může zkreslovat. Zvláštní ale je, že tam byla už od pěti hodin, ještě před doručením QR kódu. A víc než dvě hodiny před začátkem její směny. Stejně tak její přítomnost na pietě Anny Zlámalové je zcela jasným pojítkem mezi nimi. Prověř druhou vraždu. Byla v době druhé vraždy přítomná v okolí místa činu?",
        yesNoCorrect: "yes",
        hints: {
            textHints: ["Lokalizuj Barboru Hladíkovou v době druhé vraždy."],
            audioHintCount: 0
        }
    },
    // ??? SLIDE 119: OT?ZKA TYP 7 ?????????????????????????????????????????
    {
        type: "question",
        id: 119,
        questionType: 7,
        text: "Tohle už za důkaz brát můžeme, protože tvrdila, že když dorazila na místo, byl už Lukáš Havel po smrti, tedy že na místo dorazila nejdříve v 11 hodin. Tohle ale svědčí o opaku. Vršovická mezi Edenem a Kubánským náměstím navíc nepatří do její uklízecí trasy, takže nám v tomhle musela rozhodně lhát. V kolik byla s jistotou v místě bydliště Lukáše Havla?",
        keywordAnswers: ["7", "SEDM"],
        correctAnswer: "V 7:00 HOD.",
        hints: {
            textHints: [
                "Zjisti adresu, kde se stala druhá vražda.",
                "Podívej se, kdy se signál mobilu Barbory Hladíkové přestal pohybovat a byl lokalizován na onom inkriminovaném místě."
            ],
            audioHintCount: 0
        }
    },
    // ??? SLIDE 120: OT?ZKA TYP 5 ?????????????????????????????????????????
    {
        type: "question",
        id: 120,
        questionType: 5,
        text: "Skutečně volal Lukáš Havel Barboře Hladíkové v den jeho vraždy?",
        yesNoCorrect: "yes",
        hints: {
            textHints: ["Zkontroluj výpis hovorů Lukáše Havla.","Číslo Barbory Hladíkové už přece známe."],
            audioHintCount: 0
        }
    },
    // ??? SLIDE 121: OT?ZKA TYP 3 ?????????????????????????????????????????
    {
        type: "question",
        id: 121,
        questionType: 3,
        text: "Tak Havel jí sice volal, to ale nevysvětluje, proč tam byla už v 7 hodin? Tedy minimálně čtyři hodiny před vraždou a ještě před doručením QR kódu? To nemůže být náhoda. Je potřeba Hladíkovou najít. Zjisti, kde se nachází nyní. To bude úplně poslední záznam v lokalizaci mobilu. Jaká je to adresa? Stačí mi ulice.",
        acceptedAnswers: ["SPORTOVNÍ", "Sportovní", "sportovní"],
        hints: {
            textHints: ["V lokalizační databází svítí zelené tlačítko s aktuálními daty a aktuální polohou", "Podívej se do mapy, o jakou ulici se jedná.","Vypadá to na Sportovní, nemám pravdu?"],
            audioHintCount: 0
        }
    },
    // ??? SLIDE 122: OT?ZKA TYP 7 ?????????????????????????????????????????
    {
        type: "question",
        id: 122,
        questionType: 7,
        text: "Kdo bydlí na této adrese či v její bezprostřední blízkosti?",
        keywordAnswers: ["PROCH\u00c1ZK"],
        correctAnswer: "ANE\u017dKA PROCH\u00c1ZKOV\u00c1",
        hints: {
            textHints: [
                "Detektive, myslím, že jsme na tuto adresu už narazili.",
                "Podle mě to bylo, když jsme prověřovali telefonní hovory.",
                "Na číslo, které je registrované na tuto adresu, volal i Aleš Zlámal z bytu Marie Tůmové.",
                "Je to adresa Anežky Procházkové."
            ],
            audioHintCount: 0
        }
    },
    // ??? SLIDE 123: INTERLUDE ?????????????????????????????????????????
    {
        type: "interlude",
        id: 123,
        audioUrl: "assets/audio2/mezi/mezi64.mp3",
        text: "Detektive, je to v háji. Podívej se, co mi právě přišlo za upozornění. K otevření SMS došlo v 17:06 v mobilním telefonu Anežky Procházkové. K načtení QR kódu ze stejného mobilního telefonu došlo v 17:55. Takže Anežka Procházková i přes naše rady ten QR kód otevřela. Tohle je boj s časem. Hladíková už je určitě na místě. Dej pokyn a vyrážíme.",
        noticeText: "1) K otevření emailu došlo v 17:06 v mobilním telefonu Anežky Procházkové.\n\n2) K načtení QR kódu ze stejného mobilního telefonu došlo v 17:55.",
        buttonText: "DÁT POKYN!",
        hints: {
            textHints: [],
            audioHintCount: 0
        }
    },
    // ??? SLIDE 124: CONCLUSION ?????????????????????????????????????????
    {
        type: "conclusion",
        id: 124,
        videoId: "LmaG4d0O9Gg",
        audioUrl: "assets/audio2/uvody/zaver6.mp3",
        songAudioUrl: "assets/audio2/zivotmuj.mp3",
        songButtonText: "Poslechnout - Josef Pospíšil: Život můj"
    }
];

window.TOTAL_SLIDES = window.GAME_SLIDES.length;
