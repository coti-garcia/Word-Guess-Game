$(document).ready(function(){
    let wins = 0;
    $("#wins").append(wins);

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

    $game(obama);
    console.log(game());

    $(document).keyup(function(event){
        const userGuess = event.key;
        console.log(userGuess);
        $("#used-letters").append(`<span>${userGuess}</span>`);
    });

    // Groups of name 1
    const wordsForGame = {
        kalho : {
            name : "kalho",
            imagePath : "./assets/images/frida-kalho.jpg",
            active : false
        },
        spencer : {
            name : "spencer",
            imagePath : "./assets/images/diana.jpg",
            active : false
        },
        degeneres : {
            name : "degeneres",
            imagePath : "./assets/images/ellen-degeneres.jpg",
            active : false
        },
        obama : {
            name : "obama",
            imagePath : "./assets/images/michelle-obama.jpg",
            active : false
        },
        streep : {
            name : "streep",
            imagePath : "./assets/images/meryl-streep.jpg",
            active : false
        }
    }


});