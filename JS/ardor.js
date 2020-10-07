//extra: ignore for now 
// let container = document.querySelector('container')

// let createPic = document.createElement('img');
// createPic.setAttribute('src', './human.png');
// createPic.setAttribute('class', 'createPic');
// container.appendChild(createPic)


//const and Lets: 
//create array of words to be used
const arrayOfWords = ['ardor', 'sabaism', 'latibuli', 'chrysalism', 'astrophile', 'psithurism', 'kalokagathia', 'ataraxia', 'eurneirophrenia', 'kalopsia', 'mogoa', 'whelve', 'dormiveglia', 'aeipathy', 'woodnote', 'pulchritudinous', 'nemophilst'];
//consts and lets: 
const easyWrongGuesses = 8;
const medWrongGuesses = 6;
const hardWrongGuesses = 3;

//create varible that change during the game:
let arrWord;
let lettersGuessed;
let userGuess;

// functions:
//start game funtion that will enable all the varibles that will change:
function startGame() {
    lettersGuessed = [];
    //I need to get a random number from the array of words 
    const getRandomIndex = Math.floor(Math.random() * arrayOfWords.length)
    arrWord = arrayOfWords[getRandomIndex];
    // I need to loop through the array of words 
    userGuess = '';
    for (let letter of arrWord) {
        userGuess += letter === ' ' ? ' ' : '_'; // ter op easier way to use condits
    }
};
startGame();