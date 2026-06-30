window.keyboardcontrols = {}

keyboardcontrols.addTab = function (item) {
    item.setAttribute("tabindex", "0");
    item.addEventListener("keydown", e => {
        if (e.key === "Enter") {
            e.preventDefault();
            item.click();
        }
    })
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".tab-click").forEach(item => {
        keyboardcontrols.addTab(item);
    })
})
