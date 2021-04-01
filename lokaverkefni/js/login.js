import usersJson from './users.js';

const usersObject = JSON.parse(usersJson);

const submitBtn = document.getElementById('login-btn');
const pswrdChck = document.getElementById('pswrd-chck-box');

const message = document.getElementById('message');

submitBtn.addEventListener('click', ()=> {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    for (let i = 0; i < usersObject.users.length; i += 1){
        if(username == usersObject.users[i].name){
            if(password == usersObject.users[i].password){
                loginSuccessful('Login successful!');
                return false;
            } 
        } else {
            wrongLogin('Username or password is incorrect');
        }
        
        // Athugar hvort að username og password sé tómt 
        if (username == ''){
            wrongLogin('Username cannot be empty');
        } else if (password == ''){
            wrongLogin('Password cannot be empty');
        }

        //if (username === usersObject.users[i].name){
        //    message.innerHTML = 'This user exist';
        //} else {
        //    message.innerHTML = 'This user does not exist!';
        //    console.log('user does not exist');
        //}
    }
});

pswrdChck.addEventListener('click', () => {
    const password = document.getElementById('password');
    if (pswrdChck.checked) {
        password.type = 'text';
    } else {
        password.type = 'password';
    }
});

// Falll sem birtir texta í errorMsg og eftir 4 sekúndur hreinsar hann textan út
// og birtir '' sem merkir að það sé tómt, tekur einnig 1 af tries
function wrongLogin(txt){
    message.innerHTML = txt;
    message.className = 'error';

    setTimeout(function(){
        message.innerHTML = '';
    }, 6000);
    return false;
}

// Fall sem segir notanda að innskráning hafi farið í gegn og breytir um vefslóð
function loginSuccessful(txt){
    message.innerHTML = txt;
    message.className = 'success';
    setTimeout(function(){
        document.title = 'Game';
        message.innerHTML = '';
    }, 1000);

    // Eftir að 1 sekúnda er liðin, þá keyrir það upp 'showScreen' sem birtir logged-in
    // div taggið.
    setTimeout(function(){
        browser.hideScreens();
        browser.showScreen('startScreen');
        //welcomeMsg.innerHTML = `Welcome back ${username.value}`;

    }, 1000);

    return false;
}

window.addEventListener('load', () => {
    pswrdChck.checked = false;
}, false);