// --- Matching Game Logic (Generic - Re-verified against L1) ---
function initializeMatchingGame(ottomanContainerId, englishContainerId, feedbackId, totalPairs) {
    let selected = { ottoman: null, english: null }; let matchCount = 0;
    const ottomanContainer = document.getElementById(ottomanContainerId);
    const englishContainer = document.getElementById(englishContainerId);
    const feedbackElement = document.getElementById(feedbackId);
    if (!ottomanContainer || !englishContainer || !feedbackElement) return;
    const shuffle = c => Array.from(c.children).sort(() => .5-Math.random()).forEach(i=>c.appendChild(i));
    shuffle(ottomanContainer); shuffle(englishContainer);
    const items = document.querySelectorAll(`#${ottomanContainerId} .matching-item, #${englishContainerId} .matching-item`);
    items.forEach(item => {
        const newItem = item.cloneNode(true); item.parentNode.replaceChild(newItem, item); // Prevent duplicate listeners
        newItem.addEventListener('click', function() {
            if (this.classList.contains('matched')) return;
            const isOttoman = this.closest(`#${ottomanContainerId}`) !== null;
            const side = isOttoman ? 'ottoman' : 'english';
            if (selected[side]) selected[side].classList.remove('selected');
            this.classList.add('selected'); selected[side] = this;
            feedbackElement.textContent = ''; // Clear feedback on selection
            if (selected.ottoman && selected.english) {
                if (selected.ottoman.dataset.id === selected.english.dataset.id) {
                    // Correct Match
                    ['ottoman', 'english'].forEach(s => { selected[s].classList.remove('selected'); selected[s].classList.add('matched'); });
                    matchCount++;
                    if (matchCount === totalPairs) {
                        feedbackElement.textContent = 'Correct'; // Match L1 final feedback TEXT
                        feedbackElement.className = 'matching-feedback correct'; // Use specific class with L1 styles (black text, large font)
                    } selected = { ottoman: null, english: null };
                } else { // Incorrect Match
                    feedbackElement.textContent = ''; // L1 doesn't show 'Incorrect Match' text
                    const selO = selected.ottoman, selE = selected.english;
                    setTimeout(() => { if(selO) selO.classList.remove('selected'); if(selE) selE.classList.remove('selected'); }, 800); // Match L1 timeout behavior
                    selected = { ottoman: null, english: null };
                }
            }
        });
    });
}

