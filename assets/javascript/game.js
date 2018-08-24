//Instructions:

//Use key events to listen for the letters that your players will type.

//Display the following on the page:

//Press any key to get started!

//Wins: (# of times user guessed the word correctly).

//Number of Guesses Remaining: (# of guesses remaining for the user).

//Letters Already Guessed: (Letters the user has guessed, displayed like `L Z Y H`).

//After the user wins/loses the game should automatically choose another word and make the user play it.




//As always start with variables wins,losses, etc.
var userWins = 0;
var userLosses = 0;
var gameCounter = 1;
var userGuesses = "";
var numOfGuesses = 7;
var wordInstance;
var placeholder = [];
var start = false;

var wordsBank = ["Kobe", "Mamba", "Jordan", "Pippen", "Iverson", "Ginobili", "KareemAbdul"];

//Function to restart the game.
function restart() {
    var num = document.getElementById("num");
    var userGuess = document.getElementById("userGuess");
    var word = document.getElementById("word");
    numOfGuesses = 7;
    userGuesses = "";
    wordInstance = undefined;
    placeholder = [];
    num.innerHTML = "Number of Guesses Left: " + numOfGuesses;
    userGuess.innerHTML = "User Guesses";
    word.innerHTML = "This is the word";
}

//Created a loop so that computer choose a random word.
function displayBlanks() {
    var blanks = document.getElementById("word");
    for (var i = 0; i < wordInstance.length; i++) {
        placeholder.push("_");
    }
    blanks.innerHTML = placeholder.join(" ");
}


//NEED HELP AS SOON AS POSSIBLE.I COULD NOT DO ANYTHING!!!!



