/* --- KERNBEGRIPPEN DATA --- */
const begrippen = [
    {
        title: "Pluriforme Samenleving",
        definition: "Een samenleving waarin mensen met verschillende geloven en manieren van leven vreedzaam naast elkaar leven en elkaar accepteren.",
        example: "In Nederland vieren we zowel Kerstmis, Suikerfeest (Eid al-Fitr) als Chanoeka, en is er vrijheid van meningsuiting en religie.",
        category: "samenleving",
        icon: "users"
    },
    {
        title: "Dominante Cultuur",
        definition: "De belangrijkste gewoonten, wetten en regels van de grootste groep mensen in een land, die door de meesten worden geaccepteerd.",
        example: "In Nederland zijn de Nederlandse taal, democratische grondrechten en gelijkheid tussen man en vrouw onderdelen van de dominante cultuur.",
        category: "samenleving",
        icon: "globe"
    },
    {
        title: "Subcultuur",
        definition: "Een kleinere groep mensen binnen de samenleving met eigen gewoonten (zoals muziek, kleding of geloof) die anders zijn dan de dominante cultuur, maar die zich wel aan de wetten houden.",
        example: "Gothics, hiphoppers, carnavalsvierders of specifieke religieuze gemeenschappen vormen subculturen.",
        category: "samenleving",
        icon: "smile"
    },
    {
        title: "Asiel",
        definition: "Bescherming die een land biedt aan mensen die in hun eigen land gevaar lopen en moeten vluchten.",
        example: "Een journalist die in zijn thuisland vervolgd wordt vanwege kritische artikelen, vraagt in Nederland asiel aan.",
        category: "migratie",
        icon: "shield"
    },
    {
        title: "Vluchteling",
        definition: "Iemand die zijn land moest ontvluchten door oorlog of omdat hij gevaar loopt vanwege bijvoorbeeld zijn geloof, afkomst, mening of geaardheid.",
        example: "Mensen die de burgeroorlog in Syrië zijn ontvlucht en in Nederland zijn erkend als vluchteling.",
        category: "migratie",
        icon: "home"
    },
    {
        title: "Asielzoeker",
        definition: "Iemand die officieel heeft gevraagd om in Nederland te mogen blijven en wacht op het antwoord van de overheid (de IND).",
        example: "Een persoon die tijdelijk in een asielzoekerscentrum (azc) verblijft in afwachting van de beslissing van de IND.",
        category: "migratie",
        icon: "file-search"
    },
    {
        title: "Statushouder",
        definition: "Een asielzoeker die toestemming heeft gekregen om in Nederland te blijven en een tijdelijke verblijfsvergunning heeft ontvangen.",
        example: "Een erkende vluchteling die via de gemeente een sociale huurwoning toegewezen krijgt en start met inburgeren.",
        category: "migratie",
        icon: "file-check"
    },
    {
        title: "Integratie",
        definition: "Als mensen met een migratieachtergrond zich aanpassen aan de belangrijkste regels van het nieuwe land (zoals de taal leren), maar ook delen van hun eigen cultuur behouden.",
        example: "Een migrant leert Nederlands, vindt een baan en stemt bij verkiezingen, maar blijft thuis zijn traditionele gerechten koken en geloof belijden.",
        category: "beleid",
        icon: "git-merge"
    },
    {
        title: "Assimilatie",
        definition: "Als een groep migranten zich zo volledig aanpast aan het nieuwe land dat ze hun eigen cultuur en gewoonten bijna helemaal vergeten.",
        example: "Migranten die hun moedertaal niet meer aan hun kinderen leren en alle gewoonten en feestdagen van het nieuwe land volledig overnemen.",
        category: "beleid",
        icon: "refresh-cw"
    },
    {
        title: "Segregatie",
        definition: "Als groepen mensen met verschillende achtergronden apart van elkaar leven en bijna geen contact met elkaar hebben.",
        example: "Wijken in een grote stad waar bijna uitsluitend mensen met een migratieachtergrond wonen, met eigen scholen en winkels, zonder veel contact met de rest van de stad.",
        category: "beleid",
        icon: "split"
    },
    {
        title: "Pushfactoren",
        definition: "Redenen waarom mensen uit hun eigen land weg willen gaan (wegduwen), zoals oorlog, armoede of hongersnood.",
        example: "Het ontbreken van persvrijheid en het risico op willekeurige arrestatie in een totalitaire staat.",
        category: "migratie",
        icon: "log-out"
    },
    {
        title: "Pullfactoren",
        definition: "Redenen waarom een ander land aantrekkelijk is om naartoe te gaan (aantrekken), zoals veiligheid, werk of vrijheid.",
        example: "Nederland is aantrekkelijk vanwege de goede gezondheidszorg, baankansen en rechtsstaatbescherming.",
        category: "migratie",
        icon: "log-in"
    }
];

