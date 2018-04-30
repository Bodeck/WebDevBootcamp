//Guess Game
var secretNumber = 4;
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);
if (guess === secretNumber) {
	alert("You got it!");
} 
else if (guess> secretNumber) {
	alert("Too hight. Guess again!");
}
else {
	alert("Too low. Guess again!");
}