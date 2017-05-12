// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
var maximumTries = 10;
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var win = 0;
var losses = 0;
var guesses = 10;
var guessesLeft = 10;
var win = document.getElementById("win");
var lose = document.getElementById("lose");
var guessesLeft = document.getElementById("guessesLeft");

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

    // Determines which key was pressed
    var userGuess = event.key.toUpperCase()];

// Randomly chooses a choice from the options array. This is the Computer's guess.
var computerGuess = options[Math.floor(Math.random() * options.length)];


if (userGuess == "A" && computerGuess == "A") {
    win++;
    win.textContent = win;
    $("#guessesLeft").click(function() {
        $("#guessesLeft")[0].reset();
    });

else if (userGuess == "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" && computerGuess == "A") {
    losses++;
    lose.textContent = losses;
    guessesLeft-1;






};
