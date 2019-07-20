$(document).ready(function(){
    let wins = 0;
    let word = "pene";
    let wordLength = word.length;
    let guessesRemaining = wordLength;

    $("#wins").append(wins);
    $("#guesses-remaining").append(guessesRemaining);

    for( i = 0; i < wordLength; i++){
        $("#word").append("<span>");
        console.log(word[i]); // Result Letters of the word.
    };

    // key event vanilla javascript
    document.onkeyup = function (event) {
        // Determines which key was pressed.
        const userGuess = event.key;
        console.log(userGuess);
        $("#used-letters").append(`<span>${userGuess}</span>`);
    };

});