import tkinter as tk
from tkinter import ttk, scrolledtext, messagebox
import re
import os
import shutil
import threading
import queue
from gtts import gTTS
from bs4 import BeautifulSoup

# --- CONFIGURATION ---
LANGUAGES_CONFIG = {
    "Arabic": {
        "folder_name": "arabic",
        "file_prefix": "ar",
        "gtts_code": "ar",
        "json_key": "arabic",
        "direction": "rtl"
    },
    "Kurdish (Kurmanji)": {
        "folder_name": "kurmanji_kurdish",
        "file_prefix": "ku",
        "gtts_code": None,
        "json_key": "kurdish",
        "direction": "ltr"
    },
    "Spanish": {
        "folder_name": "spanish",
        "file_prefix": "es",
        "gtts_code": "es",
        "json_key": "spanish",
        "direction": "ltr"
    },
    "Turkish": {
        "folder_name": "turkish",
        "file_prefix": "tr",
        "gtts_code": "tr",
        "json_key": "turkish",
        "direction": "ltr"
    },
    "Ukrainian": {
        "folder_name": "ukrainian",
        "file_prefix": "ua",
        "gtts_code": "uk",
        "json_key": "ukrainian",
        "direction": "ltr"
    }
}
BASE_PROJECT_PATH = r"C:\Users\Zachar\Desktop\The Website\hopkins_method"

# --- LANDING PAGE CONFIGURATION ---
LANDING_PAGE_CONFIG = {
    "arabic": r"C:\Users\Zachar\Desktop\The Website\hopkins_method\arabic\00_arabic_landing.html",
    "kurmanji_kurdish": r"C:\Users\Zachar\Desktop\The Website\hopkins_method\kurmanji_kurdish\00_kurmanji_landing.html",
    "spanish": r"C:\Users\Zachar\Desktop\The Website\hopkins_method\spanish\00_spanish_landing.html",
    "turkish": r"C:\Users\Zachar\Desktop\The Website\hopkins_method\turkish\00_turkish_landing.html",
    "ukrainian": r"C:\Users\Zachar\Desktop\The Website\hopkins_method\ukrainian\00_ukrainian_landing.html",
}

