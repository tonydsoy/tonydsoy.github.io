window.contents = {};

contents.runScripts = function (container) {
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

contents.afterloadcontents = function (container) {
    // popups
    popupactions = container.getElementsByClassName("popup-action");

    for (let button of popupactions) {
        button.addEventListener("click", () => {
            const body = document.getElementsByTagName("body")[0];
            body.insertAdjacentHTML(
                "afterbegin",
                "<div class='popup-bg' id='popup-bg'><div class='contain-popup-close'><img id='popup-close' src='graphics/cancel.png'></div><div id='popup-content'></div></div>"
            );
            mobilesidebar.closesidebar();
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
                if (document.getElementById("popup-content").getElementsByTagName("iframe") != []) {
                    document.getElementById("popup-content").style.minHeight = document.getElementById("popup-content").getAttribute("height") + "px";
                }
            }
            document.getElementById("popup-close").addEventListener("click", () => {
                document.getElementById("popup-bg").remove();
            })
        })
    }
}

contents.fixhref = function (container) {
    const hrefs = container.querySelectorAll("a");
    hrefs.forEach(href => {
        if (href.getAttribute("href") != undefined) {
            if (href.getAttribute("href").startsWith("?c=")) {
                let oldhref = href.getAttribute("href");
                href.removeAttribute("href");
                href.setAttribute("onclick", "changecontent('" + oldhref.slice(3) + "')");
            } else {
                href.setAttribute("target", "_blank");
            }
        }
    })
}

function changecontent(changeto) {
    mobilesidebar.closesidebar();
    console.log("loading content by name: " + changeto)
    fetch("contents/" + changeto + ".html").then(res => {
        if (!res.ok) {
            if (changeto != "404") {
                changecontent("404");
            } else {
                document.getElementById("main-content").innerHTML = "404 page failed to load"
            }
            throw new Error("content not found: " + res.status);
        }
        return res.text();
    }).then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");

        const content = doc.getElementById("main-content");
        const target = document.getElementById("main-content");

        target.innerHTML = content.innerHTML;

        contents.runScripts(target);
        contents.fixhref(target);
        const url = new URL(window.location);
        url.searchParams.set("c", changeto);

        history.pushState({}, "", url);

        contents.afterloadcontents(target);

    })
}

function changepage(changeto) {
    window.location.href = changeto;
}

document.addEventListener("DOMContentLoaded", () => {
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
