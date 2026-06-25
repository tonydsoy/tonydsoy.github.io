// npx serve for some reason includes the .git directory so like.
window.developer = {}

developer.enableDev = async function () {
    if (!window.location.href.startsWith("http://127")) {
        console.log("dev welcome");
        const bg = document.getElementsByClassName("body-background")[0];

        const res = await fetch(
            'https://api.github.com/repos/tonydsoy/tonydsoy.github.io/commits/main'
        );

        const commit = await res.json();
        const ncommit = commit.sha.substring(0, 7);

        bg.insertAdjacentHTML("afterbegin", `<span id='devwarn' style='position:fixed;display:block;'>commit: ${ncommit}</span>`);
    } else {
        console.log("dev welcome");
        const bg = document.getElementsByClassName("body-background")[0];

        const res = await fetch('/.git/refs/heads/main');

        let commit = await res.text();
        commit = commit.substring(0, 7);
        bg.insertAdjacentHTML("afterbegin", `<span id='devwarn' style='position:fixed;display:block;'>commit: ${commit}</span>`)
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    if (window.location.href.startsWith("http://127")) {
        developer.enableDev();
    }
})


