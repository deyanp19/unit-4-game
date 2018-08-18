// Create a variable to hold a random number between 1 and 10
var randomNum = Math.floor((Math.random() * 10) + 1);

// Create a variable called el to hold the element whose id attribute has a value of info
var el = document.getElementsById('gameNumber');
// Write the number into that element
el.innerHTML = '<h2>random number</h2><p>' + randomNum + '</p>';

$(document).ready(function() {

    // Here we use jQuery to select the header with "click-me" as its ID.
    // Notice I have the click, #click-me, and then the function
    // So action, id|class|element, function
    // And so whenever it is clicked...
    $("body").on("click", "div.gameNumber", function() {
      alert("I've been clicked!");
    });

  });
