import wordsJson from './words.js';

//console.log(wordsJson);
const wordList = JSON.parse(wordsJson);
//console.log(wordList);

function getRandomList(arr) {
    const tempArray = [];
    for (const key in arr) {
        tempArray.push(key);
    }
    return tempArray[Math.floor(Math.random() * tempArray.length)];
}

function getRandomWord(words, keyName){
    return words[keyName][Math.floor(Math.random() * words[keyName].length)];
}

const key = getRandomList(wordList);
const word = getRandomWord(wordList, key);

// Game functionality
// Athugar hver stafurinn er sem notandi skrifaði og ber það saman við orðið og athugar ef hann hefur verið notaður áður og ef svo birtir hann
// skilaboð til þess að segja notandanum það.
function checkLetter() {
    if(testedLetters.includes(htmlLetterInput.value)){
        htmlMessage.innerText = "Þessi stafur hefur verið prufaður";
        htmlLetterInput.value = '';
    } else {
        htmlMessage.innerText = "";
        testedLetters.push(htmlLetterInput.value);
        testedLetters.sort();
        tries-=1;
    }
};

// Athugar hvort að stafurinn kemur fram meira en 2 sinnum
function doubleLetter() {
    if(testedLetters.includes(htmlLetterInput) >= 2){
        htmlMessage.innerText = '';
    }
};

// Athugar ef að stafurinn er rangur og ef svo er þá setur það í wrongLetters arrayið
function wrongLetter(){
    // Bæta 1 við í tries sem að notanda er sýnt til þess að ef það kemur " " í array þá tekur það ekki líf af notanda
    htmlTries.innerHTML = `Tries left: ${tries-1}`;

    wrongLetters.push(htmlLetterInput.value);
    wrongLetters.sort();

    displayWrongLetters = wrongLetters.join(" ");
    htmlWrongLetters.innerText = displayWrongLetters;
    htmlLetterInput.value = '';
};

// Athugar hvort að stafurinn er í orðinu og ef svo tekur það burt _ og setur stafinn í stað þess
function includes(){
    if(word.includes(htmlLetterInput.value)){
        for(let i=0;i<word.length; i++){
            if(word[i] === htmlLetterInput.value){
                hiddenWord[i] = htmlLetterInput.value;
                htmlMessage.innerText = "";
            }
            if(i===hiddenWord.length-1){
                displayHiddenWord = hiddenWord.join(" ")
                htmlHiddenWord.innerText = displayHiddenWord;
                htmlLetterInput.value = '';
                htmlMessage.innerText = "";
            }
        }
    }
    if ( hiddenWord.includes("_") <= 0){
        htmlLetterInput.disabled = true;
        win.innerText = "You guessed the word!";
        htmlMessage.remove()
    }
};

// Athuga hversu mörg "líf" eru eftir og ef þau klárast þá segir það hvert orðið var
function triesLeft(){
    if(tries <=1){
        htmlMessage.innerText = `You lost! the word was ${word}`;
        htmlLetterInput.disabled = true;
    }
};

let tries = 12;
let htmlWordCategory = document.getElementById("category");
let htmlHiddenWord = document.getElementById("hidden");
let htmlMessage = document.getElementById("message");
let htmlLetterInput = document.getElementById("letter");
let htmlWrongLetters = document.getElementById("wrongLetters");
let win = document.getElementById("win");
let htmlTries = document.getElementById("tries");

// Birtir display- HiddenWord og WrongLetters tómt
let displayHiddenWord = "";
let displayWrongLetters = "";

// Býr til array fyrir hiddenWord, testedLetters og wrongLetters
let hiddenWord = [];
let testedLetters = [];
let wrongLetters = [];

// Hlustar eftir htmlLetterInput fyrir includes(), checkletter(), triesLeft(), wrongLetter() og doubleLetter()
htmlLetterInput.addEventListener("keyup",includes, false)
htmlLetterInput.addEventListener("keyup", checkLetter, false);
htmlLetterInput.addEventListener("keyup", triesLeft, false);
htmlLetterInput.addEventListener("keyup", wrongLetter, false);
htmlLetterInput.addEventListener("keyup", doubleLetter, true);

// Birtir hvert category á orðinu er í #category div tagginu
htmlWordCategory.innerHTML = `Word category: ${key}`;

// Taka 1 burt frá tries sem að notanda er sýnt til þess að ef það kemur " " í array þá tekur það ekki líf af notanda
htmlTries.innerHTML = `Tries left: ${tries-2}`;

// Athugar lengd orðsins og setur _ fyrir hvern staf
for (let i = 0; i<word.length; i++){
    hiddenWord.push("_");
    if(i === word.length-1){
        displayHiddenWord = hiddenWord.join(" ");
        htmlHiddenWord.innerText = displayHiddenWord;
    }
};