const usersGuess = document.querySelector('.usersGuess');
const retry = document.querySelector('.retry')
const WOLM = document.querySelector('h3')
const arrayOfWords = ['cat', 'dog'] //[, 'sabaism', 'latibuli', 'chrysalism', 'astrophile', 'psithurism', 'kalokagathia', 'ataraxia', 'eurneirophrenia', 'kalopsia', 'mogoa', 'whelve', 'dormiveglia', 'aeipathy', 'woodnote', 'pulchritudinous', 'nemophilst'];
const easyWrongGuesses = 8;
const medWrongGuesses = 6;
const hardWrongGuesses = 3;
let arrWord;
let lettersGuessed;
let userGuess;
document.querySelector('section').addEventListener('click', clickLetter);
retry.addEventListener('click', startGame)
startGame();

function clickLetter(e) {
    const letter = e.target.innerText;
    if (letter.length > 1 || gameOver() || lettersGuessed.includes(letter) || userGuess.includes(letter))
        return;
    if (arrWord.includes(letter)) {
        let guess = '';
        for (let i = 0; i < arrWord.length; i++) {
            guess += arrWord.charAt(i) === letter ? letter : userGuess.charAt(i)
        }
        userGuess = guess;
    } else {
        lettersGuessed.push(letter);
    }
    displayItems();
}

function gameOver() {
    return arrWord === userGuess || lettersGuessed.length === hardWrongGuesses
}

function startGame() {
    lettersGuessed = [];
    const getRandomIndex = Math.floor(Math.random() * arrayOfWords.length)
    arrWord = arrayOfWords[getRandomIndex];
    userGuess = '';
    displayItems();
};

function winOrLoseMsg() {
    if (userGuess === arrWord) {
        WOLM.innerText = 'You are amazing!'
    } else if (lettersGuessed.length === hardWrongGuesses) {
        WOLM.innerText = 'You are amazing, but keep trying!'
    } else {
        WOLM.innerText = 'Your Journey Starts Here'
    }
}

function displayItems() {
    usersGuess.innerText = userGuess;
    retry.style.display = gameOver() ? 'block' : 'none';
    winOrLoseMsg();
}