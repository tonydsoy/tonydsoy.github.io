const scoredisplay = document.getElementById("scorehtml")
const button = document.getElementById("buttonhtml")
const results = document.getElementById("results")
const input = document.getElementById("input")
const betcontrols = document.getElementById("betcontrols")

var score = 500
var bet = 0

var lost = '<span class="redtext">you lost your bet</span>'
var win = '<span class="greentext">you doubled your bet</span>'

function setresults(i) {
    if (i==0) {
        results.innerHTML = lost
    }
    if (i==1) {
        results.innerHTML = win
    }
}

addEventListener("DOMContentLoaded", (event) => {
    scoredisplay.innerHTML = score
})

button.addEventListener("click", function() {
    var bet = parseFloat(input.value); // Convert input to a number

    if (isNaN(bet)) {
        results.innerHTML = '<span class="redtext">Please enter a valid number</span>';
        return;
    }

    if (bet != Math.abs(bet)) {
        results.innerHTML = '<span class="redtext">number cannot be negative or zero</span>';
        return;
    }

    // Proceed with your logic here
    // Example:
    if (bet > score) {
        results.innerHTML = "<span class='redtext'>you cannot bet more than your current score</span>"
        return;
    }
    // Simulate a random win or loss
    var outcome = Math.random() < 0.5 ? 0 : 1;

    setresults(outcome);
    if (outcome === 1) {
        score += bet;
    } else {
        score -= bet;
    }
    
    scoredisplay.innerHTML = score;

    if (score <= 0) {
        betcontrols.innerHTML = ""
        results.innerHTML = "you lost the game. press <a href='./'>here</a> to reset page"
    }
});
