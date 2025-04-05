const play = document.getElementById("PLAY")
const modes = document.getElementById("MODES")  
const settings = document.getElementById("SETTINGS")
const premenu = document.getElementById("PREMENU")
const quit = document.getElementById("QUIT")
const cont = document.getElementById("cont")
const no = document.getElementById("no")
const booms = new Audio("boom.mp3")

play.addEventListener("click", function() {
    document.location.href = "https://www.youtube.com/@tonydsoy"
})

function boom() {
    booms.play()
    setTimeout(() => {}, 50);
    no.style.display = "block"
    no.style.animationName = "funny"
    setTimeout(() => {
        console.log("After 4 seconds");
        no.style.display = "none"
    }, 3000);
}

modes.addEventListener("click", function() {
    boom()
})

settings.addEventListener("click", function() {
    boom()
})

quit.addEventListener("click", function() {
    document.location.href = "/"
})

premenu.addEventListener("click", function() {
    document.location.href = "pm1.html"
})

document.addEventListener("DOMContentLoaded", function () {
    const warn = document.getElementById("warn");
    if (warn && window.innerWidth !== 1366) {
        warn.style.display = "block";
    }
});


cont.addEventListener("click", function() {
    warn.style.display = "none"
})