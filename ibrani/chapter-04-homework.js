const bes4HomeworkQuestions = [
    {
        id: 'b4q1',
        number: '1',
        prompt: {
            ku: 'Çend jimarên te hene?',
            en: 'How many numbers do you have?'
        },
        solutionDisplay: 'כַּמָּה מִסְפָּרִים יֵשׁ לְךָ?',
        acceptableAnswers: ['כמה מספרים יש לך', 'כמה מספרים יש לך?', 'כַּמָּה מִסְפָּרִים יֵשׁ לְךָ', 'כַּמָּה מִסְפָּרִים יֵשׁ לְךָ?']
    },
    {
        id: 'b4q2',
        number: '2',
        prompt: {
            ku: 'Bîst û yek kursî hene.',
            en: 'There are twenty-one chairs.'
        },
        solutionDisplay: 'יֵשׁ עֶשְׂרִים וְאֶחָד כִּסְאוֹת.',
        acceptableAnswers: ['יש עשרים ואחד כיסאות', 'יש עשרים ואחד כיסאות.', 'יֵשׁ עֶשְׂרִים וְאֶחָד כִּסְאוֹת', 'יֵשׁ עֶשְׂרִים וְאֶחָד כִּסְאוֹת.']
    },
    {
        id: 'b4q3',
        number: '3',
        prompt: {
            ku: 'Deh şagirt li dibistanê ne.',
            en: 'Ten students are at school.'
        },
        solutionDisplay: 'יֵשׁ עֲשָׂרָה תַּלְמִידִים בְּבֵית הַסֵּפֶר.',
        acceptableAnswers: ['יש עשרה תלמידים בבית הספר', 'יש עשרה תלמידים בבית הספר.', 'יֵשׁ עֲשָׂרָה תַּלְמִידִים בְּבֵית הַסֵּפֶר', 'יֵשׁ עֲשָׂרָה תַּלְמִידִים בְּבֵית הַסֵּפֶר.']
    },
    {
        id: 'b4q4',
        number: '4',
        prompt: {
            ku: 'Sê birayên min hene.',
            en: 'I have three brothers.'
        },
        solutionDisplay: 'יֵשׁ לִי שְׁלֹשָׁה אַחִים.',
        acceptableAnswers: ['יש לי שלושה אחים', 'יש לי שלושה אחים.', 'יש לי שלשה אחים', 'יש לי שלשה אחים.', 'יֵשׁ לִי שְׁלֹשָׁה אַחִים', 'יֵשׁ לִי שְׁלֹשָׁה אַחִים.']
    },
    {
        id: 'b4q5',
        number: '5',
        prompt: {
            ku: 'Pênc û şeş yanzdeh e.',
            en: 'Five and six is eleven.'
        },
        solutionDisplay: 'חָמֵשׁ וְשֵׁשׁ זֶה אַחַת עֶשְׂרֵה.',
        acceptableAnswers: ['חמש ושש זה אחת עשרה', 'חמש ושש זה אחת עשרה.', 'חָמֵשׁ וְשֵׁשׁ זֶה אַחַת עֶשְׂרֵה', 'חָמֵשׁ וְשֵׁשׁ זֶה אַחַת עֶשְׂרֵה.']
    },
    {
        id: 'b4q6',
        number: '6',
        prompt: {
            ku: 'Hezar û yek şevên Erebî.',
            en: 'One thousand and one Arabian nights.'
        },
        solutionDisplay: 'אֶלֶף וְאַחַת לֵילוֹת עַרְבִיּוֹת.',
        acceptableAnswers: ['אלף ואחת לילות ערביות', 'אלף ואחת לילות ערביות.', 'אֶלֶף וְאַחַת לֵילוֹת עַרְבִיּוֹת', 'אֶלֶף וְאַחַת לֵילוֹת עַרְבִיּוֹת.', 'אלף ואחד לילות ערביות', 'אלף ואחד לילות ערביות.']
    },
    {
        id: 'b4q7',
        number: '7',
        prompt: {
            ku: 'Min çil salên min hene.',
            en: 'I am forty years old.'
        },
        solutionDisplay: 'יֵשׁ לִי אַרְבָּעִים שָׁנָה.',
        acceptableAnswers: ['יש לי ארבעים שנה', 'יש לי ארבעים שנה.', 'יֵשׁ לִי אַרְבָּעִים שָׁנָה', 'יֵשׁ לִי אַרְבָּעִים שָׁנָה.']
    },
    {
        id: 'b4q8',
        number: '8',
        prompt: {
            ku: 'Çend sêv dixwazî?',
            en: 'How many apples do you want?'
        },
        solutionDisplay: 'כַּמָּה תַּפּוּחִים אַתָּה רוֹצֶה?',
        acceptableAnswers: ['כמה תפוחים אתה רוצה', 'כמה תפוחים אתה רוצה?', 'כַּמָּה תַּפּוּחִים אַתָּה רוֹצֶה', 'כַּמָּה תַּפּוּחִים אַתָּה רוֹצֶה?', 'כמה תפוחים את רוצה', 'כמה תפוחים את רוצה?']
    },
    {
        id: 'b4q9',
        number: '9',
        prompt: {
            ku: 'Sed kîlo genim hene.',
            en: 'There are one hundred kilos of wheat.'
        },
        solutionDisplay: 'יֵשׁ מֵאָה קִילוֹ חִיטָּה.',
        acceptableAnswers: ['יש מאה קילו חיטה', 'יש מאה קילו חיטה.', 'יֵשׁ מֵאָה קִילוֹ חִיטָּה', 'יֵשׁ מֵאָה קִילוֹ חִיטָּה.']
    },
    {
        id: 'b4q10',
        number: '10',
        prompt: {
            ku: 'Navê wê jimareyê deh e.',
            en: 'The name of that number is ten.'
        },
        solutionDisplay: 'שֵׁם הַמִּסְפָּר הַהוּא הוּא עֶשֶׂר.',
        acceptableAnswers: ['שם המספר ההוא הוא עשר', 'שם המספר ההוא הוא עשר.', 'שֵׁם הַמִּסְפָּר הַהוּא הוּא עֶשֶׂר', 'שֵׁם הַמִּסְפָּר הַהוּא הוּא עֶשֶׂר.']
    }
];

