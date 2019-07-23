$(document).ready(function(){
    let wins = 0;
    $("#wins").append(wins);
    const letters = ["q", "w" , "e", "r", "t", "y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"]
    let guessesRemaining = 0;
    let points = 0;
    $("#guesses-remaining").append(guessesRemaining);
 
    const words = ["kalho", "spencer", "degeneres", "obama", "streep"];
    let wordIndex = 0;
    let word = words[wordIndex];
    console.log(word)
    let  wordLettersArr = [];
    let userGuessesArr = [];

    function game(word){
        const wordLength = word.length;
        const imagePath = `./assets/images/${word}.jpg`;
        const wordArr = Array.from(word);
        const uniqueSet = new Set(wordArr);
        const cleanWordArr = [... uniqueSet];
        console.log(cleanWordArr);
        
        //Forloop for span letters word
        for( i = 0; i < wordLength; i++){
            $("#word").append(`<span id=${word[i]}>`);
        };
        $("#word-image").attr("src", imagePath);
    };

    $(document).keyup(function(event){
        let userGuess = event.key;
        if (userGuessesArr.includes(userGuess)){
            alert("Already Guessed! please choose another letter")
        }else if (letters.includes(userGuess)){
            userGuessesArr.push(userGuess);
            $("#used-letters").append(`<span>${userGuess}</span>`);
            guessesRemaining = guessesRemaining - 1;
            $("#guesses-remaining").text(guessesRemaining);
        } 
        if( words[wordIndex].includes(userGuess)){
            $(`#word span#${userGuess}`).text(userGuess);
            wordLettersArr.push(userGuess);
            points++
            console.log("points:" + points);
        }
        if( words[wordIndex].length === points ){
            wins++;
            $("#wins").text(wins);
            $("#win-message").append("<h5>You got it! Try a new word!</h5>");
            $("#win-message").append('<button id="next-word">Next Word</button>');
        }
        if( words[wordIndex].length < points ){
            $( "#win-message" ).remove(); 
            wordIndex++
            game(words[wordIndex]);
            userGuessesArr = [];
        }
    });

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






    console.log("points:" + points);
    console.log(words[wordIndex].length);
    
    // Compare the value of two arrays
    function intersect_arrays(a, b) {
        const sorted_b = b.concat().sort();
        const sorted_a = a.concat().sort();
        const common = [];
        const a_i = 0;
        const b_i = 0;
    
        while (a_i < a.length
               && b_i < b.length)
        {
            if (sorted_a[a_i] === sorted_b[b_i]) {
                common.push(sorted_a[a_i]);
                a_i++;
                b_i++;
            }
            else if(sorted_a[a_i] < sorted_b[b_i]) {
                a_i++;
            }
            else {
                b_i++;
            }
        }
        return common;
    }
    
    intersect_arrays(userGuessesArr, wordLettersArr); // Return Common
    
    


    


//game(words[wordIndex].name);
//console.log(words[wordIndex].name)
   // game(kalho.name);



});