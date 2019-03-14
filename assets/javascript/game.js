//Psychic Game//
// 1. alert "Guess What letter I am thinking?"
// 2. random computer choice
// 3.User guesses onkeyup and save
// 4.Set limit of guesses to 10
// 5.Show what user guesses and store and compare? Update results
// 6. Resets after each round
// 7. Display Losses and Wins

// The array of choices-letters
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// variables for guesses and computer choice with outcomes
var userGuess =[];
var computerChoice;
var wins = 0;
var losses = 0;
var guessesLeft = 10;

// start: randon computer choice
    var computerChoice = letters[Math.floor(Math.random() * letters.length)];
    console.log(computerChoice);


//User guesses and outcomes
 document.onkeypress = function(event) { var guess = event.key.toLocaleLowerCase(); userGuess.push(guess); // allowing capslock letters to work 
     
    console.log("User Guess:" + userGuess);
    //collecting user guess

if (guess === computerChoice ){
    win(); //if they pick the same letter it is a win
}
else { 
    guessesLeft--;  //if not the same decrease the number of guesses left
}
    if (guessesLeft == 0) {  //if they run out of guesses they lose
        loss();
    }

// functions for the outcomes
    function win() {
        wins++;
        reset();
    }   // if win  add a win to the score then start the game over

    function loss() {
        losses++;
        reset();
    }    //if lose  add a loss to the score then start the game over 

// resettiing the game

function reset() {
    computerChoice = letters[Math.floor(Math.random() * letters.length)];
    console.log(computerChoice);
    guessesLeft = 10;
    userGuess = [];

}

//Changing the DOM

document.getElementById("guessed").innerHTML = "Letters guessed: " + userGuess;

document.getElementById("left").innerHTML = "Guesses Left: " + guessesLeft;

document.getElementById("wins").innerHTML = "Wins: " + wins;

document.getElementById("losses").innerHTML = "Losses: " + losses;

}  

// I used and example and tried to make it my own//