document.addEventListener("DOMContentLoaded", (event) => {
    let sidebarSections = 0;
    for (;;) {
        const sidebarSeparator = document.getElementById("separator-" + sidebarSections);
        if (sidebarSeparator != undefined) {
            sidebarSeparator.addEventListener("click", function() {
                let sepid = sidebarSeparator.getAttribute("sepid");
                if (!sidebarSeparator.classList.contains("sidebar-separator-closed")) {
                    // close
                    sidebarSeparator.classList.add("sidebar-separator-closed");
                    document.getElementById("separator-" + sepid + "-sec").style.display = "none";
                } else {
                    // open
                    sidebarSeparator.classList.remove("sidebar-separator-closed");
                    document.getElementById("separator-" + sepid + "-sec").style.display = "block";
                }
            })
        } else {
            break;
        }
        sidebarSections += 1;
    }
})