/* --- ASIELPROCEDURE DATA --- */
const procedureSteps = [
    {
        step: 1,
        title: "Aanmelding & Registratie",
        orgs: ["IND", "Vreemdelingenpolitie (AVIM)", "COA"],
        description: "De asielzoeker komt aan in Nederland en meldt zich bij het centrale aanmeldcentrum in Ter Apel (of op Schiphol bij aankomst per vliegtuig). Hier start de officiële registratie.",
        extra: [
            "De IND registreert de identiteit, maakt foto's en neemt vingerafdrukken af voor de Europese database (Eurodac).",
            "De Vreemdelingenpolitie controleert reisdocumenten, tickets en bagage op echtheid en identiteitsbewijzen.",
            "Het COA vangt de asielzoeker direct op en biedt onderdak, voedsel en eerste medische hulp in Ter Apel."
        ]
    },
    {
        step: 2,
        title: "Rust- & Voorbereidingstijd",
        orgs: ["COA", "VluchtelingenWerk Nederland", "Gezondheidszorg Asielzoekers (GZA)"],
        description: "Na de registratie verhuist de asielzoeker naar een reguliere opvanglocatie (azc). De asielzoeker krijgt minimaal 6 dagen de tijd om uit te rusten en zich voor te bereiden op de procedure.",
        extra: [
            "Er vindt een verplicht medisch onderzoek plaats om te kijken of de asielzoeker fysiek en mentaal in staat is om de IND-gesprekken te voeren.",
            "VluchtelingenWerk Nederland geeft onafhankelijke voorlichting over de asielprocedure en rechten.",
            "Een toegewezen advocaat bereidt de asielzoeker voor op de gehoren (gesprekken) met de IND."
        ]
    },
    {
        step: 3,
        title: "De IND Gehoren (Gesprekken)",
        orgs: ["IND", "Onafhankelijke Tolk", "Advocaat"],
        description: "De IND voert twee belangrijke gesprekken (gehoren) met de asielzoeker. Dit is de kern van de asielprocedure waarin de asielzoeker zijn verhaal doet.",
        extra: [
            "<strong>Eerste gehoor:</strong> Vragen over identiteit, herkomst, de reisroute en reisdocumenten.",
            "<strong>Nader gehoor:</strong> Het belangrijkste gesprek waarin de asielzoeker gedetailleerd vertelt waarom hij is gevlucht en waarom terugkeer gevaarlijk is.",
            "Een onafhankelijke, beëdigde tolk vertaalt het gesprek. De advocaat kijkt mee en vult het verslag aan waar nodig."
        ]
    },
    {
        step: 4,
        title: "De Beslissing & Het Vervolg",
        orgs: ["IND", "COA", "Dienst Terugkeer & Vertrek (DT&V)"],
        description: "De IND beoordeelt of het vluchtverhaal geloofwaardig is en voldoet aan de criteria van het Vluchtelingenverdrag van Genève. Er zijn twee mogelijke uitkomsten.",
        extra: [
            "<strong>Inwilliging (Toewijzing):</strong> De asielzoeker krijgt een verblijfsvergunning voor 5 jaar (statushouder). Het COA helpt bij het zoeken van een woning in een gemeente en de inburgering start.",
            "<strong>Afwijzing:</strong> De asielzoeker mag niet blijven en moet binnen 28 dagen Nederland verlaten. De DT&V helpt bij de terugkeer. De asielzoeker kan wel in beroep gaan bij de rechter.",
            "Het inwilligingspercentage in 2025 bedroeg circa 47,7%."
        ]
    }
];