# --- MASTER JAVASCRIPT TEMPLATES ---
# --- TEMPLATE 1: FOR RTL LANGUAGES (ARABIC) ---
JS_TEMPLATE_RTL = """
<script>
    const UNIT_NUMBER = {unit_number};
    const LANGUAGE = "{language_json_key}";
    const SENTENCE_OFFSET = (UNIT_NUMBER - 1) * 50;

    const sentences = [
        {sentences_array}
    ];

    // --- STATE ---
    let currentSection = 0;
    let isReversed = false;
    let quizQuestions = [];
    let currentQuizIndex = 0;
    let wrongAttempts = 0;
    let isAnswerShown = false;
    let langInterval = null;

    // --- DOM ELEMENTS ---
    const readerView = document.getElementById('reader-view');
    const quizView = document.getElementById('quiz-view');
    const quizContent = document.getElementById('quiz-content');
    const completionScreen = document.getElementById('completion-screen');
    const readerContent = document.getElementById('reader-content');
    const sectionNav = document.getElementById('section-nav');
    const startQuizBtn = document.getElementById('start-quiz-btn');
    const quizPrompt = document.getElementById('quiz-prompt');
    const quizProgress = document.getElementById('quiz-progress');
    const quizAnswerArea = document.getElementById('quiz-answer-area');
    const quizWordBank = document.getElementById('quiz-word-bank');
    const quizFeedback = document.getElementById('quiz-feedback');
    const quizActionBtn = document.getElementById('quiz-action-btn');
    const quizButtonContainer = document.getElementById('quiz-button-container');
    const themeToggle = document.getElementById('theme-toggle');
    const sunIcon = document.getElementById('theme-icon-sun');
    const moonIcon = document.getElementById('theme-icon-moon');
    const reverseToggle = document.getElementById('reverse-toggle');
    const reviewUnitBtn = document.getElementById('review-unit-btn');
    const sentencePlayer = document.getElementById('sentence-player');

    // --- UTILITY FUNCTIONS ---
    const toArabicNumerals = (num) => {{
        const arabic = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
        return String(num).split('').map(i => arabic[i]).join('');
    }};
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    // --- THEME ---
    function setAndApplyTheme(theme) {{
        localStorage.setItem('theme', theme);
        if (theme === 'dark') {{
            document.documentElement.classList.add('dark');
            sunIcon.classList.remove('hidden');
            moonIcon.classList.add('hidden');
        }} else {{
            document.documentElement.classList.remove('dark');
            sunIcon.classList.add('hidden');
            moonIcon.classList.remove('hidden');
        }}
    }}
    themeToggle.addEventListener('click', () => {{
        const currentTheme = localStorage.getItem('theme') || 'dark';
        setAndApplyTheme(currentTheme === 'dark' ? 'light' : 'dark');
    }});

    // --- REVERSE LANGUAGE ---
    reverseToggle.addEventListener('click', () => {{
        isReversed = !isReversed;
        localStorage.setItem('languageReversed', isReversed);
        populateReader(currentSection);
    }});

    // --- AUDIO FUNCTION ---
    function playSentenceAudio(globalIndex) {{
        const audioSentenceNumber = globalIndex + 1 + SENTENCE_OFFSET;
        const audioPath = `${{LANGUAGE}}_audio/unit_${{UNIT_NUMBER}}/sentence_${{audioSentenceNumber}}.mp3`;
        sentencePlayer.src = audioPath;
        sentencePlayer.play().catch(error => {{
            console.error(`Could not play audio for sentence ${{audioSentenceNumber}}:`, error);
        }});
    }}

    // --- READER FUNCTIONS ---
    function populateReader(sectionIndex) {{
        readerContent.innerHTML = '';
        const start = sectionIndex * 10;
        const end = start + 10;
        const sectionSentences = sentences.slice(start, end);

        sectionSentences.forEach((sentence, index) => {{
            const globalIndex = start + index;
            const displayIndex = globalIndex + 1 + SENTENCE_OFFSET;
            const blockContainer = document.createElement('div');
            blockContainer.classList.add('sentence-block', 'flex', 'items-start', 'gap-4');

            const interactiveContainer = document.createElement('div');
            interactiveContainer.classList.add('flex-grow');

            const interactiveArea = document.createElement('div');
            interactiveArea.classList.add('interactive-area');
            interactiveArea.dataset.index = globalIndex;
            
            const infoBox = document.createElement('div');
            infoBox.classList.add('info-box');
            
            const mainText = isReversed ? sentence.english : sentence[LANGUAGE];
            const hoverText = isReversed ? sentence[LANGUAGE] : sentence.english;
            const mainLangIsArabic = isReversed ? false : true;

            interactiveArea.textContent = mainText;
            interactiveArea.setAttribute('dir', mainLangIsArabic ? 'rtl' : 'ltr');
            interactiveArea.classList.toggle('font-arabic', mainLangIsArabic);
            
            infoBox.innerHTML = `<p class="text-xl font-semibold text-right ${{mainLangIsArabic ? '' : 'font-arabic'}}" dir="${{mainLangIsArabic ? 'ltr' : 'rtl'}}">${{hoverText}}</p>`;


            if (isTouchDevice) {{
                interactiveArea.addEventListener('click', () => {{
                    playSentenceAudio(globalIndex);
                    toggleInfo(interactiveArea);
                }});
            }} else {{
                interactiveArea.addEventListener('mouseenter', () => {{
                    playSentenceAudio(globalIndex);
                    showInfo(interactiveArea);
                }});
                interactiveArea.addEventListener('mouseleave', () => {{
                    hideInfo(interactiveArea);
                }});
            }}

            interactiveContainer.appendChild(interactiveArea);
            interactiveContainer.appendChild(infoBox);
            
            const numberEl = document.createElement('span');
            numberEl.textContent = toArabicNumerals(displayIndex);
            numberEl.classList.add('font-arabic', 'text-2xl', 'pt-3');
            
            if (mainLangIsArabic) {{
                blockContainer.appendChild(interactiveContainer);
                blockContainer.appendChild(numberEl);
            }} else {{
                blockContainer.appendChild(numberEl);
                blockContainer.appendChild(interactiveContainer);
            }}
            
            readerContent.appendChild(blockContainer);
        }});
        updateNavButtons();
    }}
    
    function showInfo(interactiveAreaEl) {{
        interactiveAreaEl.classList.add('active');
        interactiveAreaEl.nextElementSibling.classList.add('visible');
    }}

    function hideInfo(interactiveAreaEl) {{
        interactiveAreaEl.classList.remove('active');
        interactiveAreaEl.nextElementSibling.classList.remove('visible');
    }}

    function toggleInfo(interactiveAreaEl) {{
        const wasActive = interactiveAreaEl.classList.contains('active');
        document.querySelectorAll('.interactive-area.active').forEach(activeEl => {{
            hideInfo(activeEl);
        }});
        if (!wasActive) {{
            showInfo(interactiveAreaEl);
        }}
    }}

    // --- QUIZ FUNCTIONS ---
    function startQuiz() {{
        readerView.classList.add('hidden');
        quizView.classList.remove('hidden');
        quizContent.classList.remove('hidden');
        completionScreen.classList.add('hidden');
        sectionNav.classList.add('hidden');
        if (langInterval) clearInterval(langInterval);

        const start = currentSection * 10;
        const end = start + 10;
        
        quizQuestions = sentences.slice(start, end).map((sentence, index) => ({{
            ...sentence,
            originalIndex: start + index
        }})).sort(() => 0.5 - Math.random()).slice(0, 5);

        currentQuizIndex = 0;
        loadQuizQuestion();
    }}

    function loadQuizQuestion() {{
        wrongAttempts = 0;
        isAnswerShown = false;
        const giveUpBtn = document.getElementById('give-up-btn');
        if (giveUpBtn) giveUpBtn.remove();

        quizAnswerArea.innerHTML = '';
        quizWordBank.innerHTML = '';
        quizFeedback.innerHTML = '';
        quizAnswerArea.style.borderColor = 'transparent';

        quizProgress.textContent = `${{currentQuizIndex + 1}} / ${{quizQuestions.length}}`;
        
        quizActionBtn.style.display = 'none';
        quizActionBtn.onclick = null;

        const question = quizQuestions[currentQuizIndex];
        quizPrompt.textContent = question.english;

        const words = question[LANGUAGE].replace(/[.؟]/g, '').split(' ').filter(w => w);
        const shuffledWords = words.sort(() => 0.5 - Math.random());
        
        shuffledWords.forEach(word => {{
            const btn = document.createElement('button');
            btn.textContent = word;
            btn.className = 'word-bank-btn font-arabic text-2xl p-3 px-5 rounded-lg bg-[var(--card-bg-light)] transition-colors';
            btn.onclick = () => selectWord(btn);
            quizWordBank.appendChild(btn);
        }});
    }}

    function selectWord(btn) {{
        btn.disabled = true;
        const answerBtn = document.createElement('button');
        answerBtn.textContent = btn.textContent;
        answerBtn.className = 'answer-word-btn font-arabic text-2xl p-3 px-5 rounded-lg bg-[var(--active-color)] text-white';
        answerBtn.onclick = () => deselectWord(answerBtn, btn);
        quizAnswerArea.appendChild(answerBtn);
        liveCheckAnswer();
    }}

    function deselectWord(answerBtn, originalBtn) {{
        originalBtn.disabled = false;
        answerBtn.remove();
        liveCheckAnswer();
    }}

    function liveCheckAnswer() {{
        const answerWords = Array.from(quizAnswerArea.children).map(btn => btn.textContent);
        const constructedAnswer = answerWords.join(' ');
        const currentQuestion = quizQuestions[currentQuizIndex];
        const correctAnswerText = currentQuestion[LANGUAGE].replace(/[.؟]/g, '');
        const correctWords = correctAnswerText.split(' ').filter(w => w);

        if (!isAnswerShown) {{
            quizFeedback.textContent = '';
        }}
        quizActionBtn.style.display = 'none';
        quizAnswerArea.style.borderColor = 'transparent';
        const giveUpBtn = document.getElementById('give-up-btn');
        if (giveUpBtn) giveUpBtn.style.display = 'none';

        if (constructedAnswer === correctAnswerText) {{
            quizAnswerArea.style.borderColor = 'var(--border-correct-color)';
            quizFeedback.textContent = 'Correct!';
            quizFeedback.style.color = 'var(--correct-color)';
            
            playSentenceAudio(currentQuestion.originalIndex);

            quizActionBtn.style.display = 'block';
            quizActionBtn.textContent = 'Continue';
            quizActionBtn.className = 'bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 text-xl rounded-lg';
            quizActionBtn.onclick = nextQuestion;

            Array.from(quizWordBank.children).forEach(btn => btn.disabled = true);
            Array.from(quizAnswerArea.children).forEach(btn => btn.onclick = null);
            wrongAttempts = 0;
        }} else if (answerWords.length === correctWords.length) {{
            wrongAttempts++;
            if (!isAnswerShown) {{
                quizFeedback.textContent = 'Incorrect. Try again!';
                quizFeedback.style.color = 'var(--incorrect-color)';
            }}
            quizAnswerArea.style.borderColor = 'var(--incorrect-color)';

            if (wrongAttempts >= 3) {{
                let giveUpBtn = document.getElementById('give-up-btn');
                if (!giveUpBtn) {{
                    giveUpBtn = document.createElement('button');
                    giveUpBtn.id = 'give-up-btn';
                    giveUpBtn.textContent = 'Give Answer';
                    giveUpBtn.className = 'bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 text-xl rounded-lg';
                    giveUpBtn.onclick = showCorrectAnswer;
                    quizButtonContainer.appendChild(giveUpBtn);
                }}
                giveUpBtn.style.display = 'block';
            }}
        }}
    }}
    
    function showCorrectAnswer() {{
        isAnswerShown = true;
        const currentQuestion = quizQuestions[currentQuizIndex];
        const correctAnswerText = currentQuestion[LANGUAGE];

        quizFeedback.innerHTML = `<div dir="rtl">Correct answer: <strong class="font-semibold font-arabic">${{correctAnswerText}}</strong></div>`;
        quizFeedback.style.color = 'var(--text-color)';

        quizAnswerArea.innerHTML = '';
        Array.from(quizWordBank.children).forEach(btn => {{
            btn.disabled = false;
        }});
        
        const giveUpBtn = document.getElementById('give-up-btn');
        if (giveUpBtn) giveUpBtn.remove();
    }}

    function nextQuestion() {{
        currentQuizIndex++;
        if (currentQuizIndex < quizQuestions.length) {{
            loadQuizQuestion();
        }} else {{
            currentSection++;
            const numSections = Math.ceil(sentences.length / 10);
            if (currentSection >= numSections) {{
                showCompletionScreen();
            }} else {{
                returnToReader(currentSection);
            }}
        }}
    }}

    function showCompletionScreen() {{
        quizContent.classList.add('hidden');
        completionScreen.classList.remove('hidden');
        
        for (let i = 0; i < 100; i++) {{
            createConfetti();
        }}

        const enText = document.getElementById('completion-en');
        const arText = document.getElementById('completion-ar');
        langInterval = setInterval(() => {{
            enText.classList.toggle('hidden-lang');
            arText.classList.toggle('hidden-lang');
        }}, 2000);
    }}

    function createConfetti() {{
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        const colors = ['#fde047', '#ff7f50', '#2dd4bf', '#8a2be2', '#00ff7f'];
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = Math.random() * 2 + 3 + 's';
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 5000);
    }}

    function reviewCurrentUnit() {{
        if (langInterval) clearInterval(langInterval);
        currentSection = 0; 
        returnToReader(currentSection);
    }}

    function returnToReader(sectionIndex) {{
        if (langInterval) clearInterval(langInterval);
        quizView.classList.add('hidden');
        readerView.classList.remove('hidden');
        sectionNav.classList.remove('hidden');
        currentSection = sectionIndex;
        populateReader(currentSection);
    }}
    
    function populateNav() {{
        const numSections = Math.ceil(sentences.length / 10);
        for (let i = 0; i < numSections; i++) {{
            const btn = document.createElement('button');
            const start = i * 10 + 1 + SENTENCE_OFFSET;
            const end = Math.min(start + 9, sentences.length + SENTENCE_OFFSET);
            btn.textContent = `${{toArabicNumerals(start)}}-${{toArabicNumerals(end)}}`;
            btn.className = 'nav-btn px-4 py-2 rounded-md font-semibold bg-[var(--card-bg-light)] transition-colors font-arabic';
            btn.onclick = () => {{
                currentSection = i;
                populateReader(i);
            }};
            sectionNav.appendChild(btn);
        }}
    }}

    function updateNavButtons() {{
        const buttons = sectionNav.querySelectorAll('.nav-btn');
        buttons.forEach((btn, index) => {{
            btn.classList.toggle('active', index === currentSection);
        }});
    }}

    // --- EVENT LISTENERS ---
    startQuizBtn.addEventListener('click', startQuiz);
    reviewUnitBtn.addEventListener('click', reviewCurrentUnit);

    // --- INITIALIZATION ---
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {{
        setAndApplyTheme(savedTheme);
    }} else {{
        setAndApplyTheme('dark');
    }}
    
    const savedReverse = localStorage.getItem('languageReversed');
    if (savedReverse) {{
        isReversed = JSON.parse(savedReverse);
    }}
    
    populateNav();
    populateReader(currentSection);
</script>
"""

