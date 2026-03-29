const bes1HomeworkQuestions = [
    {
        id: 'q1',
        number: '1',
        type: 'choice',
        prompt: {
            ku: "T\u00eepa '\u015f' ya \u00cebran\u00ee (\u05e9) di du awayan de t\u00ea xwendin. K\u00eejan in?",
            en: "The Hebrew letter '\u015f' (\u05e9) is read in two ways. Which are they?"
        },
        options: [
            { ku: "sh \u00fb s", en: "sh and s", correct: true },
            { ku: "z \u00fb j", en: "z and j", correct: false },
            { ku: "t \u00fb d", en: "t and d", correct: false },
            { ku: "x \u00fb h", en: "x and h", correct: false }
        ]
    },
    {
        id: 'q3',
        number: '2',
        type: 'group',
        prompt: {
            ku: "Peyv\u00ean j\u00ear\u00een bi dengd\u00ear (nikud) bixw\u00eenin. Ji bo her peyvek\u00ea vebijarka rast hilbij\u00earin.",
            en: "Read the following words with vowels (nikud). Choose the correct option for each word."
        },
        items: [
            {
                id: 'q3a',
                number: '2a',
                type: 'choice',
                prompt: { ku: "\u05e9\u05b8\u05c1\u05dc\u05d5\u05b9\u05dd", en: "\u05e9\u05b8\u05c1\u05dc\u05d5\u05b9\u05dd" },
                promptIsHebrew: true,
                options: [
                    { ku: "shalom", en: "shalom", correct: true },
                    { ku: "shalem", en: "shalem", correct: false },
                    { ku: "shalum", en: "shalum", correct: false },
                    { ku: "sholam", en: "sholam", correct: false }
                ]
            },
            {
                id: 'q3b',
                number: '2b',
                type: 'choice',
                prompt: { ku: "\u05d9\u05d5\u05b9\u05dd", en: "\u05d9\u05d5\u05b9\u05dd" },
                promptIsHebrew: true,
                options: [
                    { ku: "yam", en: "yam", correct: false },
                    { ku: "yom", en: "yom", correct: true },
                    { ku: "yum", en: "yum", correct: false },
                    { ku: "yem", en: "yem", correct: false }
                ]
            },
            {
                id: 'q3c',
                number: '2c',
                type: 'choice',
                prompt: { ku: "\u05de\u05b7\u05d9\u05b4\u05dd", en: "\u05de\u05b7\u05d9\u05b4\u05dd" },
                promptIsHebrew: true,
                options: [
                    { ku: "mayim", en: "mayim", correct: true },
                    { ku: "meyim", en: "meyim", correct: false },
                    { ku: "moyim", en: "moyim", correct: false },
                    { ku: "mayam", en: "mayam", correct: false }
                ]
            },
            {
                id: 'q3d',
                number: '2d',
                type: 'choice',
                prompt: { ku: "\u05d1\u05b7\u05bc\u05d9\u05b4\u05ea", en: "\u05d1\u05b7\u05bc\u05d9\u05b4\u05ea" },
                promptIsHebrew: true,
                options: [
                    { ku: "bayit", en: "bayit", correct: true },
                    { ku: "beit", en: "beit", correct: false },
                    { ku: "boyit", en: "boyit", correct: false },
                    { ku: "beyat", en: "beyat", correct: false }
                ]
            }
        ]
    },
    {
        id: 'q4',
        number: '3',
        type: 'choice',
        prompt: {
            ku: "Alfabeya \u00cebran\u00ee ji k\u00eejan aliy\u00ee ber bi k\u00eejan aliy\u00ee t\u00ea xwendin?",
            en: "From which direction is the Hebrew alphabet read?"
        },
        options: [
            { ku: "Ji \u00e7ep\u00ea ber bi rast\u00ea", en: "From left to right", correct: false },
            { ku: "Ji rast\u00ea ber bi \u00e7ep\u00ea", en: "From right to left", correct: true },
            { ku: "Ji jor ber bi j\u00ear", en: "From top to bottom", correct: false },
            { ku: "Ji j\u00ear ber bi jor", en: "From bottom to top", correct: false }
        ]
    },
    {
        id: 'q5',
        number: '4',
        type: 'choice',
        prompt: {
            ku: "\u00c7end t\u00eep\u00ean alfabeya \u00cebran\u00ee hene?",
            en: "How many letters are in the Hebrew alphabet?"
        },
        options: [
            { ku: "\u05e2\u05e9\u05e8\u05d9\u05dd \u05d5\u05e9\u05ea\u05d9\u05d9\u05dd / b\u00eest \u00fb du", en: "\u05e2\u05e9\u05e8\u05d9\u05dd \u05d5\u05e9\u05ea\u05d9\u05d9\u05dd / twenty-two", correct: true },
            { ku: "\u05e2\u05e9\u05e8\u05d9\u05dd / b\u00eest", en: "\u05e2\u05e9\u05e8\u05d9\u05dd / twenty", correct: false },
            { ku: "\u05e2\u05e9\u05e8\u05d9\u05dd \u05d5\u05d0\u05e8\u05d1\u05e2 / b\u00eest \u00fb \u00e7ar", en: "\u05e2\u05e9\u05e8\u05d9\u05dd \u05d5\u05d0\u05e8\u05d1\u05e2 / twenty-four", correct: false },
            { ku: "\u05e9\u05dc\u05d5\u05e9\u05d9\u05dd / s\u00eeh", en: "\u05e9\u05dc\u05d5\u05e9\u05d9\u05dd / thirty", correct: false }
        ]
    }
];

