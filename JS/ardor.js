const usersGuess = document.querySelector('.usersGuess');
const retry = document.querySelector('.retry')
const WOLM = document.querySelector('h3')
const bgPlayer = document.getElementById('bg-player');
const bgCheckbox = document.querySelector('input[type="checkbox"]');


const arrayOfWords = ['cat', 'dog', 'sabaism', 'latibuli', 'chrysalism', 'astrophile', 'psithurism', 'kalokagathia', 'ataraxia', 'eurneirophrenia', 'kalopsia', 'mogoa', 'whelve', 'dormiveglia', 'aeipathy', 'woodnote', 'pulchritudinous', 'nemophilst'];
const easyWrongGuesses = 8;
const medWrongGuesses = 6;
const hardWrongGuesses = 3;

let arrWord;
let lettersGuessed;
let userGuess;

document.querySelector('section').addEventListener('click', clickLetter);
document.querySelector('.clickImg').addEventListener('click', clickImage);



// event listeners: 
retry.addEventListener('click', startGame)
bgCheckbox.addEventListener('change', handleBgChanged);


startGame();

// Functions: 

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
};


//  checks if input box is checked: 
function handleBgChanged() {
    bgCheckbox.checked ? bgPlayer.play() : bgPlayer.pause();
}

function clickImage() {
    let hack = document.getElementById('letters');
    hack.style.display = "block";
}


// Use promises setTimeout() to delay game actions