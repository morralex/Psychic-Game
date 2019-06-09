//first lets build the alphabet array

var alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

//next lets pull a random character from the array for a computer guess

var comGuess = alpha[Math.floor(Math.random()*alpha.length)];

console.log(comGuess)

//we need a way for the user to interact with the game

document.getElementById("guesses").onkeyup = function() {myFunction()};

function myFunction() {
  var x = document.getElementById("guesses");