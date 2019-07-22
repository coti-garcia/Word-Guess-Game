$(document).ready(function(){
    let wins = 0;
    $("#wins").append(wins);
    // Groups of name 1
    const kalho = {
            name : "kalho",
            active : true
        };

    const spencer = {
            name : "spencer",
            active : false
        };
    
    const  degeneres = {
            name : "degeneres",
            active : false
        };

    const obama = {
            name : "obama",
            active : false
        };
    
    const streep = {
            name : "streep",
            active : false
        };
    

    function game(word){
        let wordLength = word.length;
        let guessesRemaining = wordLength * 2;
        let imagePath = `./assets/images/${word}.jpg`;
        //Forloop for span letters word
            for( i = 0; i < wordLength; i++){
                $("#word").append("<span>");
                console.log(word[i]); // Result Letters of the word.
            };
        $("#word-image").attr("src", imagePath);
        $("#guesses-remaining").append(guessesRemaining);
    };

    game(degeneres.name);

    $(document).keyup(function(event){
        const userGuess = event.key;
        console.log(userGuess);
        $("#used-letters").append(`<span>${userGuess}</span>`);
    });



    const words = [kalho, spencer, degeneres, obama, streep];
    console.log(words);

});