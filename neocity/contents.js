function changecontent(changeto) {
    console.log("loading content by name: " + changeto)
    fetch("contents/" + changeto + ".html").then(res => {
        if (!res.ok) {
            document.getElementById("main-content").innerHTML = "Could not find content by that name"
            throw new Error("content not found: " + res.status);
        }
        return res.text();
    }).then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");

        const content = doc.querySelector("#main-content");
        document.getElementById("main-content").innerHTML = content.innerHTML;
        const url = new URL(window.location);
        url.searchParams.set("content",changeto);

        history.pushState({}, "", url);
    })
}

function changepage(changeto) {
    window.location.href = changeto;
}

document.addEventListener("DOMContentLoaded", (event) => {
    const urlsearchparams = new URLSearchParams(window.location.search);
    if (urlsearchparams.get("content") != undefined) {
        changecontent(urlsearchparams.get("content"));
    } else {
        changecontent("homepage");
    }
})