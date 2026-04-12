const bes6HomeworkQuestions = [
    {
        id: 'b6q1',
        number: '1',
        prompt: {
            ku: 'Ez birçî me, tu tiştekî xwarinê dixwazî?',
            en: 'I am hungry, do you want something to eat?'
        },
        solutionDisplay: 'אני רעב, אתה רוצה משהו לאכול?',
        acceptableAnswers: ['אני רעב אתה רוצה משהו לאכול']
    },
    {
        id: 'b6q2',
        number: '2',
        prompt: {
            ku: 'Nan û penîr xweş in.',
            en: 'Bread and cheese are tasty.'
        },
        solutionDisplay: 'לחם וגבינה טעימים.',
        acceptableAnswers: ['לחם וגבינה טעימים']
    },
    {
        id: 'b6q3',
        number: '3',
        prompt: {
            ku: 'Ez çay vexwim.',
            en: 'I drink tea.'
        },
        solutionDisplay: 'אני שותה תה.',
        acceptableAnswers: ['אני שותה תה']
    },
    {
        id: 'b6q4',
        number: '4',
        prompt: {
            ku: 'Malbata min masî dixwin.',
            en: 'My family eats fish.'
        },
        solutionDisplay: 'המשפחה שלי אוכלת דג.',
        acceptableAnswers: ['המשפחה שלי אוכלת דג', 'המשפחה שלי אוכלת דגים']
    },
    {
        id: 'b6q5',
        number: '5',
        prompt: {
            ku: 'Av ji bo min, spas.',
            en: 'Water for me, thank you.'
        },
        solutionDisplay: 'מים בשבילי, תודה.',
        acceptableAnswers: ['מים בשבילי תודה', 'מים עבורי תודה']
    },
    {
        id: 'b6q6',
        number: '6',
        prompt: {
            ku: 'Kehweya te şirîn e?',
            en: 'Is your coffee sweet?'
        },
        solutionDisplay: 'הקפה שלך מתוק?',
        acceptableAnswers: ['הקפה שלך מתוק']
    },
    {
        id: 'b6q7',
        number: '7',
        prompt: {
            ku: 'Em ê goşt bixwin.',
            en: 'We will eat meat.'
        },
        solutionDisplay: 'אנחנו נאכל בשר.',
        acceptableAnswers: ['אנחנו נאכל בשר']
    },
    {
        id: 'b6q8',
        number: '8',
        prompt: {
            ku: 'Fêkî ji bo tenduristiyê baş e.',
            en: 'Fruit is good for health.'
        },
        solutionDisplay: 'פרי טוב לבריאות.',
        acceptableAnswers: ['פרי טוב לבריאות', 'הפרי טוב לבריאות']
    },
    {
        id: 'b6q9',
        number: '9',
        prompt: {
            ku: 'Şîrê gav xweş e.',
            en: 'Cow’s milk is good.'
        },
        solutionDisplay: 'חלב פרה טוב.',
        acceptableAnswers: ['חלב פרה טוב', 'החלב של הפרה טוב']
    },
    {
        id: 'b6q10',
        number: '10',
        prompt: {
            ku: 'Xwarinê xweş!',
            en: 'Enjoy your meal!'
        },
        solutionDisplay: 'בתאבון!',
        acceptableAnswers: ['בתאבון', 'בתיאבון']
    }
];

