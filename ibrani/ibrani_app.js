// --- GLOBAL STATE ---
        let currentLang = 'ku';
        let currentView = 'toc';
        let currentTab = 'reference'; 
        let currentCategory = 'letters'; 
        
        let fcIndex = 0;
        let isCardFlipped = false;
        let quizQuestions = [];
        let currentQIndex = 0;
        let quizScore = 0;

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

            if (currentView === 'tools') {
                if (currentTab === 'reference') renderReference();
                if (currentTab === 'flashcards') renderFlashcard(true);
                if (currentTab === 'quiz') {
                    if (hasElement('quiz-active') && !document.getElementById('quiz-active').classList.contains('hidden')) renderQuestion();
                    if (hasElement('quiz-results') && !document.getElementById('quiz-results').classList.contains('hidden')) endQuiz();
                }
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

            const toolsNav = document.getElementById('tools-nav');
            if (toolsNav && viewId === 'tools') {
                toolsNav.classList.remove('hidden');
                toolsNav.classList.add('flex');
                switchTab(currentTab); 
            } else if (toolsNav) {
                toolsNav.classList.add('hidden');
                toolsNav.classList.remove('flex');
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
            const baseClass = "nav-btn w-full sm:w-auto px-4 py-3 sm:py-2 rounded-lg font-medium text-white transition";
            ['reference', 'flashcards', 'quiz'].forEach(id => {
                const btn = document.getElementById('btn-' + id);
                const section = document.getElementById('sec-' + id);
                if (btn) {
                    btn.className = baseClass + " " + (tabId === id ? "bg-blue-800 dark:bg-blue-950 shadow-inner" : "bg-blue-500 dark:bg-blue-700 hover:bg-blue-700 dark:hover:bg-blue-600");
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
            if (tabId === 'quiz') resetQuizUI();
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
        function prevCard() { fcIndex = (fcIndex - 1 + getData().length) % getData().length; renderFlashcard(); }

        function resetQuizUI() {
            document.getElementById('quiz-setup').classList.remove('hidden');
            document.getElementById('quiz-active').classList.add('hidden');
            document.getElementById('quiz-results').classList.add('hidden');
        }

        function startQuiz() {
            resetQuizUI();
            document.getElementById('quiz-setup').classList.add('hidden');
            document.getElementById('quiz-active').classList.remove('hidden');
            quizScore = 0; currentQIndex = 0;
            const data = getData();
            quizQuestions = shuffleArray(data).map((item) => ({
                targetDataId: data.indexOf(item),
                qType: Math.random() > 0.5 ? 'name' : 'sound',
                char: item.char
            }));
            renderQuestion();
        }

        function renderQuestion() {
            const q = quizQuestions[currentQIndex];
            const data = getData();
            const targetItem = data[q.targetDataId];
            
            document.getElementById('quiz-question').innerText = t(`quiz_q_${q.qType}_${currentCategory}`);
            document.getElementById('quiz-focus').innerText = q.char;
            document.getElementById('quiz-progress').innerText = t('quiz_progress').replace('{current}', currentQIndex + 1).replace('{total}', quizQuestions.length);
            document.getElementById('quiz-score').innerText = t('quiz_score').replace('{score}', quizScore);
            document.getElementById('quiz-feedback').classList.add('hidden');
            
            const correct = getProp(targetItem, q.qType);
            let options = [correct];
            while(options.length < 4) {
                const wrong = getProp(data[Math.floor(Math.random() * data.length)], q.qType);
                if(!options.includes(wrong)) options.push(wrong);
            }
            options = shuffleArray(options);
            
            const cont = document.getElementById('quiz-options');
            cont.innerHTML = '';
            options.forEach(opt => {
                const btn = document.createElement('button');
                btn.className = "quiz-opt-btn w-full p-4 sm:p-5 border-2 rounded-xl font-bold text-lg sm:text-xl transition shadow-sm bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700 hover:border-blue-300";
                btn.innerText = opt;
                btn.onclick = () => {
                    document.querySelectorAll('.quiz-opt-btn').forEach(b => b.disabled = true);
                    const feedback = document.getElementById('quiz-feedback');
                    feedback.classList.remove('hidden', 'text-green-500', 'text-red-500');
                    if (opt === correct) {
                        btn.classList.add('bg-green-100', 'border-green-500', 'text-green-800', 'dark:bg-green-900', 'dark:text-green-100');
                        quizScore++;
                        document.getElementById('quiz-score').innerText = t('quiz_score').replace('{score}', quizScore);
                        feedback.innerText = t('msg_correct');
                        feedback.classList.add('text-green-500');
                    } else {
                        btn.classList.add('bg-red-100', 'border-red-500', 'text-red-800', 'dark:bg-red-900', 'dark:text-red-100');
                        document.querySelectorAll('.quiz-opt-btn').forEach(b => {
                            if (b.innerText === correct) b.classList.add('bg-green-100', 'border-green-500', 'text-green-800', 'dark:bg-green-900', 'dark:text-green-100');
                        });
                        feedback.innerText = withCorrectAnswer(correct);
                        feedback.classList.add('text-red-500');
                    }
                    document.getElementById('quiz-next-btn').classList.remove('hidden');
                };
                cont.appendChild(btn);
            });
            document.getElementById('quiz-next-btn').classList.add('hidden');
        }

        function nextQuizQuestion() {
            currentQIndex++;
            if (currentQIndex < quizQuestions.length) renderQuestion(); else endQuiz();
        }

        function endQuiz() {
            document.getElementById('quiz-active').classList.add('hidden');
            document.getElementById('quiz-results').classList.remove('hidden');
            document.getElementById('quiz-score-msg').innerHTML = t('quiz_score_msg').replace('{score}', quizScore).replace('{total}', quizQuestions.length);
        }

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

            document.getElementById('b1-hw-list').innerHTML = bes1HomeworkData.map(item => `
                <li class="pl-2">${item[langKey]}</li>
            `).join('');
        }

        function renderBes2() {
            const langKey = currentLang === 'ku' ? 'ku' : 'en';
            const spkKey = currentLang === 'ku' ? 'spkKu' : 'spkEn';
            const noteKey = currentLang === 'ku' ? 'noteKu' : 'noteEn';

            document.getElementById('b2-dialog-container').innerHTML = bes2DialogData.map((item, idx) => {
                const isArya = idx % 2 === 0; 
                const bgClass = isArya ? 'bg-blue-50 dark:bg-blue-900/20' : 'bg-green-50 dark:bg-green-900/20';
                const textColClass = isArya ? 'text-blue-800 dark:text-blue-300' : 'text-green-800 dark:text-green-300';
                
                return `
                <div class="flex flex-col sm:flex-row gap-2 sm:gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-700 ${bgClass}">
                    <div class="font-bold w-20 flex-shrink-0 ${textColClass}">${item[spkKey]}:</div>
                    <div class="flex-grow">
                        <div class="text-xl sm:text-2xl font-bold mb-1 text-slate-900 dark:text-slate-100" dir="rtl">${item.he}</div>
                        <div class="text-sm text-slate-500 dark:text-slate-400 font-mono mb-2">${item.trans}</div>
                        <div class="font-medium text-slate-800 dark:text-slate-200">${item[langKey]}</div>
                    </div>
                </div>
            `}).join('');

            document.getElementById('b2-words-tbody').innerHTML = bes2WordsDataExpanded.map(item => `
                <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition border-b border-slate-100 dark:border-slate-700">
                    <td class="p-4 font-medium text-slate-800 dark:text-slate-200">${item[langKey]}</td>
                    <td class="p-4 font-bold text-2xl text-slate-800 dark:text-slate-100" dir="rtl">${item.he}</td>
                    <td class="p-4 text-blue-600 dark:text-blue-400 font-mono">${item.trans}</td>
                </tr>
            `).join('');

            document.getElementById('b2-grammar-tbody').innerHTML = bes2GrammarDataExpanded.map(item => `
                <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition border-b border-slate-200 dark:border-slate-700">
                    <td class="p-3 border-r dark:border-slate-700 text-slate-800 dark:text-slate-200">${item[langKey]}</td>
                    <td class="p-3 border-r dark:border-slate-700 font-bold text-xl text-right text-slate-800 dark:text-slate-100" dir="rtl">${item.he}</td>
                    <td class="p-3 text-blue-600 dark:text-blue-400">${item[noteKey]}</td>
                </tr>
            `).join('');

            document.getElementById('b2-hw-list').innerHTML = bes2HomeworkDataExpanded.map(item => `
                <li class="pl-2">${item[langKey]}</li>
            `).join('');
        }

        // --- GAME LOGIC (BEŞ 1 GAMES) ---
        function getAlphabetGameItems() {
            if (currentAlphabetGameTab === 'letters') {
                return lettersData.map((item, index) => ({
                    id: `letter-${index}`,
                    left: `${getProp(item, 'name')} - ${getProp(item, 'sound')}`,
                    right: item.char
                }));
            }

            return nikudData.map((item, index) => ({
                id: `nikud-${index}`,
                left: getProp(item, 'sound'),
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
                let classes = "pair-btn w-full p-4 border-2 rounded-xl font-bold transition shadow-sm ";
                if (isMatched) classes += "matched text-sm sm:text-base";
                else if (isSelected) classes += "selected text-base";
                else classes += "bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-blue-50 hover:border-blue-300 dark:hover:bg-slate-600 text-base";

                return `<button class="${classes}" ${isMatched ? 'disabled' : `onclick="selectAlphabetPair('left', ${index})"`}>${isMatched ? item.matchText : item.left}</button>`;
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
            const answerText = `${leftItem.right} - ${leftItem.left}`;

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
            const slotsContainer = document.getElementById('wb-slots');
            slotsContainer.innerHTML = wbCurrentSlots.map((letter, i) => `
                <div class="w-14 h-16 sm:w-16 sm:h-20 border-2 border-dashed ${letter ? 'border-blue-500 bg-blue-50 dark:bg-blue-900 dark:border-blue-400 cursor-pointer' : 'border-slate-300 dark:border-slate-600'} rounded-xl flex items-center justify-center text-3xl font-bold text-slate-800 dark:text-slate-100 shadow-inner" onclick="if('${letter}' !== 'null') removeLetterFromSlot(${i})">
                    ${letter || ''}
                </div>
            `).join('');

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
            
            ['wb', 'cp', 'sb'].forEach(id => {
                const btn = document.getElementById('btn-b2-game-' + id);
                btn.className = baseClass + " " + (tabId === id ? activeClass : inactiveClass);
                document.getElementById('b2-game-' + id).classList.add('hidden');
            });
            
            document.getElementById('b2-game-' + tabId).classList.remove('hidden');

            if(tabId === 'wb') initB2WordBuilder();
            if(tabId === 'cp') initB2ConnectPairs();
            if(tabId === 'sb') initB2SentenceBuilder();
        }

        // B2 Word Builder
        function initB2WordBuilder() {
            if (!b2WbOrder.length || b2WbIndex >= b2WbOrder.length) {
                b2WbOrder = getShuffledOrder(bes2WordsDataExpanded.length);
                b2WbIndex = 0;
            }
            const item = bes2WordsDataExpanded[b2WbOrder[b2WbIndex]];
            const targetLetters = getHebrewTiles(item.he);
            
            document.getElementById('b2-wb-target-word').innerText = item[currentLang];
            document.getElementById('b2-wb-msg').classList.add('hidden');
            setButtonVisibility('b2-wb-check-btn', true);
            setButtonVisibility('b2-wb-retry-btn', false);
            setButtonVisibility('b2-wb-next-btn', false);

            b2WbCurrentSlots = Array(targetLetters.length).fill(null);
            b2WbPool = shuffleArray(targetLetters);

            renderB2WordBuilder();
        }

        function renderB2WordBuilder() {
            const slotsContainer = document.getElementById('b2-wb-slots');
            slotsContainer.innerHTML = b2WbCurrentSlots.map((letter, i) => `
                <div class="w-12 h-14 sm:w-16 sm:h-20 border-2 border-dashed ${letter ? 'border-green-500 bg-green-50 dark:bg-green-900 dark:border-green-400 cursor-pointer' : 'border-slate-300 dark:border-slate-600'} rounded-xl flex items-center justify-center text-3xl font-bold text-slate-800 dark:text-slate-100 shadow-inner" onclick="if('${letter}' !== 'null') removeB2LetterFromSlot(${i})">
                    ${letter || ''}
                </div>
            `).join('');

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
            const item = bes2WordsDataExpanded[b2WbOrder[b2WbIndex]];
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
            b2CpOrder = getShuffledOrder(bes2WordsDataExpanded.length);
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
                .map(index => ({...bes2WordsDataExpanded[index], matched: false, matchText: ''}));
            
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
            if (!b2SbOrder.length || b2SbIndex >= b2SbOrder.length) {
                b2SbOrder = getShuffledOrder(bes2SentencesDataExpanded.length);
                b2SbIndex = 0;
            }
            const item = bes2SentencesDataExpanded[b2SbOrder[b2SbIndex]];
            
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
            const item = bes2SentencesDataExpanded[b2SbOrder[b2SbIndex]];
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

        // Initialize on load
        window.onload = () => {
            updateLanguageUI();
        };
