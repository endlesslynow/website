function WordMatchingGame() {
    const [gameState, setGameState] = React.useState('start');
    const [words, setWords] = React.useState({ latin: [], english: [] });
    const [selectedCards, setSelectedCards] = React.useState([]);
    const [error, setError] = React.useState('');
    const [allWords, setAllWords] = React.useState([]);
    const [currentRound, setCurrentRound] = React.useState(1);
    const [usedWords, setUsedWords] = React.useState(new Set());
    const [wrongAnswers, setWrongAnswers] = React.useState(new Set());
    const [practiceWrongAnswers, setPracticeWrongAnswers] = React.useState(new Set());
    const [isPracticeMode, setIsPracticeMode] = React.useState(false);
    const [practiceUsedWords, setPracticeUsedWords] = React.useState(new Set());
    
    const WORDS_PER_ROUND = 6;

    const handleChapterSelect = (chapterKey) => {
        const chapter = window.chapters[chapterKey];
        if (chapter) {
            const parsedWords = parseWords(chapter.words);
            if (parsedWords.length > 0) {
                setAllWords(parsedWords);
                setGameState('play');
            }
        }
    };

    const createLeaves = () => {
        const leaves = [];
        const container = document.querySelector('.victory-screen');
        if (!container) return;
        
        const centerX = container.offsetWidth / 2;
        const centerY = container.offsetHeight / 2;
        
        for (let i = 0; i < 30; i++) {
            const leaf = document.createElement('div');
            leaf.textContent = '🌿';
            leaf.className = 'laurel-leaf';
            
            const angle = (Math.random() * Math.PI * 2);
            const distance = 100 + Math.random() * 200;
            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance;
            const rotation = Math.random() * 720 - 360;
            
            leaf.style.setProperty('--x', `${x}px`);
            leaf.style.setProperty('--y', `${y}px`);
            leaf.style.setProperty('--r', `${rotation}deg`);
            
            leaf.style.left = `${centerX}px`;
            leaf.style.top = `${centerY}px`;
            
            container.appendChild(leaf);
            leaves.push(leaf);
            
            leaf.addEventListener('animationend', () => {
                leaf.remove();
            });
        }
    };

    React.useEffect(() => {
        if (gameState === 'finalWin' || gameState === 'practiceWin') {
            createLeaves();
        }
    }, [gameState]);

    const parseWords = (text) => {
        setError('');
        const lines = text.trim().split('\n');
        const parsedWords = [];
        
        for (let i = 0; i < lines.length; i += 2) {
            const orgLine = lines[i];
            const transLine = lines[i + 1];
            
            if (!orgLine || !transLine) continue;
            
            const orgMatch = orgLine.match(/\[ORG\](.*?)$/);
            const transMatch = transLine.match(/\[TRANS\](.*?)$/);
            
            if (orgMatch && transMatch) {
                parsedWords.push({
                    org: orgMatch[1].trim(),
                    trans: transMatch[1].trim(),
                    id: Math.random(),
                    matched: false
                });
            }
        }

        if (parsedWords.length === 0) {
            setError('Nulla verba inventa sunt. Quaeso, formam inspice.');
            return [];
        }

        return parsedWords;
    };

    const shuffle = (array) => {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    };

    const setupNewRound = () => {
        let wordPool;
        if (isPracticeMode) {
            wordPool = allWords.filter(word => wrongAnswers.has(word.org) && !practiceUsedWords.has(word.org));
            if (wordPool.length === 0) {
                setGameState('practiceWin');
                return;
            }
        } else {
            wordPool = allWords.filter(word => !usedWords.has(word.org));
            if (wordPool.length === 0) {
                setGameState('finalWin');
                return;
            }
        }

        const roundWords = wordPool.slice(0, WORDS_PER_ROUND);
        
        if (isPracticeMode) {
            const newPracticeUsedWords = new Set([...practiceUsedWords]);
            roundWords.forEach(word => newPracticeUsedWords.add(word.org));
            setPracticeUsedWords(newPracticeUsedWords);
        } else {
            const newUsedWords = new Set([...usedWords]);
            roundWords.forEach(word => newUsedWords.add(word.org));
            setUsedWords(newUsedWords);
        }

        const latinWords = roundWords.map(word => ({
            ...word,
            type: 'org',
            id: Math.random(),
            matched: false
        }));

        const englishWords = roundWords.map(word => ({
            ...word,
            type: 'trans',
            id: Math.random(),
            matched: false
        }));

        setWords({
            latin: shuffle(latinWords),
            english: shuffle(englishWords)
        });
    };

    const handleCardClick = (word, side) => {
        if (selectedCards.length === 2 || word.matched) return;

        const newSelected = [...selectedCards, { ...word, side }];
        setSelectedCards(newSelected);

        if (newSelected.length === 2) {
            checkMatch(newSelected);
        }
    };

    const checkMatch = (selected) => {
        const [first, second] = selected;
        const isMatch = first.org === second.org && first.trans === second.trans && first.side !== second.side;

        if (!isMatch) {
            if (isPracticeMode) {
                setPracticeWrongAnswers(prev => new Set([...prev, first.org]));
            } else {
                setWrongAnswers(prev => new Set([...prev, first.org]));
            }
        }

        if (isMatch) {
            setWords(prev => ({
                latin: prev.latin.map(word => 
                    word.org === first.org ? { ...word, matched: true } : word
                ),
                english: prev.english.map(word => 
                    word.org === first.org ? { ...word, matched: true } : word
                )
            }));

            const allMatched = words.latin.every(word => 
                word.matched || word.org === first.org
            );

            if (allMatched) {
                if (isPracticeMode && practiceUsedWords.size >= wrongAnswers.size) {
                    setGameState('practiceWin');
                } else {
                    const remainingWords = isPracticeMode 
                        ? allWords.filter(word => wrongAnswers.has(word.org) && !practiceUsedWords.has(word.org))
                        : allWords.filter(word => !usedWords.has(word.org));

                    if (remainingWords.length === 0) {
                        setGameState(isPracticeMode ? 'practiceWin' : 'finalWin');
                    } else {
                        setCurrentRound(prev => prev + 1);
                        setupNewRound();
                    }
                }
            }
        }
        setSelectedCards([]);
    };

    const startNewGame = () => {
        setGameState('start');
        setWords({ latin: [], english: [] });
        setSelectedCards([]);
        setError('');
        setCurrentRound(1);
        setUsedWords(new Set());
        setWrongAnswers(new Set());
        setPracticeWrongAnswers(new Set());
        setPracticeUsedWords(new Set());
        setIsPracticeMode(false);
        setAllWords([]);
    };

    const handleRepeatGame = () => {
        setWords({ latin: [], english: [] });
        setSelectedCards([]);
        setCurrentRound(1);
        setUsedWords(new Set());
        setPracticeWrongAnswers(new Set());
        setPracticeUsedWords(new Set());
        setIsPracticeMode(false);
        setGameState('play');
    };

    const handlePracticeWrongAnswers = () => {
        const wordsToReview = isPracticeMode ? practiceWrongAnswers : wrongAnswers;
        if (wordsToReview.size === 0) {
            setError('Nulla verba exercenda sunt!');
            return;
        }
        setWords({ latin: [], english: [] });
        setSelectedCards([]);
        setCurrentRound(1);
        setPracticeUsedWords(new Set());
        setIsPracticeMode(true);
        if (isPracticeMode) {
            setWrongAnswers(practiceWrongAnswers);
            setPracticeWrongAnswers(new Set());
        }
        setGameState('play');
    };

    React.useEffect(() => {
        if (gameState === 'play' && words.latin.length === 0 && allWords.length > 0) {
            setupNewRound();
        }
    }, [gameState, words.latin.length, allWords.length]);

    return (
        <>
            <nav className="nav-banner">
                <a href="https://www.zachariahhopkins.com" target="_blank" rel="noopener noreferrer" className="nav-link">
                    Created by Zachariah Hopkins
                </a>
            </nav>
            <style>
                {`
                    .nav-banner {
                        width: 100%;
                        height: 40px;
                        background-color: #2d1810;
                        display: flex;
                        align-items: center;
                        padding: 0 20px;
                        position: fixed;
                        top: 0;
                        left: 0;
                        z-index: 1000;
                        box-shadow: 0 2px 4px rgba(0,0,0,0.3);
                    }
                    .nav-link {
                        color: #ffffff;
                        text-decoration: none;
                        font-size: 1.2rem;
                        font-weight: 500;
                        transition: opacity 0.2s ease;
                    }
                    .nav-link:hover {
                        opacity: 0.8;
                    }
                    body {
                        padding-top: 80px;
                        min-height: 100vh;
                        margin: 0;
                    }
                    @media (max-width: 768px) {
                        .nav-banner {
                            height: 40px;
                            padding: 0 15px;
                            background-color: #2d1810;
                        }
                        .nav-link {
                            font-size: 1rem;
                        }
                        body {
                            padding-top: 70px;
                        }
                    }
                `}
            </style>
            <div className="container">
                {gameState === 'start' && (
                    <div className="start-screen">
                        <div className="roman-border">
                            <h1 className="roman-title">LVDVS VOCABVLORVM</h1>
                            <h2 className="roman-subtitle">Selege Caput</h2>
                            <div className="chapter-grid">
                                {Object.entries(window.chapters).map(([key, chapter]) => (
                                    <button 
                                        key={key}
                                        className="button chapter-button"
                                        onClick={() => handleChapterSelect(key)}
                                    >
                                        {chapter.title}
                                    </button>
                                ))}
                            </div>
                            {error && (
                                <div className="error">
                                    <strong>Error:</strong> {error}
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {gameState === 'play' && (
                    <>
                        <div className="center mb-4">
                            {isPracticeMode ? 'Exercitatio: ' : ''}
                            Certamen {currentRound} ex {Math.ceil(
                                (isPracticeMode ? wrongAnswers.size : allWords.length) / WORDS_PER_ROUND
                            )}
                        </div>
                        <div className="grid">
                            <div>
                                {words.latin?.map((word) => (
                                    <div
                                        key={word.id}
                                        className={`card ${word.matched ? 'matched' : ''} ${
                                            selectedCards.find(c => c.id === word.id) ? 'selected' : ''
                                        }`}
                                        onClick={() => handleCardClick(word, 'latin')}
                                    >
                                        {word.org}
                                    </div>
                                ))}
                            </div>
                            <div>
                                {words.english?.map((word) => (
                                    <div
                                        key={word.id}
                                        className={`card ${word.matched ? 'matched' : ''} ${
                                            selectedCards.find(c => c.id === word.id) ? 'selected' : ''
                                        }`}
                                        onClick={() => handleCardClick(word, 'english')}
                                    >
                                        {word.trans}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )}

                {(gameState === 'finalWin' || gameState === 'practiceWin') && (
                    <div className="victory-screen">
                        <h2 className="victory-title">Victoria!</h2>
                        <p className="victory-text">
                            {gameState === 'practiceWin' 
                                ? 'Optime! Exercitationem perfecisti!'
                                : 'Gloria et honor! Omnia verba didicisti!'}
                        </p>
                        <div className="button-group">
                            <button 
                                className="button"
                                onClick={handleRepeatGame}
                            >
                                Iterum Ludere
                            </button>
                            <button 
                                className="button"
                                onClick={startNewGame}
                            >
                                Ad Initium Redire
                            </button>
                            {((gameState === 'finalWin' && wrongAnswers.size > 0) ||
                              (gameState === 'practiceWin' && practiceWrongAnswers.size > 0)) && (
                                <button 
                                    className="button"
                                    onClick={handlePracticeWrongAnswers}
                                >
                                    Exercere Errata
                                </button>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<WordMatchingGame />);