// Visual Novel System for Hannah's Coffee Shop
// Handles backgrounds, character expressions, and animations

// Image paths configuration
const IMAGES = {
    backgrounds: {
        coffee_shop: './images/coffee_shop.jpeg',
        grandmas_kitchen: './images/grandmas_kitchen.jpeg'
    },
    hannah: {
        get welcoming() { 
            const prefix = LANGUAGE_CONFIG.primary === 'ukrainian' ? 'h_ua_' : 'h_ku_';
            return `./images/${prefix}welcoming.png`;
        },
        get excited() { 
            const prefix = LANGUAGE_CONFIG.primary === 'ukrainian' ? 'h_ua_' : 'h_ku_';
            return `./images/${prefix}excited.png`;
        },
        get frustrated() { 
            const prefix = LANGUAGE_CONFIG.primary === 'ukrainian' ? 'h_ua_' : 'h_ku_';
            return `./images/${prefix}frustrated.png`;
        },
        get worried() { 
            const prefix = LANGUAGE_CONFIG.primary === 'ukrainian' ? 'h_ua_' : 'h_ku_';
            return `./images/${prefix}worried.png`;
        }
    },
    max: {
        cheeky: './images/m_cheeky.png',
        cheerful: './images/m_cheerful.png'
    }
};

// Visual state management
let visualState = {
    currentBackground: null,
    hannahExpression: null,
    maxExpression: null,
    maxVisible: false,
    isTransitioning: false
};

// Preloaded images storage
let preloadedImages = {};

// Initialize visual novel system
function initializeVisualNovel() {
    preloadAllImages();
    createVisualElements();
    console.log('Visual Novel system initialized');
}

// Preload all images for smooth transitions
function preloadAllImages() {
    console.log('Preloading images...');
    
    // Preload backgrounds
    Object.entries(IMAGES.backgrounds).forEach(([key, path]) => {
        const img = new Image();
        img.src = path;
        preloadedImages[`bg_${key}`] = img;
    });
    
    // Preload Hannah expressions
    Object.entries(IMAGES.hannah).forEach(([key, path]) => {
        const img = new Image();
        img.src = path;
        preloadedImages[`hannah_${key}`] = img;
    });
    
    // Preload Max expressions
    Object.entries(IMAGES.max).forEach(([key, path]) => {
        const img = new Image();
        img.src = path;
        preloadedImages[`max_${key}`] = img;
    });
    
    console.log('Image preloading complete');
}

// Create visual elements in the DOM
function createVisualElements() {
    const container = document.querySelector('.container');
    
    // Create visual novel container
    const visualContainer = document.createElement('div');
    visualContainer.id = 'visual-container';
    visualContainer.className = 'visual-container';
    
    // Create background element
    const background = document.createElement('div');
    background.id = 'visual-background';
    background.className = 'visual-background';
    
    // Create character container
    const characterContainer = document.createElement('div');
    characterContainer.id = 'character-container';
    characterContainer.className = 'character-container';
    
    // Create Hannah sprite
    const hannahSprite = document.createElement('div');
    hannahSprite.id = 'hannah-sprite';
    hannahSprite.className = 'character-sprite hannah-sprite';
    
    // Create Max sprite
    const maxSprite = document.createElement('div');
    maxSprite.id = 'max-sprite';
    maxSprite.className = 'character-sprite max-sprite';
    maxSprite.style.display = 'none'; // Initially hidden
    
    // Assemble the visual structure
    characterContainer.appendChild(hannahSprite);
    characterContainer.appendChild(maxSprite);
    visualContainer.appendChild(background);
    visualContainer.appendChild(characterContainer);
    
    // Insert as first child of container
    container.insertBefore(visualContainer, container.firstChild);
    
    // Add CSS styles
    addVisualStyles();
}

