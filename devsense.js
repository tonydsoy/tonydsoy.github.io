document.addEventListener("DOMContentLoaded", () => {
    if (window.location.href.startsWith("http://127.0.0.1:3000")) {
        console.log("dev welcome");
        const bg = document.getElementsByClassName("body-background")[0];
        bg.insertAdjacentHTML("afterbegin", "<span id='devwarn' style='position:fixed;display:block;'>developer</span>");
        document.getElementById("devwarn").addEventListener("click", () => {
            document.getElementById("devwarn").remove();
        })
    }
})