# --- TEMPLATE 2: FOR LTR LANGUAGES (UKRAINIAN, SPANISH, etc.) ---
JS_TEMPLATE_LTR = """
<script>
    const UNIT_NUMBER = {unit_number};
    const LANGUAGE = "{language_json_key}";
    const SENTENCE_OFFSET = (UNIT_NUMBER - 1) * 50;

    // --- DATA ---
    const sentences = [
        {sentences_array}
    ];

    // --- STATE ---
    let currentSection = 0;
    let isReversed = false;
    let quizQuestions = [];
    let currentQuizIndex = 0;
    let wrongAttempts = 0;
    let isAnswerShown = false;
    let langInterval = null;

    // --- DOM ELEMENTS ---
    const readerView = document.getElementById('reader-view');
    const quizView = document.getElementById('quiz-view');
    const quizContent = document.getElementById('quiz-content');
    const completionScreen = document.getElementById('completion-screen');
    const readerContent = document.getElementById('reader-content');
    const sectionNav = document.getElementById('section-nav');
    const startQuizBtn = document.getElementById('start-quiz-btn');
    const quizPrompt = document.getElementById('quiz-prompt');
    const quizProgress = document.getElementById('quiz-progress');
    const quizAnswerArea = document.getElementById('quiz-answer-area');
    const quizWordBank = document.getElementById('quiz-word-bank');
    const quizFeedback = document.getElementById('quiz-feedback');
    const quizActionBtn = document.getElementById('quiz-action-btn');
    const quizButtonContainer = document.getElementById('quiz-button-container');
    const themeToggle = document.getElementById('theme-toggle');
    const sunIcon = document.getElementById('theme-icon-sun');
    const moonIcon = document.getElementById('theme-icon-moon');
    const reverseToggle = document.getElementById('reverse-toggle');
    const reviewUnitBtn = document.getElementById('review-unit-btn');
    const sentencePlayer = document.getElementById('sentence-player');

    // --- UTILITY FUNCTIONS ---
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    // --- THEME ---
    function setAndApplyTheme(theme) {{
        localStorage.setItem('theme', theme);
        if (theme === 'dark') {{
            document.documentElement.classList.add('dark');
            sunIcon.classList.remove('hidden');
            moonIcon.classList.add('hidden');
        }} else {{
            document.documentElement.classList.remove('dark');
            sunIcon.classList.add('hidden');
            moonIcon.classList.remove('hidden');
        }}
    }}
    themeToggle.addEventListener('click', () => {{
        const currentTheme = localStorage.getItem('theme') || 'dark';
        setAndApplyTheme(currentTheme === 'dark' ? 'light' : 'dark');
    }});

    // --- REVERSE LANGUAGE ---
    reverseToggle.addEventListener('click', () => {{
        isReversed = !isReversed;
        localStorage.setItem('languageReversed', isReversed);
        populateReader(currentSection);
    }});

    // --- AUDIO FUNCTION ---
    function playSentenceAudio(globalIndex) {{
        const audioSentenceNumber = globalIndex + 1 + SENTENCE_OFFSET;
        const audioPath = `${{LANGUAGE}}_audio/unit_${{UNIT_NUMBER}}/sentence_${{audioSentenceNumber}}.mp3`;
        sentencePlayer.src = audioPath;
        sentencePlayer.play().catch(error => {{
            console.error(`Could not play audio for sentence ${{audioSentenceNumber}}:`, error);
        }});
    }}

    // --- READER FUNCTIONS ---
    function populateReader(sectionIndex) {{
        readerContent.innerHTML = '';
        const start = sectionIndex * 10;
        const end = start + 10;
        const sectionSentences = sentences.slice(start, end);

        sectionSentences.forEach((sentence, index) => {{
            const globalIndex = start + index;
            const displayIndex = globalIndex + 1 + SENTENCE_OFFSET;
            const blockContainer = document.createElement('div');
            blockContainer.classList.add('sentence-block', 'flex', 'items-start', 'gap-4');

            const interactiveContainer = document.createElement('div');
            interactiveContainer.classList.add('flex-grow');

            const interactiveArea = document.createElement('div');
            interactiveArea.classList.add('interactive-area');
            interactiveArea.dataset.index = globalIndex;
            
            const infoBox = document.createElement('div');
            infoBox.classList.add('info-box');
            
            const mainText = isReversed ? sentence.english : sentence[LANGUAGE];
            const hoverText = isReversed ? sentence[LANGUAGE] : sentence.english;

            interactiveArea.textContent = mainText;
            infoBox.innerHTML = `<p class="text-xl font-semibold">${{hoverText}}</p>`;

            if (isTouchDevice) {{
                interactiveArea.addEventListener('click', () => {{
                    playSentenceAudio(globalIndex);
                    toggleInfo(interactiveArea);
                }});
            }} else {{
                interactiveArea.addEventListener('mouseenter', () => {{
                    playSentenceAudio(globalIndex);
                    showInfo(interactiveArea);
                }});
                interactiveArea.addEventListener('mouseleave', () => {{
                    hideInfo(interactiveArea);
                }});
            }}

            interactiveContainer.appendChild(interactiveArea);
            interactiveContainer.appendChild(infoBox);
            
            const numberEl = document.createElement('span');
            numberEl.textContent = displayIndex;
            numberEl.classList.add('text-2xl', 'pt-3', 'font-semibold');
            
            blockContainer.appendChild(numberEl);
            blockContainer.appendChild(interactiveContainer);
            readerContent.appendChild(blockContainer);
        }});
        updateNavButtons();
    }}
    
    function showInfo(interactiveAreaEl) {{
        interactiveAreaEl.classList.add('active');
        interactiveAreaEl.nextElementSibling.classList.add('visible');
    }}

    function hideInfo(interactiveAreaEl) {{
        interactiveAreaEl.classList.remove('active');
        interactiveAreaEl.nextElementSibling.classList.remove('visible');
    }}

    function toggleInfo(interactiveAreaEl) {{
        const wasActive = interactiveAreaEl.classList.contains('active');
        document.querySelectorAll('.interactive-area.active').forEach(activeEl => {{
            hideInfo(activeEl);
        }});
        if (!wasActive) {{
            showInfo(interactiveAreaEl);
        }}
    }}

    // --- QUIZ FUNCTIONS ---
    function startQuiz() {{
        readerView.classList.add('hidden');
        quizView.classList.remove('hidden');
        quizContent.classList.remove('hidden');
        completionScreen.classList.add('hidden');
        sectionNav.classList.add('hidden');
        if (langInterval) clearInterval(langInterval);

        const start = currentSection * 10;
        const end = start + 10;
        
        quizQuestions = sentences.slice(start, end).map((sentence, index) => ({{
            ...sentence,
            originalIndex: start + index
        }})).sort(() => 0.5 - Math.random()).slice(0, 5);

        currentQuizIndex = 0;
        loadQuizQuestion();
    }}

    function loadQuizQuestion() {{
        wrongAttempts = 0;
        isAnswerShown = false;
        const giveUpBtn = document.getElementById('give-up-btn');
        if (giveUpBtn) giveUpBtn.remove();

        quizAnswerArea.innerHTML = '';
        quizWordBank.innerHTML = '';
        quizFeedback.innerHTML = '';
        quizAnswerArea.style.borderColor = 'transparent';

        quizProgress.textContent = `${{currentQuizIndex + 1}} / ${{quizQuestions.length}}`;
        
        quizActionBtn.style.display = 'none';
        quizActionBtn.onclick = null;

        const question = quizQuestions[currentQuizIndex];
        quizPrompt.textContent = question.english;

        // Create word bank from the Spanish sentence, keeping punctuation attached to words.
        const words = question[LANGUAGE].split(' ').filter(w => w);
        const shuffledWords = words.sort(() => 0.5 - Math.random());
        
        shuffledWords.forEach(word => {{
            const btn = document.createElement('button');
            btn.textContent = word;
            btn.className = 'word-bank-btn text-2xl p-3 px-5 rounded-lg bg-[var(--card-bg-light)] transition-colors';
            btn.onclick = () => selectWord(btn);
            quizWordBank.appendChild(btn);
        }});
    }}

    function selectWord(btn) {{
        btn.disabled = true;
        const answerBtn = document.createElement('button');
        answerBtn.textContent = btn.textContent;
        answerBtn.className = 'answer-word-btn text-2xl p-3 px-5 rounded-lg bg-[var(--active-color)] text-white';
        answerBtn.onclick = () => deselectWord(answerBtn, btn);
        quizAnswerArea.appendChild(answerBtn);
        liveCheckAnswer();
    }}

    function deselectWord(answerBtn, originalBtn) {{
        originalBtn.disabled = false;
        answerBtn.remove();
        liveCheckAnswer();
    }}

    function liveCheckAnswer() {{
        const answerWords = Array.from(quizAnswerArea.children).map(btn => btn.textContent);
        const constructedAnswer = answerWords.join(' ');
        const currentQuestion = quizQuestions[currentQuizIndex];
        // Compare against the full, original sentence with punctuation.
        const correctAnswerText = currentQuestion[LANGUAGE];
        const correctWords = correctAnswerText.split(' ').filter(w => w);

        if (!isAnswerShown) {{
            quizFeedback.textContent = '';
        }}
        quizActionBtn.style.display = 'none';
        quizAnswerArea.style.borderColor = 'transparent';
        const giveUpBtn = document.getElementById('give-up-btn');
        if (giveUpBtn) giveUpBtn.style.display = 'none';

        if (constructedAnswer === correctAnswerText) {{
            quizAnswerArea.style.borderColor = 'var(--border-correct-color)';
            quizFeedback.textContent = 'Correct!';
            quizFeedback.style.color = 'var(--correct-color)';
            
            playSentenceAudio(currentQuestion.originalIndex);

            quizActionBtn.style.display = 'block';
            quizActionBtn.textContent = 'Continue';
            quizActionBtn.className = 'bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 text-xl rounded-lg';
            quizActionBtn.onclick = nextQuestion;

            Array.from(quizWordBank.children).forEach(btn => btn.disabled = true);
            Array.from(quizAnswerArea.children).forEach(btn => btn.onclick = null);
            wrongAttempts = 0;
        }} else if (answerWords.length === correctWords.length) {{
            wrongAttempts++;
            if (!isAnswerShown) {{
                quizFeedback.textContent = 'Incorrect. Try again!';
                quizFeedback.style.color = 'var(--incorrect-color)';
            }}
            quizAnswerArea.style.borderColor = 'var(--incorrect-color)';

            if (wrongAttempts >= 3) {{
                let giveUpBtn = document.getElementById('give-up-btn');
                if (!giveUpBtn) {{
                    giveUpBtn = document.createElement('button');
                    giveUpBtn.id = 'give-up-btn';
                    giveUpBtn.textContent = 'Give Answer';
                    giveUpBtn.className = 'bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 text-xl rounded-lg';
                    giveUpBtn.onclick = showCorrectAnswer;
                    quizButtonContainer.appendChild(giveUpBtn);
                }}
                giveUpBtn.style.display = 'block';
            }}
        }}
    }}
    
    function showCorrectAnswer() {{
        isAnswerShown = true;
        const currentQuestion = quizQuestions[currentQuizIndex];
        const correctAnswerText = currentQuestion[LANGUAGE];

        quizFeedback.innerHTML = `Correct answer: <strong class="font-semibold">${{correctAnswerText}}</strong>`;
        quizFeedback.style.color = 'var(--text-color)';

        quizAnswerArea.innerHTML = '';
        Array.from(quizWordBank.children).forEach(btn => {{
            btn.disabled = false;
        }});
        
        const giveUpBtn = document.getElementById('give-up-btn');
        if (giveUpBtn) giveUpBtn.remove();
    }}

    function nextQuestion() {{
        currentQuizIndex++;
        if (currentQuizIndex < quizQuestions.length) {{
            loadQuizQuestion();
        }} else {{
            currentSection++;
            const numSections = Math.ceil(sentences.length / 10);
            if (currentSection >= numSections) {{
                showCompletionScreen();
            }} else {{
                returnToReader(currentSection);
            }}
        }}
    }}

    function showCompletionScreen() {{
        quizContent.classList.add('hidden');
        completionScreen.classList.remove('hidden');
        
        for (let i = 0; i < 100; i++) {{
            createConfetti();
        }}

        const enText = document.getElementById('completion-en');
        const langText = document.getElementById('completion-' + LANGUAGE.substring(0,2));
        langInterval = setInterval(() => {{
            enText.classList.toggle('hidden-lang');
            if(langText) langText.classList.toggle('hidden-lang');
        }}, 2000);
    }}

    function createConfetti() {{
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        const colors = ['#fde047', '#ff7f50', '#2dd4bf', '#8a2be2', '#00ff7f'];
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = Math.random() * 2 + 3 + 's';
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 5000);
    }}

    function reviewCurrentUnit() {{
        if (langInterval) clearInterval(langInterval);
        currentSection = 0;
        returnToReader(currentSection);
    }}

    function returnToReader(sectionIndex) {{
        if (langInterval) clearInterval(langInterval);
        quizView.classList.add('hidden');
        readerView.classList.remove('hidden');
        sectionNav.classList.remove('hidden');
        currentSection = sectionIndex;
        populateReader(currentSection);
    }}
    
    function populateNav() {{
        const numSections = Math.ceil(sentences.length / 10);
        for (let i = 0; i < numSections; i++) {{
            const btn = document.createElement('button');
            const start = i * 10 + 1 + SENTENCE_OFFSET;
            const end = Math.min(start + 9, sentences.length + SENTENCE_OFFSET);
            btn.textContent = `${{start}}-${{end}}`;
            btn.className = 'nav-btn px-4 py-2 rounded-md font-semibold bg-[var(--card-bg-light)] transition-colors';
            btn.onclick = () => {{
                currentSection = i;
                populateReader(i);
            }};
            sectionNav.appendChild(btn);
        }}
    }}

    function updateNavButtons() {{
        const buttons = sectionNav.querySelectorAll('.nav-btn');
        buttons.forEach((btn, index) => {{
            btn.classList.toggle('active', index === currentSection);
        }});
    }}

    // --- EVENT LISTENERS ---
    startQuizBtn.addEventListener('click', startQuiz);
    reviewUnitBtn.addEventListener('click', reviewCurrentUnit);

    // --- INITIALIZATION ---
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {{
        setAndApplyTheme(savedTheme);
    }} else {{
        setAndApplyTheme('dark');
    }}
    
    const savedReverse = localStorage.getItem('languageReversed');
    if (savedReverse) {{
        isReversed = JSON.parse(savedReverse);
    }}

    populateNav();
    populateReader(currentSection);
</script>
"""


