/**
 * Ukrainian Lessons - Shared JavaScript Functions
 * Based on Lesson 5 Template
 */

// --- Generic Matching Game Logic ---
function initializeMatchingGame(ukrainianContainerId, englishContainerId, feedbackId, totalPairs) {
    let selected = { ukrainian: null, english: null }; // For ukr-eng matching
    let selectedGeneric1 = null; // For pronoun-verb form matching (col1)
    let selectedGeneric2 = null; // For pronoun-verb form matching (col2)
    let matchCount = 0;
    const col1Container = document.getElementById(ukrainianContainerId); // Can be pronoun or Ukrainian word
    const col2Container = document.getElementById(englishContainerId); // Can be verb form or English word
    const feedbackElement = document.getElementById(feedbackId);

    if (!col1Container || !col2Container || !feedbackElement) {
        console.error("Matching game containers or feedback element not found for:", ukrainianContainerId, englishContainerId, feedbackId);
        return;
    }

    const shuffle = (container) => {
        const items = Array.from(container.children).filter(node => node.nodeType === 1 && node.classList.contains('matching-item'));
        for (let i = items.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            container.appendChild(items[j]);
        }
    };

    shuffle(col1Container);
    shuffle(col2Container);
    
    const allItems = document.querySelectorAll(`#${ukrainianContainerId} .matching-item, #${englishContainerId} .matching-item`);
    allItems.forEach(item => {
        const newItem = item.cloneNode(true);
        item.parentNode.replaceChild(newItem, item);
        
        newItem.addEventListener('click', function() {
            if (this.classList.contains('matched')) return;
            
            const isCol1 = this.closest(`#${ukrainianContainerId}`) !== null;

            if (isCol1) {
                if (selectedGeneric1 && selectedGeneric1 !== this) selectedGeneric1.classList.remove('selected');
                this.classList.toggle('selected');
                selectedGeneric1 = this.classList.contains('selected') ? this : null;
            } else { // isCol2
                if (selectedGeneric2 && selectedGeneric2 !== this) selectedGeneric2.classList.remove('selected');
                this.classList.toggle('selected');
                selectedGeneric2 = this.classList.contains('selected') ? this : null;
            }
            feedbackElement.textContent = '';

            if (selectedGeneric1 && selectedGeneric2) {
                if (selectedGeneric1.dataset.id === selectedGeneric2.dataset.id) {
                    selectedGeneric1.classList.remove('selected'); selectedGeneric1.classList.add('matched');
                    selectedGeneric2.classList.remove('selected'); selectedGeneric2.classList.add('matched');
                    matchCount++;
                    if (matchCount === totalPairs) {
                        feedbackElement.textContent = '✓ Correct! All matched!';
                        feedbackElement.className = 'matching-feedback correct';
                    }
                    selectedGeneric1 = null; selectedGeneric2 = null;
                } else {
                    feedbackElement.textContent = '✗ Try again!';
                    feedbackElement.className = 'matching-feedback incorrect';
                    const sel1 = selectedGeneric1;
                    const sel2 = selectedGeneric2;
                    setTimeout(() => {
                        if (sel1) sel1.classList.remove('selected');
                        if (sel2) sel2.classList.remove('selected');
                    }, 800);
                    selectedGeneric1 = null; selectedGeneric2 = null;
                }
            }
        });
    });
}

// --- Fill-in Exercise Logic ---
function checkFillAnswer(inputId) {
    const input = document.getElementById(inputId);
    const feedback = document.getElementById(`${inputId}-feedback`);
    const correctAnswer = input.dataset.correct;
    const userAnswer = input.value.trim();
    const isCorrect = userAnswer.toLowerCase() === correctAnswer.toLowerCase() ||
                      (userAnswer.charAt(0).toUpperCase() + userAnswer.slice(1).toLowerCase() === correctAnswer);

    if (isCorrect) {
        feedback.textContent = "✓ Correct!";
        feedback.className = "fill-feedback correct";
        input.style.backgroundColor = "#e6ffee";
    } else {
        feedback.innerHTML = `✗ Not quite. Correct is: <span class="correct-answer-display ukrainian-text">${correctAnswer}</span>`;
        feedback.className = "fill-feedback incorrect";
        input.style.backgroundColor = "#ffebeb";
    }
}

// --- Sentence Building Game Logic ---
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function arraysEqual(a, b) {
    if (a.length !== b.length) return false;
    return a.every((val, index) => val === b[index]);
}

