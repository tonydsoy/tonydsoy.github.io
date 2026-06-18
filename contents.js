function runScripts(container) {
    const scripts = container.querySelectorAll("script");

    scripts.forEach(oldScript => {
        const newScript = document.createElement("script");

        // Copy attributes (src, type, defer, etc.)
        for (const attr of oldScript.attributes) {
            newScript.setAttribute(attr.name, attr.value);
        }

        // Inline script contents
        if (!oldScript.src) {
            newScript.textContent = oldScript.textContent;
        }

        oldScript.parentNode.replaceChild(newScript, oldScript);
    });
}

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

        const content = doc.getElementById("main-content");
        const target = document.getElementById("main-content");

        target.innerHTML = content.innerHTML;

        runScripts(target);
        const url = new URL(window.location);
        url.searchParams.set("c", changeto);

        history.pushState({}, "", url);
    })
}

function changepage(changeto) {
    window.location.href = changeto;
}

document.addEventListener("DOMContentLoaded", (event) => {
    const urlsearchparams = new URLSearchParams(window.location.search);
    if (urlsearchparams.get("c") != undefined) {
        changecontent(urlsearchparams.get("c"));
    } else {
        changecontent("homepage");
    }
})

window.addEventListener("popstate", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const contentName = urlParams.get("c") || "homepage";
    changecontent(contentName, false);
});
