const game = {
    start() {
        document.title = 'Game has started';
        browser.hideScreens();
        browser.showScreen('game');
    },

    exit() {
        document.title = 'Login';
        sessionStorage.removeItem('name');
        browser.hideScreens();
        browser.showScreen('login-container');
    },
};

// Test
window.addEventListener('load', () => {
    let session = sessionStorage.getItem('name');
    document.getElementById('name').innerHTML = session;
});