# --- CORE LOGIC ---

def parse_sentences_from_text(text, lang_json_key):
    """Parses the raw text input for sentences and formats them for HTML/JS."""
    sentence_pattern = re.compile(
        r"^\*\s+\D*(\d+):.*?\*\*Sentence:\*\*\s*(.*?)\s*\((.*?)\)\s*$",
        re.MULTILINE | re.IGNORECASE
    )
    matches = sentence_pattern.findall(text)
    if not matches: return None, None

    sentences_data = []
    js_array_parts = []
    for num, sentence, translation in matches:
        sentence = sentence.strip().strip('*').strip()
        translation = translation.strip()
        sentences_data.append({"number": int(num), "sentence": sentence, "translation": translation})
        js_sentence = sentence.replace('"', '\\"').replace('\\', '\\\\')
        js_translation = translation.replace('"', '\\"').replace('\\', '\\\\')
        js_array_parts.append(f'            {{ "{lang_json_key}": "{js_sentence}", "english": "{js_translation}" }}')

    js_array_string = ",\n".join(js_array_parts)
    return sentences_data, js_array_string


def do_generation(unit_number, text_inputs, status_queue):
    """The main worker function to be run in a separate thread."""
    tasks_to_process = []
    try:
        status_queue.put("--- Starting Unit File Generation ---")
        
        for lang_name, text_content in text_inputs.items():
            if not text_content.strip():
                status_queue.put(f"INFO: Skipping {lang_name} (input is empty).")
                continue

            config = LANGUAGES_CONFIG[lang_name]
            status_queue.put(f"INFO: Processing {lang_name}...")
            
            sentences_data, js_array_string = parse_sentences_from_text(text_content, config["json_key"])

            if not sentences_data or len(sentences_data) != 50:
                count = len(sentences_data) if sentences_data else 0
                status_queue.put(f"ERROR: {lang_name} must have exactly 50 sentences, but found {count}. Skipping.")
                continue
            
            status_queue.put(f"SUCCESS: Parsed 50 sentences for {lang_name}.")

            try:
                lang_folder = os.path.join(BASE_PROJECT_PATH, config["folder_name"])
                src_html_path = os.path.join(lang_folder, f"{config['file_prefix']}_unit_1.html")
                dest_html_path = os.path.join(lang_folder, f"{config['file_prefix']}_unit_{unit_number}.html")

                shutil.copy(src_html_path, dest_html_path)
                status_queue.put(f"INFO: Copied base HTML for {lang_name}.")

                with open(dest_html_path, 'r+', encoding='utf-8') as f:
                    content = f.read()
                    
                    # Update title and review button text
                    content = re.sub(r'Unit 1: the basics', f'Unit {unit_number}', content, flags=re.IGNORECASE)
                    content = re.sub(r'>Review Unit 1</button>', f'>Review Unit {unit_number}</button>', content, flags=re.IGNORECASE)

                    if config['direction'] == 'rtl':
                        active_js_template = JS_TEMPLATE_RTL
                    else:
                        active_js_template = JS_TEMPLATE_LTR

                    new_script_content = active_js_template.format(
                        unit_number=unit_number,
                        language_json_key=config["json_key"],
                        sentences_array=js_array_string
                    )

                    content = re.sub(r'<script>(\s*const UNIT_NUMBER\s*=\s*1;[\s\S]*?)</script>', new_script_content, content, flags=re.DOTALL)

                    f.seek(0)
                    f.write(content)
                    f.truncate()
                
                status_queue.put(f"SUCCESS: Generated and transplanted script for {lang_name} Unit {unit_number}.")
                tasks_to_process.append({'config': config, 'sentences_data': sentences_data})

            except Exception as e:
                status_queue.put(f"ERROR: Failed HTML generation for {lang_name}. Details: {e}")
                continue

        status_queue.put("\n--- Starting Audio Generation ---")
        for task in tasks_to_process:
            config = task['config']
            sentences_data = task['sentences_data']
            lang_name = next(key for key, value in LANGUAGES_CONFIG.items() if value == config)

            if config["gtts_code"]:
                try:
                    lang_folder = os.path.join(BASE_PROJECT_PATH, config["folder_name"])
                    audio_dir = os.path.join(lang_folder, f"{config['folder_name']}_audio", f"unit_{unit_number}")
                    os.makedirs(audio_dir, exist_ok=True)
                    status_queue.put(f"INFO: Generating audio for {lang_name}...")
                    
                    for i, sentence_info in enumerate(sentences_data):
                        file_path = os.path.join(audio_dir, f"sentence_{sentence_info['number']}.mp3")
                        if os.path.exists(file_path):
                            status_queue.put(f"  -> Skipping existing audio {i+1}/50 ({os.path.basename(file_path)})")
                            continue
                        
                        tts = gTTS(text=sentence_info["sentence"], lang=config["gtts_code"], slow=False)
                        tts.save(file_path)
                        if (i + 1) % 10 == 0:
                            status_queue.put(f"  -> Generated audio {i+1}/50 for {lang_name}...")
                    
                    status_queue.put(f"SUCCESS: Finished audio processing for {lang_name}.")

                except Exception as e:
                    status_queue.put(f"ERROR: Failed audio generation for {lang_name}. Details: {e}")
            else:
                status_queue.put(f"INFO: Skipping audio for {lang_name} as configured.")
        
        return tasks_to_process

    except Exception as e:
        status_queue.put(f"FATAL ERROR in do_generation: {e}")
        return []

