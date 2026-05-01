function getCookie(name) {
    const value = "; " +document.cookie;
    const parts = value.split("; "+name+"=");
    if (parts.length === 2) return parts.pop().split(';').shift();
}

const tssearchparams = new URLSearchParams(window.location.search);
if (tssearchparams.get("stay") != undefined) {
    document.cookie = "redirect=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
} else {
    if (getCookie("redirect") != undefined) {
        window.location.href = "/neocity/";
    }
}

// its the least i could do.
/*
if (tssearchparams.get("nstoken") != undefined) {
    if (tssearchparams.get("ignorens") == undefined) { // and of course a workaround, just for me!
        window.location.href = "/print2.html?=>:3";
    }
}
*/
document.addEventListener("DOMContentLoaded", (event) => {
    const surebutton = document.getElementById("siterds-sure");
    const ignorebutton = document.getElementById("siterds-ignore");
    const siterdsalert = document.getElementById("siterds-alert");

    surebutton.addEventListener("click", function(){
        document.cookie = "redirect=true;path=/;"
        window.location.href = "/neocity/";
    });

    ignorebutton.addEventListener("click", function() {
        siterdsalert.style.display = "none";
    });
})
