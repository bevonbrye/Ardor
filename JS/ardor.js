//extra: 
let container = document.querySelector('container')

let createPic = document.createElement('img');
createPic.setAttribute('src', './human.png');
createPic.setAttribute('class', 'createPic');
container.appendChild(createPic)

//const and Lets : 
//create array of words to be used
const arrayOfWords = ['ardor', 'sabaism', 'latibuli', 'chrysalism', 'astrophile', 'psithurism', 'kalokagathia', 'ataraxia', 'eurneirophrenia', 'kalopsia', 'mogoa', 'whelve', 'dormiveglia', 'aeipathy', 'woodnote', 'pulchritudinous', 'nemophilst'];
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
    console.log('this works')
};
startGame();