/* --- QUIZ DATA --- */
const quizQuestions = [
    {
        question: "Wat is de definitie van een pluriforme samenleving?",
        options: [
            "Een samenleving waarin slechts één dominante cultuur is toegestaan.",
            "Een samenleving waarin mensen met verschillende geloven en manieren van leven vreedzaam samenleven.",
            "Een land waarin alle bewoners dezelfde politieke voorkeur hebben.",
            "Een samenleving waarin iedereen volledig geassimileerd is."
        ],
        answer: 1,
        explanation: "In een pluriforme samenleving leven verschillende groepen naast elkaar met behoud van eigen cultuurkenmerken, in een sfeer van respect en acceptatie."
    },
    {
        question: "Wat is het verschil tussen een asielzoeker en een vluchteling?",
        options: [
            "Er is geen verschil; beide begrippen betekenen exact hetzelfde.",
            "Een asielzoeker komt om economische redenen, een vluchteling vlucht voor oorlog.",
            "Een vluchteling is al officieel erkend en heeft een vergunning; een asielzoeker wacht nog op de beslissing van de IND.",
            "Een vluchteling mag niet werken in Nederland, een asielzoeker wel."
        ],
        answer: 2,
        explanation: "Iedereen die asiel aanvraagt is een asielzoeker. Pas als de IND vaststelt dat de aanvrager gegronde vrees heeft voor vervolging of oorlog (volgens het Vluchtelingenverdrag), wordt deze officieel erkend als vluchteling."
    },
    {
        question: "Welk begrip beschrijft de situatie waarin een minderheidsgroep zich volledig aanpast aan de dominante cultuur, waardoor de eigen identiteit verdwijnt?",
        options: [
            "Integratie",
            "Segregatie",
            "Socialisatie",
            "Assimilatie"
        ],
        answer: 3,
        explanation: "Bij assimilatie past een minderheidsgroep zich zo volledig aan de dominante cultuur aan dat de oorspronkelijke cultuurkenmerken en identiteit (nagenoeg) verdwijnen."
    },
    {
        question: "Waar bevindt zich het centrale aanmeldcentrum in Nederland waar asielzoekers die over land komen zich moeten registreren?",
        options: [
            "Den Haag",
            "Schiphol",
            "Ter Apel",
            "Utrecht"
        ],
        answer: 2,
        explanation: "Het centrale aanmeldcentrum voor asielzoekers die over land Nederland binnenkomen ligt in Ter Apel (provincie Groningen). Komt men via de lucht of zee, dan meldt men zich op Schiphol (grensasielprocedure)."
    },
    {
        question: "Welke instantie is verantwoordelijk voor de opvang en begeleiding (zoals onderdak en leefgeld) van asielzoekers tijdens de asielprocedure?",
        options: [
            "De IND (Immigratie- en Naturalisatiedienst)",
            "Het COA (Centraal Orgaan opvang asielzoekers)",
            "VluchtelingenWerk Nederland",
            "De Vreemdelingenpolitie (AVIM)"
        ],
        answer: 1,
        explanation: "De IND beslist over de asielaanvraag, maar het COA (Centraal Orgaan opvang asielzoekers) is verantwoordelijk voor de daadwerkelijke opvang en begeleiding tijdens de procedure."
    },
    {
        question: "Hoe ontwikkelde de eerste asielinstroom zich in 2025 ten opzichte van 2024?",
        options: [
            "De eerste asielinstroom steeg licht naar ruim 40.000 aanvragen.",
            "De eerste asielinstroom bleef exact gelijk.",
            "De eerste asielinstroom daalde van 32.175 (in 2024) naar 24.073 (in 2025).",
            "Er kwamen in 2025 helemaal geen eerste asielzoekers meer naar Nederland."
        ],
        answer: 2,
        explanation: "Volgens CBS- en IND-cijfers daalde het aantal eerste asielaanvragen in 2025 aanzienlijk naar 24.073. Het aantal nareizigers (gezinshereniging) steeg daarentegen wel naar 16.496."
    },
    {
        question: "Welke twee kernwaarden botsen vaak in het maatschappelijke en politieke dilemma rondom asielmigratie?",
        options: [
            "Vrijheid van onderwijs versus vrijheid van meningsuiting.",
            "Menselijke solidariteit (hulp bieden) versus maatschappelijke draagkracht (beheersbaarheid).",
            "Milieubescherming versus economische groei.",
            "Monarchie versus republikeinse staatsvorm."
        ],
        answer: 1,
        explanation: "Het centrale dilemma gaat over de spanning tussen de humanitaire plicht om vluchtelingen in nood te beschermen en op te vangen (solidariteit) versus de capaciteit van voorzieningen zoals de woningmarkt en de zorg (draagkracht)."
    },
    {
        question: "Wat gebeurt er als een asielaanvraag definitief wordt afgewezen door de IND?",
        options: [
            "De asielzoeker krijgt automatisch een woning in een willekeurige gemeente.",
            "De asielzoeker moet binnen 28 dagen Nederland verlaten, eventueel met hulp van de DT&V.",
            "De asielzoeker wordt direct in de gevangenis gezet.",
            "De asielzoeker moet direct inburgeren."
        ],
        answer: 1,
        explanation: "Bij een afwijzing mag de persoon niet in Nederland blijven en geldt een vertrektermijn van 28 dagen. De Dienst Terugkeer & Vertrek (DT&V) kan hierbij ondersteuning bieden."
    }
];

