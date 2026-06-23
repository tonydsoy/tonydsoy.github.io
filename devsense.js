document.addEventListener("DOMContentLoaded", async () => {
    if (window.location.href.startsWith("http://127.0.0.1:3000")) {
        console.log("dev welcome");
        const bg = document.getElementsByClassName("body-background")[0];

        const res = await fetch(
            'https://api.github.com/repos/tonydsoy/tonydsoy.github.io/commits/main'
        );

        const commit = await res.json();
        const ncommit = commit.sha.substring(0, 7);

        bg.insertAdjacentHTML("afterbegin", `<span id='devwarn' style='position:fixed;display:block;'>commit: ${ncommit}</span>`);
        document.getElementById("devwarn").addEventListener("click", () => {
            document.getElementById("devwarn").remove();
        })
    }
})
