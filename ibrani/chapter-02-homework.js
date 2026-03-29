const bes2HomeworkQuestions = [
    {
        id: 'b2q1',
        number: '1',
        prompt: {
            ku: 'Navê min Arya ye.',
            en: 'My name is Arya.'
        },
        solutionDisplay: 'שְׁמִי אַרְיֵה.',
        acceptableAnswers: ['שמי אריה', 'שמי אריה.', 'שְׁמִי אַרְיֵה', 'שְׁמִי אַרְיֵה.']
    },
    {
        id: 'b2q2',
        number: '2',
        prompt: {
            ku: 'Tu çawa yî?',
            en: 'How are you?'
        },
        solutionDisplay: 'מַה שְּׁלוֹמְךָ? / מַה שְּׁלוֹמֵךְ?',
        acceptableAnswers: ['מה שלומך', 'מה שלומך?', 'מַה שְּׁלוֹמְךָ', 'מַה שְּׁלוֹמְךָ?', 'מַה שְּׁלוֹמֵךְ', 'מַה שְּׁלוֹמֵךְ?']
    },
    {
        id: 'b2q3',
        number: '3',
        prompt: {
            ku: 'Ez baş im.',
            en: 'I am fine.'
        },
        solutionDisplay: 'אֲנִי בְּסֵדֶר.',
        acceptableAnswers: ['אני בסדר', 'אני בסדר.', 'אֲנִי בְּסֵדֶר', 'אֲנִי בְּסֵדֶר.', 'אני בסדר תודה', 'אֲנִי בְּסֵדֶר תּוֹדָה']
    },
    {
        id: 'b2q4',
        number: '4',
        prompt: {
            ku: 'Spas ji bo alîkariyê.',
            en: 'Thank you for the help.'
        },
        solutionDisplay: 'תּוֹדָה / תּוֹדָה עַל הָעֶזְרָה',
        acceptableAnswers: ['תודה', 'תּוֹדָה', 'תודה על העזרה', 'תּוֹדָה עַל הָעֶזְרָה']
    },
    {
        id: 'b2q5',
        number: '5',
        prompt: {
            ku: 'Tu ji ku yî?',
            en: 'Where are you from?'
        },
        solutionDisplay: 'מֵאֵיפֹה אַתָּה? / מֵאֵיפֹה אַתְּ? / מֵאַיִן אַתָּה? / מֵאַיִן אַתְּ?',
        acceptableAnswers: [
            'מאיפה אתה', 'מאיפה אתה?', 'מֵאֵיפֹה אַתָּה', 'מֵאֵיפֹה אַתָּה?',
            'מאיפה את', 'מאיפה את?', 'מֵאֵיפֹה אַתְּ', 'מֵאֵיפֹה אַתְּ?',
            'מאין אתה', 'מאין אתה?', 'מֵאַיִן אַתָּה', 'מֵאַיִן אַתָּה?',
            'מאין את', 'מאין את?', 'מֵאַיִן אַתְּ', 'מֵאַיִן אַתְּ?'
        ]
    },
    {
        id: 'b2q6',
        number: '6',
        prompt: {
            ku: 'Bi xêr hatî!',
            en: 'Welcome!'
        },
        solutionDisplay: 'בָּרוּךְ הַבָּא / בְּרוּכָה הַבָּאָה',
        acceptableAnswers: ['ברוך הבא', 'בָּרוּךְ הַבָּא', 'ברוכה הבאה', 'בְּרוּכָה הַבָּאָה']
    },
    {
        id: 'b2q7',
        number: '7',
        prompt: {
            ku: 'Heval baş e.',
            en: 'The friend is good.'
        },
        solutionDisplay: 'חָבֵר טוֹב / חֲבֵרָה טוֹבָה',
        acceptableAnswers: ['חבר טוב', 'חָבֵר טוֹב', 'חברה טובה', 'חֲבֵרָה טוֹבָה']
    },
    {
        id: 'b2q8',
        number: '8',
        prompt: {
            ku: 'Sibehxêr!',
            en: 'Good morning!'
        },
        solutionDisplay: 'בֹּקֶר טוֹב!',
        acceptableAnswers: ['בוקר טוב', 'בוקר טוב!', 'בֹּקֶר טוֹב', 'בֹּקֶר טוֹב!']
    },
    {
        id: 'b2q9',
        number: '9',
        prompt: {
            ku: 'Êvarxêr!',
            en: 'Good evening!'
        },
        solutionDisplay: 'עֶרֶב נָעִים / עֶרֶב טוֹב',
        acceptableAnswers: ['ערב נעים', 'עֶרֶב נָעִים', 'ערב טוב', 'עֶרֶב טוֹב']
    },
    {
        id: 'b2q10',
        number: '10',
        prompt: {
            ku: 'Xwedahafiz, heval.',
            en: 'Goodbye, friend.'
        },
        solutionDisplay: 'לְהִתְרָאוֹת, חָבֵר. / לְהִתְרָאוֹת, חֲבֵרָה.',
        acceptableAnswers: ['להתראות חבר', 'להתראות, חבר', 'לְהִתְרָאוֹת חָבֵר', 'לְהִתְרָאוֹת, חָבֵר', 'להתראות חברה', 'להתראות, חברה', 'לְהִתְרָאוֹת חֲבֵרָה', 'לְהִתְרָאוֹת, חֲבֵרָה']
    }
];

