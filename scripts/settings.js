window.settings = {};

if (getCookie("musicplayer.autoplay") == undefined) {
    document.cookie = "musicplayer.autoplay=true"
}

settings.autoplay = document.getElementById("autoplay");

if (getCookie("musicplayer.autoplay") == "true") {
    autoplay.checked = true;
}

autoplay.addEventListener("click", () => {
    if (getCookie("musicplayer.autoplay") == "true") {
        document.cookie = "musicplayer.autoplay=false"
    } else {
        document.cookie = "musicplayer.autoplay=true"
    }
})
