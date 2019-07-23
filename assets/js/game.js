$(document).ready(function(){
    let wins = 0;
    $("#wins").append(wins);
    const letters = ["q", "w" , "e", "r", "t", "y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"]
    let guessesRemaining = 0;
    let points = 0;
    $("#guesses-remaining").append(guessesRemaining);
 
    const words = ["kalho", "obama", "degeneres" , "streep","spencer"];
    const wordPoints = [5,4,6,5,6];
    let wordIndex = 0;
    let word = words[wordIndex];
    let userGuessesArr = [];
    

    function game(word){
        const wordLength = word.length;
        const imagePath = `./assets/images/${word}.jpg`;
        //Forloop for span letters word
        for( i = 0; i < wordLength; i++){
            $("#word").append(`<span id=${word[i]}>`);
        };
        $("#word-image").attr("src", imagePath);

        console.log(wordPoints[wordIndex]);
    };

    $(document).keyup(function(event){
        let userGuess = event.key;
        const matches = word.match(event.key);
        // if (matches){
        //     points++
        // }
        if (userGuessesArr.includes(userGuess)){
            alert("Already Guessed! please choose another letter")
            if (matches){
                points--
            }
        }else if (letters.includes(userGuess)){
            userGuessesArr.push(userGuess);
            $("#used-letters").append(`<span>${userGuess}</span>`);
            guessesRemaining = guessesRemaining - 1;
            $("#guesses-remaining").text(guessesRemaining);
        } 
        if( words[wordIndex].includes(userGuess)){
            $(`#word span#${userGuess}`).text(userGuess);
            points++
            console.log("points: "+ points);
        }
        if( points == wordPoints[wordIndex]){
            wins++;
            points = 1;
            $("#wins").text(wins);
            $("#win-message").append("<h5>You got it! Try a new word!</h5>");
            $("#win-message").append('<button id="next-word">Next Word</button>');
            $( "#next-word" ).click(function() {
                wordIndex ++
                $( "#word" ).empty();
                $( "#used-letters" ).empty();
                $( "#win-message" ).empty();
                userGuessesArr = [];
                points = 0;
                guessesRemaining = 10;
                $("#guesses-remaining").text(guessesRemaining);
                game(words[wordIndex]);
            });
        }
    });

    

    $( "#start" ).click(function() {
        game(word);
        $( "#start" ).remove(); 
        guessesRemaining = 10;
        $("#guesses-remaining").text(guessesRemaining);
    });


    


//game(words[wordIndex].name);
//console.log(words[wordIndex].name)
   // game(kalho.name);



});