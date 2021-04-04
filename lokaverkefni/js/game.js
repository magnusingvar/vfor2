const game = {
    start() {
        document.title = 'game started';
        browser.hideScreens();
        browser.showScreen('game');
    },

    exit() {
        document.title = 'Login';
        browser.hideScreens();
        browser.showScreen('login-container');
    },
};
