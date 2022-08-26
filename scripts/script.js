

console.log("Hello World!");

/* Model */
var model = {
    theNumber: -1,
    guesses: 0,
    lastGuess: -1
}

/* Model Init */
function initModel () {
    model.theNumber = Math.floor(Math.random() * 100) + 1
    model.guesses = 0
    model.lastGuess = -1
}

var events = {
    NONE: -2,
    INVALID: -1,
    CORRECT: 0,
    TOO_HIGH: 1,
    TOO_LOW: 2
}
function guess (new_guess) {
    model.guesses++;
    model.lastGuess = new_guess;

    if (new_guess == model.theNumber) {
      return events.CORRECT;
    }
  
    if (new_guess < model.theNumber) {
      return events.TOO_LOW;
    }
  
    if (new_guess > model.theNumber) {
      return events.TOO_HIGH;
    }
}

/* View Interface */
var gameOut = document.getElementById('#output')
var gameIn = document.getElementById("#gameInput")
var gameBtn = document.getElementById("#gameBtn")

function update (model, event) {
    switch (event) {
        case events.NONE:
            gameOut.innerHTML += "Type a number between 1 and 100!<br>";
            break;
        case events.INVALID:
            gameOut.innerHTML += "That wasn't a number...<br>";
            break;
        case events.CORRECT:
            gameOut.innerHTML += "You got it in " + model.guesses + " tries!<br>";
            break;
        case events.TOO_HIGH:
            gameOut.innerHTML += model.lastGuess + " was too high...<br>"
            break;
        case events.TOO_LOW:
            gameOut.innerHTML += model.lastGuess + " was too low...<br>"
            break;
    }
}

/* Controls */
gameBtn.addEventListener("click", () => {
  var inputText = gameIn.value;
  var result;

  while (1) {
    /* Check for empty data */
    if (inputText == "") {
        result = events.NONE;
        break;
    } 
    
    /* Check for bad data */
    if (isNaN(inputText)) {
        result = events.INVALID;
        break;
    }

    /* Test the Result */
    result = guess(inputText);
    break;
  }

  /* Update the display */
  update(model, result);
});


/* Main */
initModel();


x=24;
while (x>=0) {
   console.log(x);
   x = x - 1;
}