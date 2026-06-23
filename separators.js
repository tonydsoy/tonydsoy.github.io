document.addEventListener("DOMContentLoaded", () => {
    const sbs = document.getElementsByClassName("sidebar-separator");
    for (const sidebarseparator of sbs) {
        const neighbour = sidebarseparator.nextElementSibling;
        sidebarseparator.classList.add("sidebar-separator-closed");
        neighbour.style.display = "none"
        sidebarseparator.addEventListener("click", () => {
            if (sidebarseparator.classList.contains("sidebar-separator-closed")) {
                sidebarseparator.classList.remove("sidebar-separator-closed");
                neighbour.style.display = "block"
            } else {
                sidebarseparator.classList.add("sidebar-separator-closed");
                neighbour.style.display = "none";
            }
        })
    }
})