const bes1HomeworkUiText = {
    ku: {
        progressLabel: "P\u00ea\u015fketin",
        answeredLabel: "bersiv\u00ean rast",
        reset: "D\u00eesa bike",
        check: "Kontrol bike",
        placeholderFallback: "Bersiv\u00ea biniv\u00eese",
        correct: "Rast e.",
        wrong: "\u00c7ewt e.",
        correctAnswer: "Bersiva rast",
        textHint: "Tu dikar\u00ee bi peyvek an hevokek kurt bersiv bid\u00ee.",
        finished: "Te hem\u00fb bersiv\u00ean rast d\u00eet."
    },
    en: {
        progressLabel: "Progress",
        answeredLabel: "correct answers",
        reset: "Reset",
        check: "Check",
        placeholderFallback: "Type your answer",
        correct: "Correct.",
        wrong: "Not quite.",
        correctAnswer: "Correct answer",
        textHint: "You can answer with a word or a short sentence.",
        finished: "You got all the answers right."
    }
};

const bes1HomeworkState = {};

function getBes1HomeworkLang() {
    return typeof currentLang !== 'undefined' && currentLang === 'en' ? 'en' : 'ku';
}

function getBes1HomeworkStrings() {
    return bes1HomeworkUiText[getBes1HomeworkLang()];
}

function getBes1HomeworkLeafQuestions() {
    return bes1HomeworkQuestions.flatMap(question => question.type === 'group' ? question.items : [question]);
}

function getBes1HomeworkQuestionById(questionId) {
    for (const question of bes1HomeworkQuestions) {
        if (question.id === questionId) return question;
        if (question.type === 'group') {
            const child = question.items.find(item => item.id === questionId);
            if (child) return child;
        }
    }
    return null;
}

function ensureBes1HomeworkState() {
    getBes1HomeworkLeafQuestions().forEach(question => {
        if (!bes1HomeworkState[question.id]) {
            bes1HomeworkState[question.id] = { selected: null, checked: false, value: '' };
        }
    });
}

