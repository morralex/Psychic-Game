//first lets build the alphabet array

var alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//create variables that will hold numbers of wins losses etc

var wins = 0;
var losses = 0;
var guessesLeft = 7;
var ltrGuessed = [];

// Create variables that hold references to the places in the HTML where we want to display things.

var winsText = document.getElementById("wins");
var lossText = document.getElementById("losses");
var guessesLeftText = document.getElementById("left");
var userChoiceText = document.getElementById("guesses");

//next lets pull a random character from the array for a computer guess

var comGuess = alpha[Math.floor(Math.random() * alpha.length)];

console.log(comGuess);

//we need a function that is ran when the user makes a guess

document.onkeyup = function (event) {

    var userGuess = event.key;
    ltrGuessed.push(userGuess);
    console.log(userGuess)

    if ((userGuess === comGuess) ) {
        wins++;
        winsText.innerHTML = "Wins: " + wins;
    } else if ((userGuess !== comGuess[0]) && (guessesLeft > 0)) {
        guessesLeft = guessesLeft - 1;
    }
    else {
        losses++;

        //Displaying the changing var's

        
    }
         




    















}