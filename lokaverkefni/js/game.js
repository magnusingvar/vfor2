import gameTextJson from './gameText.js';

const textObject = JSON.parse(gameTextJson);
const startGameBtn = document.getElementById('start-game-btn');
const exitGameBtn = document.getElementById('exit-game-btn');
const goBackBtn = document.getElementById('exit-btn');
const restartBtn = document.getElementById('restart-btn');
const gameOptions = document.getElementById('options');

const displayText = sessionStorage.getItem('displayText');

// Get all items from the options object
// in the gameText.js file and put them
// in an array that can be read.
function getOptionsList(arr) {
    const tempArray = [];
    for (const key in arr) {
        tempArray.push(key);
    }
    return tempArray;
}

// If displayText item is null then assign it 0
// to make it show the first text
if (sessionStorage.getItem('displayText') === null) {
    sessionStorage.setItem('displayText', 0);
}

// When browser/ window loads up on the start screen
window.addEventListener('load', () => {
    let session = sessionStorage.getItem('name');
    document.getElementById('name').innerHTML = session;

    // Apply chapter title to game header container element
    const titleHTML = document.getElementById('game-header');
    titleHTML.innerHTML = textObject.text[displayText].title;

    // Assign text to game container element
    const textHTML = document.getElementById('game-text');
    textHTML.innerHTML = textObject.text[displayText].text;
    const options = getOptionsList(textObject.text[displayText].options);
    for (let i = 0; i < options.length; i++) {
        const button = document.createElement('button');
        button.id = textObject.text[displayText].options[options[i]];
        button.className = 'option';
        button.innerHTML = options[i];
        button.addEventListener('click', () => {
            // If button id is "exit" run this code,
            // else change text to the appropriate id.
            if (button.id === 'Exit') {
                sessionStorage.setItem('gameRunning', false);
                sessionStorage.setItem('displayText', 0);
                location.reload();
            } else {
                sessionStorage.setItem('displayText', button.id);
                location.reload();
            }
        });
        // Make buttons with the values
        // that we got from the json file.
        gameOptions.appendChild(button);
    }

    // If gameRunning is true then hide screens and show the game
    // and change the document title.
    if (sessionStorage.getItem('gameRunning') === 'true') {
        hideScreens();
        showScreen('game');
        document.title = 'Game';
    }
});

// Start Screen
// When game option start on start screen is clicked
startGameBtn.addEventListener('click', () => {
    document.title = 'Game';
    hideScreens();
    showScreen('game');
    sessionStorage.setItem('gameRunning', true);
});

// When game option exit on start screen is clicked
// remove the sessionStorage item for username
exitGameBtn.addEventListener('click', () => {
    document.title = 'Login';
    sessionStorage.removeItem('name');
    hideScreens();
    showScreen('login-container');
});

// Game
// When go back button on the game screen is clicked
goBackBtn.addEventListener('click', () => {
    location.reload();
    sessionStorage.setItem('gameRunning', false);
});

// When restart button on the game screen is clicked
restartBtn.addEventListener('click', () => {
    location.reload();
    sessionStorage.setItem('displayText', 0);
});