const bes6HomeworkUiText = {
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

const bes6HomeworkKeyboardRows = [
    ['/', "'", 'ק', 'ר', 'א', 'ט', 'ו', 'ן', 'ם', 'פ'],
    ['ש', 'ד', 'ג', 'כ', 'ע', 'י', 'ח', 'ל', 'ך', 'ף'],
    ['ז', 'ס', 'ב', 'ה', 'נ', 'מ', 'צ', 'ת', 'ץ']
];

const bes6HomeworkState = {};
let activeBes6HomeworkInputId = null;

function getBes6HomeworkLang() {
    return typeof currentLang !== 'undefined' && currentLang === 'en' ? 'en' : 'ku';
}

function getBes6HomeworkStrings() {
    return bes6HomeworkUiText[getBes6HomeworkLang()];
}

function ensureBes6HomeworkState() {
    bes6HomeworkQuestions.forEach(question => {
        if (!bes6HomeworkState[question.id]) {
            bes6HomeworkState[question.id] = { value: '', checked: false };
        }
    });
}

function escapeBes6HomeworkHtml(text) {
    return String(text)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function escapeBes6HomeworkJsSingleQuoted(text) {
    return String(text)
        .replace(/\\/g, '\\\\')
        .replace(/'/g, "\\'");
}

function normalizeBes6HomeworkAnswer(value) {
    return String(value || '')
        .normalize('NFD')
        .replace(/[\u0591-\u05C7\u0300-\u036f]/g, '')
        .replace(/[^\p{L}\p{N}\s]/gu, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

function isBes6HomeworkCorrect(questionId) {
    const question = bes6HomeworkQuestions.find(item => item.id === questionId);
    const state = bes6HomeworkState[questionId];
    if (!question || !state || !state.checked) return false;
    const normalized = normalizeBes6HomeworkAnswer(state.value);
    return question.acceptableAnswers.some(answer => normalizeBes6HomeworkAnswer(answer) === normalized);
}

function getBes6HomeworkCorrectCount() {
    return bes6HomeworkQuestions.filter(question => isBes6HomeworkCorrect(question.id)).length;
}

function renderBes6Homework(summaryId = 'b6-hw-summary', listId = 'b6-hw-list') {
    ensureBes6HomeworkState();

    const summary = document.getElementById(summaryId);
    const list = document.getElementById(listId);
    if (!summary || !list) return;

    const strings = getBes6HomeworkStrings();
    const lang = getBes6HomeworkLang();
    const correct = getBes6HomeworkCorrectCount();
    const total = bes6HomeworkQuestions.length;

    summary.innerHTML = `
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white/80 dark:bg-slate-900/60 rounded-2xl border border-slate-200 dark:border-slate-700 p-4">
            <div>
                <div class="text-sm uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">${escapeBes6HomeworkHtml(strings.progressLabel)}</div>
                <div class="text-xl font-bold text-slate-800 dark:text-slate-100">${correct} / ${total} ${escapeBes6HomeworkHtml(strings.answeredLabel)}</div>
                <div class="text-sm text-slate-500 dark:text-slate-400">${correct === total ? escapeBes6HomeworkHtml(strings.finished) : ''}</div>
            </div>
            <button type="button" onclick="resetBes6Homework()" class="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-slate-100 font-semibold transition">
                ${escapeBes6HomeworkHtml(strings.reset)}
            </button>
        </div>
    `;

    list.innerHTML = bes6HomeworkQuestions.map(question => renderBes6HomeworkQuestion(question, lang, strings)).join('');

    if (!activeBes6HomeworkInputId && bes6HomeworkQuestions.length > 0) {
        activeBes6HomeworkInputId = bes6HomeworkQuestions[0].id;
    }
}

function renderBes6HomeworkQuestion(question, lang, strings) {
    const state = bes6HomeworkState[question.id] || { value: '', checked: false };
    const isCorrect = isBes6HomeworkCorrect(question.id);
    const feedback = state.checked
        ? (isCorrect
            ? `<p class="text-green-600 dark:text-green-400 font-semibold">${escapeBes6HomeworkHtml(strings.correct)}</p>`
            : `<p class="text-red-600 dark:text-red-400 font-semibold">${escapeBes6HomeworkHtml(strings.wrong)} ${escapeBes6HomeworkHtml(strings.correctAnswer)}: <span dir="rtl" lang="he" class="inline-block">${escapeBes6HomeworkHtml(question.solutionDisplay)}</span></p>`)
        : '';

    return `
        <li class="pl-0">
            <section class="bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-700 p-5 shadow-sm space-y-4">
                <div class="flex items-start gap-3">
                    <span class="inline-flex items-center justify-center min-w-10 h-10 px-3 rounded-full bg-rose-600 text-white font-bold shrink-0">${escapeBes6HomeworkHtml(question.number)}</span>
                    <div class="pt-1 text-slate-800 dark:text-slate-100 font-semibold">${escapeBes6HomeworkHtml(question.prompt[lang])}</div>
                </div>
                <div class="flex flex-col sm:flex-row gap-3">
                    <input
                        id="bes6-hw-input-${question.id}"
                        type="text"
                        value="${escapeBes6HomeworkHtml(state.value)}"
                        dir="rtl"
                        lang="he"
                        inputmode="text"
                        autocapitalize="off"
                        autocomplete="off"
                        autocorrect="off"
                        spellcheck="false"
                        enterkeyhint="done"
                        onfocus="setActiveBes6HomeworkInput('${question.id}')"
                        onclick="setActiveBes6HomeworkInput('${question.id}')"
                        oninput="updateBes6HomeworkValue('${question.id}', this.value)"
                        onkeydown="if (event.key === 'Enter') { event.preventDefault(); checkBes6Homework('${question.id}'); }"
                        placeholder="${escapeBes6HomeworkHtml(strings.placeholder)}"
                        class="flex-1 rounded-xl border ${state.checked ? (isCorrect ? 'border-green-500' : 'border-red-500') : 'border-slate-300 dark:border-slate-600'} bg-white dark:bg-slate-800 px-4 py-3 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-rose-500"
                    />
                    <button
                        type="button"
                        onclick="checkBes6Homework('${question.id}')"
                        class="inline-flex items-center justify-center rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-semibold px-5 py-3 transition"
                    >
                        ${escapeBes6HomeworkHtml(strings.check)}
                    </button>
                </div>
                ${renderBes6HomeworkKeyboard(question.id, strings)}
                <div class="min-h-[1.5rem]">${feedback}</div>
            </section>
        </li>
    `;
}

function renderBes6HomeworkKeyboard(questionId, strings) {
    return `
        <div class="space-y-2">
            ${bes6HomeworkKeyboardRows.map(row => `
                <div class="grid gap-2" style="grid-template-columns: repeat(${row.length}, minmax(0, 1fr));">
                    ${row.map(key => `
                        <button
                            type="button"
                            onclick="insertBes6HomeworkKey('${questionId}','${escapeBes6HomeworkJsSingleQuoted(key)}')"
                            class="min-h-[3rem] rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-100 text-xl font-semibold transition"
                        >
                            ${escapeBes6HomeworkHtml(key)}
                        </button>
                    `).join('')}
                </div>
            `).join('')}
            <div class="grid grid-cols-3 gap-2">
                <button type="button" onclick="backspaceBes6HomeworkKey('${questionId}')" class="min-h-[3rem] rounded-xl border border-slate-200 dark:border-slate-700 bg-rose-50 hover:bg-rose-100 dark:bg-rose-900/20 dark:hover:bg-rose-900/30 text-slate-900 dark:text-slate-100 font-semibold transition">${escapeBes6HomeworkHtml(strings.backspace)}</button>
                <button type="button" onclick="insertBes6HomeworkKey('${questionId}',' ')" class="min-h-[3rem] rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-100 font-semibold transition">${escapeBes6HomeworkHtml(strings.space)}</button>
                <button type="button" onclick="clearBes6HomeworkKey('${questionId}')" class="min-h-[3rem] rounded-xl border border-slate-200 dark:border-slate-700 bg-orange-50 hover:bg-orange-100 dark:bg-orange-900/20 dark:hover:bg-orange-900/30 text-slate-900 dark:text-slate-100 font-semibold transition">${escapeBes6HomeworkHtml(strings.clear)}</button>
            </div>
        </div>
    `;
}

function setActiveBes6HomeworkInput(questionId) {
    activeBes6HomeworkInputId = questionId;
}

function getBes6HomeworkInput(questionId) {
    const resolvedId = questionId || activeBes6HomeworkInputId || bes6HomeworkQuestions[0]?.id;
    if (!resolvedId) return null;
    activeBes6HomeworkInputId = resolvedId;
    return document.getElementById(`bes6-hw-input-${resolvedId}`);
}

function updateBes6HomeworkValue(questionId, value) {
    ensureBes6HomeworkState();
    bes6HomeworkState[questionId].value = value;
    activeBes6HomeworkInputId = questionId;
}

function insertBes6HomeworkKey(questionId, key) {
    const input = getBes6HomeworkInput(questionId);
    if (!input) return;

    const start = input.selectionStart ?? input.value.length;
    const end = input.selectionEnd ?? input.value.length;
    const nextValue = `${input.value.slice(0, start)}${key}${input.value.slice(end)}`;
    input.value = nextValue;
    input.focus();
    const caret = start + key.length;
    input.setSelectionRange(caret, caret);
    updateBes6HomeworkValue(activeBes6HomeworkInputId, nextValue);
}

function backspaceBes6HomeworkKey(questionId) {
    const input = getBes6HomeworkInput(questionId);
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
    updateBes6HomeworkValue(activeBes6HomeworkInputId, nextValue);
}

function clearBes6HomeworkKey(questionId) {
    const input = getBes6HomeworkInput(questionId);
    if (!input) return;
    input.value = '';
    input.focus();
    input.setSelectionRange(0, 0);
    updateBes6HomeworkValue(activeBes6HomeworkInputId, '');
}

function checkBes6Homework(questionId) {
    ensureBes6HomeworkState();
    bes6HomeworkState[questionId].checked = true;
    renderBes6Homework();
    const input = document.getElementById(`bes6-hw-input-${questionId}`);
    if (input) input.focus();
    activeBes6HomeworkInputId = questionId;
}

function resetBes6Homework() {
    Object.keys(bes6HomeworkState).forEach(questionId => {
        bes6HomeworkState[questionId] = { value: '', checked: false };
    });
    activeBes6HomeworkInputId = bes6HomeworkQuestions[0]?.id || null;
    renderBes6Homework();
}
