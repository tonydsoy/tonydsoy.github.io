window.invertcolors = {};
invertcolors.inverted = false;

function getCookie(cName) {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie);
    const cArr = cDecoded.split('; ');
    let res;
    cArr.forEach(val => {
        if (val.indexOf(name) === 0) res = val.substring(name.length);
    })
    return res
}

invertcolors.invertReminder = function () {
    if (invertcolors.inverted == true) {
        document.querySelector(".middled").style.filter = "invert(1)";
        document.getElementById("bb-invert").style.backdropFilter = "invert(1)";
    } else {
        document.querySelector(".middled").style.filter = "invert(0)";
        document.getElementById("bb-invert").style.backdropFilter = "invert(0)";
    }

}

invertcolors.invert = function () {
    if (invertcolors.inverted == false) {
        document.cookie = "inverted=true";
        invertcolors.inverted = true;
        invertcolors.invertReminder();
    } else {
        document.cookie = "inverted=false";
        invertcolors.inverted = false;
        invertcolors.invertReminder();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (getCookie("inverted") != undefined) {
        const inverted = getCookie("inverted");
        if (inverted == "false") {
            invertcolors.inverted = false;
        } else {
            invertcolors.inverted = true;
        }
    }
    invertcolors.invertReminder();
})
