// This is rr_App.js

const App = () => {
    const [texts, setTexts] = React.useState([]);
    const [selectedText, setSelectedText] = React.useState(null);
    const [showTextSelector, setShowTextSelector] = React.useState(false);

    React.useEffect(() => {
        const textsRef = window.rr_database.ref('texts');
        
        textsRef.on('value', (snapshot) => {
            const data = snapshot.val() || {};
            const textsList = Object.values(data);
            setTexts(textsList);
            
            if (!selectedText && textsList.length > 0) {
                setSelectedText(textsList[0]);
            }
        }, (error) => {
            console.error('Firebase error:', error);
        });

        return () => textsRef.off();
    }, []);

    const handleTextSelect = (text) => {
        setSelectedText(text);
        setShowTextSelector(false);
    };

    const TextSelector = () => (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-gray-800 rounded-lg p-6 max-w-lg w-full mx-4 max-h-[80vh] overflow-y-auto">
                <h2 className="text-xl text-gray-100 mb-4">Select Text</h2>
                <div className="space-y-2">
                    {texts.map((text, index) => (
                        <button
                            key={index}
                            onClick={() => handleTextSelect(text)}
                            className="w-full text-left px-4 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-gray-100"
                        >
                            <div className="font-medium">{text.title}</div>
                            <div className="text-sm text-gray-400">
                                Language: {text.language}
                            </div>
                        </button>
                    ))}
                </div>
                <button
                    onClick={() => setShowTextSelector(false)}
                    className="mt-4 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-gray-100"
                >
                    Cancel
                </button>
            </div>
        </div>
    );

    const handleChooseText = () => {
        setShowTextSelector(true);
    };

    return (
        <div>
            <LanguageLearningDisplay
                sentences={selectedText ? selectedText.sentences : []}
                language={selectedText ? selectedText.language : ''}  // Add this
                onChooseText={handleChooseText}
            />
            {showTextSelector && <TextSelector />}
        </div>
    );
};

window.App = App;