// invert colors
window.invertcolors = {};
invertcolors.inverted = false;

invertcolors.invertReminder = function () {
    if (invertcolors.inverted == true) {
        document.querySelector(".middled").style.filter = "invert(1)";
        document.getElementById("bb-invert").style.backdropFilter = "invert(1)";
        document.getElementById("modifiers").style.filter = "invert(1)";
    } else {
        document.querySelector(".middled").style.filter = "invert(0)";
        document.getElementById("bb-invert").style.backdropFilter = "invert(0)";
        document.getElementById("modifiers").style.filter = "invert(0)";
    }

}

invertcolors.invert = function () {
    if (invertcolors.inverted == false) {
        document.cookie = "invertcolors.inverted=true";
        invertcolors.inverted = true;
        invertcolors.invertReminder();
    } else {
        document.cookie = "invertcolors.inverted=false";
        invertcolors.inverted = false;
        invertcolors.invertReminder();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (getCookie("invertcolors.inverted") != undefined) {
        const inverted = getCookie("invertcolors.inverted");
        if (inverted == "false") {
            invertcolors.inverted = false;
        } else {
            invertcolors.inverted = true;
        }
    } else {
        invertcolors.inverted = false;
        document.cookie = "invertcolors.inverted=false";
    }
    invertcolors.invertReminder();
})

// barrelroll
window.barrelroll = {}

barrelroll.roll = function () {
    console.log("barrel roll");
    const body = document.getElementsByTagName("body")[0];
    body.style.height = "100vh";
    body.style.animation = "barrelroll";
    body.style.animationDuration = "1s";
    body.style.animationIterationCount = "1";
    body.style.animationTimingFunction = "linear";
    setTimeout(() => {
        body.style.animation = "none";
    }, 1000)
}

// weezer
window.weezer = {}

weezer.riff = function () {
    const riff = document.createElement("audio");
    riff.setAttribute("src", "sounds/weezer.mp3");
    riff.play();
    navigator.mediaSession.metadata = new MediaMetadata({
        title: "weezer riff",
        artist: "weezer"
    })
}
