import usersJson from './users.js';

const usersObject = JSON.parse(usersJson);
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const submitBtn = document.getElementById('login-btn');
const pswrdChck = document.getElementById('pswrd-chck-box');
const message = document.getElementById('message');

// If session storage has value of name in users in userObject, go to 
// start screen and if it already exist take user to game start screen
window.addEventListener('load',() => {
    document.title = 'Login';
    let session = sessionStorage.getItem('name');
    for (let i = 0; i < usersObject.users.length; i += 1) {
        if (session == usersObject.users[i].name) {
            document.title = 'Start Screen';
            hideScreens();
            showScreen('startScreen');
        }
    }  
    pswrdChck.checked = false;
});

// Make the input in username and password lowercase
// while user is typing. 
usernameInput.addEventListener('input', () => {
    forceLower(usernameInput);
});

passwordInput.addEventListener('input', () => {
    forceLower(passwordInput);
});

// Check if login button is clicked by user
// and log in if values match the one in the 
// users.js file and if not give appropriate
// error or success message.
submitBtn.addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    for (let i = 0; i < usersObject.users.length; i += 1) {
        if (username == usersObject.users[i].name) {
            if (password == usersObject.users[i].password) {
                sessionStorage.setItem('name', document.getElementById('username').value);
                loginSuccessful('Login successful!');
                return false;
            }
        } else {
            wrongLogin('Username or password is incorrect');
        }

        // Check if username input is empty
        if (username == '') {
            wrongLogin('Username cannot be empty');
        } else if (password == '') {
            wrongLogin('Password cannot be empty');
        }
    }
});

// Check if user toggles show password checkbox and if it's checked show
// the password input but if it's not checked hide the password input.
pswrdChck.addEventListener('click', () => {
    const password = document.getElementById('password');
    if (pswrdChck.checked) {
        password.type = 'text';
    } else {
        password.type = 'password';
    }
});

// Force the input to be lowercase
function forceLower(usrInput) {
    usrInput.value=usrInput.value.toLowerCase();
}

// If login is not successful assign message div with the class error
// and insert the text assigned to the function and after some seconds
// make the text empty.
function wrongLogin(txt) {
    message.innerHTML = txt;
    message.className = 'error';
    setTimeout(function () {
        message.innerHTML = '';
        message.className = '';
    }, 6000);
    return false;
}

// If login is  successful assign message div with the class success
// and insert the text assigned to the function and after 1 seconds
// and after that hide login and show start screen.
function loginSuccessful(txt) {
    message.innerHTML = txt;
    message.className = 'success';
    setTimeout(function () {
        document.title = 'Redirecting...';
        message.innerHTML = '';
        message.className = '';
    }, 1000);

    window.location.reload();

    setTimeout(function () {
        document.title = 'Game';
        browser.hideScreens();
        browser.showScreen('startScreen');
    }, 1500);
    return false;
}