// Add CSS styles for visual novel elements
function addVisualStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .visual-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            z-index: -1;
        }
        
        .visual-background {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-size: 100% auto;
            background-position: center;
            background-repeat: no-repeat;
        }
        
        .character-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
        }
        
        .character-sprite {
            position: absolute;
            background-size: contain;
            background-position: center bottom;
            background-repeat: no-repeat;
            filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3));
        }
        
        .hannah-sprite {
            left: 50%;
            transform: translateX(-50%);
            bottom: 0;
            width: 50vw;
            height: 140vh;
            min-width: 400px;
            min-height: 800px;
        }
        
        .max-sprite {
            left: 5%;
            bottom: 15%;
            width: 12vw;
            height: 20vh;
            min-width: 80px;
            min-height: 120px;
        }
        
        @media (max-width: 768px) {
            .hannah-sprite {
                left: 50%;
                transform: translateX(-50%);
                bottom: 0;
                width: 60vw;
                height: 100vh;
                min-width: 300px;
                min-height: 500px;
            }
            
            .max-sprite {
                left: 2%;
                bottom: 10%;
                width: 15vw;
                height: 15vh;
                min-width: 60px;
                min-height: 80px;
            }
        }
    `;
    document.head.appendChild(style);
}

// Update visual scene based on dialogue data
function updateVisualScene(visualData) {
    if (!visualData) return;
    
    // Handle background changes
    if (visualData.background && visualData.background !== visualState.currentBackground) {
        changeBackground(visualData.background, visualData.transition);
    }
    
    // Handle Hannah expression changes
    if (visualData.hannah_expression && visualData.hannah_expression !== visualState.hannahExpression) {
        setCharacterExpression('hannah', visualData.hannah_expression);
    }
    
    // Handle Max appearance/expression changes
    if (visualData.max_expression) {
        if (!visualState.maxVisible) {
            showCharacter('max');
        }
        setCharacterExpression('max', visualData.max_expression);
    } else if (visualState.maxVisible && !visualData.max_expression) {
        // Hide Max if he was visible but not in this scene
        hideCharacter('max');
    }
}

// Change background with no transitions
function changeBackground(backgroundKey, transition = null) {
    const backgroundElement = document.getElementById('visual-background');
    if (!backgroundElement) return;
    
    const imagePath = IMAGES.backgrounds[backgroundKey];
    if (!imagePath) {
        console.warn(`Background '${backgroundKey}' not found`);
        return;
    }
    
    // Direct change - no transitions
    backgroundElement.style.backgroundImage = `url('${imagePath}')`;
    
    visualState.currentBackground = backgroundKey;
    console.log(`Background changed to: ${backgroundKey}`);
}

// Set character expression
function setCharacterExpression(character, expression) {
    const sprite = document.getElementById(`${character}-sprite`);
    if (!sprite) return;
    
    const imagePath = IMAGES[character] && IMAGES[character][expression];
    if (!imagePath) {
        console.warn(`Expression '${expression}' for character '${character}' not found`);
        return;
    }
    
    sprite.style.backgroundImage = `url('${imagePath}')`;
    
    if (character === 'hannah') {
        visualState.hannahExpression = expression;
    } else if (character === 'max') {
        visualState.maxExpression = expression;
    }
    
    console.log(`${character} expression changed to: ${expression}`);
}

// Show a character without animations
function showCharacter(character) {
    const sprite = document.getElementById(`${character}-sprite`);
    if (!sprite) return;
    
    sprite.style.display = 'block';
    
    if (character === 'max') {
        visualState.maxVisible = true;
    }
    
    console.log(`${character} appeared`);
}

// Hide a character without animations
function hideCharacter(character) {
    const sprite = document.getElementById(`${character}-sprite`);
    if (!sprite) return;
    
    sprite.style.display = 'none';
    
    if (character === 'max') {
        visualState.maxVisible = false;
        visualState.maxExpression = null;
    }
    
    console.log(`${character} disappeared`);
}

// Reset visual state (for restarting the game)
function resetVisualState() {
    visualState = {
        currentBackground: null,
        hannahExpression: null,
        maxExpression: null,
        maxVisible: false,
        isTransitioning: false
    };
    
    // Hide Max
    const maxSprite = document.getElementById('max-sprite');
    if (maxSprite) {
        maxSprite.style.display = 'none';
    }
    
    console.log('Visual state reset');
}

// Utility function to get current visual state
function getVisualState() {
    return { ...visualState };
}

// Export functions for global access
window.VisualNovel = {
    initialize: initializeVisualNovel,
    updateScene: updateVisualScene,
    changeBackground: changeBackground,
    setCharacterExpression: setCharacterExpression,
    showCharacter: showCharacter,
    hideCharacter: hideCharacter,
    resetVisualState: resetVisualState,
    getVisualState: getVisualState
};