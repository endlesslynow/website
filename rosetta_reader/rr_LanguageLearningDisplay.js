//This is rr_LanguageLearningDisplay.js

const LanguageLearningDisplay = ({ sentences, onChooseText }) => {
    const [showTranslation, setShowTranslation] = React.useState(false);
    const [selectedWord, setSelectedWord] = React.useState(null);
    const [popupPosition, setPopupPosition] = React.useState({ x: 0, y: 0 });
    const [showPopup, setShowPopup] = React.useState(false);
    const [definitionInput, setDefinitionInput] = React.useState('');
    const [definitions, setDefinitions] = React.useState({});
    const [currentSentenceIndex, setCurrentSentenceIndex] = React.useState(0);
    const [showMenu, setShowMenu] = React.useState(false);
    const [showGoToDialog, setShowGoToDialog] = React.useState(false);
    const [showImportDialog, setShowImportDialog] = React.useState(false);
    const [textLanguage, setTextLanguage] = React.useState('');

    // Load definitions from Firebase on component mount
    // In the useEffect hook for loading definitions
    React.useEffect(() => {
        const definitionsRef = window.rr_database.ref('definitions');
        
        definitionsRef.on('value', (snapshot) => {
            const data = snapshot.val() || {};
            const processedData = {};
            for (const [word, value] of Object.entries(data)) {
                if (value.language === textLanguage) {  // Only get definitions for current text language
                    processedData[word.toLowerCase()] = value.definition;
                }
            }
            setDefinitions(processedData);
        });

        return () => definitionsRef.off();
    }, [textLanguage]); // Re-run when text language changes

    React.useEffect(() => {
        if (sentences.length > 0) {
            const textsRef = window.rr_database.ref('texts');
            textsRef.once('value', (snapshot) => {
                const texts = snapshot.val();
                for (const text of Object.values(texts)) {
                    if (text.sentences && text.sentences[0] && sentences[0] && 
                        text.sentences[0].original === sentences[0].original) {
                        setTextLanguage(text.language);
                        break;
                    }
                }
            });
        }
    }, [sentences]);

    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (showPopup && !event.target.closest('.definition-popup')) {
                setShowPopup(false);
            }
            if (showMenu && !event.target.closest('.menu-container')) {
                setShowMenu(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [showPopup, showMenu]);

    const handleWordClick = (word, event) => {
        const rect = event.target.getBoundingClientRect();
        const cleanWord = word.replace(/[.,!?;]$/, '').toLowerCase();
        
        if (selectedWord === cleanWord && showPopup) {
            setShowPopup(false);
            return;
        }
        
        setSelectedWord(cleanWord);
        
        const definition = definitions[cleanWord];
        const definitionText = typeof definition === 'object' ? definition.definition : definition;
        setDefinitionInput(definitionText || '');
        
        const isMobile = window.innerWidth < 640;
        const xPosition = isMobile ? 
            Math.min(window.innerWidth - 240, rect.left) : 
            rect.left;
        
        setPopupPosition({
            x: xPosition,
            y: rect.bottom + window.scrollY
        });
        setShowPopup(true);
    };

    const handleSave = () => {
        if (definitionInput.trim() && selectedWord) {
            window.rr_database.ref(`definitions/${selectedWord.toLowerCase()}`).set({
                definition: definitionInput.trim(),
                language: textLanguage
            });
        }
        setShowPopup(false);
    };

    const handleDelete = () => {
        if (selectedWord) {
            window.rr_database.ref(`definitions/${selectedWord.toLowerCase()}`).remove();
        }
        setShowPopup(false);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSave();
        } else if (e.key === 'Escape') {
            setShowPopup(false);
        }
    };

    const handleGoToSentence = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const sentenceNumber = parseInt(formData.get('sentenceNumber'));
        if (sentenceNumber >= 1 && sentenceNumber <= sentences.length) {
            setCurrentSentenceIndex(sentenceNumber - 1);
            setShowTranslation(false);
        }
        setShowGoToDialog(false);
    };

    const handleImportText = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const title = formData.get('textTitle');
        const language = formData.get('language');
        const text = formData.get('text');

        if (!title || !language || !text) {
            alert('Please fill in all fields');
            return;
        }

        try {
            const sentences = parseImportedText(text);
            
            if (sentences.length === 0) {
                alert('No valid sentence pairs found in the imported text');
                return;
            }

            const textData = {
                title,
                language,
                sentences
            };

            await window.rr_database.ref(`texts/${title}`).set(textData);
            setShowImportDialog(false);
            alert('Text imported successfully');
        } catch (error) {
            alert('Error importing text: ' + error.message);
        }
    };

    const parseImportedText = (text) => {
        const lines = text.split('\n').filter(line => line.trim() !== '');
        const sentences = [];
        let currentOriginal = '';
        let currentTranslation = '';

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim();
            if (line.startsWith('[ORG]')) {
                if (currentOriginal && currentTranslation) {
                    sentences.push({
                        original: currentOriginal,
                        translation: currentTranslation
                    });
                }
                currentOriginal = line.replace('[ORG]', '').trim();
            } else if (line.startsWith('[TRANS]')) {
                currentTranslation = line.replace('[TRANS]', '').trim();
            }
        }

        if (currentOriginal && currentTranslation) {
            sentences.push({
                original: currentOriginal,
                translation: currentTranslation
            });
        }

        return sentences;
    };

    const renderText = (text, isClickable = true) => {
        const textDirectionClass = isClickable && textLanguage === 'عربي' ? 'text-right' : 'text-left';
        
        return (
            <div className={textDirectionClass}>
                {text.split(' ').map((word, index, array) => {
                    const cleanWord = word.replace(/[.,!?;]$/, '').toLowerCase();
                    const hasDefinition = definitions.hasOwnProperty(cleanWord);
                    
                    if (!isClickable) {
                        return (
                            <span key={index}>
                                {word}
                                {index < array.length - 1 ? ' ' : ''}
                            </span>
                        );
                    }
                    
                    return (
                        <span key={index}>
                            <button
                                onClick={(e) => handleWordClick(word, e)}
                                className={`
                                    inline-block
                                    transition-colors
                                    hover:bg-indigo-500/20
                                    focus:outline-none
                                    ${hasDefinition ? 'text-emerald-400' : 'text-gray-100'}
                                `}
                            >
                                {word}
                            </button>
                            {index < array.length - 1 ? ' ' : ''}
                        </span>
                    );
                })}
            </div>
        );
    };

    // Reset current sentence index when sentences change
    React.useEffect(() => {
        setCurrentSentenceIndex(0);
        setShowTranslation(false);
    }, [sentences]);

    return (
        <div className="fixed inset-0 bg-gray-950">
            <div className="h-full flex flex-col">
                {/* Original Text Container */}
                <div className="flex-1 bg-gray-900/50 shadow-inner overflow-y-auto">
                    <div className="h-full flex flex-col bg-gray-800/50 p-4">
                        <div className="text-2xl sm:text-3xl leading-relaxed pt-4">
                            {currentSentenceIndex < sentences.length ? 
                                renderText(sentences[currentSentenceIndex].original) : 
                                <span className="text-gray-500">Finished</span>
                            }
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <div className="h-16 flex-none flex justify-center items-center gap-4 bg-gray-900/80 px-4">
                    <div className="flex justify-center items-center gap-4 w-full max-w-xl">
                        <div className="relative menu-container">
                            <button 
                                onClick={() => setShowMenu(!showMenu)}
                                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md"
                            >
                                ⌘
                            </button>
                            {showMenu && (
                                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5">
                                    <div className="py-1" role="menu">
                                        <button
                                            className="block w-full text-left px-4 py-2 text-sm text-gray-100 hover:bg-gray-700"
                                            onClick={() => {
                                                onChooseText();
                                                setShowMenu(false);
                                            }}
                                        >
                                            Choose Text
                                        </button>
                                        <button
                                            className="block w-full text-left px-4 py-2 text-sm text-gray-100 hover:bg-gray-700"
                                            onClick={() => {
                                                setShowGoToDialog(true);
                                                setShowMenu(false);
                                            }}
                                        >
                                            Go to sentence
                                        </button>
                                        <button
                                            className="block w-full text-left px-4 py-2 text-sm text-gray-100 hover:bg-gray-700"
                                            onClick={() => {
                                                setShowImportDialog(true);
                                                setShowMenu(false);
                                            }}
                                        >
                                            Import Text
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                        <button 
                            onClick={() => {
                                setCurrentSentenceIndex(prev => Math.max(0, prev - 1));
                                setShowTranslation(false);
                            }}
                            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md disabled:opacity-50"
                            disabled={currentSentenceIndex === 0}
                        >
                            Previous
                        </button>
                        <button 
                            onClick={() => setShowTranslation(!showTranslation)}
                            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md"
                        >
                            Translate
                        </button>
                        <button 
                            onClick={() => {
                                setCurrentSentenceIndex(prev => Math.min(sentences.length - 1, prev + 1));
                                setShowTranslation(false);
                            }}
                            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md disabled:opacity-50"
                            disabled={currentSentenceIndex === sentences.length - 1}
                        >
                            Next
                        </button>
                    </div>
                </div>

                {/* Translation Container */}
                <div className="flex-1 bg-gray-900/50 shadow-inner overflow-y-auto">
                    <div className="h-full flex flex-col bg-gray-800/50 p-4">
                        <div className="text-2xl sm:text-3xl leading-relaxed pt-4 text-gray-100">
                            {showTranslation && currentSentenceIndex < sentences.length ? 
                                renderText(sentences[currentSentenceIndex].translation, false) : 
                                null
                            }
                        </div>
                    </div>
                </div>

                {/* Floating Definition Popup */}
                {showPopup && (
                    <div 
                        className="fixed z-50 transform -translate-y-2 definition-popup"
                        style={{ 
                            left: `${popupPosition.x}px`, 
                            top: `${popupPosition.y + 8}px`
                        }}
                    >
                        <div className="bg-gray-800 rounded-lg shadow-xl border border-gray-700 p-2 flex gap-2 items-center">
                            <input
                                value={definitionInput}
                                onChange={(e) => setDefinitionInput(e.target.value)}
                                onKeyDown={handleKeyPress}
                                placeholder="Define..."
                                className="w-36 sm:w-48 bg-gray-900 border border-gray-700 text-gray-100 text-sm focus:border-indigo-500 rounded-md px-2 py-1"
                                autoFocus
                            />
                            <button
                                onClick={handleSave}
                                className="bg-indigo-600 hover:bg-indigo-700 text-white px-2 py-1 h-8 rounded-md text-sm"
                            >
                                Save
                            </button>
                            <button
                                onClick={handleDelete}
                                className="bg-red-600 hover:bg-red-700 text-white px-2 py-1 h-8 rounded-md text-sm"
                            >
                                Delete
                            </button>
                        </div>
                        <div 
                            className="absolute -top-2 left-4 w-4 h-4 bg-gray-800 border-l border-t border-gray-700 transform rotate-45"
                        />
                    </div>
                )}

                {/* Go To Dialog */}
                {showGoToDialog && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                        <div className="bg-gray-800 p-4 rounded-lg shadow-xl">
                            <form onSubmit={handleGoToSentence} className="flex flex-col gap-4">
                                <div>
                                    <label htmlFor="sentenceNumber" className="block text-sm text-gray-300 mb-1">
                                        Enter sentence number (1-{sentences.length})
                                    </label>
                                    <input
                                        type="number"
                                        name="sentenceNumber"
                                        id="sentenceNumber"
                                        min="1"
                                        max={sentences.length}
                                        className="w-full bg-gray-900 border border-gray-700 text-gray-100 text-sm rounded-md px-2 py-1"
                                        autoFocus
                                    />
                                </div>
                                <div className="flex justify-end gap-2">
                                    <button
                                        type="button"
                                        onClick={() => setShowGoToDialog(false)}
                                        className="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-white rounded-md"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-3 py-1 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md"
                                    >
                                        Go
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                {/* Import Dialog */}
                {showImportDialog && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                        <div className="bg-gray-800 p-4 rounded-lg shadow-xl w-full max-w-xl">
                            <form onSubmit={handleImportText} className="flex flex-col gap-4">
                                <div>
                                    <label htmlFor="textTitle" className="block text-sm text-gray-300 mb-1">
                                        Text Title
                                    </label>
                                    <input
                                        type="text"
                                        name="textTitle"
                                        id="textTitle"
                                        className="w-full bg-gray-900 border border-gray-700 text-gray-100 text-sm rounded-md px-2 py-1"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="language" className="block text-sm text-gray-300 mb-1">
                                        Language
                                    </label>
                                    <select
                                        name="language"
                                        id="language"
                                        className="w-full bg-gray-900 border border-gray-700 text-gray-100 text-sm rounded-md px-2 py-1"
                                        required
                                    >
                                        <option value="" disabled selected>Select language</option>
                                        <option value="kurdî">Kurdî</option>
                                        <option value="عربي">عربي</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="text" className="block text-sm text-gray-300 mb-1">
                                        Text (Use [ORG] and [TRANS] tags)
                                    </label>
                                    <textarea
                                        name="text"
                                        id="text"
                                        className="w-full h-48 bg-gray-900 border border-gray-700 text-gray-100 text-sm rounded-md px-2 py-1"
                                        placeholder="[ORG] Original text here&#10;[TRANS] Translation here"
                                        required
                                    />
                                </div>
                                <div className="flex justify-end gap-2">
                                    <button
                                        type="button"
                                        onClick={() => setShowImportDialog(false)}
                                        className="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-white rounded-md"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-3 py-1 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md"
                                    >
                                        Import
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                {/* Counter */}
                <div className="fixed bottom-4 right-4 text-sm text-gray-400">
                    {`${currentSentenceIndex + 1}/${sentences.length}`}
                </div>
            </div>
        </div>
    );
};

window.LanguageLearningDisplay = LanguageLearningDisplay;