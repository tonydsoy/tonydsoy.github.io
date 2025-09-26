const drops = document.getElementById("drops")
const versionSelect = document.getElementById("versionSelect")
const SelectedVersion = "eagler12"

// init
window.addEventListener("DOMContentLoaded", function() {
    for (const i of drops.children) {
        i.addEventListener("click",function() {
            const EaglerVerison = i.getAttribute("eagler")
            console.log(EaglerVerison)
            SelectedVersion = EaglerVerison
            versionSelect.innerHTML = i.innerHTML
        })
    }
})