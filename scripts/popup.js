let popupactions = document.getElementsByClassName("popup-action");
console.log("sup");
for (let button of popupactions) {
    button.addEventListener("click", () => {
        const body = document.getElementsByTagName("body")[0];
        body.insertAdjacentHTML(
            "afterbegin",
            "<div class='popup-bg'><img id='popup-close' src='graphics/cancel.png'><div id='popup-content'></div></div>"
        );

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
            body.getElementsByClassName("popup-bg")[0].remove();
        })
    })
}
