$(document).ready(function(){
    let wins = 0;
    let word = "tito";
    let wordLength = word.length;
    let guessesRemaining = wordLength;

    $("#wins").append(wins);
    $("#guesses-remaining").append(guessesRemaining);

    for( i = 0; i < wordLength; i++){
        $("#word").append("<span>");
        console.log(word[i]); // Result Letters of the word.
    };

});