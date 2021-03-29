const browser = {

    init() {
        browser.hideScreens();
        browser.showScreen('login-container');
    },

    hideScreens(){
        const screens = document.getElementsByClassName('layer');

        for (let i = screens.length - 1; i >= 0; i -= 1){
            const screen = screens[i];
    
            screen.style.display = 'none';
        }
    },

    hideScreen(id){
        const screen = document.getElementById(id);
    
        screen.style.display = 'none';
    },

    showScreen(id){
        const screen = document.getElementById(id);
    
        screen.style.display = 'block';
    },

    scale: 1,
    resize() {
        const maxWidth = window.innerWidth;
        const maxHeight = window.innerHeight;

        const scale = Math.min(maxWidth / 640, maxHeight / 480);

        const container = document.getElementById('container');

        container.style.transform = `${'translate(-50%, -50%0} scale('}${scale})`;

        browser.scale = scale;

        const width = Math.max(640, Math.min(1920, maxWidth / scale));

        container.style.width = `${width}px`;
    },
};

window.addEventListener('load', () => {
    browser.resize();
    browser.init();
}, false);

window,addEventListener('resize', () => {
    browser.resize();
});