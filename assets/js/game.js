$(document).ready(function(){
    let wins = 0;
    $("#wins").append(wins);
    const letters = ["q", "w" , "e", "r", "t", "y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"]
    let guessesRemaining = 0;
    $("#guesses-remaining").append(guessesRemaining);

    let wordIndex = 2;
   
    const words = ["kalho", "spencer", "degeneres", "obama", "streep"];
    //console.log(words);

    let userGuessesArr = [];
    let wordLettersArr = [];

    function game(word){
        guessesRemaining = 10;
        let wordLength = word.length;
        let imagePath = `./assets/images/${word}.jpg`;
        let wordArr = Array.from(word);
        console.log(wordArr);
        //Forloop for span letters word
        for( i = 0; i < wordLength; i++){
            $("#word").append(`<span id=${word[i]}>`);
        };
        $("#word-image").attr("src", imagePath);
    };

    $( "#start" ).click(function() {
        game(words[wordIndex]);
        $( "#start" ).remove(); 
    });

    $(document).keyup(function(event){
        let userGuess = event.key;
        if (userGuessesArr.includes(userGuess)){
            alert("Already Guessed! please choose another letter")
        }else if (letters.includes(userGuess)){
            userGuessesArr.push(userGuess);
            console.log(userGuessesArr);
            $("#used-letters").append(`<span>${userGuess}</span>`);
            guessesRemaining = 9;
        } 
        if( words[wordIndex].includes(userGuess)){
            $(`#word span#${userGuess}`).text(userGuess);
            wordLettersArr.push(userGuess);
            console.log("word array" + wordLettersArr);
        }
    });




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