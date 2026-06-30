document.addEventListener("DOMContentLoaded", () => {
    const sbs = document.getElementsByClassName("sidebar-separator");
    for (const sidebarseparator of sbs) {
        const neighbour = sidebarseparator.nextElementSibling;
        sidebarseparator.classList.add("sidebar-separator-closed");
        neighbour.style.display = "none";
        for (const child of neighbour.children) {
            if (!child.hasAttribute("no-tab")) {
                keyboardcontrols.addTab(child);
            }
        }
        sidebarseparator.addEventListener("click", () => {
            if (sidebarseparator.classList.contains("sidebar-separator-closed")) {
                sidebarseparator.classList.remove("sidebar-separator-closed");
                neighbour.style.display = "block";
            } else {
                sidebarseparator.classList.add("sidebar-separator-closed");
                neighbour.style.display = "none";
            }
        })
    }
})