function escapeBes1HomeworkHtml(text) {
    return String(text)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function normalizeBes1HomeworkAnswer(value) {
    return String(value || '')
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^\p{L}\p{N}\s]/gu, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

function isBes1HomeworkChoiceCorrect(questionId) {
    const question = getBes1HomeworkQuestionById(questionId);
    const state = bes1HomeworkState[questionId];
    if (!question || !state || !state.checked) return false;
    return question.options[state.selected]?.correct === true;
}

function isBes1HomeworkTextCorrect(questionId) {
    const question = getBes1HomeworkQuestionById(questionId);
    const state = bes1HomeworkState[questionId];
    if (!question || !state || !state.checked) return false;
    const normalized = normalizeBes1HomeworkAnswer(state.value);
    return question.acceptableAnswers.some(answer => normalizeBes1HomeworkAnswer(answer) === normalized);
}

function getBes1HomeworkCorrectCount() {
    return getBes1HomeworkLeafQuestions().filter(question => {
        if (question.type === 'choice') return isBes1HomeworkChoiceCorrect(question.id);
        if (question.type === 'text') return isBes1HomeworkTextCorrect(question.id);
        return false;
    }).length;
}

function getBes1HomeworkTotalCount() {
    return getBes1HomeworkLeafQuestions().length;
}

function renderBes1Homework(summaryId = 'b1-hw-summary', listId = 'b1-hw-list') {
    ensureBes1HomeworkState();

    const summary = document.getElementById(summaryId);
    const list = document.getElementById(listId);
    if (!summary || !list) return;

    const strings = getBes1HomeworkStrings();
    const correct = getBes1HomeworkCorrectCount();
    const total = getBes1HomeworkTotalCount();

    summary.innerHTML = `
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white/80 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700 p-4">
            <div>
                <div class="text-sm uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">${escapeBes1HomeworkHtml(strings.progressLabel)}</div>
                <div class="text-xl font-bold text-slate-800 dark:text-slate-100">${correct} / ${total} ${escapeBes1HomeworkHtml(strings.answeredLabel)}</div>
                <div class="text-sm text-slate-500 dark:text-slate-400">${correct === total ? escapeBes1HomeworkHtml(strings.finished) : ''}</div>
            </div>
            <button type="button" onclick="resetBes1Homework()" class="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-slate-100 font-semibold transition">
                ${escapeBes1HomeworkHtml(strings.reset)}
            </button>
        </div>
    `;

    list.innerHTML = bes1HomeworkQuestions.map(question => renderBes1HomeworkQuestion(question)).join('');
}

function renderBes1HomeworkQuestion(question) {
    const lang = getBes1HomeworkLang();
    const prompt = question.prompt[lang];

    if (question.type === 'group') {
        return `
            <li class="pl-0">
                <section class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-5 sm:p-6 shadow-sm space-y-4">
                    <div class="flex items-start gap-3">
                        <span class="inline-flex items-center justify-center w-9 h-9 rounded-full bg-blue-600 text-white font-bold shrink-0">${question.number}</span>
                        <div class="pt-1 text-slate-800 dark:text-slate-100 font-semibold">${escapeBes1HomeworkHtml(prompt)}</div>
                    </div>
                    <div class="space-y-4">
                        ${question.items.map(item => renderBes1HomeworkLeaf(item, true)).join('')}
                    </div>
                </section>
            </li>
        `;
    }

    return `
        <li class="pl-0">
            ${renderBes1HomeworkLeaf(question, false)}
        </li>
    `;
}

function renderBes1HomeworkLeaf(question, isNested) {
    if (question.type === 'text') return renderBes1HomeworkTextQuestion(question, isNested);
    return renderBes1HomeworkChoiceQuestion(question, isNested);
}

function renderBes1HomeworkChoiceQuestion(question, isNested) {
    const lang = getBes1HomeworkLang();
    const state = bes1HomeworkState[question.id] || { selected: null, checked: false };
    const selectedIndex = state.selected;
    const correctIndex = question.options.findIndex(option => option.correct);
    const isCorrect = state.checked && selectedIndex === correctIndex;
    const isHebrewPrompt = question.promptIsHebrew === true;
    const strings = getBes1HomeworkStrings();
    const feedback = state.checked
        ? (isCorrect
            ? `<p class="text-green-600 dark:text-green-400 font-semibold">${escapeBes1HomeworkHtml(strings.correct)}</p>`
            : `<p class="text-red-600 dark:text-red-400 font-semibold">${escapeBes1HomeworkHtml(strings.wrong)} ${escapeBes1HomeworkHtml(strings.correctAnswer)}: ${escapeBes1HomeworkHtml(question.options[correctIndex][lang])}</p>`)
        : '';

    return `
        <section class="${isNested ? 'bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-700' : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm'} rounded-2xl p-5 space-y-4">
            <div class="flex items-start gap-3">
                <span class="inline-flex items-center justify-center min-w-10 h-10 px-3 rounded-full ${isNested ? 'bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-100' : 'bg-blue-600 text-white'} font-bold shrink-0">${escapeBes1HomeworkHtml(question.number)}</span>
                <div class="pt-1 text-slate-800 dark:text-slate-100 font-semibold ${isHebrewPrompt ? 'text-2xl' : ''}" ${isHebrewPrompt ? 'dir="rtl"' : ''}>${escapeBes1HomeworkHtml(question.prompt[lang])}</div>
            </div>
            <div class="grid gap-3">
                ${question.options.map((option, index) => renderBes1HomeworkOption(question.id, option[lang], index, state.checked, selectedIndex, correctIndex)).join('')}
            </div>
            <div class="min-h-[1.5rem]">${feedback}</div>
        </section>
    `;
}

function renderBes1HomeworkOption(questionId, optionText, optionIndex, isChecked, selectedIndex, correctIndex) {
    let classes = 'border-slate-200 dark:border-slate-700 hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-slate-700';

    if (isChecked && optionIndex === correctIndex) {
        classes = 'border-green-500 bg-green-50 text-green-900 dark:bg-green-900/20 dark:border-green-500 dark:text-green-100';
    } else if (isChecked && optionIndex === selectedIndex && selectedIndex !== correctIndex) {
        classes = 'border-red-500 bg-red-50 text-red-900 dark:bg-red-900/20 dark:border-red-500 dark:text-red-100';
    } else if (optionIndex === selectedIndex) {
        classes = 'border-blue-500 bg-blue-50 text-blue-900 dark:bg-blue-900/20 dark:border-blue-500 dark:text-blue-100';
    }

    return `
        <button
            type="button"
            onclick="answerBes1HomeworkChoice('${questionId}', ${optionIndex})"
            class="w-full text-left rounded-xl border px-4 py-3 transition ${classes}"
        >
            <span class="font-semibold mr-2">${String.fromCharCode(65 + optionIndex)}.</span>${escapeBes1HomeworkHtml(optionText)}
        </button>
    `;
}

function renderBes1HomeworkTextQuestion(question, isNested) {
    const lang = getBes1HomeworkLang();
    const strings = getBes1HomeworkStrings();
    const state = bes1HomeworkState[question.id] || { value: '', checked: false };
    const value = state.value || '';
    const isCorrect = isBes1HomeworkTextCorrect(question.id);
    const feedback = state.checked
        ? (isCorrect
            ? `<p class="text-green-600 dark:text-green-400 font-semibold">${escapeBes1HomeworkHtml(strings.correct)} ${escapeBes1HomeworkHtml(question.solution[lang])}</p>`
            : `<p class="text-red-600 dark:text-red-400 font-semibold">${escapeBes1HomeworkHtml(strings.wrong)} ${escapeBes1HomeworkHtml(strings.correctAnswer)}: ${escapeBes1HomeworkHtml(question.solution[lang])}</p>`)
        : `<p class="text-slate-500 dark:text-slate-400">${escapeBes1HomeworkHtml(strings.textHint)}</p>`;

    return `
        <section class="${isNested ? 'bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-700' : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm'} rounded-2xl p-5 space-y-4">
            <div class="flex items-start gap-3">
                <span class="inline-flex items-center justify-center min-w-10 h-10 px-3 rounded-full ${isNested ? 'bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-100' : 'bg-blue-600 text-white'} font-bold shrink-0">${escapeBes1HomeworkHtml(question.number)}</span>
                <div class="pt-1 text-slate-800 dark:text-slate-100 font-semibold">${escapeBes1HomeworkHtml(question.prompt[lang])}</div>
            </div>
            <div class="flex flex-col sm:flex-row gap-3">
                <input
                    type="text"
                    value="${escapeBes1HomeworkHtml(value)}"
                    oninput="updateBes1HomeworkTextValue('${question.id}', this.value)"
                    onkeydown="if (event.key === 'Enter') { event.preventDefault(); checkBes1HomeworkText('${question.id}'); }"
                    placeholder="${escapeBes1HomeworkHtml(question.placeholder?.[lang] || strings.placeholderFallback)}"
                    class="flex-1 rounded-xl border ${state.checked ? (isCorrect ? 'border-green-500' : 'border-red-500') : 'border-slate-300 dark:border-slate-600'} bg-white dark:bg-slate-900 px-4 py-3 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="button"
                    onclick="checkBes1HomeworkText('${question.id}')"
                    class="inline-flex items-center justify-center rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 transition"
                >
                    ${escapeBes1HomeworkHtml(strings.check)}
                </button>
            </div>
            <div class="min-h-[1.5rem]">${feedback}</div>
        </section>
    `;
}

function answerBes1HomeworkChoice(questionId, optionIndex) {
    ensureBes1HomeworkState();
    bes1HomeworkState[questionId].selected = optionIndex;
    bes1HomeworkState[questionId].checked = true;
    renderBes1Homework();
}

function updateBes1HomeworkTextValue(questionId, value) {
    ensureBes1HomeworkState();
    bes1HomeworkState[questionId].value = value;
}

function checkBes1HomeworkText(questionId) {
    ensureBes1HomeworkState();
    bes1HomeworkState[questionId].checked = true;
    renderBes1Homework();
}

function resetBes1Homework() {
    Object.keys(bes1HomeworkState).forEach(questionId => {
        bes1HomeworkState[questionId] = { selected: null, checked: false, value: '' };
    });
    renderBes1Homework();
}
