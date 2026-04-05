const bes3HomeworkQuestions = [
    {
        id: 'b3q1',
        number: '1',
        prompt: {
            ku: 'Malbata min biçûk e.',
            en: 'My family is small.'
        },
        solutionDisplay: 'הַמִּשְׁפָּחָה שֶׁלִּי קְטַנָּה.',
        acceptableAnswers: ['המשפחה שלי קטנה', 'המשפחה שלי קטנה.', 'הַמִּשְׁפָּחָה שֶׁלִּי קְטַנָּה', 'הַמִּשְׁפָּחָה שֶׁלִּי קְטַנָּה.']
    },
    {
        id: 'b3q2',
        number: '2',
        prompt: {
            ku: 'Du birayên min hene.',
            en: 'I have two brothers.'
        },
        solutionDisplay: 'יֵשׁ לִי שְׁנֵי אַחִים.',
        acceptableAnswers: ['יש לי שני אחים', 'יש לי שני אחים.', 'יֵשׁ לִי שְׁנֵי אַחִים', 'יֵשׁ לִי שְׁנֵי אַחִים.']
    },
    {
        id: 'b3q3',
        number: '3',
        prompt: {
            ku: 'Navê dêya min Fatma ye.',
            en: 'My mother\'s name is Fatma.'
        },
        solutionDisplay: 'שֵׁם אִמָּא שֶׁלִּי פָאטְמָה.',
        acceptableAnswers: ['שם אמא שלי פאטמה', 'שם אמא שלי פאטמה.', 'שֵׁם אִמָּא שֶׁלִּי פָאטְמָה', 'שֵׁם אִמָּא שֶׁלִּי פָאטְמָה.']
    },
    {
        id: 'b3q4',
        number: '4',
        prompt: {
            ku: 'Xwişkeke min heye.',
            en: 'I have a sister.'
        },
        solutionDisplay: 'יֵשׁ לִי אָחוֹת.',
        acceptableAnswers: ['יש לי אחות', 'יש לי אחות.', 'יֵשׁ לִי אָחוֹת', 'יֵשׁ לִי אָחוֹת.']
    },
    {
        id: 'b3q5',
        number: '5',
        prompt: {
            ku: 'Bavê min li mala me ye.',
            en: 'My father is at our house.'
        },
        solutionDisplay: 'אַבָּא שֶׁלִּי בַּבַּיִת שֶׁלָּנוּ.',
        acceptableAnswers: ['אבא שלי בבית שלנו', 'אבא שלי בבית שלנו.', 'אַבָּא שֶׁלִּי בַּבַּיִת שֶׁלָּנוּ', 'אַבָּא שֶׁלִּי בַּבַּיִת שֶׁלָּנוּ.']
    },
    {
        id: 'b3q6',
        number: '6',
        prompt: {
            ku: 'Bapîrê min mezin e.',
            en: 'My grandfather is old.'
        },
        solutionDisplay: 'הַסָּבָא שֶׁלִּי גָּדוֹל.',
        acceptableAnswers: ['הסבא שלי גדול', 'הסבא שלי גדול.', 'הַסָּבָא שֶׁלִּי גָּדוֹל', 'הַסָּבָא שֶׁלִּי גָּדוֹל.']
    },
    {
        id: 'b3q7',
        number: '7',
        prompt: {
            ku: 'Kura min li dibistanê ye.',
            en: 'My son is at school.'
        },
        solutionDisplay: 'הַבֵּן שֶׁלִּי בַּבֵּית סֵפֶר.',
        acceptableAnswers: ['הבן שלי בבית ספר', 'הבן שלי בבית ספר.', 'הַבֵּן שֶׁלִּי בַּבֵּית סֵפֶר', 'הַבֵּן שֶׁלִּי בַּבֵּית סֵפֶר.']
    },
    {
        id: 'b3q8',
        number: '8',
        prompt: {
            ku: 'Mêrê wê baş e.',
            en: 'Her husband is good.'
        },
        solutionDisplay: 'הַבַּעַל שֶׁלָּהּ טוֹב.',
        acceptableAnswers: ['הבעל שלה טוב', 'הבעל שלה טוב.', 'הַבַּעַל שֶׁלָּהּ טוֹב', 'הַבַּעַל שֶׁלָּהּ טוֹב.']
    },
    {
        id: 'b3q9',
        number: '9',
        prompt: {
            ku: 'Dapîra min li Kurdistanê ye.',
            en: 'My grandmother is in Kurdistan.'
        },
        solutionDisplay: 'הַסָּבְתָא שֶׁלִּי בְּקוּרְדִיסְטָן.',
        acceptableAnswers: ['הסבתא שלי בקורדיסטן', 'הסבתא שלי בקורדיסטן.', 'הַסָּבְתָא שֶׁלִּי בְּקוּרְדִיסְטָן', 'הַסָּבְתָא שֶׁלִּי בְּקוּרְדִיסְטָן.']
    },
    {
        id: 'b3q10',
        number: '10',
        prompt: {
            ku: 'Apê min heval baş e.',
            en: 'My uncle is a good friend.'
        },
        solutionDisplay: 'הַדּוֹד שֶׁלִּי חָבֵר טוֹב.',
        acceptableAnswers: ['הדוד שלי חבר טוב', 'הדוד שלי חבר טוב.', 'הַדּוֹד שֶׁלִּי חָבֵר טוֹב', 'הַדּוֹד שֶׁלִּי חָבֵר טוֹב.']
    }
];

