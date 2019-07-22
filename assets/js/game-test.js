$(document).ready(function(){
    let wins = 0;
    $("#wins").append(wins);
    const letters = ["q", "w" , "e", "r", "t", "y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"]

    // Groups of words
    const words = [{
            name : "kalho",
            active : true
        },
        {
            name : "spencer",
            active : false
        },
        {
            name : "degeneres",
            active : false
        },
        
        {
            name : "obama",
            active : false
        },{
            name : "streep",
            active : false
        }
    ]
    let wordIndex = 0;
    //const words = [kalho, spencer, degeneres, obama, streep];
    //console.log(words);


    function game(word){
        $("#used-letters").empty();
        let wordLength = word.length;
        let guessesRemaining = wordLength * 2;
        let imagePath = `./assets/images/${word}.jpg`;
        let userGuessesArr = [];

        //Forloop for span letters word
        for( i = 0; i < wordLength; i++){
            $("#word").append("<span>");
            // console.log(word[i]); // Result Letters of the word.
        };
        $("#word-image").attr("src", imagePath);
        $("#guesses-remaining").append(guessesRemaining);
    };

 

    // $(document).keyup(function(event){
    //     const userGuess = event.key;
    //     console.log(userGuess);
    //     $("#used-letters").append(`<span>${userGuess}</span>`);
        
    // });

    $(document).keyup(function(event){
        let userGuess = event.key;
        console.log(userGuess);
        // if (userGuessesArr.includes(userGuess)){
        //     alert("Already Guessed! please choose another letter")
        // }else if (letters.includes(userGuess)){
        //     userGuessesArr.push(userGuess);
        //     console.log(userGuessesArr);
        //     $("#used-letters").append(`<span>${userGuess}</span>`);
        // } 
        if(true){
            wordIndex++;
            game(words[wordIndex].name);
        }
    });

    game(words[wordIndex].name);



game(words[wordIndex].name);
console.log(words[wordIndex].name)
   // game(kalho.name);



});