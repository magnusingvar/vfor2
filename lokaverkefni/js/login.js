import usersJson from './users.js';

const usersObject = JSON.parse(usersJson);

const submitBtn = document.getElementById('login-btn');
const showPswrdBtn = document.getElementById('show');

const errorMsg = document.getElementById('error-msg');
const successMsg = document.getElementById('success-msg');

const welcomeMsg = document.getElementById('welcome-test');

submitBtn.addEventListener('click', ()=> {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    for (let i = 0; i < usersObject.users.length; i += 1){
        if(username == usersObject.users[i].name){
            if(password == usersObject.users[i].password){
                //alert('success');
                loginSuccessful('Login successful!');
                return false;
            } else {
                wrongLogin('Username or password is incorrect');
            }
        } //else {
        //wrongLogin('User does not exists');
        //}

        // Athugar hvort að username og password sé tómt 
        if (username == ''){
            wrongLogin('Username cannot be empty');
        }  else if (password == ''){
            wrongLogin('Password cannot be empty');
        } 

        //for (let i = 0; i < usersObject.users.length; i += 1){
        //    if (username !== usersObject.users[i].name){
        //        console.log('bruh');
        //    }
        //}
    }
});

showPswrdBtn.addEventListener('click', ()=> {
    const password = document.getElementById('password');
    if (password.type === 'password') {
        showPswrdBtn.innerHTML = 'Hide password';
        password.type = 'text';
    } else {
        showPswrdBtn.innerHTML = 'Show password';
        password.type = 'password';
    }
    return false;
});

// Falll sem birtir texta í errorMsg og eftir 4 sekúndur hreinsar hann textan út
// og birtir '' sem merkir að það sé tómt, tekur einnig 1 af tries
function wrongLogin(txt){
    errorMsg.innerHTML = txt;
    setTimeout(function(){
        errorMsg.innerHTML = '';
    }, 4000);
    return false;
}

// Fall sem segir notanda að innskráning hafi farið í gegn og breytir um vefslóð
function loginSuccessful(txt){
    successMsg.innerHTML = txt;
    errorMsg.innerHTML = '';
    document.cookie = `Username = ${username.value}`;
    document.cookie =  `Password = ${password.value}`;
    setTimeout(function(){
        document.title = 'Game';
        successMsg.innerHTML = '';
        browser.hideScreen('login-container');
        //window.location = 'success.html';
    }, 1000);

    // Eftir að 1 sekúnda er liðin, þá keyrir það upp 'showScreen' sem birtir logged-in
    // div taggið.
    setTimeout(function(){
        browser.showScreen('startScreen');
        welcomeMsg.innerHTML = `Welcome back ${username.value}`;

    }, 1000);

    return false;
}