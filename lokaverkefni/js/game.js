import gameTextJson from './gameText.js';

const textObject = JSON.parse(gameTextJson);
const startGameBtn = document.getElementById("start-game-btn");
const exitGameBtn = document.getElementById('exit-game-btn');
const goBackBtn = document.getElementById('exit-btn');
const restartBtn = document.getElementById('restart-btn');
const gameOptions = document.getElementById('options');

const displayTitle = sessionStorage.getItem("displayTitle");
const displayText = sessionStorage.getItem("displayText");

function getTitlesList(arr) {
    const tempArray = [];
    for (const key in arr) {
        tempArray.push(key);
    }
    return tempArray;
}

function getOptionsList(arr) {
    const tempArray = [];
    for (const key in arr) {
        tempArray.push(key);
    }
    return tempArray;
}

if (sessionStorage.getItem("displayTitle") === null){
    sessionStorage.setItem('displayTitle', 0);
}

if (sessionStorage.getItem("displayText") === null){
    sessionStorage.setItem('displayText', 0);
}

// When browser/ window loads up on the start screen
window.addEventListener('load', () => {
    let session = sessionStorage.getItem('name');
    document.getElementById('name').innerHTML = session;
    
    const titleHTML = document.getElementById('game-header');
    titleHTML.innerHTML = textObject.text[displayText].title;

    const textHTML = document.getElementById('game-text');
    textHTML.innerHTML = textObject.text[displayText].text;
    const options = getOptionsList(textObject.text[displayText].options);
    for(let i = 0; i < options.length; i++){
        const button = document.createElement("button");
        button.id = textObject.text[displayText].options[options[i]];
        button.className = 'option';
        button.innerHTML = options[i];
        button.addEventListener('click', ()=>{
            sessionStorage.setItem('displayText', button.id);
            location.reload();
        })
        gameOptions.appendChild(button);
    }

    if (sessionStorage.getItem('gameRunning') === "true") {
        hideScreens();
        showScreen('game');
        document.title = 'Game';
    }
});

// Start Screen
// When game option start on start screen is clicked
startGameBtn.addEventListener("click", () => {
    document.title = 'Game';
    hideScreens();
    showScreen('game');
    sessionStorage.setItem('gameRunning', true);
});

// When game option exit on start screen is clicked
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
    sessionStorage.setItem('displayText', 0);
    sessionStorage.setItem('displayTitle', 0);
});

// When restart button on the game screen is clicked
restartBtn.addEventListener('click', () => {
    location.reload();
    sessionStorage.setItem('displayText', 0);
    sessionStorage.setItem('displayTitle', 0);
})