function initializeSentenceGame(containerId, sentencesData, gamePrefix = '') {
    const sentences = sentencesData.map(item => ({
        original: item.ukrainian,
        english: item.english,
        words: item.ukrainian.split(/\s+/) 
    }));

    const gameContainer = document.getElementById(containerId);
    if (!gameContainer) {
        console.error(`Sentence game container '${containerId}' not found!`);
        return;
    }
    gameContainer.innerHTML = ''; 

    sentences.forEach((sentence, index) => {
        const sentenceId = `${gamePrefix}sentence-${index}`;
        const solutionAreaId = `${gamePrefix}solution-area-${index}`;
        const wordsBankId = `${gamePrefix}words-bank-${index}`;
        const feedbackId = `${gamePrefix}feedback-${index}`;

        const sentenceElement = document.createElement('div');
        sentenceElement.className = 'game-sentence';
        sentenceElement.id = sentenceId;

        const translation = document.createElement('div');
        translation.className = 'game-sentence-translation';
        translation.innerHTML = `<span class="sentence-number">${index + 1}/${sentences.length}</span> ${sentence.english}`;
        sentenceElement.appendChild(translation);

        const solutionArea = document.createElement('div');
        solutionArea.className = 'solution-area';
        solutionArea.id = solutionAreaId;
        sentenceElement.appendChild(solutionArea);

        const wordsBank = document.createElement('div');
        wordsBank.className = 'words-bank';
        wordsBank.id = wordsBankId;
        sentenceElement.appendChild(wordsBank);

        const shuffledWords = shuffleArray(sentence.words);
        shuffledWords.forEach(word => {
            const wordElement = document.createElement('div');
            wordElement.className = 'word-box ukrainian-text';
            wordElement.textContent = word;
            wordElement.addEventListener('click', () => moveWord(wordElement, solutionAreaId, wordsBankId, feedbackId));
            wordsBank.appendChild(wordElement);
        });

        const feedback = document.createElement('div');
        feedback.className = 'game-feedback';
        feedback.id = feedbackId;
        sentenceElement.appendChild(feedback);

        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'sentence-buttons';

        const checkButton = document.createElement('button');
        checkButton.className = 'check-btn';
        checkButton.textContent = 'Check Answer';
        checkButton.addEventListener('click', () => checkSentenceAnswer(index, sentences, solutionAreaId, wordsBankId, feedbackId, sentenceId, containerId));
        buttonContainer.appendChild(checkButton);

        const showAnswerButton = document.createElement('button');
        showAnswerButton.className = 'show-answer-btn';
        showAnswerButton.textContent = 'Show Answer';
        showAnswerButton.addEventListener('click', () => showSentenceAnswer(index, sentences, solutionAreaId, wordsBankId, feedbackId, sentenceId, containerId));
        buttonContainer.appendChild(showAnswerButton);

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Clear Box';
        deleteBtn.addEventListener('click', () => clearSolutionArea(solutionAreaId, wordsBankId, feedbackId));
        buttonContainer.appendChild(deleteBtn);

        sentenceElement.appendChild(buttonContainer);
        gameContainer.appendChild(sentenceElement);

        if (index > 0) {
            sentenceElement.style.display = 'none';
        }
    });
}

function moveWord(wordElement, solutionAreaId, wordsBankId, feedbackId) {
    const parent = wordElement.parentElement;
    const solutionArea = document.getElementById(solutionAreaId);
    const wordsBank = document.getElementById(wordsBankId);
    const feedbackElement = document.getElementById(feedbackId);

    if (parent.classList.contains('words-bank')) {
        solutionArea.appendChild(wordElement);
    } else {
        wordsBank.appendChild(wordElement);
    }
    if (feedbackElement) {
        feedbackElement.textContent = '';
        feedbackElement.className = 'game-feedback';
    }
}

