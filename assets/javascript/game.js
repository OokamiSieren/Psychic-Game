//Psychic Game//
// 1. alert "Guess What letter I am thinking?"
// 2. random computer choice
// 3.User guesses onkeyup and save
// 4.Set limit of guesses to 10
// 5.Show what user guesses and store and compare? Update results
// 6. Display Losses and Wins
// 6. Resets after each round

// The array of choices-letters
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// variables for guesses and computer choice with outcomes
var userGuess =[];
var computerChoice;
var startGame = false;
var wins = 0;
var losses = 0;
var guessesLeft = 10;

// start: randon computer choice
document.onkeyup = function(event) {
    var userGuess = event.key.toLowerCase();
    var computerGuess = letters[Math.floor(Math.random() * letters.length)];
    console.log("User Guess:" + userGuess);
}

// Start set up
    function setUp () {
        startGame = true;
        computerChoice = letters[Math.floor(Math.random() * letters.length)];
        guessesLeft = 10;
        userGuess = [];


//User guesses and outcomes
    document.onkeypress = function(event) { var guess = event.key; userGuess.push(guess);
    }  //collecting user guess

if (userGuess === computerChoice ){
    wins(); //if they pick the same letter it is a win
}
else { 
    guessesLeft--;  //if not the same decrease the number of guesses left
}
    if (guessesLeft == 0) {  //if they run out of guesses they lose
        losses();
    }

// functions for the outcomes
    function wins() {
        wins++;
        reset();
    }   // if win  add a win to the score then start the game over

    function losses() {
        losses++;
        reset();
    }    //if lose  add a loss to the score then start the game over 

// resettiing the game

function reset() {
    computerChoice = letters[Math.floor(Math.random() * letters.length)];
    console.log("User Guess:" + userGuess);
    startGame = true;
    guessesLeft = 10;
    userGuess = [];

}

//Changing the DOM

document.getElementById("guessed").innerHTML = "Letters guessed: " + userGuess;

document.getElementById("left").innerHTML = "Guesses Left: " + guessesLeft;

document.getElementById("wins").innerHTML = "Wins: " + wins;

document.getElementById("losses").innerHTML = "Losses: " + losses;
    }