$(document).ready(function(){
    let wins = 0;
    $("#wins").append(wins);
    const letters = ["q", "w" , "e", "r", "t", "y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"]
    let guessesRemaining = 0;
    $("#guesses-remaining").append(guessesRemaining);
    const words = ["kalho", "spencer", "degeneres", "obama", "streep"];
    let wordIndex = 0;
    let word = words[wordIndex];
    let userGuessesArr = []
    let dashedWord = "_".repeat( word.length );

    function game(word){
        const wordLength = word.length;
        const imagePath = `./assets/images/${word}.jpg`;
        //Forloop for span letters word
        // for( i = 0; i < wordLength; i++){
        //     $("#word").append(`<span id=${word[i]}>`);
        // };
        $("#word-image").attr("src", imagePath);
    };

    $(document).keyup(function(event){
        let userGuess = event.key;
        // if (userGuessesArr.includes(userGuess)){
        //     alert("Already Guessed! please choose another letter")
        // }else if (letters.includes(userGuess)){
        //     userGuessesArr.push(userGuess);
        //     $("#used-letters").append(`<span>${userGuess}</span>`);
        //     guessesRemaining = guessesRemaining - 1;
        //     $("#guesses-remaining").text(guessesRemaining);
        // }
        const matches = word.match(event.key);
        if ( matches ) {
            for (let i = 0; i < word.length; i++) {
                if (word[i] === e.key) {
                    dashedWord = dashedWord.split("");
                    dashedWord[i] = e.key;
                    dashedWord = dashedWord.join("");
                }
            }
        }
        render();
    });

    function render () {
        $("#word").text(dashedWord);
    }
    

    $( "#start" ).click(function() {
        game(word);
        $( "#start" ).remove(); 
        guessesRemaining = 10;
        $("#guesses-remaining").text(guessesRemaining);
    });

    $( "#next-word" ).click(function() {
        wordIndex ++
        game(words[wordIndex]);
        guessesRemaining = 10;
        $("#guesses-remaining").text(guessesRemaining);
        userGuessesArr = [];
    });

    

});