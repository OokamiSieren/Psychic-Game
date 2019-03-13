//alphabet array
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

//variables for answer, wins, losses, guessesLeft and guesses
var answer;
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guesses = [];


//computer chooses a letter
var answer = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(answer)

//user guesses the letter
document.onkeypress = function(event) {
var userGuess = event.key;
guesses.push(userGuess);

if (userGuess === answer) {
    win();
        
} else {
    guessesLeft--;
}

if (guessesLeft == 0) {
    loss();
    }

//function if user wins
function win() {
	wins++;
	reset();
}

//function if user losses
function loss() {
	losses++;
	reset();
}

//game reset
function reset() {
	answer = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(answer);
	guessesLeft = 9;
	guesses =[];
}

//displays in html
document.getElementById('wins').innerHTML = "Wins: " + wins;
document.getElementById('losses').innerHTML = "Losses: " + losses;
document.getElementById('guessesLeft').innerHTML = "Guesses Left: " + guessesLeft;
document.getElementById('guesses').innerHTML = "Your guesses so far: " + guesses;
}