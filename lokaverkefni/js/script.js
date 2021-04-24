function init() {
    hideScreens();
    showScreen('login-container');
}

function hideScreens() {
    const screens = document.getElementsByClassName('layer');

    for (let i = screens.length - 1; i >= 0; i -= 1){
        const screen = screens[i];

        screen.style.display = 'none';
    }
}

function hideScreen(id){
    const screen = document.getElementById(id);
    
    screen.style.display = 'none';
}

function showScreen(id) {
    const screen = document.getElementById(id);
    
    screen.style.display = 'block';
}

function resize() {
    scale: 1;
    const maxWidth = window.innerWidth;
    const maxHeight = window.innerHeight;

    const scale = Math.min(maxWidth / 205, maxHeight / 360);
    const loginScale = Math.min(maxWidth / 205, maxHeight / 360);
    const startScale = Math.min(maxWidth / 205, maxHeight / 360);
    const gameScale = Math.min(maxWidth / 205, maxHeight / 360);

    const container = document.getElementById('container');
    const loginContainer = document.getElementById('login-container');
    const startContainer = document.getElementById('startScreen');
    const gameContainer = document.getElementById('game');

    container.style.transform = `${'translate(50%, -50%0} scale('}${scale})`;
    loginContainer.style.transform = `${'translate(-50%, -50%0} scale('}${loginScale})`;
    gameContainer.style.transform = `{'translate(-50%, -50%0} scale('}${gameScale})`;

    // Assig scale to window and use scale.
    window.scale = scale;

    const width = Math.max(205, Math.min(800, maxWidth / scale));
    const loginWidth = Math.max(205, Math.min(340, maxWidth / loginScale));
    const startWidth = Math.max(205, Math.min(1000, maxWidth / startScale));
    const gameWidth = Math.max(205, Math.min(700, maxWidth / gameScale));

    container.style.width = `${width}px`;
    loginContainer.style.width = `${loginWidth}px`;
    startContainer.style.width = `${startWidth}px`;
    gameContainer.style.width = `${gameWidth}px`;
}

// When browser windows loads run resize()
// and init () function.
window.addEventListener('load', () => {
    resize();
    init();
}, false);

// When browser is rezised run the resize()
// function.
window.addEventListener('resize', () => {
    resize();
});