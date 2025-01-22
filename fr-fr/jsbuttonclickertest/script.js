console.log("welcome to the console! because this is my first project, there isn't much to do here.");
console.log("functions: buttonclicked(), resetscore()");
var score = 0;
var clickmultiplier = 1
const scorehtml = document.getElementById('scores');
const superscore = document.getElementById('superscore');

function buttonclicked() {
    score = score + clickmultiplier;
    scorehtml.innerHTML = score;
};

function resetscore() {
    score = 0;
    clickmultiplier = 1;
    scorehtml.innerHTML = score;
    superscore.innerHTML = clickmultiplier;
}

function superbutton() {
    if (score >= 100) {
        clickmultiplier = clickmultiplier + 1;
        score = score - 100;
        scorehtml.innerHTML = score;
        superscore.innerHTML = clickmultiplier;
    }
}