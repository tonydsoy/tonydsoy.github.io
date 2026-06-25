window.barrelroll = {}

barrelroll.roll = function () {
    console.log("barrel roll");
    const body = document.getElementsByTagName("body")[0];
    body.style.animation = "barrelroll";
    body.style.animationDuration = "1s";
    body.style.animationIterationCount = "1";
    body.style.animationTimingFunction = "linear";
    setTimeout(() => {
        body.style.animation = "none";
    }, 1000)
}
