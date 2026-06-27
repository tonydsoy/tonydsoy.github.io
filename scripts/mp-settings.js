document.addEventListener("DOMContentLoaded", () => {
    const autoplaybox = document.getElementById("autoplay-box");
    let checkbox = getCookie("musicplayer.autoplay");
    if (checkbox == "true") {
        checkbox = true;
    } else {
        checkbox = false;
    }
    autoplaybox.checked = checkbox;
    autoplaybox.addEventListener("click", () => {
        if (checkbox == true) {
            document.cookie = "musicplayer.autoplay=false;path=/";
            checkbox = false;
        } else {
            document.cookie = "musicplayer.autoplay=true;path=/";
            checkbox = true;
        }
    })
})