/* --- APP STATE --- */
let activeTimelineStep = 1;
let currentQuizQuestionIndex = 0;
let quizScore = 0;
let quizAnswersChecked = false;
let statsAnimated = false;

/* --- DOM ELEMENTS --- */
const themeToggleBtn = document.getElementById("theme-toggle");
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileNav = document.getElementById("mobile-nav");
const begrippenGrid = document.getElementById("begrippen-grid");
const begrippenSearch = document.getElementById("begrippen-search");
const filterBtns = document.querySelectorAll(".filter-btn");

// Timeline DOM
const timelineSteps = document.querySelectorAll(".timeline-step");
const procTitle = document.getElementById("proc-title");
const procOrg = document.getElementById("proc-org");
const procDesc = document.getElementById("proc-desc");
const procExtra = document.getElementById("proc-extra");
const procPrevBtn = document.getElementById("proc-prev");
const procNextBtn = document.getElementById("proc-next");

// Quiz DOM
const quizIntro = document.getElementById("quiz-intro");
const quizPlay = document.getElementById("quiz-play");
const quizResults = document.getElementById("quiz-results");
const startQuizBtn = document.getElementById("start-quiz-btn");
const restartQuizBtn = document.getElementById("restart-quiz-btn");
const currentQuestionNum = document.getElementById("current-question-num");
const totalQuestionsNum = document.getElementById("total-questions-num");
const quizProgressFill = document.getElementById("quiz-progress-fill");
const quizQuestionText = document.getElementById("quiz-question-text");
const quizOptionsContainer = document.getElementById("quiz-options-container");
const quizFeedbackBox = document.getElementById("quiz-feedback-box");
const feedbackStatusText = document.getElementById("feedback-status-text");
const feedbackExplanationText = document.getElementById("feedback-explanation-text");
const feedbackCorrectIcon = document.querySelector(".feedback-correct-icon");
const feedbackIncorrectIcon = document.querySelector(".feedback-incorrect-icon");
const nextQuestionBtn = document.getElementById("next-question-btn");
const scoreDisplay = document.getElementById("score-display");
const resultTitle = document.getElementById("result-title");
const resultMessage = document.getElementById("result-message");
const resultBadge = document.getElementById("result-badge");
const badgeText = document.getElementById("badge-text");

