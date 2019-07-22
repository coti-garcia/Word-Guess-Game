$(document).ready(function(){
    let wins = 0;
    let word = "kalho";
    let imagePath = `./assets/images/${word}.jpg`;
    let wordLength = word.length;
    let guessesRemaining = wordLength * 2;
   
    $("#wins").append(wins);
    //Forloop for span letters word
    for( i = 0; i < wordLength; i++){
            $("#word").append("<span>");
            console.log(word[i]); // Result Letters of the word.
    };
    $("#word-image").attr("src", imagePath);            
    $("#guesses-remaining").append(guessesRemaining);

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
    console.log(wordsForGame);
    for (let [key, value] of Object.entries(wordsForGame)) {
        let namesOfGame = key.length;
        console.log(`${key} ${namesOfGame}`);
    }
    
    //Groups of name 2
    const wordsToGuess = {
        names : ["kalho", "spencer", "obama"],
        imagePath : ["1", "2", "3"],
        active: [false, false, false]
    }
    console.log(wordsToGuess);

});