const bes2HomeworkUiText = {
    ku: {
        progressLabel: 'Pêşketin',
        answeredLabel: 'bersivên rast',
        reset: 'Dîsa bike',
        check: 'Kontrol bike',
        placeholder: 'Bersiva xwe bi Îbranî binivîse',
        correct: 'Rast e.',
        wrong: 'Çewt e.',
        correctAnswer: 'Bersiva rast',
        finished: 'Te hemû bersivên rast dît.',
        space: 'Valahî',
        backspace: 'Jê bibe',
        clear: 'Paqij bike'
    },
    en: {
        progressLabel: 'Progress',
        answeredLabel: 'correct answers',
        reset: 'Reset',
        check: 'Check',
        placeholder: 'Type your answer in Hebrew',
        correct: 'Correct.',
        wrong: 'Not quite.',
        correctAnswer: 'Correct answer',
        finished: 'You got all the answers right.',
        space: 'Space',
        backspace: 'Backspace',
        clear: 'Clear'
    }
};

const bes2HomeworkKeyboardRows = [
    ['/', "'", 'ק', 'ר', 'א', 'ט', 'ו', 'ן', 'ם', 'פ'],
    ['ש', 'ד', 'ג', 'כ', 'ע', 'י', 'ח', 'ל', 'ך', 'ף'],
    ['ז', 'ס', 'ב', 'ה', 'נ', 'מ', 'צ', 'ת', 'ץ']
];

const bes2HomeworkState = {};
let activeBes2HomeworkInputId = null;

function getBes2HomeworkLang() {
    return typeof currentLang !== 'undefined' && currentLang === 'en' ? 'en' : 'ku';
}

function getBes2HomeworkStrings() {
    return bes2HomeworkUiText[getBes2HomeworkLang()];
}

function ensureBes2HomeworkState() {
    bes2HomeworkQuestions.forEach(question => {
        if (!bes2HomeworkState[question.id]) {
            bes2HomeworkState[question.id] = { value: '', checked: false };
        }
    });
}

