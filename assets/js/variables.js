let wins = 0;
const letters = ["q", "w" , "e", "r", "t", "y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];
let guessesRemaining = 0;
let points = 0;
const words = ["kalho", "spencer", "degeneres", "obama", "streep"];
let word = words.wordIndex;
let wordIndex = 2;
const wordLength = word.length;
let  wordLettersArr = [];
let userGuessesArr = [];

// Inside function Game


const imagePath = `./assets/images/${word}.jpg`;
const wordArr = Array.from(word);
const uniqueSet = new Set(wordArr);
const cleanWordArr = [... uniqueSet];

// Inside key event
let userGuess = event.key;
