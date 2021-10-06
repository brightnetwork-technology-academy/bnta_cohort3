secretNumber = 5;

userGuess = 5;

userName = "Colin"

if (userName) {
    console.log("Welcome to the game " + userName + "!");
} else {
    console.log("You didn't enter a name!");
}

if (userGuess === secretNumber) {
    console.log("Congratulations, you win!");
} else if (userGuess > secretNumber){
    console.log("Unlucky, your guess was too high.");
} else {
    console.log("Unlucky, your guess was too low.");
}