function checkSentenceAnswer(sentenceIndex, sentences, solutionAreaId, wordsBankId, feedbackId, sentenceElementId, gameContainerId) {
    const solutionArea = document.getElementById(solutionAreaId);
    const feedbackElement = document.getElementById(feedbackId);
    const sentenceElement = document.getElementById(sentenceElementId);
    const currentWords = Array.from(solutionArea.children).map(word => word.textContent);
    const correctWords = sentences[sentenceIndex].words;
    const wordsBank = document.getElementById(wordsBankId);
    const gameContainer = document.getElementById(gameContainerId);

    if (wordsBank.children.length > 0) {
        feedbackElement.textContent = '✗ Please use all the words.';
        feedbackElement.className = 'game-feedback feedback-incorrect';
        return;
    }
    const isCorrect = arraysEqual(currentWords, correctWords);

    if (isCorrect) {
        feedbackElement.textContent = '✓ Correct! Well done!';
        feedbackElement.className = 'game-feedback feedback-correct';
        sentenceElement.classList.add('completed');
        const nextSentenceIndex = sentenceIndex + 1;
        if (nextSentenceIndex < sentences.length) {
            setTimeout(() => {
                const gamePrefix = sentenceElementId.includes('final-') ? 'final-' : '';
                const nextSentenceId = `${gamePrefix}sentence-${nextSentenceIndex}`;
                const nextSentence = document.getElementById(nextSentenceId);
                if (nextSentence) {
                    nextSentence.style.display = 'block';
                    nextSentence.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }, 1000);
        } else {
            const allDoneMsg = document.createElement('p');
            allDoneMsg.textContent = 'All sentences built!';
            allDoneMsg.style.textAlign = 'center';
            allDoneMsg.style.fontWeight = 'bold';
            allDoneMsg.style.marginTop = '20px';
            if (!gameContainer.querySelector('.all-done-msg')) {
                allDoneMsg.className = 'all-done-msg';
                gameContainer.appendChild(allDoneMsg);
            }
        }
    } else {
        feedbackElement.textContent = '✗ Not quite right. Try again!';
        feedbackElement.className = 'game-feedback feedback-incorrect';
    }
}

function showSentenceAnswer(sentenceIndex, sentences, solutionAreaId, wordsBankId, feedbackId, sentenceElementId, gameContainerId) {
    const solutionArea = document.getElementById(solutionAreaId);
    const wordsBank = document.getElementById(wordsBankId);
    const feedbackElement = document.getElementById(feedbackId);
    const sentenceElement = document.getElementById(sentenceElementId);
    const gameContainer = document.getElementById(gameContainerId);

    solutionArea.innerHTML = '';
    wordsBank.innerHTML = '';

    sentences[sentenceIndex].words.forEach(word => {
        const wordElement = document.createElement('div');
        wordElement.className = 'word-box ukrainian-text';
        wordElement.textContent = word;
        wordElement.style.cursor = 'default'; 
        solutionArea.appendChild(wordElement);
    });
    feedbackElement.textContent = 'This is the correct order.';
    feedbackElement.className = 'game-feedback';
    sentenceElement.classList.add('completed'); 

    const nextSentenceIndex = sentenceIndex + 1;
    if (nextSentenceIndex < sentences.length) {
        setTimeout(() => {
            const gamePrefix = sentenceElementId.includes('final-') ? 'final-' : '';
            const nextSentenceId = `${gamePrefix}sentence-${nextSentenceIndex}`;
            const nextSentence = document.getElementById(nextSentenceId);
            if (nextSentence) {
                nextSentence.style.display = 'block';
                nextSentence.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }, 800);
    } else {
        const allDoneMsg = document.createElement('p');
        allDoneMsg.textContent = 'All sentences built!';
        allDoneMsg.style.textAlign = 'center';
        allDoneMsg.style.fontWeight = 'bold';
        allDoneMsg.style.marginTop = '20px';
        if (!gameContainer.querySelector('.all-done-msg')) {
            allDoneMsg.className = 'all-done-msg';
            gameContainer.appendChild(allDoneMsg);
        }
    }
}

function clearSolutionArea(solutionAreaId, wordsBankId, feedbackId) {
    const solutionArea = document.getElementById(solutionAreaId);
    const wordsBank = document.getElementById(wordsBankId);
    const feedbackElement = document.getElementById(feedbackId);
    while (solutionArea.firstChild) {
        wordsBank.appendChild(solutionArea.firstChild);
    }
    
    const bankWords = Array.from(wordsBank.children);
    for (let i = bankWords.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        wordsBank.appendChild(bankWords[j]);
    }

    if(feedbackElement){
        feedbackElement.textContent = '';
        feedbackElement.className = 'game-feedback';
    }
}

// --- Dialogue Translation Toggle ---
function toggleTranslation(id) {
    const translation = document.getElementById(id);
    const button = translation.previousElementSibling; 
    if (translation.style.display === 'block') {
        translation.style.display = 'none';
        button.textContent = 'Translate';
    } else {
        translation.style.display = 'block';
        button.textContent = 'Hide';
    }
}

// --- Reading Question Answer Toggle ---
function showReadingAnswer(answerId) {
    const answer = document.getElementById(answerId);
    if (answer) {
        answer.style.display = 'inline'; 
    }
}

// --- Initialize Key Buttons and Input Listeners ---
function initializeFormInteractions() {
    // Add key button functionality for all fill-in exercises
    document.querySelectorAll('.key-btn').forEach(button => {
        button.addEventListener('click', function() {
            const fillItem = this.closest('.fill-item');
            if (!fillItem) return;
            const input = fillItem.querySelector('.fill-input');
            if (input) {
                input.value = this.textContent;
                const feedbackId = input.id + '-feedback';
                const feedback = document.getElementById(feedbackId);
                if (feedback) {
                    feedback.textContent = '';
                    feedback.className = 'fill-feedback';
                }
                input.style.backgroundColor = ''; 
            }
        });
    });

    // Add listener for Enter key in fill-in inputs to trigger check
    document.querySelectorAll('.fill-input').forEach(input => {
        input.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault(); 
                const fillItem = this.closest('.fill-item');
                if (fillItem) {
                    const checkButton = fillItem.querySelector('.fill-check');
                    if (checkButton) {
                        checkButton.click(); 
                    }
                }
            }
        });
    });
}