const bes4HomeworkUiText = {
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

const bes4HomeworkKeyboardRows = [
    ['/', "'", 'ק', 'ר', 'א', 'ט', 'ו', 'ן', 'ם', 'פ'],
    ['ש', 'ד', 'ג', 'כ', 'ע', 'י', 'ח', 'ל', 'ך', 'ף'],
    ['ז', 'ס', 'ב', 'ה', 'נ', 'מ', 'צ', 'ת', 'ץ']
];

const bes4HomeworkState = {};
let activeBes4HomeworkInputId = null;

function getBes4HomeworkLang() {
    return typeof currentLang !== 'undefined' && currentLang === 'en' ? 'en' : 'ku';
}

function getBes4HomeworkStrings() {
    return bes4HomeworkUiText[getBes4HomeworkLang()];
}

function ensureBes4HomeworkState() {
    bes4HomeworkQuestions.forEach(question => {
        if (!bes4HomeworkState[question.id]) {
            bes4HomeworkState[question.id] = { value: '', checked: false };
        }
    });
}

function escapeBes4HomeworkHtml(text) {
    return String(text)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function escapeBes4HomeworkJsSingleQuoted(text) {
    return String(text)
        .replace(/\\/g, '\\\\')
        .replace(/'/g, "\\'");
}

function normalizeBes4HomeworkAnswer(value) {
    return String(value || '')
        .normalize('NFD')
        .replace(/[\u0591-\u05C7\u0300-\u036f]/g, '')
        .replace(/[^\p{L}\p{N}\s]/gu, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

function isBes4HomeworkCorrect(questionId) {
    const question = bes4HomeworkQuestions.find(item => item.id === questionId);
    const state = bes4HomeworkState[questionId];
    if (!question || !state || !state.checked) return false;
    const normalized = normalizeBes4HomeworkAnswer(state.value);
    return question.acceptableAnswers.some(answer => normalizeBes4HomeworkAnswer(answer) === normalized);
}

function getBes4HomeworkCorrectCount() {
    return bes4HomeworkQuestions.filter(question => isBes4HomeworkCorrect(question.id)).length;
}

function renderBes4Homework(summaryId = 'b4-hw-summary', listId = 'b4-hw-list') {
    ensureBes4HomeworkState();

    const summary = document.getElementById(summaryId);
    const list = document.getElementById(listId);
    if (!summary || !list) return;

    const strings = getBes4HomeworkStrings();
    const lang = getBes4HomeworkLang();
    const correct = getBes4HomeworkCorrectCount();
    const total = bes4HomeworkQuestions.length;

    summary.innerHTML = `
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white/80 dark:bg-slate-900/60 rounded-2xl border border-slate-200 dark:border-slate-700 p-4">
            <div>
                <div class="text-sm uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">${escapeBes4HomeworkHtml(strings.progressLabel)}</div>
                <div class="text-xl font-bold text-slate-800 dark:text-slate-100">${correct} / ${total} ${escapeBes4HomeworkHtml(strings.answeredLabel)}</div>
                <div class="text-sm text-slate-500 dark:text-slate-400">${correct === total ? escapeBes4HomeworkHtml(strings.finished) : ''}</div>
            </div>
            <button type="button" onclick="resetBes4Homework()" class="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-slate-100 font-semibold transition">
                ${escapeBes4HomeworkHtml(strings.reset)}
            </button>
        </div>
    `;

    list.innerHTML = bes4HomeworkQuestions.map(question => renderBes4HomeworkQuestion(question, lang, strings)).join('');

    if (!activeBes4HomeworkInputId && bes4HomeworkQuestions.length > 0) {
        activeBes4HomeworkInputId = bes4HomeworkQuestions[0].id;
    }
}

function renderBes4HomeworkQuestion(question, lang, strings) {
    const state = bes4HomeworkState[question.id] || { value: '', checked: false };
    const isCorrect = isBes4HomeworkCorrect(question.id);
    const feedback = state.checked
        ? (isCorrect
            ? `<p class="text-green-600 dark:text-green-400 font-semibold">${escapeBes4HomeworkHtml(strings.correct)}</p>`
            : `<p class="text-red-600 dark:text-red-400 font-semibold">${escapeBes4HomeworkHtml(strings.wrong)} ${escapeBes4HomeworkHtml(strings.correctAnswer)}: <span dir="rtl" lang="he" class="inline-block">${escapeBes4HomeworkHtml(question.solutionDisplay)}</span></p>`)
        : '';

    return `
        <li class="pl-0">
            <section class="bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-700 p-5 shadow-sm space-y-4">
                <div class="flex items-start gap-3">
                    <span class="inline-flex items-center justify-center min-w-10 h-10 px-3 rounded-full bg-amber-600 text-white font-bold shrink-0">${escapeBes4HomeworkHtml(question.number)}</span>
                    <div class="pt-1 text-slate-800 dark:text-slate-100 font-semibold">${escapeBes4HomeworkHtml(question.prompt[lang])}</div>
                </div>
                <div class="flex flex-col sm:flex-row gap-3">
                    <input
                        id="bes4-hw-input-${question.id}"
                        type="text"
                        value="${escapeBes4HomeworkHtml(state.value)}"
                        dir="rtl"
                        lang="he"
                        inputmode="text"
                        autocapitalize="off"
                        autocomplete="off"
                        autocorrect="off"
                        spellcheck="false"
                        enterkeyhint="done"
                        onfocus="setActiveBes4HomeworkInput('${question.id}')"
                        onclick="setActiveBes4HomeworkInput('${question.id}')"
                        oninput="updateBes4HomeworkValue('${question.id}', this.value)"
                        onkeydown="if (event.key === 'Enter') { event.preventDefault(); checkBes4Homework('${question.id}'); }"
                        placeholder="${escapeBes4HomeworkHtml(strings.placeholder)}"
                        class="flex-1 rounded-xl border ${state.checked ? (isCorrect ? 'border-green-500' : 'border-red-500') : 'border-slate-300 dark:border-slate-600'} bg-white dark:bg-slate-800 px-4 py-3 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                    <button
                        type="button"
                        onclick="checkBes4Homework('${question.id}')"
                        class="inline-flex items-center justify-center rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-semibold px-5 py-3 transition"
                    >
                        ${escapeBes4HomeworkHtml(strings.check)}
                    </button>
                </div>
                ${renderBes4HomeworkKeyboard(question.id, strings)}
                <div class="min-h-[1.5rem]">${feedback}</div>
            </section>
        </li>
    `;
}

function renderBes4HomeworkKeyboard(questionId, strings) {
    return `
        <div class="space-y-2">
            ${bes4HomeworkKeyboardRows.map(row => `
                <div class="grid gap-2" style="grid-template-columns: repeat(${row.length}, minmax(0, 1fr));">
                    ${row.map(key => `
                        <button
                            type="button"
                            onclick="insertBes4HomeworkKey('${questionId}','${escapeBes4HomeworkJsSingleQuoted(key)}')"
                            class="min-h-[3rem] rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-100 text-xl font-semibold transition"
                        >
                            ${escapeBes4HomeworkHtml(key)}
                        </button>
                    `).join('')}
                </div>
            `).join('')}
            <div class="grid grid-cols-3 gap-2">
                <button type="button" onclick="backspaceBes4HomeworkKey('${questionId}')" class="min-h-[3rem] rounded-xl border border-slate-200 dark:border-slate-700 bg-amber-50 hover:bg-amber-100 dark:bg-amber-900/20 dark:hover:bg-amber-900/30 text-slate-900 dark:text-slate-100 font-semibold transition">${escapeBes4HomeworkHtml(strings.backspace)}</button>
                <button type="button" onclick="insertBes4HomeworkKey('${questionId}',' ')" class="min-h-[3rem] rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-100 font-semibold transition">${escapeBes4HomeworkHtml(strings.space)}</button>
                <button type="button" onclick="clearBes4HomeworkKey('${questionId}')" class="min-h-[3rem] rounded-xl border border-slate-200 dark:border-slate-700 bg-rose-50 hover:bg-rose-100 dark:bg-rose-900/20 dark:hover:bg-rose-900/30 text-slate-900 dark:text-slate-100 font-semibold transition">${escapeBes4HomeworkHtml(strings.clear)}</button>
            </div>
        </div>
    `;
}

function setActiveBes4HomeworkInput(questionId) {
    activeBes4HomeworkInputId = questionId;
}

function getBes4HomeworkInput(questionId) {
    const resolvedId = questionId || activeBes4HomeworkInputId || bes4HomeworkQuestions[0]?.id;
    if (!resolvedId) return null;
    activeBes4HomeworkInputId = resolvedId;
    return document.getElementById(`bes4-hw-input-${resolvedId}`);
}

function updateBes4HomeworkValue(questionId, value) {
    ensureBes4HomeworkState();
    bes4HomeworkState[questionId].value = value;
    activeBes4HomeworkInputId = questionId;
}

function insertBes4HomeworkKey(questionId, key) {
    const input = getBes4HomeworkInput(questionId);
    if (!input) return;

    const start = input.selectionStart ?? input.value.length;
    const end = input.selectionEnd ?? input.value.length;
    const nextValue = `${input.value.slice(0, start)}${key}${input.value.slice(end)}`;
    input.value = nextValue;
    input.focus();
    const caret = start + key.length;
    input.setSelectionRange(caret, caret);
    updateBes4HomeworkValue(activeBes4HomeworkInputId, nextValue);
}

function backspaceBes4HomeworkKey(questionId) {
    const input = getBes4HomeworkInput(questionId);
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
    updateBes4HomeworkValue(activeBes4HomeworkInputId, nextValue);
}

function clearBes4HomeworkKey(questionId) {
    const input = getBes4HomeworkInput(questionId);
    if (!input) return;
    input.value = '';
    input.focus();
    input.setSelectionRange(0, 0);
    updateBes4HomeworkValue(activeBes4HomeworkInputId, '');
}

function checkBes4Homework(questionId) {
    ensureBes4HomeworkState();
    bes4HomeworkState[questionId].checked = true;
    renderBes4Homework();
    const input = document.getElementById(`bes4-hw-input-${questionId}`);
    if (input) input.focus();
    activeBes4HomeworkInputId = questionId;
}

function resetBes4Homework() {
    Object.keys(bes4HomeworkState).forEach(questionId => {
        bes4HomeworkState[questionId] = { value: '', checked: false };
    });
    activeBes4HomeworkInputId = bes4HomeworkQuestions[0]?.id || null;
    renderBes4Homework();
}
