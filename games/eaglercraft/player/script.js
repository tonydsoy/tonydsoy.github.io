const play = document.getElementById("play")
const version = document.getElementById("c12")
//version
const a = "none"

play.addEventListener("click", function () {
    const version = document.getElementById("c12")
    if (version.checked == true) {
        window.location.href = "./eagler"
    }
    if (version.checked == false) {
        window.location.href = "./eagler12"
    }
})