# --- LANDING PAGE LOGIC ---
def create_new_button(unit_number, unit_subtitle, sentence_range, href_link):
    """Creates a new lesson button as a BeautifulSoup Tag object."""
    button_tag = BeautifulSoup(f'<a href="{href_link}" class="lesson-button"></a>', 'html.parser').a
    title_div = BeautifulSoup('<div class="lesson-title"></div>', 'html.parser').div
    line1_span = BeautifulSoup(f'<span class="line1">Unit {unit_number}</span>', 'html.parser').span
    line2_span = BeautifulSoup(f'<span class="line2">{unit_subtitle}</span>', 'html.parser').span
    title_div.append(line1_span)
    title_div.append(line2_span)
    description_p = BeautifulSoup(f'<p class="lesson-description">Sentences for absolute beginners: {sentence_range}</p>', 'html.parser').p
    button_tag.append(title_div)
    button_tag.append(description_p)
    return button_tag

def update_landing_pages(unit_number, unit_subtitle, processed_tasks, status_queue):
    """Updates landing pages for languages that were successfully processed."""
    status_queue.put("\n--- Starting Landing Page Updates ---")
    
    if not processed_tasks:
        status_queue.put("INFO: No units were generated, so no landing pages to update.")
        return

    try:
        num = int(unit_number)
        start_sentence = (num - 1) * 50 + 1
        end_sentence = num * 50
        sentence_range = f"{start_sentence}-{end_sentence}"
    except ValueError:
        status_queue.put("ERROR: Unit number must be an integer for landing page updates.")
        return

    for task in processed_tasks:
        config = task['config']
        lang_folder_name = config['folder_name']
        file_prefix = config['file_prefix']
        
        file_path = LANDING_PAGE_CONFIG.get(lang_folder_name)
        if not file_path:
            status_queue.put(f"⚠️ WARNING: No landing page path configured for '{lang_folder_name}', skipping.")
            continue

        try:
            if not os.path.exists(file_path):
                status_queue.put(f"⚠️ WARNING: File not found, skipping: {file_path}")
                continue

            href_link = f"{file_prefix}_unit_{unit_number}.html"

            with open(file_path, 'r', encoding='utf-8') as f:
                soup = BeautifulSoup(f, 'html.parser')

            lesson_grid = soup.find('div', class_='lesson-grid')
            if not lesson_grid:
                status_queue.put(f"ERROR: Could not find '<div class=\"lesson-grid\">' in {file_path}. Skipping.")
                continue

            new_button = create_new_button(unit_number, unit_subtitle, sentence_range, href_link)
            lesson_grid.append("\n            ")
            lesson_grid.append(new_button)
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(str(soup.prettify()))

            status_queue.put(f"✅ Successfully updated: {os.path.basename(file_path)}")

        except Exception as e:
            status_queue.put(f"❌ FAILED to update {file_path}. Error: {e}")

