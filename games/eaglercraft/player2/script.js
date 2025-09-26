const drops = document.getElementById("drops")
const versionSelect = document.getElementById("versionSelect")
let SelectedVersion = "eagler12"

// init
window.addEventListener("DOMContentLoaded", function() {
    for (const i of drops.children) {
        i.addEventListener("click", function() {
            const EaglerVerison = i.getAttribute("eagler")
            console.log(EaglerVerison)
            SelectedVersion = EaglerVerison
            versionSelect.textContent = i.textContent
        })
    }
})

const play = document.getElementById("play")

play.addEventListener("click", function() {
    window.location.href = `${window.location.pathname}/${SelectedVersion}`;
});