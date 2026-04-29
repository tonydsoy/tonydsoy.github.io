function runScripts(container) {
    const scripts = container.querySelectorAll("script");
    scripts.forEach(oldScript => {
        const newScript = document.createElement("script");

        for (const attr of oldScript.attributes) {
            newScript.setAttribute(attr.name, attr.value);
        }

        newScript.textContent = oldScript.textContent;

        oldScript.replaceWith(newScript);
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
        url.searchParams.set("c",changeto);

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
