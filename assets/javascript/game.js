// In this project will load the game by getting the DOM element "document" loaded with the use of ready method and the use of immediately executing the code inside the property of the method "ready". This is achieved by wrapping it in ().
$(document).ready(function() {

  /*Plan:
1.Create variables that will store the numbers that need to be displayed: score of the player, the random number, the wins and loses points
2.Create function that randomizes a number produced by clicking on a crystal
3.Create function that randomizes a number loaded at the begining of the game
4. Function that resets the game
5. Function that updates the page  throughout the game.
5.1. Needs to keep the score and display the win/loose alert
6. Funciton that will keep track of the guessed number by the player
7. Read the onclick events useing jQuery and control the wins logic
  */

//1.

var sumCrystals = 0;
var randomNum = randomNumGenerated();
var win = 0;
var losses = 0;
var crystals;

//2.
function randomNumAllCrystals() {
  // this func will simply return and stop exexution
  return {
    // all the crystals are as objects and will generate points corresponding
    yellow: {
      points: Math.floor(Math.random() * 12) + 1
    },
    red: {
      points: Math.floor(Math.random() * 12) + 1
    },
    blue: {
      points: Math.floor(Math.random() * 12) + 1
    },
    brown: {
      points: Math.floor(Math.random() * 12) + 1
    }
  }//return ends
}// randomNumAllCrystals ends

//3. 
function randomNumGenerated() {
  return Math.floor(Math.random() * 102 +19);
}

//4.
function resetGame() {
  sumCrystals = 0;
  crystals = randomNumAllCrystals() // executing the function that gets random number to all crystals
  randomNum = randomNumGenerated(); // executing the function ln 44
  // printing to the page the fandom number
  $("#gameGoal").text(randomNum);
}
//5.
function updatePage(didPlayerWin) {
  $("playerWinScore").empty();
  // checking for win
  if (didPlayerWin === true) {
    alert("You win!");
    resetGame();// resets the game because it is done
    renderMatchingNumber();
  }
  else if (didPlayerWin === false) {
    alert("You lost!");
    resetGame();
    renderMatchingNumber();
  }
}

//6.
function renderMatchingNumber() {
  var scoreNumDiv = $("<div id='score-number'>").text(sumCrystals);
  $("#yourScore").html();
  $("#yourScore").html(scoreNumDiv);
}

//7.
$(".one").on("click", function(event) {
renderMatchingNumber();
if (sumCrystals === randomNum) {
  wins++;
  resetGame();
  updatePage(true);
} 
else if (sumCrystals > randomNum) {
  losses++;
  resetGame();
  updatePage(false);
}
});

  });// loading the doc ready ends