/* --- THEME TOGGLE LOGIC --- */
function initTheme() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
        // Default to dark mode
        document.documentElement.setAttribute("data-theme", "dark");
    }
}

themeToggleBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
});

/* --- MOBILE NAV LOGIC --- */
mobileMenuBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("open");
    const icon = mobileMenuBtn.querySelector("i");
    if (mobileNav.classList.contains("open")) {
        icon.setAttribute("data-lucide", "x");
    } else {
        icon.setAttribute("data-lucide", "menu");
    }
    lucide.createIcons();
});

// Close mobile nav when link is clicked
document.querySelectorAll(".mobile-nav-link").forEach(link => {
    link.addEventListener("click", () => {
        mobileNav.classList.remove("open");
        mobileMenuBtn.querySelector("i").setAttribute("data-lucide", "menu");
        lucide.createIcons();
    });
});

/* --- KERNBEGRIPPEN ENGINE --- */
function renderBegrippen(filteredList) {
    begrippenGrid.innerHTML = "";
    if (filteredList.length === 0) {
        begrippenGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-secondary);">
                <i data-lucide="alert-circle" style="width: 48px; height: 48px; margin-bottom: 1rem; color: var(--color-orange);"></i>
                <p>Geen begrippen gevonden die voldoen aan je zoekopdracht.</p>
            </div>
        `;
        lucide.createIcons();
        return;
    }

    filteredList.forEach(item => {
        const card = document.createElement("div");
        card.className = "begrip-card glass-card";
        card.setAttribute("data-cat", item.category);
        
        let catLabel = "Samenleving";
        if (item.category === "migratie") catLabel = "Migratie & Asiel";
        if (item.category === "beleid") catLabel = "Beleid & Integratie";

        card.innerHTML = `
            <div class="begrip-header">
                <div class="begrip-icon-box">
                    <i data-lucide="${item.icon}"></i>
                </div>
                <span class="begrip-cat-tag">${catLabel}</span>
            </div>
            <h3 class="begrip-title">${item.title}</h3>
            <p class="begrip-definition">${item.definition}</p>
            <div class="begrip-example">
                <strong>Voorbeeld:</strong> ${item.example}
            </div>
        `;
        begrippenGrid.appendChild(card);
    });
    
    // Re-initialize icons for newly added cards
    lucide.createIcons();
}

function filterBegrippen() {
    const searchQuery = begrippenSearch.value.toLowerCase().trim();
    const activeTab = document.querySelector(".filter-btn.active").getAttribute("data-category");

    const filtered = begrippen.filter(item => {
        const matchesSearch = item.title.toLowerCase().includes(searchQuery) || 
                              item.definition.toLowerCase().includes(searchQuery);
        const matchesTab = activeTab === "all" || item.category === activeTab;
        
        return matchesSearch && matchesTab;
    });

    renderBegrippen(filtered);
}

// Search input handler
begrippenSearch.addEventListener("input", filterBegrippen);

// Category tabs handlers
filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        filterBegrippen();
    });
});

/* --- ASIELPROCEDURE ENGINE --- */
function updateTimelineUI(stepNum) {
    activeTimelineStep = stepNum;
    
    // Update timeline step elements class
    timelineSteps.forEach(step => {
        const stepIdx = parseInt(step.getAttribute("data-step"));
        if (stepIdx === stepNum) {
            step.classList.add("active");
        } else {
            step.classList.remove("active");
        }
    });

    // Load step data
    const stepData = procedureSteps.find(s => s.step === stepNum);
    if (stepData) {
        procTitle.textContent = stepData.title;
        
        // Load organization tags
        procOrg.innerHTML = "";
        stepData.orgs.forEach(org => {
            const tag = document.createElement("span");
            tag.className = "org-tag";
            tag.textContent = org;
            procOrg.appendChild(tag);
        });

        procDesc.innerHTML = stepData.description;

        // Load bullet points
        procExtra.innerHTML = "";
        stepData.extra.forEach(point => {
            const bullet = document.createElement("div");
            bullet.className = "detail-bullet";
            bullet.innerHTML = `
                <i data-lucide="arrow-right" class="bullet-icon"></i>
                <span>${point}</span>
            `;
            procExtra.appendChild(bullet);
        });

        // Update navigation buttons
        procPrevBtn.disabled = stepNum === 1;
        procNextBtn.disabled = stepNum === procedureSteps.length;
        
        lucide.createIcons();
    }
}

// Timeline clicks
timelineSteps.forEach(step => {
    step.addEventListener("click", () => {
        const stepNum = parseInt(step.getAttribute("data-step"));
        updateTimelineUI(stepNum);
    });
});

// Timeline Nav buttons
procPrevBtn.addEventListener("click", () => {
    if (activeTimelineStep > 1) {
        updateTimelineUI(activeTimelineStep - 1);
    }
});

procNextBtn.addEventListener("click", () => {
    if (activeTimelineStep < procedureSteps.length) {
        updateTimelineUI(activeTimelineStep + 1);
    }
});

/* --- ANIMATED COUNTERS --- */
function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const val = Math.floor(progress * (end - start) + start);
        obj.innerHTML = val.toLocaleString('nl-NL');
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

function animatePercent(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const val = (progress * (end - start) + start).toFixed(1);
        obj.innerHTML = val.replace('.', ',') + '%';
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

function triggerStatsAnimation() {
    if (statsAnimated) return;
    statsAnimated = true;

    const aanvragenEl = document.getElementById("stat-aanvragen");
    const nareizigersEl = document.getElementById("stat-nareizigers");
    const inwilligingEl = document.getElementById("stat-inwilliging");

    animateValue(aanvragenEl, 0, 24073, 1500);
    animateValue(nareizigersEl, 0, 16496, 1500);
    animatePercent(inwilligingEl, 0, 47.7, 1500);
}

// Scroll detection using Intersection Observer
const statsSection = document.getElementById("cijfers");
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            triggerStatsAnimation();
        }
    });
}, { threshold: 0.15 });

observer.observe(statsSection);

/* --- QUIZ ENGINE --- */
function showQuizState(state) {
    quizIntro.classList.add("hidden");
    quizPlay.classList.add("hidden");
    quizResults.classList.add("hidden");

    if (state === "intro") quizIntro.classList.remove("active", "hidden"), quizIntro.classList.add("active");
    if (state === "play") quizPlay.classList.remove("active", "hidden"), quizPlay.classList.add("active");
    if (state === "results") quizResults.classList.remove("active", "hidden"), quizResults.classList.add("active");
}

function startQuiz() {
    currentQuizQuestionIndex = 0;
    quizScore = 0;
    showQuizState("play");
    loadQuizQuestion();
}

function loadQuizQuestion() {
    quizAnswersChecked = false;
    quizFeedbackBox.classList.add("hidden");
    
    const qData = quizQuestions[currentQuizQuestionIndex];
    
    // Update question numbers and progress bar
    currentQuestionNum.textContent = currentQuizQuestionIndex + 1;
    totalQuestionsNum.textContent = quizQuestions.length;
    const progressPercent = ((currentQuizQuestionIndex + 1) / quizQuestions.length) * 100;
    quizProgressFill.style.width = `${progressPercent}%`;

    quizQuestionText.textContent = qData.question;
    quizOptionsContainer.innerHTML = "";

    qData.options.forEach((optionText, idx) => {
        const optionBtn = document.createElement("button");
        optionBtn.className = "quiz-option";
        optionBtn.innerHTML = `
            <span>${optionText}</span>
            <i class="option-icon"></i>
        `;
        optionBtn.addEventListener("click", () => handleAnswerSelection(idx, optionBtn));
        quizOptionsContainer.appendChild(optionBtn);
    });
}

function handleAnswerSelection(selectedIdx, clickedBtn) {
    if (quizAnswersChecked) return; // Prevent double clicking
    quizAnswersChecked = true;

    const qData = quizQuestions[currentQuizQuestionIndex];
    const correctIdx = qData.answer;
    
    const allOptions = quizOptionsContainer.querySelectorAll(".quiz-option");
    
    // Check answer correctness
    if (selectedIdx === correctIdx) {
        // Correct
        clickedBtn.classList.add("correct");
        clickedBtn.querySelector(".option-icon").setAttribute("data-lucide", "check-circle");
        quizScore++;
        
        // Feedback block setup
        feedbackStatusText.textContent = "Correct!";
        feedbackStatusText.style.color = "var(--color-green)";
        feedbackCorrectIcon.classList.remove("hidden");
        feedbackIncorrectIcon.classList.add("hidden");
    } else {
        // Incorrect
        clickedBtn.classList.add("incorrect");
        clickedBtn.querySelector(".option-icon").setAttribute("data-lucide", "x-circle");
        
        // Show correct answer too
        allOptions[correctIdx].classList.add("correct");
        allOptions[correctIdx].querySelector(".option-icon").setAttribute("data-lucide", "check-circle");

        // Feedback block setup
        feedbackStatusText.textContent = "Helaas, onjuist!";
        feedbackStatusText.style.color = "var(--color-red)";
        feedbackCorrectIcon.classList.add("hidden");
        feedbackIncorrectIcon.classList.remove("hidden");
    }

    // Disable all options
    allOptions.forEach(btn => btn.classList.add("disabled"));

    // Show explanation feedback
    feedbackExplanationText.textContent = qData.explanation;
    quizFeedbackBox.classList.remove("hidden");
    
    lucide.createIcons();
}

nextQuestionBtn.addEventListener("click", () => {
    currentQuizQuestionIndex++;
    if (currentQuizQuestionIndex < quizQuestions.length) {
        loadQuizQuestion();
    } else {
        showQuizResults();
    }
});

function showQuizResults() {
    showQuizState("results");
    scoreDisplay.textContent = `${quizScore} / ${quizQuestions.length}`;
    
    // Custom messaging & badges based on score
    if (quizScore === quizQuestions.length) {
        resultTitle.textContent = "Perfecte Score! 🎉";
        resultMessage.textContent = "Geweldig! Je hebt alle vragen correct beantwoord. Je bent helemaal klaar voor je toets maatschappijleer!";
        badgeText.textContent = "Asiel & Pluriformiteit Expert";
        resultBadge.style.backgroundColor = "var(--color-green-light)";
        resultBadge.style.color = "var(--color-green)";
    } else if (quizScore >= 5) {
        resultTitle.textContent = "Goed gedaan! 👍";
        resultMessage.textContent = "Een keurig resultaat. Je begrijpt de kern van de asielprocedure en pluriforme samenleving goed.";
        badgeText.textContent = "Maatschappijleer Talent";
        resultBadge.style.backgroundColor = "var(--color-blue-light)";
        resultBadge.style.color = "var(--color-blue)";
    } else {
        resultTitle.textContent = "Blijf oefenen! 📚";
        resultMessage.textContent = "Je hebt een paar foutjes gemaakt. Neem de begrippenlijst en de stappen van de procedure nog eens door.";
        badgeText.textContent = "Asielexpert in de Dop";
        resultBadge.style.backgroundColor = "var(--color-orange-light)";
        resultBadge.style.color = "var(--color-orange)";
    }
    
    lucide.createIcons();
}

// Start Quiz Listeners
startQuizBtn.addEventListener("click", startQuiz);
restartQuizBtn.addEventListener("click", startQuiz);

/* --- APP INITIALIZATION --- */
window.addEventListener("DOMContentLoaded", () => {
    initTheme();
    renderBegrippen(begrippen);
    updateTimelineUI(1);
    lucide.createIcons();
});