def generation_worker(unit_number, unit_subtitle, text_inputs, status_queue):
    """A wrapper function to run all generation tasks in a thread."""
    processed_tasks = do_generation(unit_number, text_inputs, status_queue)
    update_landing_pages(unit_number, unit_subtitle, processed_tasks, status_queue)
    status_queue.put("\n--- All Processes Finished ---")


# --- GUI APPLICATION ---
class UnitGeneratorApp(tk.Tk):
    def __init__(self):
        super().__init__()
        self.title("Hopkins Method Unit Generator")
        self.geometry("900x800")
        self.text_boxes = {}
        self.status_queue = queue.Queue()
        self._create_widgets()
        self.process_queue()

    def _create_widgets(self):
        main_frame = ttk.Frame(self, padding="10")
        main_frame.pack(fill=tk.BOTH, expand=True)
        main_frame.columnconfigure(0, weight=1)
        main_frame.rowconfigure(1, weight=1)

        # --- Controls Frame ---
        controls_frame = ttk.Frame(main_frame)
        controls_frame.grid(row=0, column=0, sticky="ew", pady=(0, 10))
        
        # Unit Number
        ttk.Label(controls_frame, text="New Unit Number:", font=('Helvetica', 10, 'bold')).pack(side=tk.LEFT, padx=(0, 5))
        self.unit_var = tk.StringVar()
        self.unit_entry = ttk.Entry(controls_frame, textvariable=self.unit_var, width=10)
        self.unit_entry.pack(side=tk.LEFT, padx=(0, 20))

        # Unit Subtitle
        ttk.Label(controls_frame, text="Unit Subtitle:", font=('Helvetica', 10, 'bold')).pack(side=tk.LEFT, padx=(0, 5))
        self.subtitle_var = tk.StringVar()
        self.subtitle_entry = ttk.Entry(controls_frame, textvariable=self.subtitle_var, width=40)
        self.subtitle_entry.pack(side=tk.LEFT)

        # --- Notebook for Text Inputs ---
        notebook = ttk.Notebook(main_frame)
        notebook.grid(row=1, column=0, sticky="nsew", pady=10)
        
        for lang_name in LANGUAGES_CONFIG.keys():
            tab_frame = ttk.Frame(notebook, padding="10")
            notebook.add(tab_frame, text=lang_name)
            text_area = scrolledtext.ScrolledText(tab_frame, wrap=tk.WORD, height=15, font=('Arial', 12))
            text_area.pack(fill=tk.BOTH, expand=True)
            self.text_boxes[lang_name] = text_area

        self.generate_button = ttk.Button(main_frame, text="Generate All Unit Files", command=self.start_generation)
        self.generate_button.grid(row=2, column=0, sticky="ew", ipady=10, pady=5)

        log_frame = ttk.LabelFrame(main_frame, text="Status Log", padding="10")
        log_frame.grid(row=3, column=0, sticky="nsew")
        log_frame.columnconfigure(0, weight=1)
        log_frame.rowconfigure(0, weight=1)
        self.log_area = scrolledtext.ScrolledText(log_frame, wrap=tk.WORD, height=10, state='disabled', font=('Courier New', 10))
        self.log_area.grid(row=0, column=0, sticky="nsew")
        
    def log_message(self, message):
        self.log_area.configure(state='normal')
        self.log_area.insert(tk.END, message + "\n")
        self.log_area.configure(state='disabled')
        self.log_area.see(tk.END)

    def start_generation(self):
        unit_number_str = self.unit_var.get()
        unit_subtitle_str = self.subtitle_var.get()

        if not unit_number_str.isdigit() or int(unit_number_str) <= 0:
            messagebox.showerror("Invalid Input", "Please enter a valid, positive unit number.")
            return
        
        if not unit_subtitle_str.strip():
            messagebox.showerror("Invalid Input", "Please enter a unit subtitle.")
            return

        text_inputs = {lang: self.text_boxes[lang].get("1.0", tk.END) for lang in LANGUAGES_CONFIG}
        self.generate_button.config(state="disabled")
        self.log_message("Starting generation... GUI will remain responsive.")
        
        threading.Thread(
            target=generation_worker,
            args=(int(unit_number_str), unit_subtitle_str, text_inputs, self.status_queue),
            daemon=True
        ).start()

    def process_queue(self):
        try:
            message = self.status_queue.get_nowait()
            self.log_message(message)
            if "--- All Processes Finished ---" in message or "FATAL ERROR" in message:
                self.generate_button.config(state="normal")
        except queue.Empty:
            pass
        finally:
            self.after(100, self.process_queue)

if __name__ == "__main__":
    app = UnitGeneratorApp()
    app.mainloop()