const bes3HomeworkUiText = {
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

const bes3HomeworkKeyboardRows = [
    ['/', "'", 'ק', 'ר', 'א', 'ט', 'ו', 'ן', 'ם', 'פ'],
    ['ש', 'ד', 'ג', 'כ', 'ע', 'י', 'ח', 'ל', 'ך', 'ף'],
    ['ז', 'ס', 'ב', 'ה', 'נ', 'מ', 'צ', 'ת', 'ץ']
];

const bes3HomeworkState = {};
let activeBes3HomeworkInputId = null;

function getBes3HomeworkLang() {
    return typeof currentLang !== 'undefined' && currentLang === 'en' ? 'en' : 'ku';
}

function getBes3HomeworkStrings() {
    return bes3HomeworkUiText[getBes3HomeworkLang()];
}

function ensureBes3HomeworkState() {
    bes3HomeworkQuestions.forEach(question => {
        if (!bes3HomeworkState[question.id]) {
            bes3HomeworkState[question.id] = { value: '', checked: false };
        }
    });
}

function escapeBes3HomeworkHtml(text) {
    return String(text)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function escapeBes3HomeworkJsSingleQuoted(text) {
    return String(text)
        .replace(/\\/g, '\\\\')
        .replace(/'/g, "\\'");
}

function normalizeBes3HomeworkAnswer(value) {
    return String(value || '')
        .normalize('NFD')
        .replace(/[\u0591-\u05C7\u0300-\u036f]/g, '')
        .replace(/[^\p{L}\p{N}\s]/gu, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

function isBes3HomeworkCorrect(questionId) {
    const question = bes3HomeworkQuestions.find(item => item.id === questionId);
    const state = bes3HomeworkState[questionId];
    if (!question || !state || !state.checked) return false;
    const normalized = normalizeBes3HomeworkAnswer(state.value);
    return question.acceptableAnswers.some(answer => normalizeBes3HomeworkAnswer(answer) === normalized);
}

function getBes3HomeworkCorrectCount() {
    return bes3HomeworkQuestions.filter(question => isBes3HomeworkCorrect(question.id)).length;
}

function renderBes3Homework(summaryId = 'b3-hw-summary', listId = 'b3-hw-list') {
    ensureBes3HomeworkState();

    const summary = document.getElementById(summaryId);
    const list = document.getElementById(listId);
    if (!summary || !list) return;

    const strings = getBes3HomeworkStrings();
    const lang = getBes3HomeworkLang();
    const correct = getBes3HomeworkCorrectCount();
    const total = bes3HomeworkQuestions.length;

    summary.innerHTML = `
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white/80 dark:bg-slate-900/60 rounded-2xl border border-slate-200 dark:border-slate-700 p-4">
            <div>
                <div class="text-sm uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">${escapeBes3HomeworkHtml(strings.progressLabel)}</div>
                <div class="text-xl font-bold text-slate-800 dark:text-slate-100">${correct} / ${total} ${escapeBes3HomeworkHtml(strings.answeredLabel)}</div>
                <div class="text-sm text-slate-500 dark:text-slate-400">${correct === total ? escapeBes3HomeworkHtml(strings.finished) : ''}</div>
            </div>
            <button type="button" onclick="resetBes3Homework()" class="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-slate-100 font-semibold transition">
                ${escapeBes3HomeworkHtml(strings.reset)}
            </button>
        </div>
    `;

    list.innerHTML = bes3HomeworkQuestions.map(question => renderBes3HomeworkQuestion(question, lang, strings)).join('');

    if (!activeBes3HomeworkInputId && bes3HomeworkQuestions.length > 0) {
        activeBes3HomeworkInputId = bes3HomeworkQuestions[0].id;
    }
}

function renderBes3HomeworkQuestion(question, lang, strings) {
    const state = bes3HomeworkState[question.id] || { value: '', checked: false };
    const isCorrect = isBes3HomeworkCorrect(question.id);
    const feedback = state.checked
        ? (isCorrect
            ? `<p class="text-green-600 dark:text-green-400 font-semibold">${escapeBes3HomeworkHtml(strings.correct)}</p>`
            : `<p class="text-red-600 dark:text-red-400 font-semibold">${escapeBes3HomeworkHtml(strings.wrong)} ${escapeBes3HomeworkHtml(strings.correctAnswer)}: <span dir="rtl" lang="he" class="inline-block">${escapeBes3HomeworkHtml(question.solutionDisplay)}</span></p>`)
        : '';

    return `
        <li class="pl-0">
            <section class="bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-700 p-5 shadow-sm space-y-4">
                <div class="flex items-start gap-3">
                    <span class="inline-flex items-center justify-center min-w-10 h-10 px-3 rounded-full bg-purple-600 text-white font-bold shrink-0">${escapeBes3HomeworkHtml(question.number)}</span>
                    <div class="pt-1 text-slate-800 dark:text-slate-100 font-semibold">${escapeBes3HomeworkHtml(question.prompt[lang])}</div>
                </div>
                <div class="flex flex-col sm:flex-row gap-3">
                    <input
                        id="bes3-hw-input-${question.id}"
                        type="text"
                        value="${escapeBes3HomeworkHtml(state.value)}"
                        dir="rtl"
                        lang="he"
                        inputmode="text"
                        autocapitalize="off"
                        autocomplete="off"
                        autocorrect="off"
                        spellcheck="false"
                        enterkeyhint="done"
                        onfocus="setActiveBes3HomeworkInput('${question.id}')"
                        onclick="setActiveBes3HomeworkInput('${question.id}')"
                        oninput="updateBes3HomeworkValue('${question.id}', this.value)"
                        onkeydown="if (event.key === 'Enter') { event.preventDefault(); checkBes3Homework('${question.id}'); }"
                        placeholder="${escapeBes3HomeworkHtml(strings.placeholder)}"
                        class="flex-1 rounded-xl border ${state.checked ? (isCorrect ? 'border-green-500' : 'border-red-500') : 'border-slate-300 dark:border-slate-600'} bg-white dark:bg-slate-800 px-4 py-3 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <button
                        type="button"
                        onclick="checkBes3Homework('${question.id}')"
                        class="inline-flex items-center justify-center rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold px-5 py-3 transition"
                    >
                        ${escapeBes3HomeworkHtml(strings.check)}
                    </button>
                </div>
                ${renderBes3HomeworkKeyboard(question.id, strings)}
                <div class="min-h-[1.5rem]">${feedback}</div>
            </section>
        </li>
    `;
}

function renderBes3HomeworkKeyboard(questionId, strings) {
    return `
        <div class="space-y-2">
            ${bes3HomeworkKeyboardRows.map(row => `
                <div class="grid gap-2" style="grid-template-columns: repeat(${row.length}, minmax(0, 1fr));">
                    ${row.map(key => `
                        <button
                            type="button"
                            onclick="insertBes3HomeworkKey('${questionId}','${escapeBes3HomeworkJsSingleQuoted(key)}')"
                            class="min-h-[3rem] rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-100 text-xl font-semibold transition"
                        >
                            ${escapeBes3HomeworkHtml(key)}
                        </button>
                    `).join('')}
                </div>
            `).join('')}
            <div class="grid grid-cols-3 gap-2">
                <button type="button" onclick="backspaceBes3HomeworkKey('${questionId}')" class="min-h-[3rem] rounded-xl border border-slate-200 dark:border-slate-700 bg-amber-50 hover:bg-amber-100 dark:bg-amber-900/20 dark:hover:bg-amber-900/30 text-slate-900 dark:text-slate-100 font-semibold transition">${escapeBes3HomeworkHtml(strings.backspace)}</button>
                <button type="button" onclick="insertBes3HomeworkKey('${questionId}',' ')" class="min-h-[3rem] rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-100 font-semibold transition">${escapeBes3HomeworkHtml(strings.space)}</button>
                <button type="button" onclick="clearBes3HomeworkKey('${questionId}')" class="min-h-[3rem] rounded-xl border border-slate-200 dark:border-slate-700 bg-rose-50 hover:bg-rose-100 dark:bg-rose-900/20 dark:hover:bg-rose-900/30 text-slate-900 dark:text-slate-100 font-semibold transition">${escapeBes3HomeworkHtml(strings.clear)}</button>
            </div>
        </div>
    `;
}

function setActiveBes3HomeworkInput(questionId) {
    activeBes3HomeworkInputId = questionId;
}

function getBes3HomeworkInput(questionId) {
    const resolvedId = questionId || activeBes3HomeworkInputId || bes3HomeworkQuestions[0]?.id;
    if (!resolvedId) return null;
    activeBes3HomeworkInputId = resolvedId;
    return document.getElementById(`bes3-hw-input-${resolvedId}`);
}

function updateBes3HomeworkValue(questionId, value) {
    ensureBes3HomeworkState();
    bes3HomeworkState[questionId].value = value;
    activeBes3HomeworkInputId = questionId;
}

function insertBes3HomeworkKey(questionId, key) {
    const input = getBes3HomeworkInput(questionId);
    if (!input) return;

    const start = input.selectionStart ?? input.value.length;
    const end = input.selectionEnd ?? input.value.length;
    const nextValue = `${input.value.slice(0, start)}${key}${input.value.slice(end)}`;
    input.value = nextValue;
    input.focus();
    const caret = start + key.length;
    input.setSelectionRange(caret, caret);
    updateBes3HomeworkValue(activeBes3HomeworkInputId, nextValue);
}

function backspaceBes3HomeworkKey(questionId) {
    const input = getBes3HomeworkInput(questionId);
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
    updateBes3HomeworkValue(activeBes3HomeworkInputId, nextValue);
}

function clearBes3HomeworkKey(questionId) {
    const input = getBes3HomeworkInput(questionId);
    if (!input) return;
    input.value = '';
    input.focus();
    input.setSelectionRange(0, 0);
    updateBes3HomeworkValue(activeBes3HomeworkInputId, '');
}

function checkBes3Homework(questionId) {
    ensureBes3HomeworkState();
    bes3HomeworkState[questionId].checked = true;
    renderBes3Homework();
    const input = document.getElementById(`bes3-hw-input-${questionId}`);
    if (input) input.focus();
    activeBes3HomeworkInputId = questionId;
}

function resetBes3Homework() {
    Object.keys(bes3HomeworkState).forEach(questionId => {
        bes3HomeworkState[questionId] = { value: '', checked: false };
    });
    activeBes3HomeworkInputId = bes3HomeworkQuestions[0]?.id || null;
    renderBes3Homework();
}
