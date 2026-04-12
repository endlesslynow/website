const bes5HomeworkQuestions = [
    {
        id: 'b5q1',
        number: '1',
        prompt: {
            ku: 'Îro Çarşem e.',
            en: 'Today is Wednesday.'
        },
        solutionDisplay: 'הַיּוֹם יוֹם רְבִיעִי.',
        acceptableAnswers: ['היום יום רביעי', 'הַיּוֹם יוֹם רְבִיעִי']
    },
    {
        id: 'b5q2',
        number: '2',
        prompt: {
            ku: 'Sibê Pêncşem e.',
            en: 'Tomorrow is Thursday.'
        },
        solutionDisplay: 'מָחָר יוֹם חֲמִישִׁי.',
        acceptableAnswers: ['מחר יום חמישי', 'מָחָר יוֹם חֲמִישִׁי']
    },
    {
        id: 'b5q3',
        number: '3',
        prompt: {
            ku: 'Di meha Gulanê de havîn dest pê dike.',
            en: 'In the month of May, summer begins.'
        },
        solutionDisplay: 'בְּחֹדֶשׁ מַאי הַקַּיִץ מַתְחִיל.',
        acceptableAnswers: ['בחודש מאי הקיץ מתחיל', 'בְּחֹדֶשׁ מַאי הַקַּיִץ מַתְחִיל']
    },
    {
        id: 'b5q4',
        number: '4',
        prompt: {
            ku: 'Duh Yekşem bû.',
            en: 'Yesterday was Sunday.'
        },
        solutionDisplay: 'אֶתְמוֹל יוֹם רִאשׁוֹן הָיָה.',
        acceptableAnswers: ['אתמול יום ראשון היה', 'אֶתְמוֹל יוֹם רִאשׁוֹן הָיָה']
    },
    {
        id: 'b5q5',
        number: '5',
        prompt: {
            ku: 'Di hefta de heft roj hene.',
            en: 'There are seven days in a week.'
        },
        solutionDisplay: 'בַּשָּׁבוּעַ יֵשׁ שִׁבְעָה יָמִים.',
        acceptableAnswers: ['בשבוע יש שבעה ימים', 'בַּשָּׁבוּעַ יֵשׁ שִׁבְעָה יָמִים']
    },
    {
        id: 'b5q6',
        number: '6',
        prompt: {
            ku: 'Ez ê di Şemiyê de bêm.',
            en: 'I will come on Saturday.'
        },
        solutionDisplay: 'אֲנִי אָבוֹא בְּיוֹם שַׁבָּת.',
        acceptableAnswers: ['אני אבוא ביום שבת', 'אֲנִי אָבוֹא בְּיוֹם שַׁבָּת']
    },
    {
        id: 'b5q7',
        number: '7',
        prompt: {
            ku: 'Cejna Pesaxê di meha Nîsanê de ye.',
            en: 'The holiday of Pesach is in the month of April.'
        },
        solutionDisplay: 'חַג פֶּסַח הוּא בַּחֹדֶשׁ אַפְּרִיל.',
        acceptableAnswers: ['חג פסח הוא בחודש אפריל', 'חַג פֶּסַח הוּא בַּחֹדֶשׁ אַפְּרִיל']
    },
    {
        id: 'b5q8',
        number: '8',
        prompt: {
            ku: 'Plan baş e.',
            en: 'The plan is good.'
        },
        solutionDisplay: 'הַתּוֹכְנִית טוֹבָה.',
        acceptableAnswers: ['התוכנית טובה', 'הַתּוֹכְנִית טוֹבָה']
    },
    {
        id: 'b5q9',
        number: '9',
        prompt: {
            ku: 'Du mehan maye.',
            en: 'Two months remain.'
        },
        solutionDisplay: 'נִשְׁאֲרוּ שְׁנֵי חֳדָשִׁים.',
        acceptableAnswers: ['נשארו שני חודשים', 'נִשְׁאֲרוּ שְׁנֵי חֳדָשִׁים']
    },
    {
        id: 'b5q10',
        number: '10',
        prompt: {
            ku: 'Sibê înê.',
            en: 'Tomorrow is Friday.'
        },
        solutionDisplay: 'מָחָר יוֹם שִׁישִּׁי.',
        acceptableAnswers: ['מחר יום שישי', 'מָחָר יוֹם שִׁישִּׁי']
    }
];

