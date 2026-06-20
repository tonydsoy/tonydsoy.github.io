popupactions = document.getElementsByClassName("popup-action");

for (let button of popupactions) {
    button.addEventListener("click", () => {
        const body = document.getElementsByTagName("body")[0];
        body.insertAdjacentHTML(
            "afterbegin",
            "<div class='popup-bg' id='popup-bg'><img id='popup-close' src='graphics/cancel.png'><div id='popup-content'></div></div>"
        );
        if (invertcolors.inverted == true) {
            document.getElementById("popup-bg").style.backdropFilter = "invert(1)";
            document.getElementById("popup-bg").style.filter = "invert(1)";
        }

        let popuptype = "none";
        let popupdata = "none";
        for (const attr of button.attributes) {
            if (attr.name == "popup-type") popuptype = attr.value;
            if (attr.name == "popup-data") popupdata = attr.value;
        }
        if (popuptype == "data") {
            document.getElementById("popup-content").innerHTML = popupdata;
        }
        document.getElementById("popup-close").addEventListener("click", () => {
            document.getElementById("popup-bg").remove();
        })
    })
}
