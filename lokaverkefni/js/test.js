import pageContentJson from './pagecontent.js';

const pageContent = JSON.parse(pageContentJson);

const btnTst = document.getElementById('login-btn');
const usernameSpan = document.getElementsByClassName('show-txt');
const gameTitle = document.getElementById('game-title');

btnTst.innerText = pageContent.loginScreen[0].login;
usernameSpan.innerText = pageContent.startScreen[0].title;
gameTitle.innerText = pageContent.startScreen[0].title;