const bes5HomeworkUiText = {
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

const bes5HomeworkKeyboardRows = [
    ['/', "'", 'ק', 'ר', 'א', 'ט', 'ו', 'ן', 'ם', 'פ'],
    ['ש', 'ד', 'ג', 'כ', 'ע', 'י', 'ח', 'ל', 'ך', 'ף'],
    ['ז', 'ס', 'ב', 'ה', 'נ', 'מ', 'צ', 'ת', 'ץ']
];

const bes5HomeworkState = {};
let activeBes5HomeworkInputId = null;

function getBes5HomeworkLang() {
    return typeof currentLang !== 'undefined' && currentLang === 'en' ? 'en' : 'ku';
}

function getBes5HomeworkStrings() {
    return bes5HomeworkUiText[getBes5HomeworkLang()];
}

function ensureBes5HomeworkState() {
    bes5HomeworkQuestions.forEach(question => {
        if (!bes5HomeworkState[question.id]) {
            bes5HomeworkState[question.id] = { value: '', checked: false };
        }
    });
}

function escapeBes5HomeworkHtml(text) {
    return String(text)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function escapeBes5HomeworkJsSingleQuoted(text) {
    return String(text)
        .replace(/\\/g, '\\\\')
        .replace(/'/g, "\\'");
}

function normalizeBes5HomeworkAnswer(value) {
    return String(value || '')
        .normalize('NFD')
        .replace(/[\u0591-\u05C7\u0300-\u036f]/g, '')
        .replace(/[^\p{L}\p{N}\s]/gu, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

function isBes5HomeworkCorrect(questionId) {
    const question = bes5HomeworkQuestions.find(item => item.id === questionId);
    const state = bes5HomeworkState[questionId];
    if (!question || !state || !state.checked) return false;
    const normalized = normalizeBes5HomeworkAnswer(state.value);
    return question.acceptableAnswers.some(answer => normalizeBes5HomeworkAnswer(answer) === normalized);
}

function getBes5HomeworkCorrectCount() {
    return bes5HomeworkQuestions.filter(question => isBes5HomeworkCorrect(question.id)).length;
}

function renderBes5Homework(summaryId = 'b5-hw-summary', listId = 'b5-hw-list') {
    ensureBes5HomeworkState();

    const summary = document.getElementById(summaryId);
    const list = document.getElementById(listId);
    if (!summary || !list) return;

    const strings = getBes5HomeworkStrings();
    const lang = getBes5HomeworkLang();
    const correct = getBes5HomeworkCorrectCount();
    const total = bes5HomeworkQuestions.length;

    summary.innerHTML = `
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white/80 dark:bg-slate-900/60 rounded-2xl border border-slate-200 dark:border-slate-700 p-4">
            <div>
                <div class="text-sm uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">${escapeBes5HomeworkHtml(strings.progressLabel)}</div>
                <div class="text-xl font-bold text-slate-800 dark:text-slate-100">${correct} / ${total} ${escapeBes5HomeworkHtml(strings.answeredLabel)}</div>
                <div class="text-sm text-slate-500 dark:text-slate-400">${correct === total ? escapeBes5HomeworkHtml(strings.finished) : ''}</div>
            </div>
            <button type="button" onclick="resetBes5Homework()" class="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-slate-100 font-semibold transition">
                ${escapeBes5HomeworkHtml(strings.reset)}
            </button>
        </div>
    `;

    list.innerHTML = bes5HomeworkQuestions.map(question => renderBes5HomeworkQuestion(question, lang, strings)).join('');

    if (!activeBes5HomeworkInputId && bes5HomeworkQuestions.length > 0) {
        activeBes5HomeworkInputId = bes5HomeworkQuestions[0].id;
    }
}

function renderBes5HomeworkQuestion(question, lang, strings) {
    const state = bes5HomeworkState[question.id] || { value: '', checked: false };
    const isCorrect = isBes5HomeworkCorrect(question.id);
    const feedback = state.checked
        ? (isCorrect
            ? `<p class="text-green-600 dark:text-green-400 font-semibold">${escapeBes5HomeworkHtml(strings.correct)}</p>`
            : `<p class="text-red-600 dark:text-red-400 font-semibold">${escapeBes5HomeworkHtml(strings.wrong)} ${escapeBes5HomeworkHtml(strings.correctAnswer)}: <span dir="rtl" lang="he" class="inline-block">${escapeBes5HomeworkHtml(question.solutionDisplay)}</span></p>`)
        : '';

    return `
        <li class="pl-0">
            <section class="bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-700 p-5 shadow-sm space-y-4">
                <div class="flex items-start gap-3">
                    <span class="inline-flex items-center justify-center min-w-10 h-10 px-3 rounded-full bg-teal-600 text-white font-bold shrink-0">${escapeBes5HomeworkHtml(question.number)}</span>
                    <div class="pt-1 text-slate-800 dark:text-slate-100 font-semibold">${escapeBes5HomeworkHtml(question.prompt[lang])}</div>
                </div>
                <div class="flex flex-col sm:flex-row gap-3">
                    <input
                        id="bes5-hw-input-${question.id}"
                        type="text"
                        value="${escapeBes5HomeworkHtml(state.value)}"
                        dir="rtl"
                        lang="he"
                        inputmode="text"
                        autocapitalize="off"
                        autocomplete="off"
                        autocorrect="off"
                        spellcheck="false"
                        enterkeyhint="done"
                        onfocus="setActiveBes5HomeworkInput('${question.id}')"
                        onclick="setActiveBes5HomeworkInput('${question.id}')"
                        oninput="updateBes5HomeworkValue('${question.id}', this.value)"
                        onkeydown="if (event.key === 'Enter') { event.preventDefault(); checkBes5Homework('${question.id}'); }"
                        placeholder="${escapeBes5HomeworkHtml(strings.placeholder)}"
                        class="flex-1 rounded-xl border ${state.checked ? (isCorrect ? 'border-green-500' : 'border-red-500') : 'border-slate-300 dark:border-slate-600'} bg-white dark:bg-slate-800 px-4 py-3 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                    <button
                        type="button"
                        onclick="checkBes5Homework('${question.id}')"
                        class="inline-flex items-center justify-center rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold px-5 py-3 transition"
                    >
                        ${escapeBes5HomeworkHtml(strings.check)}
                    </button>
                </div>
                ${renderBes5HomeworkKeyboard(question.id, strings)}
                <div class="min-h-[1.5rem]">${feedback}</div>
            </section>
        </li>
    `;
}

function renderBes5HomeworkKeyboard(questionId, strings) {
    return `
        <div class="space-y-2">
            ${bes5HomeworkKeyboardRows.map(row => `
                <div class="grid gap-2" style="grid-template-columns: repeat(${row.length}, minmax(0, 1fr));">
                    ${row.map(key => `
                        <button
                            type="button"
                            onclick="insertBes5HomeworkKey('${questionId}','${escapeBes5HomeworkJsSingleQuoted(key)}')"
                            class="min-h-[3rem] rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-100 text-xl font-semibold transition"
                        >
                            ${escapeBes5HomeworkHtml(key)}
                        </button>
                    `).join('')}
                </div>
            `).join('')}
            <div class="grid grid-cols-3 gap-2">
                <button type="button" onclick="backspaceBes5HomeworkKey('${questionId}')" class="min-h-[3rem] rounded-xl border border-slate-200 dark:border-slate-700 bg-teal-50 hover:bg-teal-100 dark:bg-teal-900/20 dark:hover:bg-teal-900/30 text-slate-900 dark:text-slate-100 font-semibold transition">${escapeBes5HomeworkHtml(strings.backspace)}</button>
                <button type="button" onclick="insertBes5HomeworkKey('${questionId}',' ')" class="min-h-[3rem] rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-100 font-semibold transition">${escapeBes5HomeworkHtml(strings.space)}</button>
                <button type="button" onclick="clearBes5HomeworkKey('${questionId}')" class="min-h-[3rem] rounded-xl border border-slate-200 dark:border-slate-700 bg-rose-50 hover:bg-rose-100 dark:bg-rose-900/20 dark:hover:bg-rose-900/30 text-slate-900 dark:text-slate-100 font-semibold transition">${escapeBes5HomeworkHtml(strings.clear)}</button>
            </div>
        </div>
    `;
}

function setActiveBes5HomeworkInput(questionId) {
    activeBes5HomeworkInputId = questionId;
}

function getBes5HomeworkInput(questionId) {
    const resolvedId = questionId || activeBes5HomeworkInputId || bes5HomeworkQuestions[0]?.id;
    if (!resolvedId) return null;
    activeBes5HomeworkInputId = resolvedId;
    return document.getElementById(`bes5-hw-input-${resolvedId}`);
}

function updateBes5HomeworkValue(questionId, value) {
    ensureBes5HomeworkState();
    bes5HomeworkState[questionId].value = value;
    activeBes5HomeworkInputId = questionId;
}

function insertBes5HomeworkKey(questionId, key) {
    const input = getBes5HomeworkInput(questionId);
    if (!input) return;

    const start = input.selectionStart ?? input.value.length;
    const end = input.selectionEnd ?? input.value.length;
    const nextValue = `${input.value.slice(0, start)}${key}${input.value.slice(end)}`;
    input.value = nextValue;
    input.focus();
    const caret = start + key.length;
    input.setSelectionRange(caret, caret);
    updateBes5HomeworkValue(activeBes5HomeworkInputId, nextValue);
}

function backspaceBes5HomeworkKey(questionId) {
    const input = getBes5HomeworkInput(questionId);
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
    updateBes5HomeworkValue(activeBes5HomeworkInputId, nextValue);
}

function clearBes5HomeworkKey(questionId) {
    const input = getBes5HomeworkInput(questionId);
    if (!input) return;
    input.value = '';
    input.focus();
    input.setSelectionRange(0, 0);
    updateBes5HomeworkValue(activeBes5HomeworkInputId, '');
}

function checkBes5Homework(questionId) {
    ensureBes5HomeworkState();
    bes5HomeworkState[questionId].checked = true;
    renderBes5Homework();
    const input = document.getElementById(`bes5-hw-input-${questionId}`);
    if (input) input.focus();
    activeBes5HomeworkInputId = questionId;
}

function resetBes5Homework() {
    Object.keys(bes5HomeworkState).forEach(questionId => {
        bes5HomeworkState[questionId] = { value: '', checked: false };
    });
    activeBes5HomeworkInputId = bes5HomeworkQuestions[0]?.id || null;
    renderBes5Homework();
}
