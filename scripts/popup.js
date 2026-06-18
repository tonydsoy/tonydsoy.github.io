// <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=tEptUntPHycvyMgL&amp;list=PLHovnlOusNLiJz3sm0d5i2Evwa2LDLdrg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
let popupactions = document.getElementsByClassName("popup-action");

for (let button of popupactions) {
    button.addEventListener("click", () => {
        let popuptype = "none";
        for (const attr of button.attributes) {
            if (attr.name == "popup-type") popuptype = attr.value;
        }
    })
}
