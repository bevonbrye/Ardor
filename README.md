# Ardor: An Obscure Journey of a Timeless Game 
### Bevon Benet Brye-Cadena 
![Earth from space](https://imgur.com/zfqcpAR.jpg)
## Background:
Ardor is a new take on a classic game (Hangman) that brings the user on a more fulfilling journey - obscure in its nature but rewarding by its end. 

## Choose You Words Wisely...

“Words are singularly the most powerful force available to humanity. We can choose to use this force constructively with words of encouragement, or destructively using words of despair. Words have energy and power with the ability to help, to heal, to hinder, to hurt, to harm, to humiliate and to humble.”  - YB

What inspired me to create this app is the immeasurable amount of joy that words can bring to people. The goal for this app is to at least give one user the opportunity to smile upon their completion and is the soul motivator for why I created it. 



## Game Rules: 
User has the option to choose letters from a word bank. If the user guesses wrong x amount of times, then the game ends. If the user guesses all the letter right, the next round is initiated.

## Brief History: 
Though the origins of the game are unknown, a variant is mentioned in a book of children's games assembled by Alice Gomme in 1894 called Birds, Beasts, and Fishes. This version lacks the image of a hanged man, instead relying on keeping score as to the number of attempts it took each player to fill in the blanks.

## Game: 

![game shot beginning](https://imgur.com/7dqE7VE.png)

![game shot end](https://imgur.com/Vpph3wd.png)

![wireframe](https://imgur.com/UHB3c1Y.png)

## Code: 
 
> `function winOrLoseMsg() {
    if (userGuess === arrWord) {
        WOLM.innerText = 'You are amazing!'
    } else if (lettersGuessed.length === hardWrongGuesses) {
        WOLM.innerText = 'You are amazing, but keep trying!'
    } else {
        WOLM.innerText = 'Your Journey Starts Here'
    }
}; `

## Future Developement: DLC (No Man's Sky Parable)
- Drag and drop API
- Sound implementation
- Story Mode (narration) 
- Definitions
- Extra difficulties. 

## Credits 
Jason Su, JH, StackOverFlow. 