function escapeBes2HomeworkHtml(text) {
    return String(text)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function escapeBes2HomeworkJsSingleQuoted(text) {
    return String(text)
        .replace(/\\/g, '\\\\')
        .replace(/'/g, "\\'");
}

function normalizeBes2HomeworkAnswer(value) {
    return String(value || '')
        .normalize('NFD')
        .replace(/[\u0591-\u05C7\u0300-\u036f]/g, '')
        .replace(/[^\p{L}\p{N}\s]/gu, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

function isBes2HomeworkCorrect(questionId) {
    const question = bes2HomeworkQuestions.find(item => item.id === questionId);
    const state = bes2HomeworkState[questionId];
    if (!question || !state || !state.checked) return false;
    const normalized = normalizeBes2HomeworkAnswer(state.value);
    return question.acceptableAnswers.some(answer => normalizeBes2HomeworkAnswer(answer) === normalized);
}

function getBes2HomeworkCorrectCount() {
    return bes2HomeworkQuestions.filter(question => isBes2HomeworkCorrect(question.id)).length;
}

function renderBes2Homework(summaryId = 'b2-hw-summary', listId = 'b2-hw-list') {
    ensureBes2HomeworkState();

    const summary = document.getElementById(summaryId);
    const list = document.getElementById(listId);
    if (!summary || !list) return;

    const strings = getBes2HomeworkStrings();
    const lang = getBes2HomeworkLang();
    const correct = getBes2HomeworkCorrectCount();
    const total = bes2HomeworkQuestions.length;

    summary.innerHTML = `
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white/80 dark:bg-slate-900/60 rounded-2xl border border-slate-200 dark:border-slate-700 p-4">
            <div>
                <div class="text-sm uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">${escapeBes2HomeworkHtml(strings.progressLabel)}</div>
                <div class="text-xl font-bold text-slate-800 dark:text-slate-100">${correct} / ${total} ${escapeBes2HomeworkHtml(strings.answeredLabel)}</div>
                <div class="text-sm text-slate-500 dark:text-slate-400">${correct === total ? escapeBes2HomeworkHtml(strings.finished) : ''}</div>
            </div>
            <button type="button" onclick="resetBes2Homework()" class="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-slate-100 font-semibold transition">
                ${escapeBes2HomeworkHtml(strings.reset)}
            </button>
        </div>
    `;

    list.innerHTML = bes2HomeworkQuestions.map(question => renderBes2HomeworkQuestion(question, lang, strings)).join('');

    if (!activeBes2HomeworkInputId && bes2HomeworkQuestions.length > 0) {
        activeBes2HomeworkInputId = bes2HomeworkQuestions[0].id;
    }
}

function renderBes2HomeworkQuestion(question, lang, strings) {
    const state = bes2HomeworkState[question.id] || { value: '', checked: false };
    const isCorrect = isBes2HomeworkCorrect(question.id);
    const feedback = state.checked
        ? (isCorrect
            ? `<p class="text-green-600 dark:text-green-400 font-semibold">${escapeBes2HomeworkHtml(strings.correct)}</p>`
            : `<p class="text-red-600 dark:text-red-400 font-semibold">${escapeBes2HomeworkHtml(strings.wrong)} ${escapeBes2HomeworkHtml(strings.correctAnswer)}: <span dir="rtl" lang="he" class="inline-block">${escapeBes2HomeworkHtml(question.solutionDisplay)}</span></p>`)
        : '';

    return `
        <li class="pl-0">
            <section class="bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-700 p-5 shadow-sm space-y-4">
                <div class="flex items-start gap-3">
                    <span class="inline-flex items-center justify-center min-w-10 h-10 px-3 rounded-full bg-blue-600 text-white font-bold shrink-0">${escapeBes2HomeworkHtml(question.number)}</span>
                    <div class="pt-1 text-slate-800 dark:text-slate-100 font-semibold">${escapeBes2HomeworkHtml(question.prompt[lang])}</div>
                </div>
                <div class="flex flex-col sm:flex-row gap-3">
                    <input
                        id="bes2-hw-input-${question.id}"
                        type="text"
                        value="${escapeBes2HomeworkHtml(state.value)}"
                        dir="rtl"
                        lang="he"
                        inputmode="text"
                        autocapitalize="off"
                        autocomplete="off"
                        autocorrect="off"
                        spellcheck="false"
                        enterkeyhint="done"
                        onfocus="setActiveBes2HomeworkInput('${question.id}')"
                        onclick="setActiveBes2HomeworkInput('${question.id}')"
                        oninput="updateBes2HomeworkValue('${question.id}', this.value)"
                        onkeydown="if (event.key === 'Enter') { event.preventDefault(); checkBes2Homework('${question.id}'); }"
                        placeholder="${escapeBes2HomeworkHtml(strings.placeholder)}"
                        class="flex-1 rounded-xl border ${state.checked ? (isCorrect ? 'border-green-500' : 'border-red-500') : 'border-slate-300 dark:border-slate-600'} bg-white dark:bg-slate-800 px-4 py-3 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="button"
                        onclick="checkBes2Homework('${question.id}')"
                        class="inline-flex items-center justify-center rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 transition"
                    >
                        ${escapeBes2HomeworkHtml(strings.check)}
                    </button>
                </div>
                ${renderBes2HomeworkKeyboard(question.id, strings)}
                <div class="min-h-[1.5rem]">${feedback}</div>
            </section>
        </li>
    `;
}

function renderBes2HomeworkKeyboard(questionId, strings) {
    return `
        <div class="space-y-2">
            ${bes2HomeworkKeyboardRows.map(row => `
                <div class="grid gap-2" style="grid-template-columns: repeat(${row.length}, minmax(0, 1fr));">
                    ${row.map(key => `
                        <button
                            type="button"
                            onclick="insertBes2HomeworkKey('${questionId}','${escapeBes2HomeworkJsSingleQuoted(key)}')"
                            class="min-h-[3rem] rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-100 text-xl font-semibold transition"
                        >
                            ${escapeBes2HomeworkHtml(key)}
                        </button>
                    `).join('')}
                </div>
            `).join('')}
            <div class="grid grid-cols-3 gap-2">
                <button type="button" onclick="backspaceBes2HomeworkKey('${questionId}')" class="min-h-[3rem] rounded-xl border border-slate-200 dark:border-slate-700 bg-amber-50 hover:bg-amber-100 dark:bg-amber-900/20 dark:hover:bg-amber-900/30 text-slate-900 dark:text-slate-100 font-semibold transition">${escapeBes2HomeworkHtml(strings.backspace)}</button>
                <button type="button" onclick="insertBes2HomeworkKey('${questionId}',' ')" class="min-h-[3rem] rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-100 font-semibold transition">${escapeBes2HomeworkHtml(strings.space)}</button>
                <button type="button" onclick="clearBes2HomeworkKey('${questionId}')" class="min-h-[3rem] rounded-xl border border-slate-200 dark:border-slate-700 bg-rose-50 hover:bg-rose-100 dark:bg-rose-900/20 dark:hover:bg-rose-900/30 text-slate-900 dark:text-slate-100 font-semibold transition">${escapeBes2HomeworkHtml(strings.clear)}</button>
            </div>
        </div>
    `;
}

function setActiveBes2HomeworkInput(questionId) {
    activeBes2HomeworkInputId = questionId;
}

function getBes2HomeworkInput(questionId) {
    const resolvedId = questionId || activeBes2HomeworkInputId || bes2HomeworkQuestions[0]?.id;
    if (!resolvedId) return null;
    activeBes2HomeworkInputId = resolvedId;
    return document.getElementById(`bes2-hw-input-${resolvedId}`);
}

function updateBes2HomeworkValue(questionId, value) {
    ensureBes2HomeworkState();
    bes2HomeworkState[questionId].value = value;
    activeBes2HomeworkInputId = questionId;
}

function insertBes2HomeworkKey(questionId, key) {
    const input = getBes2HomeworkInput(questionId);
    if (!input) return;

    const start = input.selectionStart ?? input.value.length;
    const end = input.selectionEnd ?? input.value.length;
    const nextValue = `${input.value.slice(0, start)}${key}${input.value.slice(end)}`;
    input.value = nextValue;
    input.focus();
    const caret = start + key.length;
    input.setSelectionRange(caret, caret);
    updateBes2HomeworkValue(activeBes2HomeworkInputId, nextValue);
}

function backspaceBes2HomeworkKey(questionId) {
    const input = getBes2HomeworkInput(questionId);
    if (!input) return;

    const start = input.selectionStart ?? input.value.length;
    const end = input.selectionEnd ?? input.value.length;
    if (start === end && start === 0) return;

    let nextValue = input.value;
    let caret = start;

    if (start !== end) {
        nextValue = `${input.value.slice(0, start)}${input.value.slice(end)}`;
    } else {
        nextValue = `${input.value.slice(0, start - 1)}${input.value.slice(end)}`;
        caret = start - 1;
    }

    input.value = nextValue;
    input.focus();
    input.setSelectionRange(caret, caret);
    updateBes2HomeworkValue(activeBes2HomeworkInputId, nextValue);
}

function clearBes2HomeworkKey(questionId) {
    const input = getBes2HomeworkInput(questionId);
    if (!input) return;
    input.value = '';
    input.focus();
    input.setSelectionRange(0, 0);
    updateBes2HomeworkValue(activeBes2HomeworkInputId, '');
}

function checkBes2Homework(questionId) {
    ensureBes2HomeworkState();
    bes2HomeworkState[questionId].checked = true;
    renderBes2Homework();
    const input = document.getElementById(`bes2-hw-input-${questionId}`);
    if (input) input.focus();
    activeBes2HomeworkInputId = questionId;
}

function resetBes2Homework() {
    Object.keys(bes2HomeworkState).forEach(questionId => {
        bes2HomeworkState[questionId] = { value: '', checked: false };
    });
    activeBes2HomeworkInputId = bes2HomeworkQuestions[0]?.id || null;
    renderBes2Homework();
}