// Generic functions for sentence building
function initializeSentenceBuilding(sentencesData) {
    const sentences = sentencesData.map(item => {
        return {
            original: typeof item === 'object' ? item.ottoman : item.correct.join(' '),
            english: item.english,
            words: typeof item === 'object' ? item.ottoman.split(/\s+/) : item.words
        };
    });
    
    // Initialize the game
    const gameContainer = document.getElementById('sentences-container');
    if (!gameContainer) return;
    
    // Shuffle function for words
    function shuffleArray(array) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }
    
    // Create all sentence elements
    sentences.forEach((sentence, index) => {
        // Create game sentence element
        const sentenceElement = document.createElement('div');
        sentenceElement.className = 'game-sentence';
        sentenceElement.id = `sentence-${index}`;
        
        // Create numbered translation
        const translation = document.createElement('div');
        translation.className = 'game-sentence-translation';
        translation.innerHTML = `<span class="sentence-number">${index + 1}/${sentences.length}</span> ${sentence.english}`;
        sentenceElement.appendChild(translation);
        
        // Create solution area (where selected words will go)
        const solutionArea = document.createElement('div');
        solutionArea.className = 'solution-area';
        solutionArea.id = `solution-area-${index}`;
        sentenceElement.appendChild(solutionArea);
        
        // Create words bank (where unselected words are)
        const wordsBank = document.createElement('div');
        wordsBank.className = 'words-bank';
        wordsBank.id = `words-bank-${index}`;
        sentenceElement.appendChild(wordsBank);
        
        // Add shuffled words to the words bank
        const shuffledWords = shuffleArray(sentence.words);
        shuffledWords.forEach(word => {
            const wordElement = document.createElement('div');
            wordElement.className = 'word-box ottoman-text';
            wordElement.textContent = word;
            
            // Add click event to move words between banks
            wordElement.addEventListener('click', () => {
                const parent = wordElement.parentElement;
                
                if (parent.classList.contains('words-bank')) {
                    // Move from words bank to solution area
                    const solutionArea = document.getElementById(`solution-area-${index}`);
                    solutionArea.appendChild(wordElement);
                } else {
                    // Move from solution area to words bank
                    const wordsBank = document.getElementById(`words-bank-${index}`);
                    wordsBank.appendChild(wordElement);
                }
                
                // Clear feedback when words are changed
                const feedbackElement = document.getElementById(`feedback-${index}`);
                feedbackElement.textContent = '';
                feedbackElement.className = 'game-feedback';
            });
            
            wordsBank.appendChild(wordElement);
        });
        
        // Add feedback area
        const feedback = document.createElement('div');
        feedback.className = 'game-feedback';
        feedback.id = `feedback-${index}`;
        sentenceElement.appendChild(feedback);
        
        // Add buttons
        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'sentence-buttons';
        
        const checkButton = document.createElement('button');
        checkButton.className = 'check-btn';
        checkButton.textContent = 'Check Answer';
        checkButton.addEventListener('click', () => checkAnswer(index));
        buttonContainer.appendChild(checkButton);
        
        const showAnswerButton = document.createElement('button');
        showAnswerButton.className = 'show-answer-btn';
        showAnswerButton.textContent = 'Show Answer';
        showAnswerButton.addEventListener('click', () => showAnswer(index));
        buttonContainer.appendChild(showAnswerButton);
        
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Clear Box';
        deleteBtn.addEventListener('click', () => {
            const solutionArea = document.getElementById(`solution-area-${index}`);
            const wordsBank = document.getElementById(`words-bank-${index}`);
            
            // Move all words from solution area back to words bank
            while (solutionArea.firstChild) {
                wordsBank.appendChild(solutionArea.firstChild);
            }
            
            // Clear feedback when words are changed
            const feedbackElement = document.getElementById(`feedback-${index}`);
            feedbackElement.textContent = '';
            feedbackElement.className = 'game-feedback';
        });
        buttonContainer.appendChild(deleteBtn);
        
        sentenceElement.appendChild(buttonContainer);
        
        // Add to game container
        gameContainer.appendChild(sentenceElement);
        
        // Initially hide all sentences except the first one
        if (index > 0) {
            sentenceElement.style.display = 'none';
        }
    });
    
    // Check answer function
    function checkAnswer(sentenceId) {
        const solutionArea = document.getElementById(`solution-area-${sentenceId}`);
        const feedbackElement = document.getElementById(`feedback-${sentenceId}`);
        const sentenceElement = document.getElementById(`sentence-${sentenceId}`);
        
        // Get current word order in solution area
        const currentWords = Array.from(solutionArea.children).map(word => word.textContent);
        const correctWords = sentences[sentenceId].words;
        
        // Check if all words are in the solution area
        if (currentWords.length !== correctWords.length) {
            feedbackElement.textContent = '✗ Please use all the words.';
            feedbackElement.className = 'game-feedback feedback-incorrect';
            return;
        }
        
        // Check if the order is correct - words are already in correct order
        const isCorrect = arraysEqual(currentWords, correctWords);
        
        if (isCorrect) {
            feedbackElement.textContent = '✓ Correct! Well done!';
            feedbackElement.className = 'game-feedback feedback-correct';
            sentenceElement.classList.add('completed');
            
            // Show next sentence if there is one
            if (sentenceId < sentences.length - 1) {
                setTimeout(() => {
                    const nextSentence = document.getElementById(`sentence-${sentenceId + 1}`);
                    if (nextSentence) {
                        nextSentence.style.display = 'block';
                        // Scroll to next sentence
                        nextSentence.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }, 800);
            }
        } else {
            feedbackElement.textContent = '✗ Not quite right. Try again!';
            feedbackElement.className = 'game-feedback feedback-incorrect';
        }
    }
    
    // Show answer function
    function showAnswer(sentenceId) {
        const solutionArea = document.getElementById(`solution-area-${sentenceId}`);
        const wordsBank = document.getElementById(`words-bank-${sentenceId}`);
        const feedbackElement = document.getElementById(`feedback-${sentenceId}`);
        const sentenceElement = document.getElementById(`sentence-${sentenceId}`);
        
        // Clear both areas
        solutionArea.innerHTML = '';
        wordsBank.innerHTML = '';
        
        // Add words in correct order to solution area
        // Words are already in correct order in the sentences array
        sentences[sentenceId].words.forEach(word => {
            const wordElement = document.createElement('div');
            wordElement.className = 'word-box ottoman-text';
            wordElement.textContent = word;
            solutionArea.appendChild(wordElement);
        });
        
        // Update feedback
        feedbackElement.textContent = 'This is the correct order.';
        feedbackElement.className = 'game-feedback';
        
        // Mark as completed
        sentenceElement.classList.add('completed');
        
        // Show next sentence if there is one
        if (sentenceId < sentences.length - 1) {
            setTimeout(() => {
                const nextSentence = document.getElementById(`sentence-${sentenceId + 1}`);
                if (nextSentence) {
                    nextSentence.style.display = 'block';
                    // Scroll to next sentence
                    nextSentence.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 800);
        }
    }
    
    // Helper function to compare arrays
    function arraysEqual(a, b) {
        if (a.length !== b.length) return false;
        return a.every((val, index) => val === b[index]);
    }
}

// Generic function for initializing matching exercises
function initializeMatching(exerciseId, pairs) {
    const ottomanContainer = document.getElementById(`${exerciseId}-ottoman-container`);
    const caseContainer = document.getElementById(`${exerciseId}-case-container`);
    const feedbackElement = document.getElementById(`${exerciseId}-matching-feedback`);
    
    if (!ottomanContainer || !caseContainer || !feedbackElement) return;
    
    initializeMatchingGame(
        `${exerciseId}-ottoman-container`,
        `${exerciseId}-case-container`,
        `${exerciseId}-matching-feedback`,
        pairs.length
    );
}