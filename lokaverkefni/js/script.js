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

    const scale = Math.min(maxWidth / 640, maxHeight / 480);

    const container = document.getElementById('container');

    container.style.transform = `${'translate(-50%, -50%) scale('}${scale})`;

    // Assign scale to window and use scale.
    window.scale = scale;

    const width = Math.max(205, Math.min(800, maxWidth / scale));
    
    container.style.width = `${width}px`;
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