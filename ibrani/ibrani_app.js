// --- GLOBAL STATE ---
        let currentLang = 'ku';
        let currentView = 'toc';
        let currentTab = 'reference'; 
        let currentCategory = 'letters'; 
        
        let fcIndex = 0;
        let isCardFlipped = false;

        let currentAlphabetGameTab = 'letters';
        let alphaLeftPairs = [];
        let alphaRightPairs = [];
        let alphaSelectedLeft = null;
        let alphaSelectedRight = null;
        let alphaMatches = 0;

        // Games State - Beş 1
        let currentGameTab = 'wb';
        let wbOrder = [];
        let wbIndex = 0;
        let wbCurrentSlots = [];
        let wbPool = [];

        let cpLeftPairs = [];
        let cpRightPairs = [];
        let cpSelectedLeft = null;
        let cpSelectedRight = null;
        let cpMatches = 0;

        let sbOrder = [];
        let sbIndex = 0;
        let sbCurrentSlots = [];
        let sbPool = [];

        // Games State - Beş 2
        let b2CurrentGameTab = 'wb';
        let b2SpeakerGender = 'masc';
        let b2WbData = [];
        let b2WbOrder = [];
        let b2WbIndex = 0;
        let b2WbCurrentSlots = [];
        let b2WbPool = [];

        let b2CpRound = 1;
        let b2CpOrder = [];
        let b2CpLeftPairs = [];
        let b2CpRightPairs = [];
        let b2CpSelectedLeft = null;
        let b2CpSelectedRight = null;
        let b2CpMatches = 0;

        let b2SbOrder = [];
        let b2SbIndex = 0;
        let b2SbCurrentSlots = [];
        let b2SbPool = [];

        let b2CgPhase = 'pronoun';
        let b2CgIndex = 0;
        let b2CgOptions = [];

        // Games State - Beş 3
        let b3CurrentGameTab = 'wb';
        let b3WbData = [];
        let b3WbOrder = [];
        let b3WbIndex = 0;
        let b3WbCurrentSlots = [];
        let b3WbPool = [];

        let b3CpRound = 1;
        let b3CpOrder = [];
        let b3CpLeftPairs = [];
        let b3CpRightPairs = [];
        let b3CpSelectedLeft = null;
        let b3CpSelectedRight = null;
        let b3CpMatches = 0;

        let b3SbOrder = [];
        let b3SbIndex = 0;
        let b3SbCurrentSlots = [];
        let b3SbPool = [];

        let b3CgPhase = 'pronoun';
        let b3CgIndex = 0;
        let b3CgOptions = [];

        let b3GenderOrder = [];
        let b3GenderIndex = 0;
        let b3GenderScore = 0;

        // ── B4 State ──────────────────────────────────────────────────────────
        let b4CurrentGameTab = 'wb';
        let b4WbData = [];
        let b4WbOrder = [];
        let b4WbIndex = 0;
        let b4WbCurrentSlots = [];
        let b4WbPool = [];

        let b4CpRound = 1;
        let b4CpOrder = [];
        let b4CpLeftPairs = [];
        let b4CpRightPairs = [];
        let b4CpSelectedLeft = null;
        let b4CpSelectedRight = null;
        let b4CpMatches = 0;

        let b4SbOrder = [];
        let b4SbIndex = 0;
        let b4SbCurrentSlots = [];
        let b4SbPool = [];

        let b4CgPhase = 'pronoun';
        let b4CgIndex = 0;
        let b4CgOptions = [];

        let b4GenderOrder = [];
        let b4GenderIndex = 0;
        let b4GenderScore = 0;

        // ── B5 State ──────────────────────────────────────────────────────
        let b5CurrentGameTab = 'wb';
        let b5WbData = [];
        let b5WbOrder = [];
        let b5WbIndex = 0;
        let b5WbCurrentSlots = [];
        let b5WbPool = [];

        let b5CpRound = 1;
        let b5CpOrder = [];
        let b5CpLeftPairs = [];
        let b5CpRightPairs = [];
        let b5CpSelectedLeft = null;
        let b5CpSelectedRight = null;
        let b5CpMatches = 0;

        let b5SbOrder = [];
        let b5SbIndex = 0;
        let b5SbCurrentSlots = [];
        let b5SbPool = [];

        let b5TimeOrder = [];
        let b5TimeIndex = 0;
        let b5TimeScore = 0;

        // ── B6 State ──────────────────────────────────────────────────────
        let b6CurrentGameTab = 'wb';
        let b6WbData = [];
        let b6WbOrder = [];
        let b6WbIndex = 0;
        let b6WbCurrentSlots = [];
        let b6WbPool = [];

        let b6CpRound = 1;
        let b6CpOrder = [];
        let b6CpLeftPairs = [];
        let b6CpRightPairs = [];
        let b6CpSelectedLeft = null;
        let b6CpSelectedRight = null;
        let b6CpMatches = 0;

        let b6SbOrder = [];
        let b6SbIndex = 0;
        let b6SbCurrentSlots = [];
        let b6SbPool = [];

        let b6EatCgState = { phase: 'pronoun', index: 0, options: [] };
        let b6DrinkCgState = { phase: 'pronoun', index: 0, options: [] };

        function getPageMode() {
            return document.body?.dataset.page || 'course';
        }

        function hasElement(id) {
            return document.getElementById(id) !== null;
        }

        // --- LANGUAGE & UI ---
        function toggleTheme() {
            document.documentElement.classList.toggle('dark');
            localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
        }

        function t(key) {
            return i18n[currentLang][key] || key;
        }

        function updateLanguageUI() {
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (i18n[currentLang][key]) {
                    el.innerHTML = i18n[currentLang][key];
                }
            });

            const lblKu = document.getElementById('lbl-ku');
            const lblEn = document.getElementById('lbl-en');
            if (lblKu && lblEn && currentLang === 'ku') {
                lblKu.classList.replace('text-slate-300', 'text-white');
                lblEn.classList.replace('text-white', 'text-slate-300');
                document.documentElement.lang = 'ku';
            } else if (lblKu && lblEn) {
                lblEn.classList.replace('text-slate-300', 'text-white');
                lblKu.classList.replace('text-white', 'text-slate-300');
                document.documentElement.lang = 'en';
            } else {
                document.documentElement.lang = currentLang;
            }

            const pageMode = getPageMode();
            if (pageMode === 'lesson1') {
                if (hasElement('cat-letters') && hasElement('cat-nikud')) {
                    setCategory(currentCategory);
                }
                if (hasElement('btn-alpha-game-letters')) {
                    switchAlphabetGameTab(currentAlphabetGameTab);
                }
                if (hasElement('b1-words-tbody') && hasElement('b1-hw-list')) {
                    renderBes1Text();
                }
                if (hasElement('btn-game-wb')) {
                    switchGameTab(currentGameTab);
                }
                return;
            }
            if (pageMode === 'lesson2') {
                if (hasElement('b2-dialog-container')) {
                    renderBes2();
                }
                if (hasElement('btn-b2-game-wb')) {
                    switchB2GameTab(b2CurrentGameTab);
                }
                return;
            }
            if (pageMode === 'lesson3') {
                if (hasElement('b3-dialog-container')) {
                    renderBes3();
                }
                if (hasElement('btn-b3-game-wb')) {
                    switchB3GameTab(b3CurrentGameTab);
                }
                return;
            }
            if (pageMode === 'lesson4') {
                if (hasElement('b4-dialog-container')) {
                    renderBes4();
                }
                if (hasElement('btn-b4-game-wb')) {
                    switchB4GameTab(b4CurrentGameTab);
                }
                return;
            }
            if (pageMode === 'lesson5') {
                if (hasElement('b5-dialog-container')) {
                    renderBes5();
                }
                if (hasElement('btn-b5-game-wb')) {
                    switchB5GameTab(b5CurrentGameTab);
                }
                return;
            }
            if (pageMode === 'lesson6') {
                if (hasElement('b6-dialog-container')) {
                    renderBes6();
                }
                if (hasElement('btn-b6-game-wb')) {
                    switchB6GameTab(b6CurrentGameTab);
                }
                return;
            }

            if (currentView === 'tools') {
                if (currentTab === 'reference') renderReference();
                if (currentTab === 'flashcards') renderFlashcard(true);
            } else if (currentView === 'bes1-text') {
                renderBes1Text();
                switchGameTab(currentGameTab); 
            } else if (currentView === 'bes2') {
                renderBes2();
                switchB2GameTab(b2CurrentGameTab);
            }
        }

        function toggleLanguage() {
            currentLang = document.getElementById('lang-toggle').checked ? 'en' : 'ku';
            updateLanguageUI();
        }

        function getProp(obj, propBase) {
            return obj[propBase + (currentLang === 'ku' ? 'Ku' : 'En')];
        }

        // --- VIEW MANAGER ---
        function showView(viewId) {
            currentView = viewId;
            ['view-toc', 'view-tools', 'view-bes1-text', 'view-bes2'].forEach(id => {
                const view = document.getElementById(id);
                if (!view) return;
                view.classList.add('hidden');
                view.classList.remove('block');
            });

            const targetView = document.getElementById('view-' + viewId);
            if (!targetView) return;
            targetView.classList.remove('hidden');
            targetView.classList.add('block');

            if (viewId === 'tools') {
                switchTab(currentTab);
            }

            if (viewId === 'bes1-text') {
                renderBes1Text();
                switchGameTab(currentGameTab);
            }
            if (viewId === 'bes2') {
                renderBes2();
                switchB2GameTab(b2CurrentGameTab);
            }
            
            window.scrollTo(0,0);
        }

        function switchTab(tabId) {
            currentTab = tabId;
            const baseClass = "inline-flex items-center px-4 py-2 rounded-full transition font-semibold";
            const activeClass = "bg-blue-600 text-white border border-blue-600 dark:bg-blue-500 dark:border-blue-500";
            const inactiveClass = "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700";

            ['reference', 'flashcards'].forEach(id => {
                const btn = document.getElementById('btn-' + id);
                const section = document.getElementById('sec-' + id);
                if (btn) {
                    btn.className = baseClass + " " + (tabId === id ? activeClass : inactiveClass);
                    btn.setAttribute('aria-pressed', tabId === id ? 'true' : 'false');
                }
                if (section) {
                    section.classList.add('hidden');
                }
            });
            const activeSection = document.getElementById('sec-' + tabId);
            if (activeSection) {
                activeSection.classList.remove('hidden');
            }

            if (tabId === 'reference') renderReference();
            if (tabId === 'flashcards') { fcIndex = 0; renderFlashcard(); }
        }

        function setCategory(cat) {
            currentCategory = cat;
            const base = "cat-btn w-full sm:w-auto px-6 py-3 sm:py-2 rounded-full border-2 font-bold shadow-sm transition text-lg sm:text-base";
            const lettersButton = document.getElementById('cat-letters');
            const nikudButton = document.getElementById('cat-nikud');
            if (lettersButton) {
                lettersButton.className = base + " " + (cat === 'letters' ? "bg-blue-600 border-blue-600 text-white dark:bg-blue-500 dark:border-blue-500" : "bg-white border-blue-600 text-blue-600 hover:bg-blue-50 dark:bg-slate-800 dark:border-blue-500 dark:text-blue-400");
            }
            if (nikudButton) {
                nikudButton.className = base + " " + (cat === 'nikud' ? "bg-blue-600 border-blue-600 text-white dark:bg-blue-500 dark:border-blue-500" : "bg-white border-blue-600 text-blue-600 hover:bg-blue-50 dark:bg-slate-800 dark:border-blue-500 dark:text-blue-400");
            }
            switchTab(currentTab);
        }

        function getData() {
            return currentCategory === 'letters' ? lettersData : nikudData;
        }

        function shuffleArray(array) {
            const shuffled = [...array];
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            return shuffled;
        }

        function getShuffledOrder(length) {
            return shuffleArray(Array.from({ length }, (_, index) => index));
        }

        function getHebrewTiles(text) {
            const normalized = text.normalize('NFC');
            if (typeof Intl !== 'undefined' && Intl.Segmenter) {
                const segmenter = new Intl.Segmenter('he', { granularity: 'grapheme' });
                return Array.from(segmenter.segment(normalized), ({ segment }) => segment)
                    .filter(segment => /\S/.test(segment));
            }
            return Array.from(normalized).filter(segment => /\S/.test(segment));
        }

        function getWordBreakPositions(text) {
            const words = text.split(/\s+/);
            if (words.length <= 1) return [];
            const positions = [];
            let pos = 0;
            for (let i = 0; i < words.length - 1; i++) {
                pos += getHebrewTiles(words[i]).length;
                positions.push(pos);
            }
            return positions;
        }

        function showMessage(elementId, text, isCorrect) {
            const msg = document.getElementById(elementId);
            msg.classList.remove('hidden', 'text-green-500', 'text-red-500');
            msg.innerText = text;
            msg.classList.add(isCorrect ? 'text-green-500' : 'text-red-500');
        }

        function escapeHtml(text) {
            return String(text)
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#39;');
        }

        function showMessageWithPronunciation(elementId, mainText, pronunciation, isCorrect) {
            const msg = document.getElementById(elementId);
            msg.classList.remove('hidden', 'text-green-500', 'text-red-500');
            const safeMainText = escapeHtml(mainText);
            const safePronunciation = escapeHtml(pronunciation);
            msg.innerHTML = `${safeMainText}<br><span class="block mt-1 text-base sm:text-lg font-medium">${safePronunciation}</span>`;
            msg.classList.add(isCorrect ? 'text-green-500' : 'text-red-500');
        }

        function setButtonVisibility(buttonId, isVisible) {
            const button = document.getElementById(buttonId);
            if (!button) return;
            button.classList.toggle('hidden', !isVisible);
            button.style.display = isVisible ? 'inline-flex' : 'none';
        }

        function withCorrectAnswer(answerText) {
            return `${t('msg_wrong')} ${t('msg_correct_answer')}: ${answerText}`;
        }

        // --- TOOLS RENDERING ---
        function renderReference() {
            const tbody = document.getElementById('reference-tbody');
            tbody.innerHTML = getData().map(item => `
                <tr class="hover:bg-blue-50 dark:hover:bg-slate-700/50 transition border-b border-slate-100 dark:border-slate-700">
                    <td class="p-4 text-4xl font-bold dark:text-slate-100" dir="rtl">${item.char}</td>
                    <td class="p-4 font-bold text-slate-800 dark:text-slate-200 text-lg">${getProp(item, 'name')}</td>
                    <td class="p-4 font-mono text-blue-700 dark:text-blue-400 font-medium">${getProp(item, 'sound')}</td>
                    <td class="p-4">
                        <div class="font-bold text-2xl text-slate-800 dark:text-slate-100" dir="rtl">${item.exHe}</div>
                        <div class="text-sm text-slate-500 dark:text-slate-400 font-medium">${getProp(item, 'trans')}</div>
                    </td>
                </tr>
            `).join('');
        }

        function renderFlashcard(keepFlip = false) {
            const data = getData();
            const item = data[fcIndex];
            if(!keepFlip && isCardFlipped) flipCard();

            const update = () => {
                document.getElementById('fc-front-char').innerText = item.char;
                document.getElementById('fc-back-name').innerText = getProp(item, 'name');
                document.getElementById('fc-back-sound').innerText = getProp(item, 'sound');
                document.getElementById('fc-back-example-he').innerText = item.exHe;
                document.getElementById('fc-back-example-trans').innerText = getProp(item, 'trans');
                document.getElementById('fc-counter').innerText = `${fcIndex + 1} / ${data.length}`;
            };
            (!keepFlip && isCardFlipped) ? setTimeout(update, 300) : update();
        }

        function flipCard() {
            document.getElementById('flashcard-inner').classList.toggle('rotate-y-180');
            isCardFlipped = !isCardFlipped;
        }

        function nextCard() { fcIndex = (fcIndex + 1) % getData().length; renderFlashcard(); }

        // --- LESSON RENDERING (BEŞ 1 TEXT & BEŞ 2) ---
        function renderBes1Text() {
            const langKey = currentLang === 'ku' ? 'ku' : 'en';
            document.getElementById('b1-words-tbody').innerHTML = bes1WordsData.map(item => `
                <tr class="hover:bg-blue-50 dark:hover:bg-slate-700/50 transition border-b border-slate-100 dark:border-slate-700">
                    <td class="p-4 font-medium text-slate-800 dark:text-slate-200">${item[langKey]}</td>
                    <td class="p-4 font-bold text-2xl text-slate-800 dark:text-slate-100" dir="rtl">${item.he}</td>
                    <td class="p-4 text-blue-600 dark:text-blue-400 font-mono">${item.trans}</td>
                </tr>
            `).join('');

            if (typeof renderBes1Homework === 'function') {
                renderBes1Homework();
                return;
            }

            document.getElementById('b1-hw-list').innerHTML = bes1HomeworkData.map(item => `
                <li class="pl-2">${item[langKey]}</li>
            `).join('');
        }

        function renderBes2() {
            const langKey = currentLang === 'ku' ? 'ku' : 'en';
            const spkKey = currentLang === 'ku' ? 'spkKu' : 'spkEn';

            document.getElementById('b2-dialog-container').innerHTML = bes2DialogData.map((item, idx) => {
                const isArya = idx % 2 === 0; 
                const bgClass = isArya ? 'bg-blue-50 dark:bg-blue-900/20' : 'bg-green-50 dark:bg-green-900/20';
                const textColClass = isArya ? 'text-blue-800 dark:text-blue-300' : 'text-green-800 dark:text-green-300';
                
                return `
                <div class="flex flex-col sm:flex-row gap-2 sm:gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-700 ${bgClass}">
                    <div class="font-bold w-20 flex-shrink-0 ${textColClass}">${item[spkKey]}:</div>
                    <div class="flex-grow">
                        <div class="text-xl sm:text-2xl font-bold mb-1 text-slate-900 dark:text-slate-100" dir="rtl">${item.he}</div>
                        <div class="text-sm text-slate-500 dark:text-slate-400 font-mono mb-2 text-right">${item.trans}</div>
                        <div class="font-medium text-slate-800 dark:text-slate-200">${item[langKey]}</div>
                    </div>
                </div>
            `}).join('');

            document.getElementById('b2-words-tbody').innerHTML = bes2WordsData.map(item => `
                <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition border-b border-slate-100 dark:border-slate-700">
                    <td class="p-4 font-medium text-slate-800 dark:text-slate-200">${item[langKey]}</td>
                    <td class="p-4 font-bold text-2xl text-slate-800 dark:text-slate-100" dir="rtl">${item.he}</td>
                    <td class="p-4 text-blue-600 dark:text-blue-400 font-mono">${item.trans}</td>
                </tr>
            `).join('');

            document.getElementById('b2-grammar-tbody').innerHTML = bes2GrammarData.map(item => `
                <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition border-b border-slate-200 dark:border-slate-700">
                    <td class="p-3 border-r dark:border-slate-700 text-slate-800 dark:text-slate-200">${item[langKey]}</td>
                    <td class="p-3 border-r dark:border-slate-700">
                        <div class="flex flex-col items-end">
                            <span class="font-bold text-xl text-slate-800 dark:text-slate-100" dir="rtl" lang="he">${item.he}</span>
                            <span class="text-sm text-slate-400 dark:text-slate-500 font-mono">${item.pronHe}</span>
                        </div>
                    </td>
                    <td class="p-3">
                        <div class="flex flex-col items-end">
                            <span class="font-bold text-xl text-blue-700 dark:text-blue-300" dir="rtl" lang="he">${item.cgForm}</span>
                            <span class="text-sm text-slate-400 dark:text-slate-500 font-mono">${item.cgFormPron}</span>
                        </div>
                    </td>
                </tr>
            `).join('');

            if (typeof renderBes2Homework === 'function') {
                renderBes2Homework();
                return;
            }

            document.getElementById('b2-hw-list').innerHTML = bes2HomeworkData.map(item => `
                <li class="pl-2">${item[langKey]}</li>
            `).join('');
        }

        // --- GAME LOGIC (BEŞ 1 GAMES) ---
        function getAlphabetGameItems() {
            if (currentAlphabetGameTab === 'letters') {
                return lettersData.map((item, index) => ({
                    id: `letter-${index}`,
                    left: getProp(item, 'sound'),
                    leftSecondary: `(${getProp(item, 'name')})`,
                    right: item.char
                }));
            }

            return nikudData.map((item, index) => ({
                id: `nikud-${index}`,
                left: getProp(item, 'sound'),
                leftSecondary: '',
                right: item.char
            }));
        }

        function switchAlphabetGameTab(tabId) {
            currentAlphabetGameTab = tabId;
            const baseClass = "nav-btn px-6 py-3 rounded-full font-bold shadow-sm transition";
            const activeClass = "bg-blue-600 text-white dark:bg-blue-500";
            const inactiveClass = "bg-white text-blue-600 border border-blue-600 hover:bg-blue-50 dark:bg-slate-800 dark:border-blue-500 dark:text-blue-400 dark:hover:bg-slate-700";

            ['letters', 'nikud'].forEach(id => {
                const btn = document.getElementById('btn-alpha-game-' + id);
                if (btn) {
                    btn.className = baseClass + " " + (tabId === id ? activeClass : inactiveClass);
                }
            });

            const instruction = document.getElementById('alpha-game-instruction');
            if (instruction) {
                instruction.innerText = t(tabId === 'letters' ? 'alpha_inst_letters' : 'alpha_inst_nikud');
            }

            initAlphabetGame();
        }

        function initAlphabetGame() {
            alphaMatches = 0;
            alphaSelectedLeft = null;
            alphaSelectedRight = null;

            const msg = document.getElementById('alpha-msg');
            const winPanel = document.getElementById('alpha-win-panel');
            if (msg) msg.classList.add('hidden');
            if (winPanel) winPanel.classList.add('hidden');

            const items = getAlphabetGameItems();
            alphaLeftPairs = shuffleArray(items.map(item => ({ ...item, matched: false, matchText: '' })));
            alphaRightPairs = shuffleArray(items.map(item => ({ ...item, matched: false, matchText: '' })));

            renderAlphabetGame();
        }

        function renderAlphabetGame() {
            const leftContainer = document.getElementById('alpha-left');
            const rightContainer = document.getElementById('alpha-right');
            if (!leftContainer || !rightContainer) return;

            leftContainer.innerHTML = alphaLeftPairs.map((item, index) => {
                const isMatched = item.matched;
                const isSelected = alphaSelectedLeft === index;
                let classes = "pair-btn w-full h-[4.25rem] px-4 py-2 border-2 rounded-xl transition shadow-sm flex flex-col items-center justify-center ";
                if (isMatched) classes += "matched text-sm sm:text-base";
                else if (isSelected) classes += "selected text-base";
                else classes += "bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-blue-50 hover:border-blue-300 dark:hover:bg-slate-600 text-base";

                const label = isMatched
                    ? item.matchText
                    : item.leftSecondary
                        ? `<span class="block text-base font-bold leading-none">${item.left}</span><span class="block mt-0.5 text-xs font-medium leading-tight opacity-80">${item.leftSecondary}</span>`
                        : item.left;

                return `<button class="${classes}" ${isMatched ? 'disabled' : `onclick="selectAlphabetPair('left', ${index})"`}>${label}</button>`;
            }).join('');

            rightContainer.innerHTML = alphaRightPairs.map((item, index) => {
                const isMatched = item.matched;
                const isSelected = alphaSelectedRight === index;
                let classes = "pair-btn w-full p-4 border-2 rounded-xl font-bold transition shadow-sm ";
                if (isMatched) classes += "matched text-sm sm:text-base";
                else if (isSelected) classes += "selected text-2xl";
                else classes += "bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-slate-800 dark:text-slate-100 hover:bg-blue-50 hover:border-blue-300 dark:hover:bg-slate-600 text-2xl";

                return `<button class="${classes}" dir="${isMatched ? 'ltr' : 'rtl'}" ${isMatched ? 'disabled' : `onclick="selectAlphabetPair('right', ${index})"`}>${isMatched ? item.matchText : item.right}</button>`;
            }).join('');
        }

        function selectAlphabetPair(side, index) {
            const msg = document.getElementById('alpha-msg');
            if (msg) msg.classList.add('hidden');

            if (side === 'left') {
                alphaSelectedLeft = alphaSelectedLeft === index ? null : index;
            } else {
                alphaSelectedRight = alphaSelectedRight === index ? null : index;
            }

            renderAlphabetGame();

            if (alphaSelectedLeft !== null && alphaSelectedRight !== null) {
                setTimeout(checkAlphabetPairMatch, 300);
            }
        }

        function checkAlphabetPairMatch() {
            const leftItem = alphaLeftPairs[alphaSelectedLeft];
            const rightItem = alphaRightPairs[alphaSelectedRight];
            const answerText = `${leftItem.right} - ${leftItem.left}${leftItem.leftSecondary ? ` ${leftItem.leftSecondary}` : ''}`;

            if (leftItem.id === rightItem.id) {
                leftItem.matched = true;
                rightItem.matched = true;
                leftItem.matchText = answerText;
                rightItem.matchText = answerText;
                alphaMatches++;

                if (alphaMatches === alphaLeftPairs.length) {
                    const winPanel = document.getElementById('alpha-win-panel');
                    if (winPanel) winPanel.classList.remove('hidden');
                    showMessage('alpha-msg', t('msg_win'), true);
                }
            } else {
                showMessage('alpha-msg', withCorrectAnswer(answerText), false);
            }

            alphaSelectedLeft = null;
            alphaSelectedRight = null;
            renderAlphabetGame();
        }

        function switchGameTab(tabId) {
            currentGameTab = tabId;
            const baseClass = "nav-btn px-6 py-3 rounded-full font-bold shadow-sm transition";
            const activeClass = "bg-blue-600 text-white dark:bg-blue-500";
            const inactiveClass = "bg-white text-blue-600 border border-blue-600 hover:bg-blue-50 dark:bg-slate-800 dark:border-blue-500 dark:text-blue-400 dark:hover:bg-slate-700";
            
            ['wb', 'cp', 'sb'].forEach(id => {
                const btn = document.getElementById('btn-game-' + id);
                btn.className = baseClass + " " + (tabId === id ? activeClass : inactiveClass);
                document.getElementById('game-' + id).classList.add('hidden');
            });
            
            document.getElementById('game-' + tabId).classList.remove('hidden');

            if(tabId === 'wb') initWordBuilder();
            if(tabId === 'cp') initConnectPairs();
            if(tabId === 'sb') initSentenceBuilder();
        }

        function initWordBuilder() {
            if (!wbOrder.length || wbIndex >= wbOrder.length) {
                wbOrder = getShuffledOrder(bes1WordsData.length);
                wbIndex = 0;
            }
            const item = bes1WordsData[wbOrder[wbIndex]];
            const targetLetters = getHebrewTiles(item.he);
            
            document.getElementById('wb-target-word').innerText = item[currentLang];
            document.getElementById('wb-msg').classList.add('hidden');
            setButtonVisibility('wb-check-btn', true);
            setButtonVisibility('wb-retry-btn', false);
            setButtonVisibility('wb-next-btn', false);

            wbCurrentSlots = Array(targetLetters.length).fill(null);
            wbPool = shuffleArray(targetLetters);

            renderWordBuilder();
        }

        function renderWordBuilder() {
            const item = bes1WordsData[wbOrder[wbIndex]];
            const heWords = item.he.split(/\s+/);
            const wordStyles = [
                { filled: 'border-blue-500 bg-blue-50 dark:bg-blue-900/60 dark:border-blue-400 cursor-pointer', empty: 'border-blue-300 dark:border-blue-700' },
                { filled: 'border-green-500 bg-green-50 dark:bg-green-900/60 dark:border-green-400 cursor-pointer', empty: 'border-green-300 dark:border-green-700' },
                { filled: 'border-purple-500 bg-purple-50 dark:bg-purple-900/60 dark:border-purple-400 cursor-pointer', empty: 'border-purple-300 dark:border-purple-700' },
            ];

            const slotsContainer = document.getElementById('wb-slots');
            let slotsHtml = '';

            let slotIndex = 0;
            slotsHtml += '<div class="w-full space-y-2">';
            for (let wordIdx = 0; wordIdx < heWords.length; wordIdx++) {
                const wordLetterCount = getHebrewTiles(heWords[wordIdx]).length;
                const style = wordStyles[wordIdx % wordStyles.length];
                slotsHtml += '<div class="flex flex-row-reverse justify-start gap-2">';
                for (let l = 0; l < wordLetterCount; l++) {
                    const letter = wbCurrentSlots[slotIndex];
                    const i = slotIndex;
                    slotsHtml += `<div class="w-14 h-16 sm:w-16 sm:h-20 border-2 border-dashed ${letter ? style.filled : style.empty} rounded-xl flex items-center justify-center text-3xl font-bold text-slate-800 dark:text-slate-100 shadow-inner" onclick="if('${letter}' !== 'null') removeLetterFromSlot(${i})">${letter || ''}</div>`;
                    slotIndex++;
                }
                slotsHtml += '</div>';
            }
            slotsHtml += '</div>';
            slotsContainer.innerHTML = slotsHtml;

            const poolContainer = document.getElementById('wb-pool');
            poolContainer.innerHTML = wbPool.map((letter, i) => `
                <button onclick="addLetterToSlot(${i})" class="w-14 h-16 sm:w-16 sm:h-20 bg-white dark:bg-slate-700 border-2 border-slate-200 dark:border-slate-600 rounded-xl flex items-center justify-center text-3xl font-bold text-blue-600 dark:text-blue-400 shadow hover:bg-slate-50 hover:-translate-y-1 transition transform">
                    ${letter}
                </button>
            `).join('');
        }

        function addLetterToSlot(poolIndex) {
            const letter = wbPool[poolIndex];
            const emptySlotIndex = wbCurrentSlots.indexOf(null);
            if (emptySlotIndex !== -1) {
                wbCurrentSlots[emptySlotIndex] = letter;
                wbPool.splice(poolIndex, 1);
                renderWordBuilder();
            }
        }

        function removeLetterFromSlot(slotIndex) {
            const letter = wbCurrentSlots[slotIndex];
            if (letter) {
                wbPool.push(letter);
                wbCurrentSlots[slotIndex] = null;
                renderWordBuilder();
            }
        }

        function checkWordBuilder() {
            const item = bes1WordsData[wbOrder[wbIndex]];
            const targetLetters = getHebrewTiles(item.he);
            const isComplete = wbCurrentSlots.every(s => s !== null);
            if(!isComplete) return;

            const isCorrect = wbCurrentSlots.join('') === targetLetters.join('');

            if(isCorrect) {
                showMessageWithPronunciation('wb-msg', t('msg_correct'), item.trans, true);
                setButtonVisibility('wb-check-btn', false);
                setButtonVisibility('wb-retry-btn', false);
                setButtonVisibility('wb-next-btn', true);
            } else {
                showMessageWithPronunciation('wb-msg', withCorrectAnswer(item.he), item.trans, false);
                setButtonVisibility('wb-check-btn', false);
                setButtonVisibility('wb-retry-btn', true);
                setButtonVisibility('wb-next-btn', false);
            }
        }

        function retryWordBuilder() {
            initWordBuilder();
        }

        function nextWordBuilder() {
            wbIndex++;
            initWordBuilder();
        }

        function initConnectPairs() {
            cpMatches = 0;
            cpSelectedLeft = null;
            cpSelectedRight = null;
            
            document.getElementById('cp-msg').classList.add('hidden');
            document.getElementById('cp-win-panel').classList.add('hidden');
            
            const words = bes1WordsData.map(w => ({...w, matched: false, matchText: ''}));
            cpLeftPairs = shuffleArray(words);
            cpRightPairs = shuffleArray(words);

            renderConnectPairs();
        }

        function renderConnectPairs() {
            const leftContainer = document.getElementById('cp-left');
            const rightContainer = document.getElementById('cp-right');

            leftContainer.innerHTML = cpLeftPairs.map((item, i) => {
                const isMatched = item.matched;
                const isSelected = cpSelectedLeft === i;
                let classes = "pair-btn w-full p-4 border-2 rounded-xl font-bold transition shadow-sm ";
                if(isMatched) classes += " matched text-sm sm:text-base";
                else if(isSelected) classes += " selected text-lg";
                else classes += " bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-blue-50 hover:border-blue-300 dark:hover:bg-slate-600 text-lg";
                
                return `<button class="${classes}" ${isMatched ? 'disabled' : `onclick="selectPair('left', ${i})"`}>${isMatched ? item.matchText : item[currentLang]}</button>`;
            }).join('');

            rightContainer.innerHTML = cpRightPairs.map((item, i) => {
                const isMatched = item.matched;
                const isSelected = cpSelectedRight === i;
                let classes = "pair-btn w-full p-4 border-2 rounded-xl font-bold transition shadow-sm ";
                if(isMatched) classes += " matched text-sm sm:text-base";
                else if(isSelected) classes += " selected text-2xl";
                else classes += " bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-slate-800 dark:text-slate-100 hover:bg-blue-50 hover:border-blue-300 dark:hover:bg-slate-600 text-2xl";
                
                return `<button class="${classes}" dir="${isMatched ? 'ltr' : 'rtl'}" ${isMatched ? 'disabled' : `onclick="selectPair('right', ${i})"`}>${isMatched ? item.matchText : item.he}</button>`;
            }).join('');
        }

        function selectPair(side, idx) {
            document.getElementById('cp-msg').classList.add('hidden');
            if(side === 'left') {
                if(cpSelectedLeft === idx) cpSelectedLeft = null;
                else cpSelectedLeft = idx;
            } else {
                if(cpSelectedRight === idx) cpSelectedRight = null;
                else cpSelectedRight = idx;
            }
            renderConnectPairs();

            if(cpSelectedLeft !== null && cpSelectedRight !== null) setTimeout(checkPairMatch, 300);
        }

        function checkPairMatch() {
            const leftItem = cpLeftPairs[cpSelectedLeft];
            const rightItem = cpRightPairs[cpSelectedRight];
            
            if(leftItem.he === rightItem.he) {
                leftItem.matched = true;
                rightItem.matched = true;
                const combinedText = `${leftItem[currentLang]} - ${leftItem.he} (${leftItem.trans})`;
                leftItem.matchText = combinedText;
                rightItem.matchText = combinedText;
                cpMatches++;
                if(cpMatches === bes1WordsData.length) {
                    document.getElementById('cp-win-panel').classList.remove('hidden');
                    showMessage('cp-msg', t('msg_win'), true);
                }
            } else {
                showMessageWithPronunciation('cp-msg', withCorrectAnswer(`${leftItem[currentLang]} - ${leftItem.he}`), leftItem.trans, false);
            }
            cpSelectedLeft = null;
            cpSelectedRight = null;
            renderConnectPairs();
        }

        function initSentenceBuilder() {
            if (!sbOrder.length || sbIndex >= sbOrder.length) {
                sbOrder = getShuffledOrder(bes1SentencesData.length);
                sbIndex = 0;
            }
            const item = bes1SentencesData[sbOrder[sbIndex]];
            
            document.getElementById('sb-target-sentence').innerText = item[currentLang];
            document.getElementById('sb-msg').classList.add('hidden');
            setButtonVisibility('sb-check-btn', true);
            setButtonVisibility('sb-retry-btn', false);
            setButtonVisibility('sb-next-btn', false);

            sbCurrentSlots = Array(item.words.length).fill(null);
            sbPool = shuffleArray(item.words);

            renderSentenceBuilder();
        }

        function renderSentenceBuilder() {
            const slotsContainer = document.getElementById('sb-slots');
            slotsContainer.innerHTML = sbCurrentSlots.map((word, i) => `
                <div class="px-6 py-4 border-2 border-dashed ${word ? 'border-blue-500 bg-blue-50 dark:bg-blue-900 dark:border-blue-400 cursor-pointer' : 'border-slate-300 dark:border-slate-600'} rounded-xl min-w-[5rem] flex items-center justify-center text-2xl font-bold text-slate-800 dark:text-slate-100 shadow-inner" dir="rtl" onclick="if('${word}' !== 'null') removeWordFromSlot(${i})">
                    ${word || ''}
                </div>
            `).join('');

            const poolContainer = document.getElementById('sb-pool');
            poolContainer.innerHTML = sbPool.map((word, i) => `
                <button onclick="addWordToSlot(${i})" dir="rtl" class="px-6 py-4 bg-white dark:bg-slate-700 border-2 border-slate-200 dark:border-slate-600 rounded-xl flex items-center justify-center text-2xl font-bold text-blue-600 dark:text-blue-400 shadow hover:bg-slate-50 hover:-translate-y-1 transition transform">
                    ${word}
                </button>
            `).join('');
        }

        function addWordToSlot(poolIndex) {
            const word = sbPool[poolIndex];
            const emptySlotIndex = sbCurrentSlots.indexOf(null);
            if (emptySlotIndex !== -1) {
                sbCurrentSlots[emptySlotIndex] = word;
                sbPool.splice(poolIndex, 1);
                renderSentenceBuilder();
            }
        }

        function removeWordFromSlot(slotIndex) {
            const word = sbCurrentSlots[slotIndex];
            if (word) {
                sbPool.push(word);
                sbCurrentSlots[slotIndex] = null;
                renderSentenceBuilder();
            }
        }

        function checkSentenceBuilder() {
            const item = bes1SentencesData[sbOrder[sbIndex]];
            const isComplete = sbCurrentSlots.every(s => s !== null);
            if(!isComplete) return;

            const isCorrect = JSON.stringify(sbCurrentSlots) === JSON.stringify(item.words);

            if(isCorrect) {
                showMessageWithPronunciation('sb-msg', t('msg_correct'), item.trans, true);
                setButtonVisibility('sb-check-btn', false);
                setButtonVisibility('sb-retry-btn', false);
                setButtonVisibility('sb-next-btn', true);
            } else {
                showMessageWithPronunciation('sb-msg', withCorrectAnswer(item.words.join(' ')), item.trans, false);
                setButtonVisibility('sb-check-btn', false);
                setButtonVisibility('sb-retry-btn', true);
                setButtonVisibility('sb-next-btn', false);
            }
        }

        function retrySentenceBuilder() {
            initSentenceBuilder();
        }

        function nextSentenceBuilder() {
            sbIndex++;
            initSentenceBuilder();
        }

        // --- GAME LOGIC (BEŞ 2 GAMES) ---
        function switchB2GameTab(tabId) {
            b2CurrentGameTab = tabId;
            const baseClass = "nav-btn px-6 py-3 rounded-full font-bold shadow-sm transition";
            const activeClass = "bg-green-600 text-white dark:bg-green-600";
            const inactiveClass = "bg-white text-green-600 border border-green-600 hover:bg-green-50 dark:bg-slate-800 dark:border-green-500 dark:text-green-400 dark:hover:bg-slate-700";
            
            ['wb', 'cp', 'sb', 'cg'].forEach(id => {
                const btn = document.getElementById('btn-b2-game-' + id);
                if (btn) btn.className = baseClass + " " + (tabId === id ? activeClass : inactiveClass);
                const panel = document.getElementById('b2-game-' + id);
                if (panel) panel.classList.add('hidden');
            });
            
            document.getElementById('b2-game-' + tabId).classList.remove('hidden');

            if(tabId === 'wb') initB2WordBuilder();
            if(tabId === 'cp') initB2ConnectPairs();
            if(tabId === 'sb') initB2SentenceBuilder();
            if(tabId === 'cg') initB2ConjugationGame();
        }

        // B2 Word Builder
        function getB2FilteredWords() {
            return bes2GameWordsData.filter(item => !item.speaker || item.speaker === b2SpeakerGender);
        }

        function getB2FilteredSentences() {
            return bes2GameSentencesData.filter(item => !item.speaker || item.speaker === b2SpeakerGender);
        }

        function setB2SpeakerGender(gender) {
            b2SpeakerGender = gender;
            const mascBtn = document.getElementById('b2-gender-masc');
            const femBtn = document.getElementById('b2-gender-fem');
            const activeClass = 'px-5 py-2 font-bold text-sm transition bg-green-600 text-white';
            const inactiveClass = 'px-5 py-2 font-bold text-sm transition bg-white text-green-600 dark:bg-slate-800 dark:text-green-400';
            if (mascBtn) mascBtn.className = gender === 'masc' ? activeClass : inactiveClass;
            if (femBtn) femBtn.className = gender === 'fem' ? activeClass : inactiveClass;
            b2WbOrder = [];
            b2WbIndex = 0;
            b2SbOrder = [];
            b2SbIndex = 0;
            initB2WordBuilder();
        }

        function initB2WordBuilder() {
            b2WbData = getB2FilteredWords();
            if (!b2WbOrder.length || b2WbIndex >= b2WbOrder.length) {
                b2WbOrder = getShuffledOrder(b2WbData.length);
                b2WbIndex = 0;
            }
            // Sync gender button styles
            const activeClass = 'px-5 py-2 font-bold text-sm transition bg-green-600 text-white';
            const inactiveClass = 'px-5 py-2 font-bold text-sm transition bg-white text-green-600 dark:bg-slate-800 dark:text-green-400';
            const mascBtn = document.getElementById('b2-gender-masc');
            const femBtn = document.getElementById('b2-gender-fem');
            if (mascBtn) mascBtn.className = b2SpeakerGender === 'masc' ? activeClass : inactiveClass;
            if (femBtn) femBtn.className = b2SpeakerGender === 'fem' ? activeClass : inactiveClass;

            const item = b2WbData[b2WbOrder[b2WbIndex]];
            const targetLetters = getHebrewTiles(item.he);

            const displayText = item.speaker ? item[currentLang].replace(/ \([^)]+\)$/, '') : item[currentLang];
            document.getElementById('b2-wb-target-word').innerText = displayText;
            document.getElementById('b2-wb-msg').classList.add('hidden');
            setButtonVisibility('b2-wb-check-btn', true);
            setButtonVisibility('b2-wb-retry-btn', false);
            setButtonVisibility('b2-wb-next-btn', false);

            b2WbCurrentSlots = Array(targetLetters.length).fill(null);
            b2WbPool = shuffleArray(targetLetters);

            renderB2WordBuilder();
        }

        function renderB2WordBuilder() {
            const item = b2WbData[b2WbOrder[b2WbIndex]];
            const heWords = item.he.split(/\s+/);
            const wordStyles = [
                { filled: 'border-green-500 bg-green-50 dark:bg-green-900/60 dark:border-green-400 cursor-pointer', empty: 'border-green-300 dark:border-green-700' },
                { filled: 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/60 dark:border-indigo-400 cursor-pointer', empty: 'border-indigo-300 dark:border-indigo-700' },
                { filled: 'border-purple-500 bg-purple-50 dark:bg-purple-900/60 dark:border-purple-400 cursor-pointer', empty: 'border-purple-300 dark:border-purple-700' },
            ];

            const slotsContainer = document.getElementById('b2-wb-slots');
            let slotsHtml = '';

            let slotIndex = 0;
            slotsHtml += '<div class="w-full space-y-2">';
            for (let wordIdx = 0; wordIdx < heWords.length; wordIdx++) {
                const wordLetterCount = getHebrewTiles(heWords[wordIdx]).length;
                const style = wordStyles[wordIdx % wordStyles.length];
                slotsHtml += '<div class="flex flex-row-reverse justify-start gap-2">';
                for (let l = 0; l < wordLetterCount; l++) {
                    const letter = b2WbCurrentSlots[slotIndex];
                    const i = slotIndex;
                    slotsHtml += `<div class="w-12 h-14 sm:w-16 sm:h-20 border-2 border-dashed ${letter ? style.filled : style.empty} rounded-xl flex items-center justify-center text-3xl font-bold text-slate-800 dark:text-slate-100 shadow-inner" onclick="if('${letter}' !== 'null') removeB2LetterFromSlot(${i})">${letter || ''}</div>`;
                    slotIndex++;
                }
                slotsHtml += '</div>';
            }
            slotsHtml += '</div>';
            slotsContainer.innerHTML = slotsHtml;

            const poolContainer = document.getElementById('b2-wb-pool');
            poolContainer.innerHTML = b2WbPool.map((letter, i) => `
                <button onclick="addB2LetterToSlot(${i})" class="w-12 h-14 sm:w-16 sm:h-20 bg-white dark:bg-slate-700 border-2 border-slate-200 dark:border-slate-600 rounded-xl flex items-center justify-center text-3xl font-bold text-green-600 dark:text-green-400 shadow hover:bg-slate-50 hover:-translate-y-1 transition transform">
                    ${letter}
                </button>
            `).join('');
        }

        function addB2LetterToSlot(poolIndex) {
            const letter = b2WbPool[poolIndex];
            const emptySlotIndex = b2WbCurrentSlots.indexOf(null);
            if (emptySlotIndex !== -1) {
                b2WbCurrentSlots[emptySlotIndex] = letter;
                b2WbPool.splice(poolIndex, 1);
                renderB2WordBuilder();
            }
        }

        function removeB2LetterFromSlot(slotIndex) {
            const letter = b2WbCurrentSlots[slotIndex];
            if (letter) {
                b2WbPool.push(letter);
                b2WbCurrentSlots[slotIndex] = null;
                renderB2WordBuilder();
            }
        }

        function checkB2WordBuilder() {
            const item = b2WbData[b2WbOrder[b2WbIndex]];
            const targetLetters = getHebrewTiles(item.he);
            const isComplete = b2WbCurrentSlots.every(s => s !== null);
            if(!isComplete) return;

            const isCorrect = b2WbCurrentSlots.join('') === targetLetters.join('');

            if(isCorrect) {
                showMessageWithPronunciation('b2-wb-msg', t('msg_correct'), item.trans, true);
                setButtonVisibility('b2-wb-check-btn', false);
                setButtonVisibility('b2-wb-retry-btn', false);
                setButtonVisibility('b2-wb-next-btn', true);
            } else {
                showMessageWithPronunciation('b2-wb-msg', withCorrectAnswer(item.he), item.trans, false);
                setButtonVisibility('b2-wb-check-btn', false);
                setButtonVisibility('b2-wb-retry-btn', true);
                setButtonVisibility('b2-wb-next-btn', false);
            }
        }

        function retryB2WordBuilder() {
            initB2WordBuilder();
        }

        function nextB2WordBuilder() {
            b2WbIndex++;
            initB2WordBuilder();
        }

        // B2 Connect Pairs (shown in rounds of 10 items)
        function initB2ConnectPairs() {
            b2CpRound = 1;
            b2CpOrder = getShuffledOrder(bes2WordsData.length);
            loadB2CpRound();
        }

        function nextB2CpRound() {
            b2CpRound++;
            loadB2CpRound();
        }

        function loadB2CpRound() {
            b2CpMatches = 0;
            b2CpSelectedLeft = null;
            b2CpSelectedRight = null;
            
            document.getElementById('b2-cp-msg').classList.add('hidden');
            document.getElementById('b2-cp-win-panel').classList.add('hidden');
            document.getElementById('b2-cp-next-round-panel').classList.add('hidden');
            
            const startIdx = (b2CpRound - 1) * 10;
            const endIdx = startIdx + 10;
            const roundWords = b2CpOrder
                .slice(startIdx, endIdx)
                .map(index => ({...bes2WordsData[index], matched: false, matchText: ''}));
            
            b2CpLeftPairs = shuffleArray(roundWords);
            b2CpRightPairs = shuffleArray(roundWords);

            renderB2ConnectPairs();
        }

        function renderB2ConnectPairs() {
            const leftContainer = document.getElementById('b2-cp-left');
            const rightContainer = document.getElementById('b2-cp-right');

            leftContainer.innerHTML = b2CpLeftPairs.map((item, i) => {
                const isMatched = item.matched;
                const isSelected = b2CpSelectedLeft === i;
                let classes = "pair-btn w-full p-4 border-2 rounded-xl font-bold transition shadow-sm ";
                if(isMatched) classes += " matched text-xs sm:text-base";
                else if(isSelected) classes += " selected text-base";
                else classes += " bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-green-50 hover:border-green-300 dark:hover:bg-slate-600 text-base";
                
                return `<button class="${classes}" ${isMatched ? 'disabled' : `onclick="selectB2Pair('left', ${i})"`}>${isMatched ? item.matchText : item[currentLang]}</button>`;
            }).join('');

            rightContainer.innerHTML = b2CpRightPairs.map((item, i) => {
                const isMatched = item.matched;
                const isSelected = b2CpSelectedRight === i;
                let classes = "pair-btn w-full p-4 border-2 rounded-xl font-bold transition shadow-sm ";
                if(isMatched) classes += " matched text-xs sm:text-base";
                else if(isSelected) classes += " selected text-xl";
                else classes += " bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-slate-800 dark:text-slate-100 hover:bg-green-50 hover:border-green-300 dark:hover:bg-slate-600 text-xl";
                
                return `<button class="${classes}" dir="${isMatched ? 'ltr' : 'rtl'}" ${isMatched ? 'disabled' : `onclick="selectB2Pair('right', ${i})"`}>${isMatched ? item.matchText : item.he}</button>`;
            }).join('');
        }

        function selectB2Pair(side, idx) {
            document.getElementById('b2-cp-msg').classList.add('hidden');
            if(side === 'left') {
                if(b2CpSelectedLeft === idx) b2CpSelectedLeft = null;
                else b2CpSelectedLeft = idx;
            } else {
                if(b2CpSelectedRight === idx) b2CpSelectedRight = null;
                else b2CpSelectedRight = idx;
            }
            renderB2ConnectPairs();

            if(b2CpSelectedLeft !== null && b2CpSelectedRight !== null) setTimeout(checkB2PairMatch, 300);
        }

        function checkB2PairMatch() {
            const leftItem = b2CpLeftPairs[b2CpSelectedLeft];
            const rightItem = b2CpRightPairs[b2CpSelectedRight];
            
            if(leftItem.he === rightItem.he) {
                leftItem.matched = true;
                rightItem.matched = true;
                const combinedText = `${leftItem[currentLang]} - ${leftItem.he} (${leftItem.trans})`;
                leftItem.matchText = combinedText;
                rightItem.matchText = combinedText;
                b2CpMatches++;
                
                if(b2CpMatches === b2CpLeftPairs.length) {
                    const totalRounds = Math.ceil(b2CpOrder.length / 10);
                    if(b2CpRound < totalRounds) {
                        document.getElementById('b2-cp-next-round-panel').classList.remove('hidden');
                        showMessage('b2-cp-msg', t('msg_round_win').replace('{round}', b2CpRound), true);
                    } else {
                        document.getElementById('b2-cp-win-panel').classList.remove('hidden');
                        showMessage('b2-cp-msg', t('msg_win'), true);
                    }
                }
            } else {
                showMessageWithPronunciation('b2-cp-msg', withCorrectAnswer(`${leftItem[currentLang]} - ${leftItem.he}`), leftItem.trans, false);
            }
            b2CpSelectedLeft = null;
            b2CpSelectedRight = null;
            renderB2ConnectPairs();
        }

        // B2 Sentence Builder
        function initB2SentenceBuilder() {
            const sentenceData = getB2FilteredSentences();
            if (!b2SbOrder.length || b2SbIndex >= b2SbOrder.length) {
                b2SbOrder = getShuffledOrder(sentenceData.length);
                b2SbIndex = 0;
            }
            const item = sentenceData[b2SbOrder[b2SbIndex]];
            
            document.getElementById('b2-sb-target-sentence').innerText = item[currentLang];
            document.getElementById('b2-sb-msg').classList.add('hidden');
            setButtonVisibility('b2-sb-check-btn', true);
            setButtonVisibility('b2-sb-retry-btn', false);
            setButtonVisibility('b2-sb-next-btn', false);

            b2SbCurrentSlots = Array(item.words.length).fill(null);
            b2SbPool = shuffleArray(item.words);

            renderB2SentenceBuilder();
        }

        function renderB2SentenceBuilder() {
            const slotsContainer = document.getElementById('b2-sb-slots');
            slotsContainer.innerHTML = b2SbCurrentSlots.map((word, i) => `
                <div class="px-4 py-3 sm:px-6 sm:py-4 border-2 border-dashed ${word ? 'border-green-500 bg-green-50 dark:bg-green-900 dark:border-green-400 cursor-pointer' : 'border-slate-300 dark:border-slate-600'} rounded-xl min-w-[5rem] flex items-center justify-center text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100 shadow-inner" dir="rtl" onclick="if('${word}' !== 'null') removeB2WordFromSlot(${i})">
                    ${word || ''}
                </div>
            `).join('');

            const poolContainer = document.getElementById('b2-sb-pool');
            poolContainer.innerHTML = b2SbPool.map((word, i) => `
                <button onclick="addB2WordToSlot(${i})" dir="rtl" class="px-4 py-3 sm:px-6 sm:py-4 bg-white dark:bg-slate-700 border-2 border-slate-200 dark:border-slate-600 rounded-xl flex items-center justify-center text-xl sm:text-2xl font-bold text-green-600 dark:text-green-400 shadow hover:bg-slate-50 hover:-translate-y-1 transition transform">
                    ${word}
                </button>
            `).join('');
        }

        function addB2WordToSlot(poolIndex) {
            const word = b2SbPool[poolIndex];
            const emptySlotIndex = b2SbCurrentSlots.indexOf(null);
            if (emptySlotIndex !== -1) {
                b2SbCurrentSlots[emptySlotIndex] = word;
                b2SbPool.splice(poolIndex, 1);
                renderB2SentenceBuilder();
            }
        }

        function removeB2WordFromSlot(slotIndex) {
            const word = b2SbCurrentSlots[slotIndex];
            if (word) {
                b2SbPool.push(word);
                b2SbCurrentSlots[slotIndex] = null;
                renderB2SentenceBuilder();
            }
        }

        function checkB2SentenceBuilder() {
            const sentenceData = getB2FilteredSentences();
            const item = sentenceData[b2SbOrder[b2SbIndex]];
            const isComplete = b2SbCurrentSlots.every(s => s !== null);
            if(!isComplete) return;

            const isCorrect = JSON.stringify(b2SbCurrentSlots) === JSON.stringify(item.words);

            if(isCorrect) {
                showMessageWithPronunciation('b2-sb-msg', t('msg_correct'), item.trans, true);
                setButtonVisibility('b2-sb-check-btn', false);
                setButtonVisibility('b2-sb-retry-btn', false);
                setButtonVisibility('b2-sb-next-btn', true);
            } else {
                showMessageWithPronunciation('b2-sb-msg', withCorrectAnswer(item.words.join(' ')), item.trans, false);
                setButtonVisibility('b2-sb-check-btn', false);
                setButtonVisibility('b2-sb-retry-btn', true);
                setButtonVisibility('b2-sb-next-btn', false);
            }
        }

        function retryB2SentenceBuilder() {
            initB2SentenceBuilder();
        }

        function nextB2SentenceBuilder() {
            b2SbIndex++;
            initB2SentenceBuilder();
        }

        // B2 Conjugation Game
        function getB2ConjugationOptions(phase) {
            if (phase === 'form') {
                return shuffleArray(bes2GrammarData.map(item => item.cgForm));
            }
            return shuffleArray(bes2GrammarData.map(item => item.he));
        }

        function getB2CgHeaderClass(isActive) {
            return `p-4 text-sm uppercase tracking-[0.14em] transition-colors ${isActive ? 'bg-blue-300 text-slate-900 ring-2 ring-inset ring-blue-500/60 dark:bg-blue-500/30 dark:text-white dark:ring-blue-300/60' : 'text-slate-500 dark:text-slate-400'}`;
        }

        function getB2CgPlaceholderBox(isActiveColumn, isCurrentCell) {
            const boxClass = isCurrentCell
                ? 'border-blue-500 bg-yellow-100 shadow-[0_0_0_4px_rgba(15,98,201,0.18)] dark:bg-yellow-400/15 dark:border-blue-300'
                : isActiveColumn
                    ? 'border-green-300 bg-green-50 dark:bg-green-500/10 dark:border-green-700/70'
                    : 'border-slate-200 bg-transparent dark:border-slate-700';

            return `<div class="mx-auto h-12 w-full max-w-[13rem] rounded-xl border-2 border-dashed ${boxClass}"></div>`;
        }

        function getB2CgSolvedContent(value, pronunciation, dir = 'ltr') {
            const valueMarkup = dir === 'rtl'
                ? `<span dir="rtl" lang="he" class="font-bold text-2xl text-slate-900 dark:text-slate-100">${escapeHtml(value)}</span>`
                : `<span class="font-bold text-2xl text-slate-900 dark:text-slate-100">${escapeHtml(value)}</span>`;

            return `
                <div class="flex flex-wrap items-center gap-2">
                    ${valueMarkup}
                    <span class="text-blue-700 dark:text-blue-300 font-medium">(${escapeHtml(pronunciation)})</span>
                </div>
            `;
        }

        function getB2CgOptionClass(index, isHebrewOption) {
            const palettes = isHebrewOption
                ? [
                    'border-blue-200 bg-blue-100 hover:bg-blue-200 dark:border-blue-800 dark:bg-blue-500/15 dark:hover:bg-blue-500/25',
                    'border-green-200 bg-green-100 hover:bg-green-200 dark:border-green-800 dark:bg-green-500/15 dark:hover:bg-green-500/25',
                    'border-red-200 bg-red-100 hover:bg-red-200 dark:border-red-800 dark:bg-red-500/15 dark:hover:bg-red-500/25',
                    'border-yellow-200 bg-yellow-100 hover:bg-yellow-200 dark:border-yellow-700 dark:bg-yellow-500/15 dark:hover:bg-yellow-500/25'
                ]
                : [
                    'border-blue-200 bg-blue-100 hover:bg-blue-200 dark:border-blue-800 dark:bg-blue-500/15 dark:hover:bg-blue-500/25',
                    'border-green-200 bg-green-100 hover:bg-green-200 dark:border-green-800 dark:bg-green-500/15 dark:hover:bg-green-500/25',
                    'border-red-200 bg-red-100 hover:bg-red-200 dark:border-red-800 dark:bg-red-500/15 dark:hover:bg-red-500/25',
                    'border-yellow-200 bg-yellow-100 hover:bg-yellow-200 dark:border-yellow-700 dark:bg-yellow-500/15 dark:hover:bg-yellow-500/25'
                ];

            return palettes[index % palettes.length];
        }

        function initB2ConjugationGame() {
            b2CgPhase = 'pronoun';
            b2CgIndex = 0;
            b2CgOptions = getB2ConjugationOptions('pronoun');
            document.getElementById('b2-cg-msg').classList.add('hidden');
            setButtonVisibility('b2-cg-reset-btn', false);
            renderB2ConjugationGame();
        }

        function renderB2ConjugationGame() {
            const tableBody = document.getElementById('b2-cg-table-body');
            const optionsElement = document.getElementById('b2-cg-options');
            const messageElement = document.getElementById('b2-cg-msg');
            const hebrewHead = document.getElementById('b2-cg-head-hebrew');
            const formHead = document.getElementById('b2-cg-head-form');

            if (!tableBody || !optionsElement || !messageElement || !hebrewHead || !formHead) return;

            hebrewHead.className = getB2CgHeaderClass(b2CgPhase === 'pronoun');
            formHead.className = getB2CgHeaderClass(b2CgPhase === 'form');

            tableBody.innerHTML = bes2GrammarData.map((item, index) => {
                const translation = currentLang === 'en' ? item.en : item.ku;
                const pronounSolved = b2CgPhase !== 'pronoun' || index < b2CgIndex;
                const formSolved = b2CgPhase === 'done' || (b2CgPhase === 'form' && index < b2CgIndex);
                const pronounCurrent = b2CgPhase === 'pronoun' && index === b2CgIndex;
                const formCurrent = b2CgPhase === 'form' && index === b2CgIndex;
                const hebrewCellClass = b2CgPhase === 'pronoun' ? 'bg-blue-50 ring-1 ring-inset ring-blue-300/80 dark:bg-blue-500/10 dark:ring-blue-500/40' : '';
                const formCellClass = b2CgPhase === 'form' ? 'bg-yellow-50 ring-1 ring-inset ring-yellow-300/80 dark:bg-yellow-500/10 dark:ring-yellow-500/40' : '';

                const hebrewCell = pronounSolved
                    ? getB2CgSolvedContent(item.he, item.pronHe, 'rtl')
                    : getB2CgPlaceholderBox(b2CgPhase === 'pronoun', pronounCurrent);

                const formCell = formSolved
                    ? getB2CgSolvedContent(item.cgForm, item.cgFormPron)
                    : getB2CgPlaceholderBox(b2CgPhase === 'form', formCurrent);

                return `
                    <tr>
                        <td class="p-4 font-semibold text-slate-800 dark:text-slate-100">${escapeHtml(translation)}</td>
                        <td class="p-4 ${hebrewCellClass}">${hebrewCell}</td>
                        <td class="p-4 ${formCellClass}">${formCell}</td>
                    </tr>
                `;
            }).join('');

            if (b2CgPhase === 'done') {
                optionsElement.innerHTML = '';
                showMessage('b2-cg-msg', t('cg_done'), true);
                setButtonVisibility('b2-cg-reset-btn', true);
                return;
            }

            optionsElement.innerHTML = b2CgOptions.map((option, index) => {
                const isHebrewOption = b2CgPhase === 'pronoun';
                const paletteClass = getB2CgOptionClass(index, isHebrewOption);
                return `
                    <button
                        onclick="answerB2ConjugationGame(${index})"
                        ${isHebrewOption ? 'dir="rtl" lang="he"' : ''}
                        class="min-h-[3.75rem] w-full px-5 rounded-xl border-2 ${paletteClass} text-slate-800 dark:text-slate-100 ${isHebrewOption ? 'text-2xl' : 'text-xl'} font-bold shadow-sm hover:-translate-y-0.5 transition"
                    >
                        ${escapeHtml(option)}
                    </button>
                `;
            }).join('');
        }

        function answerB2ConjugationGame(optionIndex) {
            const item = bes2GrammarData[b2CgIndex];
            const selected = b2CgOptions[optionIndex];
            if (!item) return;

            const correctAnswer = b2CgPhase === 'pronoun' ? item.he : item.cgForm;
            const pronunciation = b2CgPhase === 'pronoun' ? item.pronHe : item.cgFormPron;

            if (selected === correctAnswer) {
                b2CgIndex++;

                if (b2CgPhase === 'pronoun' && b2CgIndex >= bes2GrammarData.length) {
                    b2CgPhase = 'form';
                    b2CgIndex = 0;
                    b2CgOptions = getB2ConjugationOptions('form');
                    renderB2ConjugationGame();
                    showMessage('b2-cg-msg', t('cg_phase_forms'), true);
                    return;
                }

                if (b2CgPhase === 'form' && b2CgIndex >= bes2GrammarData.length) {
                    b2CgPhase = 'done';
                    renderB2ConjugationGame();
                    return;
                }

                renderB2ConjugationGame();
                showMessageWithPronunciation('b2-cg-msg', t('msg_correct'), pronunciation, true);
            } else {
                showMessage('b2-cg-msg', withCorrectAnswer(correctAnswer), false);
            }
        }

        // --- CHAPTER 3 RENDER & GAME LOGIC ---
        function renderBes3() {
            const langKey = currentLang === 'ku' ? 'ku' : 'en';
            const spkKey = currentLang === 'ku' ? 'spkKu' : 'spkEn';

            document.getElementById('b3-dialog-container').innerHTML = bes3DialogData.map((item, idx) => {
                const isFirst = idx % 2 === 0;
                const bgClass = isFirst ? 'bg-purple-50 dark:bg-purple-900/20' : 'bg-amber-50 dark:bg-amber-900/20';
                const textColClass = isFirst ? 'text-purple-800 dark:text-purple-300' : 'text-amber-800 dark:text-amber-300';
                return `
                <div class="flex flex-col sm:flex-row gap-2 sm:gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-700 ${bgClass}">
                    <div class="font-bold w-20 flex-shrink-0 ${textColClass}">${item[spkKey]}:</div>
                    <div class="flex-grow">
                        <div class="text-xl sm:text-2xl font-bold mb-1 text-slate-900 dark:text-slate-100" dir="rtl">${item.he}</div>
                        <div class="text-sm text-slate-500 dark:text-slate-400 font-mono mb-2 text-right">${item.trans}</div>
                        <div class="font-medium text-slate-800 dark:text-slate-200">${item[langKey]}</div>
                    </div>
                </div>
            `}).join('');

            document.getElementById('b3-words-tbody').innerHTML = bes3WordsData.map(item => `
                <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition border-b border-slate-100 dark:border-slate-700">
                    <td class="p-4 font-medium text-slate-800 dark:text-slate-200">${item[langKey]}</td>
                    <td class="p-4 font-bold text-2xl text-slate-800 dark:text-slate-100" dir="rtl">${item.he}</td>
                    <td class="p-4 text-purple-600 dark:text-purple-400 font-mono">${item.trans}</td>
                </tr>
            `).join('');

            document.getElementById('b3-grammar-tbody').innerHTML = bes3GrammarData.map(item => `
                <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition border-b border-slate-200 dark:border-slate-700">
                    <td class="p-3 border-r dark:border-slate-700 text-slate-800 dark:text-slate-200">${item[langKey]}</td>
                    <td class="p-3 border-r dark:border-slate-700">
                        <div class="flex flex-col items-end">
                            <span class="font-bold text-xl text-slate-800 dark:text-slate-100" dir="rtl" lang="he">${item.he}</span>
                            <span class="text-sm text-slate-400 dark:text-slate-500 font-mono">${item.pronHe}</span>
                        </div>
                    </td>
                    <td class="p-3">
                        <div class="flex flex-col items-end">
                            <span class="font-bold text-xl text-purple-700 dark:text-purple-300" dir="rtl" lang="he">${item.cgForm}</span>
                            <span class="text-sm text-slate-400 dark:text-slate-500 font-mono">${item.cgFormPron}</span>
                        </div>
                    </td>
                </tr>
            `).join('');

            if (typeof renderBes3Homework === 'function') {
                renderBes3Homework();
                return;
            }

            document.getElementById('b3-hw-list').innerHTML = bes3HomeworkData.map(item => `
                <li class="pl-2">${item[langKey]}</li>
            `).join('');
        }

        // B3 Game Tab Switching
        function switchB3GameTab(tabId) {
            b3CurrentGameTab = tabId;
            const baseClass = "nav-btn px-6 py-3 rounded-full font-bold shadow-sm transition";
            const activeClass = "bg-purple-600 text-white dark:bg-purple-600";
            const inactiveClass = "bg-white text-purple-600 border border-purple-600 hover:bg-purple-50 dark:bg-slate-800 dark:border-purple-500 dark:text-purple-400 dark:hover:bg-slate-700";

            ['wb', 'cp', 'sb', 'cg', 'gender'].forEach(id => {
                const btn = document.getElementById('btn-b3-game-' + id);
                if (btn) btn.className = baseClass + " " + (tabId === id ? activeClass : inactiveClass);
                const panel = document.getElementById('b3-game-' + id);
                if (panel) panel.classList.add('hidden');
            });

            document.getElementById('b3-game-' + tabId).classList.remove('hidden');

            if(tabId === 'wb') initB3WordBuilder();
            if(tabId === 'cp') initB3ConnectPairs();
            if(tabId === 'sb') initB3SentenceBuilder();
            if(tabId === 'cg') initB3ConjugationGame();
            if(tabId === 'gender') initB3GenderGame();
        }

        // B3 Word Builder
        function initB3WordBuilder() {
            b3WbData = bes3GameWordsData;
            if (!b3WbOrder.length || b3WbIndex >= b3WbOrder.length) {
                b3WbOrder = getShuffledOrder(b3WbData.length);
                b3WbIndex = 0;
            }

            const item = b3WbData[b3WbOrder[b3WbIndex]];
            const targetLetters = getHebrewTiles(item.he);

            document.getElementById('b3-wb-target-word').innerText = item[currentLang];
            document.getElementById('b3-wb-msg').classList.add('hidden');
            setButtonVisibility('b3-wb-check-btn', true);
            setButtonVisibility('b3-wb-retry-btn', false);
            setButtonVisibility('b3-wb-next-btn', false);

            b3WbCurrentSlots = Array(targetLetters.length).fill(null);
            b3WbPool = shuffleArray(targetLetters);

            renderB3WordBuilder();
        }

        function renderB3WordBuilder() {
            const item = b3WbData[b3WbOrder[b3WbIndex]];
            const heWords = item.he.split(/\s+/);
            const wordStyles = [
                { filled: 'border-purple-500 bg-purple-50 dark:bg-purple-900/60 dark:border-purple-400 cursor-pointer', empty: 'border-purple-300 dark:border-purple-700' },
                { filled: 'border-amber-500 bg-amber-50 dark:bg-amber-900/60 dark:border-amber-400 cursor-pointer', empty: 'border-amber-300 dark:border-amber-700' },
            ];

            const slotsContainer = document.getElementById('b3-wb-slots');
            let slotsHtml = '';
            let slotIndex = 0;
            slotsHtml += '<div class="w-full space-y-2">';
            for (let wordIdx = 0; wordIdx < heWords.length; wordIdx++) {
                const wordLetterCount = getHebrewTiles(heWords[wordIdx]).length;
                const style = wordStyles[wordIdx % wordStyles.length];
                slotsHtml += '<div class="flex flex-row-reverse justify-start gap-2">';
                for (let l = 0; l < wordLetterCount; l++) {
                    const letter = b3WbCurrentSlots[slotIndex];
                    const i = slotIndex;
                    slotsHtml += `<div class="w-12 h-14 sm:w-16 sm:h-20 border-2 border-dashed ${letter ? style.filled : style.empty} rounded-xl flex items-center justify-center text-3xl font-bold text-slate-800 dark:text-slate-100 shadow-inner" onclick="if('${letter}' !== 'null') removeB3LetterFromSlot(${i})">${letter || ''}</div>`;
                    slotIndex++;
                }
                slotsHtml += '</div>';
            }
            slotsHtml += '</div>';
            slotsContainer.innerHTML = slotsHtml;

            document.getElementById('b3-wb-pool').innerHTML = b3WbPool.map((letter, i) => `
                <button onclick="addB3LetterToSlot(${i})" class="w-12 h-14 sm:w-16 sm:h-20 bg-white dark:bg-slate-700 border-2 border-slate-200 dark:border-slate-600 rounded-xl flex items-center justify-center text-3xl font-bold text-purple-600 dark:text-purple-400 shadow hover:bg-slate-50 hover:-translate-y-1 transition transform">
                    ${letter}
                </button>
            `).join('');
        }

        function addB3LetterToSlot(poolIndex) {
            const letter = b3WbPool[poolIndex];
            const emptySlotIndex = b3WbCurrentSlots.indexOf(null);
            if (emptySlotIndex !== -1) {
                b3WbCurrentSlots[emptySlotIndex] = letter;
                b3WbPool.splice(poolIndex, 1);
                renderB3WordBuilder();
            }
        }

        function removeB3LetterFromSlot(slotIndex) {
            const letter = b3WbCurrentSlots[slotIndex];
            if (letter) {
                b3WbPool.push(letter);
                b3WbCurrentSlots[slotIndex] = null;
                renderB3WordBuilder();
            }
        }

        function checkB3WordBuilder() {
            const item = b3WbData[b3WbOrder[b3WbIndex]];
            const targetLetters = getHebrewTiles(item.he);
            const isComplete = b3WbCurrentSlots.every(s => s !== null);
            if(!isComplete) return;
            const isCorrect = b3WbCurrentSlots.join('') === targetLetters.join('');
            if(isCorrect) {
                showMessageWithPronunciation('b3-wb-msg', t('msg_correct'), item.trans, true);
                setButtonVisibility('b3-wb-check-btn', false);
                setButtonVisibility('b3-wb-retry-btn', false);
                setButtonVisibility('b3-wb-next-btn', true);
            } else {
                showMessageWithPronunciation('b3-wb-msg', withCorrectAnswer(item.he), item.trans, false);
                setButtonVisibility('b3-wb-check-btn', false);
                setButtonVisibility('b3-wb-retry-btn', true);
                setButtonVisibility('b3-wb-next-btn', false);
            }
        }

        function retryB3WordBuilder() { initB3WordBuilder(); }
        function nextB3WordBuilder() { b3WbIndex++; initB3WordBuilder(); }

        // B3 Connect Pairs
        function initB3ConnectPairs() {
            b3CpRound = 1;
            b3CpOrder = getShuffledOrder(bes3WordsData.length);
            loadB3CpRound();
        }

        function nextB3CpRound() { b3CpRound++; loadB3CpRound(); }

        function loadB3CpRound() {
            b3CpMatches = 0;
            b3CpSelectedLeft = null;
            b3CpSelectedRight = null;
            document.getElementById('b3-cp-msg').classList.add('hidden');
            document.getElementById('b3-cp-win-panel').classList.add('hidden');
            document.getElementById('b3-cp-next-round-panel').classList.add('hidden');

            const startIdx = (b3CpRound - 1) * 10;
            const endIdx = startIdx + 10;
            const roundWords = b3CpOrder
                .slice(startIdx, endIdx)
                .map(index => ({...bes3WordsData[index], matched: false, matchText: ''}));

            b3CpLeftPairs = shuffleArray(roundWords);
            b3CpRightPairs = shuffleArray(roundWords);
            renderB3ConnectPairs();
        }

        function renderB3ConnectPairs() {
            const leftContainer = document.getElementById('b3-cp-left');
            const rightContainer = document.getElementById('b3-cp-right');

            leftContainer.innerHTML = b3CpLeftPairs.map((item, i) => {
                const isMatched = item.matched;
                const isSelected = b3CpSelectedLeft === i;
                return `<button onclick="selectB3Pair('left',${i})" class="pair-btn w-full p-3 sm:p-4 rounded-xl border-2 font-bold text-lg transition ${isMatched ? 'matched' : isSelected ? 'selected' : 'bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-slate-800 dark:text-slate-100 hover:border-purple-400'}" ${isMatched ? 'disabled' : ''}>${isMatched ? item.matchText : item[currentLang]}</button>`;
            }).join('');

            rightContainer.innerHTML = b3CpRightPairs.map((item, i) => {
                const isMatched = item.matched;
                const isSelected = b3CpSelectedRight === i;
                return `<button onclick="selectB3Pair('right',${i})" dir="rtl" class="pair-btn w-full p-3 sm:p-4 rounded-xl border-2 font-bold text-xl transition ${isMatched ? 'matched' : isSelected ? 'selected' : 'bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-slate-800 dark:text-slate-100 hover:border-purple-400'}" ${isMatched ? 'disabled' : ''}>${isMatched ? item.matchText : item.he}</button>`;
            }).join('');
        }

        function selectB3Pair(side, idx) {
            if (side === 'left') {
                if (b3CpLeftPairs[idx].matched) return;
                b3CpSelectedLeft = idx;
            } else {
                if (b3CpRightPairs[idx].matched) return;
                b3CpSelectedRight = idx;
            }
            renderB3ConnectPairs();
            if (b3CpSelectedLeft !== null && b3CpSelectedRight !== null) checkB3PairMatch();
        }

        function checkB3PairMatch() {
            const left = b3CpLeftPairs[b3CpSelectedLeft];
            const right = b3CpRightPairs[b3CpSelectedRight];
            const isMatch = left.he === right.he;

            if (isMatch) {
                left.matched = true;
                right.matched = true;
                left.matchText = `${left[currentLang]} = ${left.he}`;
                right.matchText = left.matchText;
                b3CpMatches++;
                showMessage('b3-cp-msg', t('msg_correct'), true);
            } else {
                showMessage('b3-cp-msg', t('msg_wrong'), false);
                const li = b3CpSelectedLeft;
                const ri = b3CpSelectedRight;
                b3CpLeftPairs[li].error = true;
                b3CpRightPairs[ri].error = true;
                renderB3ConnectPairs();
                setTimeout(() => {
                    b3CpLeftPairs[li].error = false;
                    b3CpRightPairs[ri].error = false;
                    b3CpSelectedLeft = null;
                    b3CpSelectedRight = null;
                    renderB3ConnectPairs();
                }, 700);
                return;
            }

            b3CpSelectedLeft = null;
            b3CpSelectedRight = null;
            renderB3ConnectPairs();

            if (b3CpMatches >= b3CpLeftPairs.length) {
                const hasMore = b3CpRound * 10 < b3CpOrder.length;
                if (hasMore) {
                    showMessage('b3-cp-msg', t('msg_round_win').replace('{round}', b3CpRound), true);
                    document.getElementById('b3-cp-next-round-panel').classList.remove('hidden');
                } else {
                    showMessage('b3-cp-msg', t('msg_win'), true);
                    document.getElementById('b3-cp-win-panel').classList.remove('hidden');
                }
            }
        }

        // B3 Sentence Builder
        function initB3SentenceBuilder() {
            if (!b3SbOrder.length || b3SbIndex >= b3SbOrder.length) {
                b3SbOrder = getShuffledOrder(bes3GameSentencesData.length);
                b3SbIndex = 0;
            }
            const item = bes3GameSentencesData[b3SbOrder[b3SbIndex]];
            document.getElementById('b3-sb-target-sentence').innerText = item[currentLang];
            document.getElementById('b3-sb-msg').classList.add('hidden');
            setButtonVisibility('b3-sb-check-btn', true);
            setButtonVisibility('b3-sb-retry-btn', false);
            setButtonVisibility('b3-sb-next-btn', false);

            b3SbCurrentSlots = Array(item.words.length).fill(null);
            b3SbPool = shuffleArray([...item.words]);
            renderB3SentenceBuilder();
        }

        function renderB3SentenceBuilder() {
            document.getElementById('b3-sb-slots').innerHTML = b3SbCurrentSlots.map((word, i) =>
                `<div class="min-w-[4rem] h-14 border-2 border-dashed ${word ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/60 dark:border-purple-400 cursor-pointer' : 'border-purple-300 dark:border-purple-700'} rounded-xl flex items-center justify-center text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100 px-3" dir="rtl" onclick="if('${word}' !== 'null') removeB3WordFromSlot(${i})">${word || ''}</div>`
            ).join('');

            document.getElementById('b3-sb-pool').innerHTML = b3SbPool.map((word, i) =>
                `<button onclick="addB3WordToSlot(${i})" dir="rtl" class="min-w-[4rem] h-14 bg-white dark:bg-slate-700 border-2 border-slate-200 dark:border-slate-600 rounded-xl flex items-center justify-center text-xl sm:text-2xl font-bold text-purple-600 dark:text-purple-400 px-3 shadow hover:bg-slate-50 hover:-translate-y-1 transition transform">${word}</button>`
            ).join('');
        }

        function addB3WordToSlot(poolIndex) {
            const word = b3SbPool[poolIndex];
            const emptySlotIndex = b3SbCurrentSlots.indexOf(null);
            if (emptySlotIndex !== -1) {
                b3SbCurrentSlots[emptySlotIndex] = word;
                b3SbPool.splice(poolIndex, 1);
                renderB3SentenceBuilder();
            }
        }

        function removeB3WordFromSlot(slotIndex) {
            const word = b3SbCurrentSlots[slotIndex];
            if (word) {
                b3SbPool.push(word);
                b3SbCurrentSlots[slotIndex] = null;
                renderB3SentenceBuilder();
            }
        }

        function checkB3SentenceBuilder() {
            const item = bes3GameSentencesData[b3SbOrder[b3SbIndex]];
            const isComplete = b3SbCurrentSlots.every(s => s !== null);
            if(!isComplete) return;
            const isCorrect = b3SbCurrentSlots.join(' ') === item.words.join(' ');
            if(isCorrect) {
                showMessageWithPronunciation('b3-sb-msg', t('msg_correct'), item.trans, true);
                setButtonVisibility('b3-sb-check-btn', false);
                setButtonVisibility('b3-sb-retry-btn', false);
                setButtonVisibility('b3-sb-next-btn', true);
            } else {
                showMessageWithPronunciation('b3-sb-msg', withCorrectAnswer(item.words.join(' ')), item.trans, false);
                setButtonVisibility('b3-sb-check-btn', false);
                setButtonVisibility('b3-sb-retry-btn', true);
                setButtonVisibility('b3-sb-next-btn', false);
            }
        }

        function retryB3SentenceBuilder() { initB3SentenceBuilder(); }
        function nextB3SentenceBuilder() { b3SbIndex++; initB3SentenceBuilder(); }

        // B3 Possession (Conjugation) Game
        function getB3ConjugationOptions(phase) {
            if (phase === 'form') {
                return shuffleArray(bes3GrammarData.map(item => item.cgForm));
            }
            return shuffleArray(bes3GrammarData.map(item => item.he));
        }

        function initB3ConjugationGame() {
            b3CgPhase = 'pronoun';
            b3CgIndex = 0;
            b3CgOptions = getB3ConjugationOptions('pronoun');
            document.getElementById('b3-cg-msg').classList.add('hidden');
            setButtonVisibility('b3-cg-reset-btn', false);
            renderB3ConjugationGame();
        }

        function renderB3ConjugationGame() {
            const tableBody = document.getElementById('b3-cg-table-body');
            const optionsElement = document.getElementById('b3-cg-options');
            const messageElement = document.getElementById('b3-cg-msg');
            const hebrewHead = document.getElementById('b3-cg-head-hebrew');
            const formHead = document.getElementById('b3-cg-head-form');

            if (!tableBody || !optionsElement || !messageElement || !hebrewHead || !formHead) return;

            hebrewHead.className = getB2CgHeaderClass(b3CgPhase === 'pronoun');
            formHead.className = getB2CgHeaderClass(b3CgPhase === 'form');

            tableBody.innerHTML = bes3GrammarData.map((item, index) => {
                const translation = currentLang === 'en' ? item.en : item.ku;
                const pronounSolved = b3CgPhase !== 'pronoun' || index < b3CgIndex;
                const formSolved = b3CgPhase === 'done' || (b3CgPhase === 'form' && index < b3CgIndex);
                const pronounCurrent = b3CgPhase === 'pronoun' && index === b3CgIndex;
                const formCurrent = b3CgPhase === 'form' && index === b3CgIndex;
                const hebrewCellClass = b3CgPhase === 'pronoun' ? 'bg-purple-50 ring-1 ring-inset ring-purple-300/80 dark:bg-purple-500/10 dark:ring-purple-500/40' : '';
                const formCellClass = b3CgPhase === 'form' ? 'bg-yellow-50 ring-1 ring-inset ring-yellow-300/80 dark:bg-yellow-500/10 dark:ring-yellow-500/40' : '';

                const hebrewCell = pronounSolved
                    ? getB2CgSolvedContent(item.he, item.pronHe, 'rtl')
                    : getB2CgPlaceholderBox(b3CgPhase === 'pronoun', pronounCurrent);

                const formCell = formSolved
                    ? getB2CgSolvedContent(item.cgForm, item.cgFormPron)
                    : getB2CgPlaceholderBox(b3CgPhase === 'form', formCurrent);

                return `
                    <tr>
                        <td class="p-4 font-semibold text-slate-800 dark:text-slate-100">${escapeHtml(translation)}</td>
                        <td class="p-4 ${hebrewCellClass}">${hebrewCell}</td>
                        <td class="p-4 ${formCellClass}">${formCell}</td>
                    </tr>
                `;
            }).join('');

            if (b3CgPhase === 'done') {
                optionsElement.innerHTML = '';
                showMessage('b3-cg-msg', t('poss_done'), true);
                setButtonVisibility('b3-cg-reset-btn', true);
                return;
            }

            optionsElement.innerHTML = b3CgOptions.map((option, index) => {
                const isHebrewOption = b3CgPhase === 'pronoun';
                const paletteClass = getB2CgOptionClass(index, isHebrewOption);
                return `
                    <button
                        onclick="answerB3ConjugationGame(${index})"
                        ${isHebrewOption ? 'dir="rtl" lang="he"' : ''}
                        class="min-h-[3.75rem] w-full px-5 rounded-xl border-2 ${paletteClass} text-slate-800 dark:text-slate-100 ${isHebrewOption ? 'text-2xl' : 'text-xl'} font-bold shadow-sm hover:-translate-y-0.5 transition"
                    >
                        ${escapeHtml(option)}
                    </button>
                `;
            }).join('');
        }

        function answerB3ConjugationGame(optionIndex) {
            const item = bes3GrammarData[b3CgIndex];
            const selected = b3CgOptions[optionIndex];
            if (!item) return;

            const correctAnswer = b3CgPhase === 'pronoun' ? item.he : item.cgForm;
            const pronunciation = b3CgPhase === 'pronoun' ? item.pronHe : item.cgFormPron;

            if (selected === correctAnswer) {
                b3CgIndex++;
                if (b3CgPhase === 'pronoun' && b3CgIndex >= bes3GrammarData.length) {
                    b3CgPhase = 'form';
                    b3CgIndex = 0;
                    b3CgOptions = getB3ConjugationOptions('form');
                    renderB3ConjugationGame();
                    showMessage('b3-cg-msg', t('poss_phase_forms'), true);
                    return;
                }
                if (b3CgPhase === 'form' && b3CgIndex >= bes3GrammarData.length) {
                    b3CgPhase = 'done';
                    renderB3ConjugationGame();
                    return;
                }
                renderB3ConjugationGame();
                showMessageWithPronunciation('b3-cg-msg', t('msg_correct'), pronunciation, true);
            } else {
                showMessage('b3-cg-msg', withCorrectAnswer(correctAnswer), false);
            }
        }

        // B3 Gender Game
        function initB3GenderGame() {
            b3GenderOrder = getShuffledOrder(bes3GenderGameData.length);
            b3GenderIndex = 0;
            b3GenderScore = 0;
            renderB3GenderGame();
        }

        function renderB3GenderGame() {
            const container = document.getElementById('b3-game-gender');
            if (!container) return;

            if (b3GenderIndex >= b3GenderOrder.length) {
                container.innerHTML = `
                    <div class="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow border border-slate-200 dark:border-slate-700 max-w-xl mx-auto text-center space-y-4">
                        <div class="text-5xl">🎉</div>
                        <div class="text-2xl font-bold text-slate-800 dark:text-slate-100">${escapeHtml(t('gender_done'))}</div>
                        <div class="text-lg text-slate-600 dark:text-slate-400">${b3GenderScore} / ${b3GenderOrder.length}</div>
                        <button onclick="initB3GenderGame()" class="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl shadow transition" data-i18n="quiz_play_again">${escapeHtml(t('quiz_play_again'))}</button>
                    </div>
                `;
                return;
            }

            const item = bes3GenderGameData[b3GenderOrder[b3GenderIndex]];
            const langKey = currentLang === 'en' ? 'en' : 'ku';
            const genderLabel = currentLang === 'en' ? item.genderEn : item.genderKu;
            const genderColor = item.gender === 'masc' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300' : 'bg-pink-100 text-pink-800 dark:bg-pink-900/40 dark:text-pink-300';
            const progress = `${b3GenderIndex + 1} / ${b3GenderOrder.length}`;

            // Randomize button order
            const showCorrectOnLeft = Math.random() > 0.5;
            const leftHe = showCorrectOnLeft ? item.correct : item.wrong;
            const rightHe = showCorrectOnLeft ? item.wrong : item.correct;
            const leftTrans = showCorrectOnLeft ? item.trans : item.wrongTrans;
            const rightTrans = showCorrectOnLeft ? item.wrongTrans : item.trans;
            const leftIsCorrect = showCorrectOnLeft;

            container.innerHTML = `
                <div class="text-sm text-slate-400 dark:text-slate-500 font-medium">${escapeHtml(progress)}</div>
                <div class="space-y-3">
                    <div class="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100">${escapeHtml(item[langKey])}</div>
                    <span class="inline-block px-4 py-1 rounded-full font-bold text-sm ${genderColor}">${escapeHtml(genderLabel)}</span>
                </div>
                <div id="b3-gender-msg" class="min-h-[1.5rem] font-bold text-lg hidden text-center"></div>
                <div class="grid grid-cols-2 gap-4">
                    <div class="flex flex-col items-center gap-1">
                        <button
                            id="b3-gender-btn-left"
                            onclick="answerB3GenderGame(${leftIsCorrect})"
                            dir="rtl" lang="he"
                            class="w-full p-4 rounded-2xl border-2 border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 hover:border-purple-400 hover:-translate-y-0.5 text-slate-800 dark:text-slate-100 text-2xl font-bold transition"
                        >${escapeHtml(leftHe)}</button>
                        <span class="text-sm text-slate-600 dark:text-slate-300 font-mono">${escapeHtml(leftTrans)}</span>
                    </div>
                    <div class="flex flex-col items-center gap-1">
                        <button
                            id="b3-gender-btn-right"
                            onclick="answerB3GenderGame(${!leftIsCorrect})"
                            dir="rtl" lang="he"
                            class="w-full p-4 rounded-2xl border-2 border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 hover:border-purple-400 hover:-translate-y-0.5 text-slate-800 dark:text-slate-100 text-2xl font-bold transition"
                        >${escapeHtml(rightHe)}</button>
                        <span class="text-sm text-slate-600 dark:text-slate-300 font-mono">${escapeHtml(rightTrans)}</span>
                    </div>
                </div>
            `;
        }

        function answerB3GenderGame(isCorrect) {
            const msgEl = document.getElementById('b3-gender-msg');
            if (!msgEl) return;

            if (isCorrect) {
                b3GenderScore++;
                b3GenderIndex++;
                showMessage('b3-gender-msg', t('gender_correct'), true);
                setTimeout(() => {
                    renderB3GenderGame();
                }, 700);
            } else {
                msgEl.textContent = t('gender_wrong');
                msgEl.className = 'min-h-[1.5rem] font-bold text-lg text-center text-red-600 dark:text-red-400';
                msgEl.classList.remove('hidden');
            }
        }

        // ── CHAPTER 4 FUNCTIONS ───────────────────────────────────────────────────

        function renderBes4() {
            const langKey = currentLang === 'ku' ? 'ku' : 'en';
            const spkKey = currentLang === 'ku' ? 'spkKu' : 'spkEn';

            document.getElementById('b4-dialog-container').innerHTML = bes4DialogData.map((item, idx) => {
                const isFirst = idx % 2 === 0;
                const bgClass = isFirst ? 'bg-amber-50 dark:bg-amber-900/20' : 'bg-slate-50 dark:bg-slate-800/40';
                const textColClass = isFirst ? 'text-amber-700 dark:text-amber-300' : 'text-slate-600 dark:text-slate-400';
                return `
                    <div class="flex flex-col sm:flex-row gap-2 sm:gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-700 ${bgClass}">
                        <div class="font-bold w-20 flex-shrink-0 ${textColClass}">${item[spkKey]}:</div>
                        <div class="flex-grow">
                            <div class="text-xl sm:text-2xl font-bold mb-1 text-slate-900 dark:text-slate-100" dir="rtl">${item.he}</div>
                            <div class="text-sm text-slate-500 dark:text-slate-400 font-mono mb-2 text-right">${item.trans}</div>
                            <div class="font-medium text-slate-800 dark:text-slate-200">${item[langKey]}</div>
                        </div>
                    </div>
                `;
            }).join('');

            document.getElementById('b4-words-tbody').innerHTML = bes4WordsData.map(item => `
                <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition border-b border-slate-100 dark:border-slate-700">
                    <td class="p-4 font-medium text-slate-800 dark:text-slate-200">${item[langKey]}</td>
                    <td class="p-4 font-bold text-2xl text-slate-800 dark:text-slate-100" dir="rtl">${item.he}</td>
                    <td class="p-4 text-amber-600 dark:text-amber-400 font-mono">${item.trans}</td>
                </tr>
            `).join('');

            document.getElementById('b4-grammar-tbody').innerHTML = bes4GrammarData.map(item => `
                <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition border-b border-slate-200 dark:border-slate-700">
                    <td class="p-3 border-r dark:border-slate-700 text-slate-800 dark:text-slate-200">${item[langKey]}</td>
                    <td class="p-3 border-r dark:border-slate-700">
                        <div class="flex flex-col items-end">
                            <span class="font-bold text-xl text-slate-800 dark:text-slate-100" dir="rtl" lang="he">${item.he}</span>
                            <span class="text-sm text-slate-400 dark:text-slate-500 font-mono">${item.pronHe}</span>
                        </div>
                    </td>
                    <td class="p-3">
                        <div class="flex flex-col items-end">
                            <span class="font-bold text-xl text-amber-700 dark:text-amber-300" dir="rtl" lang="he">${item.cgForm}</span>
                            <span class="text-sm text-slate-400 dark:text-slate-500 font-mono">${item.cgFormPron}</span>
                        </div>
                    </td>
                </tr>
            `).join('');

            if (typeof renderBes4Homework === 'function') {
                renderBes4Homework();
                return;
            }

            document.getElementById('b4-hw-list').innerHTML = bes4HomeworkData.map(item => `
                <li class="pl-2">${item[langKey]}</li>
            `).join('');
        }

        // B4 Game Tab Switching
        function switchB4GameTab(tabId) {
            b4CurrentGameTab = tabId;
            const baseClass = "nav-btn px-6 py-3 rounded-full font-bold shadow-sm transition";
            const activeClass = "bg-amber-600 text-white dark:bg-amber-600";
            const inactiveClass = "bg-white text-amber-600 border border-amber-600 hover:bg-amber-50 dark:bg-slate-800 dark:border-amber-500 dark:text-amber-400 dark:hover:bg-slate-700";

            ['wb', 'cp', 'sb', 'cg', 'gender'].forEach(id => {
                const btn = document.getElementById('btn-b4-game-' + id);
                if (btn) btn.className = baseClass + " " + (tabId === id ? activeClass : inactiveClass);
                const panel = document.getElementById('b4-game-' + id);
                if (panel) panel.classList.add('hidden');
            });

            document.getElementById('b4-game-' + tabId).classList.remove('hidden');

            if(tabId === 'wb') initB4WordBuilder();
            if(tabId === 'cp') initB4ConnectPairs();
            if(tabId === 'sb') initB4SentenceBuilder();
            if(tabId === 'cg') initB4ConjugationGame();
            if(tabId === 'gender') initB4GenderGame();
        }

        // B4 Word Builder
        function initB4WordBuilder() {
            b4WbData = bes4GameWordsData;
            if (!b4WbOrder.length || b4WbIndex >= b4WbOrder.length) {
                b4WbOrder = getShuffledOrder(b4WbData.length);
                b4WbIndex = 0;
            }

            const item = b4WbData[b4WbOrder[b4WbIndex]];
            const targetLetters = getHebrewTiles(item.he);

            document.getElementById('b4-wb-target-word').innerText = item[currentLang];
            document.getElementById('b4-wb-msg').classList.add('hidden');
            setButtonVisibility('b4-wb-check-btn', true);
            setButtonVisibility('b4-wb-retry-btn', false);
            setButtonVisibility('b4-wb-next-btn', false);

            b4WbCurrentSlots = Array(targetLetters.length).fill(null);
            b4WbPool = shuffleArray(targetLetters);

            renderB4WordBuilder();
        }

        function renderB4WordBuilder() {
            const item = b4WbData[b4WbOrder[b4WbIndex]];
            const heWords = item.he.split(/\s+/);
            const wordStyles = [
                { filled: 'border-amber-500 bg-amber-50 dark:bg-amber-900/60 dark:border-amber-400 cursor-pointer', empty: 'border-amber-300 dark:border-amber-700' },
                { filled: 'border-blue-500 bg-blue-50 dark:bg-blue-900/60 dark:border-blue-400 cursor-pointer', empty: 'border-blue-300 dark:border-blue-700' },
            ];

            const slotsContainer = document.getElementById('b4-wb-slots');
            let slotsHtml = '';
            let slotIndex = 0;
            slotsHtml += '<div class="w-full space-y-2">';
            for (let wordIdx = 0; wordIdx < heWords.length; wordIdx++) {
                const wordLetterCount = getHebrewTiles(heWords[wordIdx]).length;
                const style = wordStyles[wordIdx % wordStyles.length];
                slotsHtml += '<div class="flex flex-row-reverse justify-start gap-2">';
                for (let l = 0; l < wordLetterCount; l++) {
                    const letter = b4WbCurrentSlots[slotIndex];
                    const i = slotIndex;
                    slotsHtml += `<div class="w-12 h-14 sm:w-16 sm:h-20 border-2 border-dashed ${letter ? style.filled : style.empty} rounded-xl flex items-center justify-center text-3xl font-bold text-slate-800 dark:text-slate-100 shadow-inner" onclick="if('${letter}' !== 'null') removeB4LetterFromSlot(${i})">${letter || ''}</div>`;
                    slotIndex++;
                }
                slotsHtml += '</div>';
            }
            slotsHtml += '</div>';
            slotsContainer.innerHTML = slotsHtml;

            document.getElementById('b4-wb-pool').innerHTML = b4WbPool.map((letter, i) => `
                <button onclick="addB4LetterToSlot(${i})" class="w-12 h-14 sm:w-16 sm:h-20 bg-white dark:bg-slate-700 border-2 border-slate-200 dark:border-slate-600 rounded-xl flex items-center justify-center text-3xl font-bold text-amber-600 dark:text-amber-400 shadow hover:bg-slate-50 hover:-translate-y-1 transition transform">
                    ${letter}
                </button>
            `).join('');
        }

        function addB4LetterToSlot(poolIndex) {
            const letter = b4WbPool[poolIndex];
            const emptySlotIndex = b4WbCurrentSlots.indexOf(null);
            if (emptySlotIndex !== -1) {
                b4WbCurrentSlots[emptySlotIndex] = letter;
                b4WbPool.splice(poolIndex, 1);
                renderB4WordBuilder();
            }
        }

        function removeB4LetterFromSlot(slotIndex) {
            const letter = b4WbCurrentSlots[slotIndex];
            if (letter) {
                b4WbPool.push(letter);
                b4WbCurrentSlots[slotIndex] = null;
                renderB4WordBuilder();
            }
        }

        function checkB4WordBuilder() {
            const item = b4WbData[b4WbOrder[b4WbIndex]];
            const targetLetters = getHebrewTiles(item.he);
            const isComplete = b4WbCurrentSlots.every(s => s !== null);
            if(!isComplete) return;
            const isCorrect = b4WbCurrentSlots.join('') === targetLetters.join('');
            if(isCorrect) {
                showMessageWithPronunciation('b4-wb-msg', t('msg_correct'), item.trans, true);
                setButtonVisibility('b4-wb-check-btn', false);
                setButtonVisibility('b4-wb-retry-btn', false);
                setButtonVisibility('b4-wb-next-btn', true);
            } else {
                showMessageWithPronunciation('b4-wb-msg', withCorrectAnswer(item.he), item.trans, false);
                setButtonVisibility('b4-wb-check-btn', false);
                setButtonVisibility('b4-wb-retry-btn', true);
                setButtonVisibility('b4-wb-next-btn', false);
            }
        }

        function retryB4WordBuilder() { initB4WordBuilder(); }
        function nextB4WordBuilder() { b4WbIndex++; initB4WordBuilder(); }

        // B4 Connect Pairs
        function initB4ConnectPairs() {
            b4CpRound = 1;
            b4CpOrder = getShuffledOrder(bes4WordsData.length);
            loadB4CpRound();
        }

        function nextB4CpRound() { b4CpRound++; loadB4CpRound(); }

        function loadB4CpRound() {
            b4CpMatches = 0;
            b4CpSelectedLeft = null;
            b4CpSelectedRight = null;
            document.getElementById('b4-cp-msg').classList.add('hidden');
            document.getElementById('b4-cp-win-panel').classList.add('hidden');
            document.getElementById('b4-cp-next-round-panel').classList.add('hidden');

            const startIdx = (b4CpRound - 1) * 10;
            const endIdx = startIdx + 10;
            const roundWords = b4CpOrder
                .slice(startIdx, endIdx)
                .map(index => ({...bes4WordsData[index], matched: false, matchText: ''}));

            b4CpLeftPairs = shuffleArray(roundWords);
            b4CpRightPairs = shuffleArray(roundWords);
            renderB4ConnectPairs();
        }

        function renderB4ConnectPairs() {
            const leftContainer = document.getElementById('b4-cp-left');
            const rightContainer = document.getElementById('b4-cp-right');

            leftContainer.innerHTML = b4CpLeftPairs.map((item, i) => {
                const isMatched = item.matched;
                const isSelected = b4CpSelectedLeft === i;
                return `<button onclick="selectB4Pair('left',${i})" class="pair-btn w-full p-3 sm:p-4 rounded-xl border-2 font-bold text-lg transition ${isMatched ? 'matched' : isSelected ? 'selected' : 'bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-slate-800 dark:text-slate-100 hover:border-amber-400'}" ${isMatched ? 'disabled' : ''}>${isMatched ? item.matchText : item[currentLang]}</button>`;
            }).join('');

            rightContainer.innerHTML = b4CpRightPairs.map((item, i) => {
                const isMatched = item.matched;
                const isSelected = b4CpSelectedRight === i;
                return `<button onclick="selectB4Pair('right',${i})" dir="rtl" class="pair-btn w-full p-3 sm:p-4 rounded-xl border-2 font-bold text-xl transition ${isMatched ? 'matched' : isSelected ? 'selected' : 'bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-slate-800 dark:text-slate-100 hover:border-amber-400'}" ${isMatched ? 'disabled' : ''}>${isMatched ? item.matchText : item.he}</button>`;
            }).join('');
        }

        function selectB4Pair(side, idx) {
            if (side === 'left') {
                if (b4CpLeftPairs[idx].matched) return;
                b4CpSelectedLeft = idx;
            } else {
                if (b4CpRightPairs[idx].matched) return;
                b4CpSelectedRight = idx;
            }
            renderB4ConnectPairs();
            if (b4CpSelectedLeft !== null && b4CpSelectedRight !== null) checkB4PairMatch();
        }

        function checkB4PairMatch() {
            const left = b4CpLeftPairs[b4CpSelectedLeft];
            const right = b4CpRightPairs[b4CpSelectedRight];
            const isMatch = left.he === right.he;

            if (isMatch) {
                left.matched = true;
                right.matched = true;
                left.matchText = `${left[currentLang]} = ${left.he}`;
                right.matchText = left.matchText;
                b4CpMatches++;
                showMessage('b4-cp-msg', t('msg_correct'), true);
            } else {
                showMessage('b4-cp-msg', t('msg_wrong'), false);
                const li = b4CpSelectedLeft;
                const ri = b4CpSelectedRight;
                b4CpLeftPairs[li].error = true;
                b4CpRightPairs[ri].error = true;
                renderB4ConnectPairs();
                setTimeout(() => {
                    b4CpLeftPairs[li].error = false;
                    b4CpRightPairs[ri].error = false;
                    b4CpSelectedLeft = null;
                    b4CpSelectedRight = null;
                    renderB4ConnectPairs();
                }, 700);
                return;
            }

            b4CpSelectedLeft = null;
            b4CpSelectedRight = null;
            renderB4ConnectPairs();

            if (b4CpMatches >= b4CpLeftPairs.length) {
                const hasMore = b4CpRound * 10 < b4CpOrder.length;
                if (hasMore) {
                    showMessage('b4-cp-msg', t('msg_round_win').replace('{round}', b4CpRound), true);
                    document.getElementById('b4-cp-next-round-panel').classList.remove('hidden');
                } else {
                    showMessage('b4-cp-msg', t('msg_win'), true);
                    document.getElementById('b4-cp-win-panel').classList.remove('hidden');
                }
            }
        }

        // B4 Sentence Builder
        function initB4SentenceBuilder() {
            if (!b4SbOrder.length || b4SbIndex >= b4SbOrder.length) {
                b4SbOrder = getShuffledOrder(bes4GameSentencesData.length);
                b4SbIndex = 0;
            }
            const item = bes4GameSentencesData[b4SbOrder[b4SbIndex]];
            document.getElementById('b4-sb-target-sentence').innerText = item[currentLang];
            document.getElementById('b4-sb-msg').classList.add('hidden');
            setButtonVisibility('b4-sb-check-btn', true);
            setButtonVisibility('b4-sb-retry-btn', false);
            setButtonVisibility('b4-sb-next-btn', false);

            b4SbCurrentSlots = Array(item.words.length).fill(null);
            b4SbPool = shuffleArray([...item.words]);
            renderB4SentenceBuilder();
        }

        function renderB4SentenceBuilder() {
            document.getElementById('b4-sb-slots').innerHTML = b4SbCurrentSlots.map((word, i) =>
                `<div class="min-w-[4rem] h-14 border-2 border-dashed ${word ? 'border-amber-500 bg-amber-50 dark:bg-amber-900/60 dark:border-amber-400 cursor-pointer' : 'border-amber-300 dark:border-amber-700'} rounded-xl flex items-center justify-center text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100 px-3" dir="rtl" onclick="if('${word}' !== 'null') removeB4WordFromSlot(${i})">${word || ''}</div>`
            ).join('');

            document.getElementById('b4-sb-pool').innerHTML = b4SbPool.map((word, i) =>
                `<button onclick="addB4WordToSlot(${i})" dir="rtl" class="min-w-[4rem] h-14 bg-white dark:bg-slate-700 border-2 border-slate-200 dark:border-slate-600 rounded-xl flex items-center justify-center text-xl sm:text-2xl font-bold text-amber-600 dark:text-amber-400 px-3 shadow hover:bg-slate-50 hover:-translate-y-1 transition transform">${word}</button>`
            ).join('');
        }

        function addB4WordToSlot(poolIndex) {
            const word = b4SbPool[poolIndex];
            const emptySlotIndex = b4SbCurrentSlots.indexOf(null);
            if (emptySlotIndex !== -1) {
                b4SbCurrentSlots[emptySlotIndex] = word;
                b4SbPool.splice(poolIndex, 1);
                renderB4SentenceBuilder();
            }
        }

        function removeB4WordFromSlot(slotIndex) {
            const word = b4SbCurrentSlots[slotIndex];
            if (word) {
                b4SbPool.push(word);
                b4SbCurrentSlots[slotIndex] = null;
                renderB4SentenceBuilder();
            }
        }

        function checkB4SentenceBuilder() {
            const item = bes4GameSentencesData[b4SbOrder[b4SbIndex]];
            const isComplete = b4SbCurrentSlots.every(s => s !== null);
            if(!isComplete) return;
            const isCorrect = b4SbCurrentSlots.join(' ') === item.words.join(' ');
            if(isCorrect) {
                showMessageWithPronunciation('b4-sb-msg', t('msg_correct'), item.trans, true);
                setButtonVisibility('b4-sb-check-btn', false);
                setButtonVisibility('b4-sb-retry-btn', false);
                setButtonVisibility('b4-sb-next-btn', true);
            } else {
                showMessageWithPronunciation('b4-sb-msg', withCorrectAnswer(item.words.join(' ')), item.trans, false);
                setButtonVisibility('b4-sb-check-btn', false);
                setButtonVisibility('b4-sb-retry-btn', true);
                setButtonVisibility('b4-sb-next-btn', false);
            }
        }

        function retryB4SentenceBuilder() { initB4SentenceBuilder(); }
        function nextB4SentenceBuilder() { b4SbIndex++; initB4SentenceBuilder(); }

        // B4 Numbers (Conjugation) Game
        function getB4ConjugationOptions(phase) {
            if (phase === 'form') {
                return shuffleArray(bes4GrammarData.map(item => item.cgForm));
            }
            return shuffleArray(bes4GrammarData.map(item => item.he));
        }

        function initB4ConjugationGame() {
            b4CgPhase = 'pronoun';
            b4CgIndex = 0;
            b4CgOptions = getB4ConjugationOptions('pronoun');
            document.getElementById('b4-cg-msg').classList.add('hidden');
            setButtonVisibility('b4-cg-reset-btn', false);
            renderB4ConjugationGame();
        }

        function renderB4ConjugationGame() {
            const tableBody = document.getElementById('b4-cg-table-body');
            const optionsElement = document.getElementById('b4-cg-options');
            const messageElement = document.getElementById('b4-cg-msg');
            const hebrewHead = document.getElementById('b4-cg-head-hebrew');
            const formHead = document.getElementById('b4-cg-head-form');

            if (!tableBody || !optionsElement || !messageElement || !hebrewHead || !formHead) return;

            hebrewHead.className = getB2CgHeaderClass(b4CgPhase === 'pronoun');
            formHead.className = getB2CgHeaderClass(b4CgPhase === 'form');

            tableBody.innerHTML = bes4GrammarData.map((item, index) => {
                const translation = currentLang === 'en' ? item.en : item.ku;
                const pronounSolved = b4CgPhase !== 'pronoun' || index < b4CgIndex;
                const formSolved = b4CgPhase === 'done' || (b4CgPhase === 'form' && index < b4CgIndex);
                const pronounCurrent = b4CgPhase === 'pronoun' && index === b4CgIndex;
                const formCurrent = b4CgPhase === 'form' && index === b4CgIndex;
                const hebrewCellClass = b4CgPhase === 'pronoun' ? 'bg-amber-50 ring-1 ring-inset ring-amber-300/80 dark:bg-amber-500/10 dark:ring-amber-500/40' : '';
                const formCellClass = b4CgPhase === 'form' ? 'bg-pink-50 ring-1 ring-inset ring-pink-300/80 dark:bg-pink-500/10 dark:ring-pink-500/40' : '';

                const hebrewCell = pronounSolved
                    ? getB2CgSolvedContent(item.he, item.pronHe, 'rtl')
                    : getB2CgPlaceholderBox(b4CgPhase === 'pronoun', pronounCurrent);

                const formCell = formSolved
                    ? getB2CgSolvedContent(item.cgForm, item.cgFormPron)
                    : getB2CgPlaceholderBox(b4CgPhase === 'form', formCurrent);

                return `
                    <tr>
                        <td class="p-4 font-semibold text-slate-800 dark:text-slate-100">${escapeHtml(translation)}</td>
                        <td class="p-4 ${hebrewCellClass}">${hebrewCell}</td>
                        <td class="p-4 ${formCellClass}">${formCell}</td>
                    </tr>
                `;
            }).join('');

            if (b4CgPhase === 'done') {
                optionsElement.innerHTML = '';
                showMessage('b4-cg-msg', t('num_done'), true);
                setButtonVisibility('b4-cg-reset-btn', true);
                return;
            }

            optionsElement.innerHTML = b4CgOptions.map((option, index) => {
                const isHebrewOption = b4CgPhase === 'pronoun';
                const paletteClass = getB2CgOptionClass(index, isHebrewOption);
                return `
                    <button
                        onclick="answerB4ConjugationGame(${index})"
                        dir="rtl" lang="he"
                        class="min-h-[3.75rem] w-full px-5 rounded-xl border-2 ${paletteClass} text-slate-800 dark:text-slate-100 text-2xl font-bold shadow-sm hover:-translate-y-0.5 transition"
                    >
                        ${escapeHtml(option)}
                    </button>
                `;
            }).join('');
        }

        function answerB4ConjugationGame(optionIndex) {
            const item = bes4GrammarData[b4CgIndex];
            const selected = b4CgOptions[optionIndex];
            if (!item) return;

            const correctAnswer = b4CgPhase === 'pronoun' ? item.he : item.cgForm;
            const pronunciation = b4CgPhase === 'pronoun' ? item.pronHe : item.cgFormPron;

            if (selected === correctAnswer) {
                b4CgIndex++;
                if (b4CgPhase === 'pronoun' && b4CgIndex >= bes4GrammarData.length) {
                    b4CgPhase = 'form';
                    b4CgIndex = 0;
                    b4CgOptions = getB4ConjugationOptions('form');
                    renderB4ConjugationGame();
                    showMessage('b4-cg-msg', t('num_phase_fem'), true);
                    return;
                }
                if (b4CgPhase === 'form' && b4CgIndex >= bes4GrammarData.length) {
                    b4CgPhase = 'done';
                    renderB4ConjugationGame();
                    return;
                }
                renderB4ConjugationGame();
                showMessageWithPronunciation('b4-cg-msg', t('msg_correct'), pronunciation, true);
            } else {
                showMessage('b4-cg-msg', withCorrectAnswer(correctAnswer), false);
            }
        }

        // B4 Gender Game
        function initB4GenderGame() {
            b4GenderOrder = getShuffledOrder(bes4GenderGameData.length);
            b4GenderIndex = 0;
            b4GenderScore = 0;
            renderB4GenderGame();
        }

        function renderB4GenderGame() {
            const container = document.getElementById('b4-game-gender');
            if (!container) return;

            if (b4GenderIndex >= b4GenderOrder.length) {
                container.innerHTML = `
                    <div class="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow border border-slate-200 dark:border-slate-700 max-w-xl mx-auto text-center space-y-4">
                        <div class="text-5xl">🎉</div>
                        <div class="text-2xl font-bold text-slate-800 dark:text-slate-100">${escapeHtml(t('gender_done'))}</div>
                        <div class="text-lg text-slate-600 dark:text-slate-400">${b4GenderScore} / ${b4GenderOrder.length}</div>
                        <button onclick="initB4GenderGame()" class="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl shadow transition">${escapeHtml(t('quiz_play_again'))}</button>
                    </div>
                `;
                return;
            }

            const item = bes4GenderGameData[b4GenderOrder[b4GenderIndex]];
            const langKey = currentLang === 'en' ? 'en' : 'ku';
            const genderLabel = currentLang === 'en' ? item.genderEn : item.genderKu;
            const genderColor = item.gender === 'masc' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300' : 'bg-pink-100 text-pink-800 dark:bg-pink-900/40 dark:text-pink-300';
            const progress = `${b4GenderIndex + 1} / ${b4GenderOrder.length}`;

            const showCorrectOnLeft = Math.random() > 0.5;
            const leftHe = showCorrectOnLeft ? item.correct : item.wrong;
            const rightHe = showCorrectOnLeft ? item.wrong : item.correct;
            const leftTrans = showCorrectOnLeft ? item.trans : item.wrongTrans;
            const rightTrans = showCorrectOnLeft ? item.wrongTrans : item.trans;
            const leftIsCorrect = showCorrectOnLeft;

            container.innerHTML = `
                <div class="text-sm text-slate-400 dark:text-slate-500 font-medium">${escapeHtml(progress)}</div>
                <div class="space-y-3">
                    <div class="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100">${escapeHtml(item[langKey])}</div>
                    <span class="inline-block px-4 py-1 rounded-full font-bold text-sm ${genderColor}">${escapeHtml(genderLabel)}</span>
                </div>
                <div id="b4-gender-msg" class="min-h-[1.5rem] font-bold text-lg hidden text-center"></div>
                <div class="grid grid-cols-2 gap-4">
                    <div class="flex flex-col items-center gap-1">
                        <button
                            id="b4-gender-btn-left"
                            onclick="answerB4GenderGame(${leftIsCorrect})"
                            dir="rtl" lang="he"
                            class="w-full p-4 rounded-2xl border-2 border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 hover:border-amber-400 hover:-translate-y-0.5 text-slate-800 dark:text-slate-100 text-2xl font-bold transition"
                        >${escapeHtml(leftHe)}</button>
                        <span class="text-sm text-slate-600 dark:text-slate-300 font-mono">${escapeHtml(leftTrans)}</span>
                    </div>
                    <div class="flex flex-col items-center gap-1">
                        <button
                            id="b4-gender-btn-right"
                            onclick="answerB4GenderGame(${!leftIsCorrect})"
                            dir="rtl" lang="he"
                            class="w-full p-4 rounded-2xl border-2 border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 hover:border-amber-400 hover:-translate-y-0.5 text-slate-800 dark:text-slate-100 text-2xl font-bold transition"
                        >${escapeHtml(rightHe)}</button>
                        <span class="text-sm text-slate-600 dark:text-slate-300 font-mono">${escapeHtml(rightTrans)}</span>
                    </div>
                </div>
            `;
        }

        function answerB4GenderGame(isCorrect) {
            const msgEl = document.getElementById('b4-gender-msg');
            if (!msgEl) return;

            if (isCorrect) {
                b4GenderScore++;
                b4GenderIndex++;
                showMessage('b4-gender-msg', t('gender_correct'), true);
                setTimeout(() => {
                    renderB4GenderGame();
                }, 700);
            } else {
                msgEl.textContent = t('gender_wrong');
                msgEl.className = 'min-h-[1.5rem] font-bold text-lg text-center text-red-600 dark:text-red-400';
                msgEl.classList.remove('hidden');
            }
        }

        // ── CHAPTER 5 FUNCTIONS ───────────────────────────────────────────

        function renderBes5() {
            const langKey = currentLang === 'ku' ? 'ku' : 'en';
            const spkKey = currentLang === 'ku' ? 'spkKu' : 'spkEn';

            document.getElementById('b5-dialog-container').innerHTML = bes5DialogData.map((item, idx) => {
                const isFirst = idx % 2 === 0;
                const bgClass = isFirst ? 'bg-teal-50 dark:bg-teal-900/20' : 'bg-slate-50 dark:bg-slate-800/40';
                const textColClass = isFirst ? 'text-teal-700 dark:text-teal-300' : 'text-slate-600 dark:text-slate-400';
                return `
                    <div class="flex flex-col sm:flex-row gap-2 sm:gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-700 ${bgClass}">
                        <div class="font-bold w-20 flex-shrink-0 ${textColClass}">${item[spkKey]}:</div>
                        <div class="flex-grow">
                            <div class="text-xl sm:text-2xl font-bold mb-1 text-slate-900 dark:text-slate-100" dir="rtl">${item.he}</div>
                            <div class="text-sm text-slate-500 dark:text-slate-400 font-mono mb-2 text-right">${item.trans}</div>
                            <div class="font-medium text-slate-800 dark:text-slate-200">${item[langKey]}</div>
                        </div>
                    </div>
                `;
            }).join('');

            document.getElementById('b5-words-tbody').innerHTML = bes5WordsData.map(item => `
                <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition border-b border-slate-100 dark:border-slate-700">
                    <td class="p-4 font-medium text-slate-800 dark:text-slate-200">${item[langKey]}</td>
                    <td class="p-4 font-bold text-2xl text-slate-800 dark:text-slate-100" dir="rtl">${item.he}</td>
                    <td class="p-4 text-teal-600 dark:text-teal-400 font-mono">${item.trans}</td>
                </tr>
            `).join('');

            document.getElementById('b5-grammar-tbody').innerHTML = bes5GrammarData.map(item => `
                <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition border-b border-slate-200 dark:border-slate-700">
                    <td class="p-3 text-slate-800 dark:text-slate-200">${item[langKey]}</td>
                    <td class="p-3">
                        <div class="flex flex-col items-end">
                            <span class="font-bold text-xl text-slate-800 dark:text-slate-100" dir="rtl" lang="he">${item.he}</span>
                            <span class="font-semibold text-lg text-teal-700 dark:text-teal-300 mt-1" dir="rtl" lang="he">${item.cgForm}</span>
                        </div>
                    </td>
                    <td class="p-3 text-teal-600 dark:text-teal-400 font-mono">
                        <div>${item.pronHe}</div>
                        <div class="mt-1 text-slate-500 dark:text-slate-400">${item.cgFormPron}</div>
                    </td>
                </tr>
            `).join('');

            if (typeof renderBes5Homework === 'function') {
                renderBes5Homework();
                return;
            }

            document.getElementById('b5-hw-list').innerHTML = bes5HomeworkData.map(item => `
                <li class="pl-2">${item[langKey]}</li>
            `).join('');
        }

        function switchB5GameTab(tabId) {
            b5CurrentGameTab = tabId;
            const baseClass = "nav-btn px-6 py-3 rounded-full font-bold shadow-sm transition";
            const activeClass = "bg-teal-600 text-white dark:bg-teal-600";
            const inactiveClass = "bg-white text-teal-700 border border-teal-600 hover:bg-teal-50 dark:bg-slate-800 dark:border-teal-500 dark:text-teal-300 dark:hover:bg-slate-700";

            ['wb', 'cp', 'sb', 'time'].forEach(id => {
                const btn = document.getElementById('btn-b5-game-' + id);
                if (btn) btn.className = baseClass + " " + (tabId === id ? activeClass : inactiveClass);
                const panel = document.getElementById('b5-game-' + id);
                if (panel) panel.classList.add('hidden');
            });

            document.getElementById('b5-game-' + tabId).classList.remove('hidden');

            if (tabId === 'wb') initB5WordBuilder();
            if (tabId === 'cp') initB5ConnectPairs();
            if (tabId === 'sb') initB5SentenceBuilder();
            if (tabId === 'time') initB5TimeGame();
        }

        function initB5WordBuilder() {
            b5WbData = bes5GameWordsData;
            if (!b5WbOrder.length || b5WbIndex >= b5WbOrder.length) {
                b5WbOrder = getShuffledOrder(b5WbData.length);
                b5WbIndex = 0;
            }

            const item = b5WbData[b5WbOrder[b5WbIndex]];
            const targetLetters = getHebrewTiles(item.he);

            document.getElementById('b5-wb-target-word').innerText = item[currentLang];
            document.getElementById('b5-wb-msg').classList.add('hidden');
            setButtonVisibility('b5-wb-check-btn', true);
            setButtonVisibility('b5-wb-retry-btn', false);
            setButtonVisibility('b5-wb-next-btn', false);

            b5WbCurrentSlots = Array(targetLetters.length).fill(null);
            b5WbPool = shuffleArray(targetLetters);

            renderB5WordBuilder();
        }

        function renderB5WordBuilder() {
            const item = b5WbData[b5WbOrder[b5WbIndex]];
            const heWords = item.he.split(/\s+/);
            const wordStyles = [
                { filled: 'border-teal-500 bg-teal-50 dark:bg-teal-900/60 dark:border-teal-400 cursor-pointer', empty: 'border-teal-300 dark:border-teal-700' },
                { filled: 'border-blue-500 bg-blue-50 dark:bg-blue-900/60 dark:border-blue-400 cursor-pointer', empty: 'border-blue-300 dark:border-blue-700' },
            ];

            const slotsContainer = document.getElementById('b5-wb-slots');
            let slotsHtml = '';
            let slotIndex = 0;
            slotsHtml += '<div class="w-full space-y-2">';
            for (let wordIdx = 0; wordIdx < heWords.length; wordIdx++) {
                const wordLetterCount = getHebrewTiles(heWords[wordIdx]).length;
                const style = wordStyles[wordIdx % wordStyles.length];
                slotsHtml += '<div class="flex flex-row-reverse justify-start gap-2">';
                for (let l = 0; l < wordLetterCount; l++) {
                    const letter = b5WbCurrentSlots[slotIndex];
                    const i = slotIndex;
                    slotsHtml += `<div class="w-12 h-14 sm:w-16 sm:h-20 border-2 border-dashed ${letter ? style.filled : style.empty} rounded-xl flex items-center justify-center text-3xl font-bold text-slate-800 dark:text-slate-100 shadow-inner" onclick="if('${letter}' !== 'null') removeB5LetterFromSlot(${i})">${letter || ''}</div>`;
                    slotIndex++;
                }
                slotsHtml += '</div>';
            }
            slotsHtml += '</div>';
            slotsContainer.innerHTML = slotsHtml;

            document.getElementById('b5-wb-pool').innerHTML = b5WbPool.map((letter, i) => `
                <button onclick="addB5LetterToSlot(${i})" class="w-12 h-14 sm:w-16 sm:h-20 bg-white dark:bg-slate-700 border-2 border-slate-200 dark:border-slate-600 rounded-xl flex items-center justify-center text-3xl font-bold text-teal-700 dark:text-teal-300 shadow hover:bg-slate-50 hover:-translate-y-1 transition transform">
                    ${letter}
                </button>
            `).join('');
        }

        function addB5LetterToSlot(poolIndex) {
            const letter = b5WbPool[poolIndex];
            const emptySlotIndex = b5WbCurrentSlots.indexOf(null);
            if (emptySlotIndex !== -1) {
                b5WbCurrentSlots[emptySlotIndex] = letter;
                b5WbPool.splice(poolIndex, 1);
                renderB5WordBuilder();
            }
        }

        function removeB5LetterFromSlot(slotIndex) {
            const letter = b5WbCurrentSlots[slotIndex];
            if (letter) {
                b5WbPool.push(letter);
                b5WbCurrentSlots[slotIndex] = null;
                renderB5WordBuilder();
            }
        }

        function checkB5WordBuilder() {
            const item = b5WbData[b5WbOrder[b5WbIndex]];
            const targetLetters = getHebrewTiles(item.he);
            const isComplete = b5WbCurrentSlots.every(s => s !== null);
            if (!isComplete) return;
            const isCorrect = b5WbCurrentSlots.join('') === targetLetters.join('');
            if (isCorrect) {
                showMessageWithPronunciation('b5-wb-msg', t('msg_correct'), item.trans, true);
                setButtonVisibility('b5-wb-check-btn', false);
                setButtonVisibility('b5-wb-retry-btn', false);
                setButtonVisibility('b5-wb-next-btn', true);
            } else {
                showMessageWithPronunciation('b5-wb-msg', withCorrectAnswer(item.he), item.trans, false);
                setButtonVisibility('b5-wb-check-btn', false);
                setButtonVisibility('b5-wb-retry-btn', true);
                setButtonVisibility('b5-wb-next-btn', false);
            }
        }

        function retryB5WordBuilder() { initB5WordBuilder(); }
        function nextB5WordBuilder() { b5WbIndex++; initB5WordBuilder(); }

        function initB5ConnectPairs() {
            b5CpRound = 1;
            b5CpOrder = getShuffledOrder(bes5WordsData.length);
            loadB5CpRound();
        }

        function nextB5CpRound() { b5CpRound++; loadB5CpRound(); }

        function loadB5CpRound() {
            b5CpMatches = 0;
            b5CpSelectedLeft = null;
            b5CpSelectedRight = null;
            document.getElementById('b5-cp-msg').classList.add('hidden');
            document.getElementById('b5-cp-win-panel').classList.add('hidden');
            document.getElementById('b5-cp-next-round-panel').classList.add('hidden');

            const startIdx = (b5CpRound - 1) * 10;
            const endIdx = startIdx + 10;
            const roundWords = b5CpOrder
                .slice(startIdx, endIdx)
                .map(index => ({ ...bes5WordsData[index], matched: false, matchText: '' }));

            b5CpLeftPairs = shuffleArray(roundWords);
            b5CpRightPairs = shuffleArray(roundWords);
            renderB5ConnectPairs();
        }

        function renderB5ConnectPairs() {
            const leftContainer = document.getElementById('b5-cp-left');
            const rightContainer = document.getElementById('b5-cp-right');

            leftContainer.innerHTML = b5CpLeftPairs.map((item, i) => {
                const isMatched = item.matched;
                const isSelected = b5CpSelectedLeft === i;
                return `<button onclick="selectB5Pair('left',${i})" class="pair-btn w-full p-3 sm:p-4 rounded-xl border-2 font-bold text-lg transition ${isMatched ? 'matched' : isSelected ? 'selected' : 'bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-slate-800 dark:text-slate-100 hover:border-teal-400'}" ${isMatched ? 'disabled' : ''}>${isMatched ? item.matchText : item[currentLang]}</button>`;
            }).join('');

            rightContainer.innerHTML = b5CpRightPairs.map((item, i) => {
                const isMatched = item.matched;
                const isSelected = b5CpSelectedRight === i;
                return `<button onclick="selectB5Pair('right',${i})" dir="rtl" class="pair-btn w-full p-3 sm:p-4 rounded-xl border-2 font-bold text-xl transition ${isMatched ? 'matched' : isSelected ? 'selected' : 'bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-slate-800 dark:text-slate-100 hover:border-teal-400'}" ${isMatched ? 'disabled' : ''}>${isMatched ? item.matchText : item.he}</button>`;
            }).join('');
        }

        function selectB5Pair(side, idx) {
            if (side === 'left') {
                if (b5CpLeftPairs[idx].matched) return;
                b5CpSelectedLeft = idx;
            } else {
                if (b5CpRightPairs[idx].matched) return;
                b5CpSelectedRight = idx;
            }
            renderB5ConnectPairs();
            if (b5CpSelectedLeft !== null && b5CpSelectedRight !== null) checkB5PairMatch();
        }

        function checkB5PairMatch() {
            const left = b5CpLeftPairs[b5CpSelectedLeft];
            const right = b5CpRightPairs[b5CpSelectedRight];
            const isMatch = left.he === right.he;

            if (isMatch) {
                left.matched = true;
                right.matched = true;
                left.matchText = `${left[currentLang]} = ${left.he}`;
                right.matchText = left.matchText;
                b5CpMatches++;
                showMessage('b5-cp-msg', t('msg_correct'), true);
            } else {
                showMessage('b5-cp-msg', t('msg_wrong'), false);
                const li = b5CpSelectedLeft;
                const ri = b5CpSelectedRight;
                b5CpLeftPairs[li].error = true;
                b5CpRightPairs[ri].error = true;
                renderB5ConnectPairs();
                setTimeout(() => {
                    b5CpLeftPairs[li].error = false;
                    b5CpRightPairs[ri].error = false;
                    b5CpSelectedLeft = null;
                    b5CpSelectedRight = null;
                    renderB5ConnectPairs();
                }, 700);
                return;
            }

            b5CpSelectedLeft = null;
            b5CpSelectedRight = null;
            renderB5ConnectPairs();

            if (b5CpMatches >= b5CpLeftPairs.length) {
                const hasMore = b5CpRound * 10 < b5CpOrder.length;
                if (hasMore) {
                    showMessage('b5-cp-msg', t('msg_round_win').replace('{round}', b5CpRound), true);
                    document.getElementById('b5-cp-next-round-panel').classList.remove('hidden');
                } else {
                    showMessage('b5-cp-msg', t('msg_win'), true);
                    document.getElementById('b5-cp-win-panel').classList.remove('hidden');
                }
            }
        }

        function initB5SentenceBuilder() {
            if (!b5SbOrder.length || b5SbIndex >= b5SbOrder.length) {
                b5SbOrder = getShuffledOrder(bes5GameSentencesData.length);
                b5SbIndex = 0;
            }
            const item = bes5GameSentencesData[b5SbOrder[b5SbIndex]];
            document.getElementById('b5-sb-target-sentence').innerText = item[currentLang];
            document.getElementById('b5-sb-msg').classList.add('hidden');
            setButtonVisibility('b5-sb-check-btn', true);
            setButtonVisibility('b5-sb-retry-btn', false);
            setButtonVisibility('b5-sb-next-btn', false);

            b5SbCurrentSlots = Array(item.words.length).fill(null);
            b5SbPool = shuffleArray([...item.words]);
            renderB5SentenceBuilder();
        }

        function renderB5SentenceBuilder() {
            document.getElementById('b5-sb-slots').innerHTML = b5SbCurrentSlots.map((word, i) =>
                `<div class="min-w-[4rem] h-14 border-2 border-dashed ${word ? 'border-teal-500 bg-teal-50 dark:bg-teal-900/60 dark:border-teal-400 cursor-pointer' : 'border-teal-300 dark:border-teal-700'} rounded-xl flex items-center justify-center text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100 px-3" dir="rtl" onclick="if('${word}' !== 'null') removeB5WordFromSlot(${i})">${word || ''}</div>`
            ).join('');

            document.getElementById('b5-sb-pool').innerHTML = b5SbPool.map((word, i) =>
                `<button onclick="addB5WordToSlot(${i})" dir="rtl" class="min-w-[4rem] h-14 bg-white dark:bg-slate-700 border-2 border-slate-200 dark:border-slate-600 rounded-xl flex items-center justify-center text-xl sm:text-2xl font-bold text-teal-700 dark:text-teal-300 px-3 shadow hover:bg-slate-50 hover:-translate-y-1 transition transform">${word}</button>`
            ).join('');
        }

        function addB5WordToSlot(poolIndex) {
            const word = b5SbPool[poolIndex];
            const emptySlotIndex = b5SbCurrentSlots.indexOf(null);
            if (emptySlotIndex !== -1) {
                b5SbCurrentSlots[emptySlotIndex] = word;
                b5SbPool.splice(poolIndex, 1);
                renderB5SentenceBuilder();
            }
        }

        function removeB5WordFromSlot(slotIndex) {
            const word = b5SbCurrentSlots[slotIndex];
            if (word) {
                b5SbPool.push(word);
                b5SbCurrentSlots[slotIndex] = null;
                renderB5SentenceBuilder();
            }
        }

        function checkB5SentenceBuilder() {
            const item = bes5GameSentencesData[b5SbOrder[b5SbIndex]];
            const isComplete = b5SbCurrentSlots.every(s => s !== null);
            if (!isComplete) return;
            const isCorrect = b5SbCurrentSlots.join(' ') === item.words.join(' ');
            if (isCorrect) {
                showMessageWithPronunciation('b5-sb-msg', t('msg_correct'), item.trans, true);
                setButtonVisibility('b5-sb-check-btn', false);
                setButtonVisibility('b5-sb-retry-btn', false);
                setButtonVisibility('b5-sb-next-btn', true);
            } else {
                showMessageWithPronunciation('b5-sb-msg', withCorrectAnswer(item.words.join(' ')), item.trans, false);
                setButtonVisibility('b5-sb-check-btn', false);
                setButtonVisibility('b5-sb-retry-btn', true);
                setButtonVisibility('b5-sb-next-btn', false);
            }
        }

        function retryB5SentenceBuilder() { initB5SentenceBuilder(); }
        function nextB5SentenceBuilder() { b5SbIndex++; initB5SentenceBuilder(); }

        function initB5TimeGame() {
            b5TimeOrder = getShuffledOrder(bes5TimeGameData.length);
            b5TimeIndex = 0;
            b5TimeScore = 0;
            renderB5TimeGame();
        }

        function renderB5TimeGame() {
            const container = document.getElementById('b5-game-time');
            if (!container) return;

            if (b5TimeIndex >= b5TimeOrder.length) {
                container.innerHTML = `
                    <div class="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow border border-slate-200 dark:border-slate-700 max-w-xl mx-auto text-center space-y-4">
                        <div class="text-2xl font-bold text-slate-800 dark:text-slate-100">${escapeHtml(t('msg_win'))}</div>
                        <div class="text-lg text-slate-600 dark:text-slate-400">${b5TimeScore} / ${b5TimeOrder.length}</div>
                        <button onclick="initB5TimeGame()" class="px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl shadow transition">${escapeHtml(t('quiz_play_again'))}</button>
                    </div>
                `;
                return;
            }

            const item = bes5TimeGameData[b5TimeOrder[b5TimeIndex]];
            const langKey = currentLang === 'en' ? 'en' : 'ku';
            const typeLabel = currentLang === 'en' ? item.typeEn : item.typeKu;
            const progress = `${b5TimeIndex + 1} / ${b5TimeOrder.length}`;
            const showCorrectOnLeft = Math.random() > 0.5;
            const leftHe = showCorrectOnLeft ? item.correct : item.wrong;
            const rightHe = showCorrectOnLeft ? item.wrong : item.correct;
            const leftTrans = showCorrectOnLeft ? item.trans : item.wrongTrans;
            const rightTrans = showCorrectOnLeft ? item.wrongTrans : item.trans;
            const leftIsCorrect = showCorrectOnLeft;

            container.innerHTML = `
                <div class="bg-white dark:bg-slate-800 p-6 sm:p-10 rounded-2xl shadow border border-slate-200 dark:border-slate-700 max-w-2xl mx-auto text-center space-y-6">
                    <p class="text-slate-500 dark:text-slate-400 font-medium">${escapeHtml(t('inst_time'))}</p>
                    <div class="text-sm text-slate-400 dark:text-slate-500 font-medium">${escapeHtml(progress)}</div>
                    <div class="space-y-3">
                        <div class="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100">${escapeHtml(item[langKey])}</div>
                        <span class="inline-block px-4 py-1 rounded-full font-bold text-sm bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300">${escapeHtml(typeLabel)}</span>
                    </div>
                    <div id="b5-time-msg" class="min-h-[1.5rem] font-bold text-lg hidden text-center"></div>
                    <div class="grid grid-cols-2 gap-4">
                        <div class="flex flex-col items-center gap-1">
                            <button
                                id="b5-time-btn-left"
                                onclick="answerB5TimeGame(${leftIsCorrect})"
                                dir="rtl" lang="he"
                                class="w-full p-4 rounded-2xl border-2 border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 hover:border-teal-400 hover:-translate-y-0.5 text-slate-800 dark:text-slate-100 text-2xl font-bold transition"
                            >${escapeHtml(leftHe)}</button>
                            <span class="text-sm text-slate-600 dark:text-slate-300 font-mono">${escapeHtml(leftTrans)}</span>
                        </div>
                        <div class="flex flex-col items-center gap-1">
                            <button
                                id="b5-time-btn-right"
                                onclick="answerB5TimeGame(${!leftIsCorrect})"
                                dir="rtl" lang="he"
                                class="w-full p-4 rounded-2xl border-2 border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 hover:border-teal-400 hover:-translate-y-0.5 text-slate-800 dark:text-slate-100 text-2xl font-bold transition"
                            >${escapeHtml(rightHe)}</button>
                            <span class="text-sm text-slate-600 dark:text-slate-300 font-mono">${escapeHtml(rightTrans)}</span>
                        </div>
                    </div>
                </div>
            `;
        }

        function answerB5TimeGame(isCorrect) {
            const msgEl = document.getElementById('b5-time-msg');
            if (!msgEl) return;

            if (isCorrect) {
                b5TimeScore++;
                b5TimeIndex++;
                showMessage('b5-time-msg', t('msg_correct'), true);
                setTimeout(() => {
                    renderB5TimeGame();
                }, 700);
            } else {
                msgEl.textContent = t('msg_wrong');
                msgEl.className = 'min-h-[1.5rem] font-bold text-lg text-center text-red-600 dark:text-red-400';
                msgEl.classList.remove('hidden');
            }
        }

        // ── CHAPTER 6 FUNCTIONS ───────────────────────────────────────────

        function renderBes6() {
            const langKey = currentLang === 'ku' ? 'ku' : 'en';
            const spkKey = currentLang === 'ku' ? 'spkKu' : 'spkEn';

            document.getElementById('b6-dialog-container').innerHTML = bes6DialogData.map((item, idx) => {
                const isFirst = idx % 2 === 0;
                const bgClass = isFirst ? 'bg-rose-50 dark:bg-rose-900/20' : 'bg-slate-50 dark:bg-slate-800/40';
                const textColClass = isFirst ? 'text-rose-700 dark:text-rose-300' : 'text-slate-600 dark:text-slate-400';
                return `
                    <div class="flex flex-col sm:flex-row gap-2 sm:gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-700 ${bgClass}">
                        <div class="font-bold w-20 flex-shrink-0 ${textColClass}">${item[spkKey]}:</div>
                        <div class="flex-grow">
                            <div class="text-xl sm:text-2xl font-bold mb-1 text-slate-900 dark:text-slate-100" dir="rtl">${item.he}</div>
                            <div class="text-sm text-slate-500 dark:text-slate-400 font-mono mb-2 text-right">${item.trans}</div>
                            <div class="font-medium text-slate-800 dark:text-slate-200">${item[langKey]}</div>
                        </div>
                    </div>
                `;
            }).join('');

            document.getElementById('b6-words-tbody').innerHTML = bes6WordsData.map(item => `
                <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition border-b border-slate-100 dark:border-slate-700">
                    <td class="p-4 font-medium text-slate-800 dark:text-slate-200">${item[langKey]}</td>
                    <td class="p-4 font-bold text-2xl text-slate-800 dark:text-slate-100" dir="rtl">${item.he}</td>
                    <td class="p-4 text-rose-600 dark:text-rose-400 font-mono">${item.trans}</td>
                </tr>
            `).join('');

            document.getElementById('b6-eat-grammar-tbody').innerHTML = bes6EatGrammarData.map(item => `
                <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition border-b border-slate-200 dark:border-slate-700">
                    <td class="p-3 border-r dark:border-slate-700 text-slate-800 dark:text-slate-200">${item[langKey]}</td>
                    <td class="p-3 border-r dark:border-slate-700">
                        <div class="flex flex-col items-end">
                            <span class="font-bold text-xl text-slate-800 dark:text-slate-100" dir="rtl" lang="he">${item.he}</span>
                            <span class="text-sm text-slate-400 dark:text-slate-500 font-mono">${item.pronHe}</span>
                        </div>
                    </td>
                    <td class="p-3">
                        <div class="flex flex-col items-end">
                            <span class="font-bold text-xl text-rose-700 dark:text-rose-300" dir="rtl" lang="he">${item.cgForm}</span>
                            <span class="text-sm text-slate-400 dark:text-slate-500 font-mono">${item.cgFormPron}</span>
                        </div>
                    </td>
                </tr>
            `).join('');

            document.getElementById('b6-drink-grammar-tbody').innerHTML = bes6DrinkGrammarData.map(item => `
                <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition border-b border-slate-200 dark:border-slate-700">
                    <td class="p-3 border-r dark:border-slate-700 text-slate-800 dark:text-slate-200">${item[langKey]}</td>
                    <td class="p-3 border-r dark:border-slate-700">
                        <div class="flex flex-col items-end">
                            <span class="font-bold text-xl text-slate-800 dark:text-slate-100" dir="rtl" lang="he">${item.he}</span>
                            <span class="text-sm text-slate-400 dark:text-slate-500 font-mono">${item.pronHe}</span>
                        </div>
                    </td>
                    <td class="p-3">
                        <div class="flex flex-col items-end">
                            <span class="font-bold text-xl text-rose-700 dark:text-rose-300" dir="rtl" lang="he">${item.cgForm}</span>
                            <span class="text-sm text-slate-400 dark:text-slate-500 font-mono">${item.cgFormPron}</span>
                        </div>
                    </td>
                </tr>
            `).join('');

            if (typeof renderBes6Homework === 'function') {
                renderBes6Homework();
                return;
            }

            document.getElementById('b6-hw-list').innerHTML = bes6HomeworkData.map(item => `
                <li class="pl-2">${item[langKey]}</li>
            `).join('');
        }

        function switchB6GameTab(tabId) {
            b6CurrentGameTab = tabId;
            const baseClass = "nav-btn px-6 py-3 rounded-full font-bold shadow-sm transition";
            const activeClass = "bg-rose-600 text-white dark:bg-rose-600";
            const inactiveClass = "bg-white text-rose-700 border border-rose-600 hover:bg-rose-50 dark:bg-slate-800 dark:border-rose-500 dark:text-rose-300 dark:hover:bg-slate-700";

            ['wb', 'cp', 'sb', 'eat', 'drink'].forEach(id => {
                const btn = document.getElementById('btn-b6-game-' + id);
                if (btn) btn.className = baseClass + " " + (tabId === id ? activeClass : inactiveClass);
                const panel = document.getElementById('b6-game-' + id);
                if (panel) panel.classList.add('hidden');
            });

            document.getElementById('b6-game-' + tabId).classList.remove('hidden');

            if (tabId === 'wb') initB6WordBuilder();
            if (tabId === 'cp') initB6ConnectPairs();
            if (tabId === 'sb') initB6SentenceBuilder();
            if (tabId === 'eat') initB6EatConjugationGame();
            if (tabId === 'drink') initB6DrinkConjugationGame();
        }

        function initB6WordBuilder() {
            b6WbData = bes6GameWordsData;
            if (!b6WbOrder.length || b6WbIndex >= b6WbOrder.length) {
                b6WbOrder = getShuffledOrder(b6WbData.length);
                b6WbIndex = 0;
            }

            const item = b6WbData[b6WbOrder[b6WbIndex]];
            const targetLetters = getHebrewTiles(item.he);

            document.getElementById('b6-wb-target-word').innerText = item[currentLang];
            document.getElementById('b6-wb-msg').classList.add('hidden');
            setButtonVisibility('b6-wb-check-btn', true);
            setButtonVisibility('b6-wb-retry-btn', false);
            setButtonVisibility('b6-wb-next-btn', false);

            b6WbCurrentSlots = Array(targetLetters.length).fill(null);
            b6WbPool = shuffleArray(targetLetters);

            renderB6WordBuilder();
        }

        function renderB6WordBuilder() {
            const item = b6WbData[b6WbOrder[b6WbIndex]];
            const heWords = item.he.split(/\s+/);
            const wordStyles = [
                { filled: 'border-rose-500 bg-rose-50 dark:bg-rose-900/60 dark:border-rose-400 cursor-pointer', empty: 'border-rose-300 dark:border-rose-700' },
                { filled: 'border-orange-500 bg-orange-50 dark:bg-orange-900/60 dark:border-orange-400 cursor-pointer', empty: 'border-orange-300 dark:border-orange-700' },
            ];

            const slotsContainer = document.getElementById('b6-wb-slots');
            let slotsHtml = '';
            let slotIndex = 0;
            slotsHtml += '<div class="w-full space-y-2">';
            for (let wordIdx = 0; wordIdx < heWords.length; wordIdx++) {
                const wordLetterCount = getHebrewTiles(heWords[wordIdx]).length;
                const style = wordStyles[wordIdx % wordStyles.length];
                slotsHtml += '<div class="flex flex-row-reverse justify-start gap-2">';
                for (let l = 0; l < wordLetterCount; l++) {
                    const letter = b6WbCurrentSlots[slotIndex];
                    const i = slotIndex;
                    slotsHtml += `<div class="w-12 h-14 sm:w-16 sm:h-20 border-2 border-dashed ${letter ? style.filled : style.empty} rounded-xl flex items-center justify-center text-3xl font-bold text-slate-800 dark:text-slate-100 shadow-inner" onclick="if('${letter}' !== 'null') removeB6LetterFromSlot(${i})">${letter || ''}</div>`;
                    slotIndex++;
                }
                slotsHtml += '</div>';
            }
            slotsHtml += '</div>';
            slotsContainer.innerHTML = slotsHtml;

            document.getElementById('b6-wb-pool').innerHTML = b6WbPool.map((letter, i) => `
                <button onclick="addB6LetterToSlot(${i})" class="w-12 h-14 sm:w-16 sm:h-20 bg-white dark:bg-slate-700 border-2 border-slate-200 dark:border-slate-600 rounded-xl flex items-center justify-center text-3xl font-bold text-rose-700 dark:text-rose-300 shadow hover:bg-slate-50 hover:-translate-y-1 transition transform">
                    ${letter}
                </button>
            `).join('');
        }

        function addB6LetterToSlot(poolIndex) {
            const letter = b6WbPool[poolIndex];
            const emptySlotIndex = b6WbCurrentSlots.indexOf(null);
            if (emptySlotIndex !== -1) {
                b6WbCurrentSlots[emptySlotIndex] = letter;
                b6WbPool.splice(poolIndex, 1);
                renderB6WordBuilder();
            }
        }

        function removeB6LetterFromSlot(slotIndex) {
            const letter = b6WbCurrentSlots[slotIndex];
            if (letter) {
                b6WbPool.push(letter);
                b6WbCurrentSlots[slotIndex] = null;
                renderB6WordBuilder();
            }
        }

        function checkB6WordBuilder() {
            const item = b6WbData[b6WbOrder[b6WbIndex]];
            const targetLetters = getHebrewTiles(item.he);
            const isComplete = b6WbCurrentSlots.every(s => s !== null);
            if (!isComplete) return;
            const isCorrect = b6WbCurrentSlots.join('') === targetLetters.join('');
            if (isCorrect) {
                showMessageWithPronunciation('b6-wb-msg', t('msg_correct'), item.trans, true);
                setButtonVisibility('b6-wb-check-btn', false);
                setButtonVisibility('b6-wb-retry-btn', false);
                setButtonVisibility('b6-wb-next-btn', true);
            } else {
                showMessageWithPronunciation('b6-wb-msg', withCorrectAnswer(item.he), item.trans, false);
                setButtonVisibility('b6-wb-check-btn', false);
                setButtonVisibility('b6-wb-retry-btn', true);
                setButtonVisibility('b6-wb-next-btn', false);
            }
        }

        function retryB6WordBuilder() { initB6WordBuilder(); }
        function nextB6WordBuilder() { b6WbIndex++; initB6WordBuilder(); }

        function initB6ConnectPairs() {
            b6CpRound = 1;
            b6CpOrder = getShuffledOrder(bes6WordsData.length);
            loadB6CpRound();
        }

        function nextB6CpRound() { b6CpRound++; loadB6CpRound(); }

        function loadB6CpRound() {
            b6CpMatches = 0;
            b6CpSelectedLeft = null;
            b6CpSelectedRight = null;
            document.getElementById('b6-cp-msg').classList.add('hidden');
            document.getElementById('b6-cp-win-panel').classList.add('hidden');
            document.getElementById('b6-cp-next-round-panel').classList.add('hidden');

            const startIdx = (b6CpRound - 1) * 10;
            const endIdx = startIdx + 10;
            const roundWords = b6CpOrder
                .slice(startIdx, endIdx)
                .map(index => ({ ...bes6WordsData[index], matched: false, matchText: '' }));

            b6CpLeftPairs = shuffleArray(roundWords);
            b6CpRightPairs = shuffleArray(roundWords);
            renderB6ConnectPairs();
        }

        function renderB6ConnectPairs() {
            const leftContainer = document.getElementById('b6-cp-left');
            const rightContainer = document.getElementById('b6-cp-right');

            leftContainer.innerHTML = b6CpLeftPairs.map((item, i) => {
                const isMatched = item.matched;
                const isSelected = b6CpSelectedLeft === i;
                return `<button onclick="selectB6Pair('left',${i})" class="pair-btn w-full p-3 sm:p-4 rounded-xl border-2 font-bold text-lg transition ${isMatched ? 'matched' : isSelected ? 'selected' : 'bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-slate-800 dark:text-slate-100 hover:border-rose-400'}" ${isMatched ? 'disabled' : ''}>${isMatched ? item.matchText : item[currentLang]}</button>`;
            }).join('');

            rightContainer.innerHTML = b6CpRightPairs.map((item, i) => {
                const isMatched = item.matched;
                const isSelected = b6CpSelectedRight === i;
                return `<button onclick="selectB6Pair('right',${i})" dir="rtl" class="pair-btn w-full p-3 sm:p-4 rounded-xl border-2 font-bold text-xl transition ${isMatched ? 'matched' : isSelected ? 'selected' : 'bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-slate-800 dark:text-slate-100 hover:border-rose-400'}" ${isMatched ? 'disabled' : ''}>${isMatched ? item.matchText : item.he}</button>`;
            }).join('');
        }

        function selectB6Pair(side, idx) {
            if (side === 'left') {
                if (b6CpLeftPairs[idx].matched) return;
                b6CpSelectedLeft = idx;
            } else {
                if (b6CpRightPairs[idx].matched) return;
                b6CpSelectedRight = idx;
            }
            renderB6ConnectPairs();
            if (b6CpSelectedLeft !== null && b6CpSelectedRight !== null) checkB6PairMatch();
        }

        function checkB6PairMatch() {
            const left = b6CpLeftPairs[b6CpSelectedLeft];
            const right = b6CpRightPairs[b6CpSelectedRight];
            const isMatch = left.he === right.he;

            if (isMatch) {
                left.matched = true;
                right.matched = true;
                left.matchText = `${left[currentLang]} = ${left.he}`;
                right.matchText = left.matchText;
                b6CpMatches++;
                showMessage('b6-cp-msg', t('msg_correct'), true);
            } else {
                showMessage('b6-cp-msg', t('msg_wrong'), false);
                const li = b6CpSelectedLeft;
                const ri = b6CpSelectedRight;
                b6CpLeftPairs[li].error = true;
                b6CpRightPairs[ri].error = true;
                renderB6ConnectPairs();
                setTimeout(() => {
                    b6CpLeftPairs[li].error = false;
                    b6CpRightPairs[ri].error = false;
                    b6CpSelectedLeft = null;
                    b6CpSelectedRight = null;
                    renderB6ConnectPairs();
                }, 700);
                return;
            }

            b6CpSelectedLeft = null;
            b6CpSelectedRight = null;
            renderB6ConnectPairs();

            if (b6CpMatches >= b6CpLeftPairs.length) {
                const hasMore = b6CpRound * 10 < b6CpOrder.length;
                if (hasMore) {
                    showMessage('b6-cp-msg', t('msg_round_win').replace('{round}', b6CpRound), true);
                    document.getElementById('b6-cp-next-round-panel').classList.remove('hidden');
                } else {
                    showMessage('b6-cp-msg', t('msg_win'), true);
                    document.getElementById('b6-cp-win-panel').classList.remove('hidden');
                }
            }
        }

        function initB6SentenceBuilder() {
            if (!b6SbOrder.length || b6SbIndex >= b6SbOrder.length) {
                b6SbOrder = getShuffledOrder(bes6GameSentencesData.length);
                b6SbIndex = 0;
            }
            const item = bes6GameSentencesData[b6SbOrder[b6SbIndex]];
            document.getElementById('b6-sb-target-sentence').innerText = item[currentLang];
            document.getElementById('b6-sb-msg').classList.add('hidden');
            setButtonVisibility('b6-sb-check-btn', true);
            setButtonVisibility('b6-sb-retry-btn', false);
            setButtonVisibility('b6-sb-next-btn', false);

            b6SbCurrentSlots = Array(item.words.length).fill(null);
            b6SbPool = shuffleArray([...item.words]);
            renderB6SentenceBuilder();
        }

        function renderB6SentenceBuilder() {
            document.getElementById('b6-sb-slots').innerHTML = b6SbCurrentSlots.map((word, i) =>
                `<div class="min-w-[4rem] h-14 border-2 border-dashed ${word ? 'border-rose-500 bg-rose-50 dark:bg-rose-900/60 dark:border-rose-400 cursor-pointer' : 'border-rose-300 dark:border-rose-700'} rounded-xl flex items-center justify-center text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100 px-3" dir="rtl" onclick="if('${word}' !== 'null') removeB6WordFromSlot(${i})">${word || ''}</div>`
            ).join('');

            document.getElementById('b6-sb-pool').innerHTML = b6SbPool.map((word, i) =>
                `<button onclick="addB6WordToSlot(${i})" dir="rtl" class="min-w-[4rem] h-14 bg-white dark:bg-slate-700 border-2 border-slate-200 dark:border-slate-600 rounded-xl flex items-center justify-center text-xl sm:text-2xl font-bold text-rose-700 dark:text-rose-300 px-3 shadow hover:bg-slate-50 hover:-translate-y-1 transition transform">${word}</button>`
            ).join('');
        }

        function addB6WordToSlot(poolIndex) {
            const word = b6SbPool[poolIndex];
            const emptySlotIndex = b6SbCurrentSlots.indexOf(null);
            if (emptySlotIndex !== -1) {
                b6SbCurrentSlots[emptySlotIndex] = word;
                b6SbPool.splice(poolIndex, 1);
                renderB6SentenceBuilder();
            }
        }

        function removeB6WordFromSlot(slotIndex) {
            const word = b6SbCurrentSlots[slotIndex];
            if (word) {
                b6SbPool.push(word);
                b6SbCurrentSlots[slotIndex] = null;
                renderB6SentenceBuilder();
            }
        }

        function checkB6SentenceBuilder() {
            const item = bes6GameSentencesData[b6SbOrder[b6SbIndex]];
            const isComplete = b6SbCurrentSlots.every(s => s !== null);
            if (!isComplete) return;
            const isCorrect = b6SbCurrentSlots.join(' ') === item.words.join(' ');
            if (isCorrect) {
                showMessageWithPronunciation('b6-sb-msg', t('msg_correct'), item.trans, true);
                setButtonVisibility('b6-sb-check-btn', false);
                setButtonVisibility('b6-sb-retry-btn', false);
                setButtonVisibility('b6-sb-next-btn', true);
            } else {
                showMessageWithPronunciation('b6-sb-msg', withCorrectAnswer(item.words.join(' ')), item.trans, false);
                setButtonVisibility('b6-sb-check-btn', false);
                setButtonVisibility('b6-sb-retry-btn', true);
                setButtonVisibility('b6-sb-next-btn', false);
            }
        }

        function retryB6SentenceBuilder() { initB6SentenceBuilder(); }
        function nextB6SentenceBuilder() { b6SbIndex++; initB6SentenceBuilder(); }

        function getB6ConjugationOptions(data, phase) {
            if (phase === 'form') {
                return shuffleArray(data.map(item => item.cgForm));
            }
            return shuffleArray(data.map(item => item.he));
        }

        function getB6ConjugationState(kind) {
            return kind === 'eat' ? b6EatCgState : b6DrinkCgState;
        }

        function getB6ConjugationData(kind) {
            return kind === 'eat' ? bes6EatGrammarData : bes6DrinkGrammarData;
        }

        function initB6ConjugationGame(kind) {
            const state = getB6ConjugationState(kind);
            state.phase = 'pronoun';
            state.index = 0;
            state.options = getB6ConjugationOptions(getB6ConjugationData(kind), 'pronoun');
            document.getElementById(`b6-${kind}-cg-msg`).classList.add('hidden');
            setButtonVisibility(`b6-${kind}-cg-reset-btn`, false);
            renderB6ConjugationGame(kind);
        }

        function renderB6ConjugationGame(kind) {
            const state = getB6ConjugationState(kind);
            const data = getB6ConjugationData(kind);
            const tableBody = document.getElementById(`b6-${kind}-cg-table-body`);
            const optionsElement = document.getElementById(`b6-${kind}-cg-options`);
            const hebrewHead = document.getElementById(`b6-${kind}-cg-head-hebrew`);
            const formHead = document.getElementById(`b6-${kind}-cg-head-form`);

            if (!tableBody || !optionsElement || !hebrewHead || !formHead) return;

            hebrewHead.className = getB2CgHeaderClass(state.phase === 'pronoun');
            formHead.className = getB2CgHeaderClass(state.phase === 'form');

            tableBody.innerHTML = data.map((item, index) => {
                const translation = currentLang === 'en' ? item.en : item.ku;
                const pronounSolved = state.phase !== 'pronoun' || index < state.index;
                const formSolved = state.phase === 'done' || (state.phase === 'form' && index < state.index);
                const pronounCurrent = state.phase === 'pronoun' && index === state.index;
                const formCurrent = state.phase === 'form' && index === state.index;
                const pronounCellClass = state.phase === 'pronoun' ? 'bg-rose-50 ring-1 ring-inset ring-rose-300/80 dark:bg-rose-500/10 dark:ring-rose-500/40' : '';
                const formCellClass = state.phase === 'form' ? 'bg-orange-50 ring-1 ring-inset ring-orange-300/80 dark:bg-orange-500/10 dark:ring-orange-500/40' : '';

                const pronounCell = pronounSolved
                    ? getB2CgSolvedContent(item.he, item.pronHe, 'rtl')
                    : getB2CgPlaceholderBox(state.phase === 'pronoun', pronounCurrent);

                const formCell = formSolved
                    ? getB2CgSolvedContent(item.cgForm, item.cgFormPron, 'rtl')
                    : getB2CgPlaceholderBox(state.phase === 'form', formCurrent);

                return `
                    <tr>
                        <td class="p-4 font-semibold text-slate-800 dark:text-slate-100">${escapeHtml(translation)}</td>
                        <td class="p-4 ${pronounCellClass}">${pronounCell}</td>
                        <td class="p-4 ${formCellClass}">${formCell}</td>
                    </tr>
                `;
            }).join('');

            if (state.phase === 'done') {
                optionsElement.innerHTML = '';
                showMessage(`b6-${kind}-cg-msg`, t('cg_done'), true);
                setButtonVisibility(`b6-${kind}-cg-reset-btn`, true);
                return;
            }

            optionsElement.innerHTML = state.options.map((option, index) => {
                const isHebrewOption = state.phase === 'pronoun';
                const paletteClass = getB2CgOptionClass(index, isHebrewOption);
                return `
                    <button
                        onclick="answerB6ConjugationGame('${kind}', ${index})"
                        dir="rtl" lang="he"
                        class="min-h-[3.75rem] w-full px-5 rounded-xl border-2 ${paletteClass} text-slate-800 dark:text-slate-100 text-2xl font-bold shadow-sm hover:-translate-y-0.5 transition"
                    >
                        ${escapeHtml(option)}
                    </button>
                `;
            }).join('');
        }

        function answerB6ConjugationGame(kind, optionIndex) {
            const state = getB6ConjugationState(kind);
            const data = getB6ConjugationData(kind);
            const item = data[state.index];
            const selected = state.options[optionIndex];
            if (!item) return;

            const correctAnswer = state.phase === 'pronoun' ? item.he : item.cgForm;
            const pronunciation = state.phase === 'pronoun' ? item.pronHe : item.cgFormPron;

            if (selected === correctAnswer) {
                state.index++;
                if (state.phase === 'pronoun' && state.index >= data.length) {
                    state.phase = 'form';
                    state.index = 0;
                    state.options = getB6ConjugationOptions(data, 'form');
                    renderB6ConjugationGame(kind);
                    showMessage(`b6-${kind}-cg-msg`, t('cg_phase_forms'), true);
                    return;
                }
                if (state.phase === 'form' && state.index >= data.length) {
                    state.phase = 'done';
                    renderB6ConjugationGame(kind);
                    return;
                }
                renderB6ConjugationGame(kind);
                showMessageWithPronunciation(`b6-${kind}-cg-msg`, t('msg_correct'), pronunciation, true);
            } else {
                showMessage(`b6-${kind}-cg-msg`, withCorrectAnswer(correctAnswer), false);
            }
        }

        function initB6EatConjugationGame() { initB6ConjugationGame('eat'); }
        function initB6DrinkConjugationGame() { initB6ConjugationGame('drink'); }

        // Initialize on load
        window.onload = () => {
            updateLanguageUI();
        };
