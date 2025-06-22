const imgfs = document.getElementById("fullscreen")
const iframe = document.getElementById("iframe")
const sec = document.getElementById("sec")
const text = document.getElementById("text")
const link = document.getElementById("link")
const body = document.getElementById("body")

imgfs.addEventListener("click", function () {
    text.innerHTML = ""
    sec.style.margin = 0
    sec.style.padding = 0
    sec.style.borderRadius = 0
    iframe.style.width = "100vw"
    iframe.style.height = "100vh"
    iframe.style.padding = 0
    iframe.style.margin=0
    text.style.margin = 0
    text.style.padding = 0
    imgfs.remove()
    link.remove()
    body.style.margin = 0
    body.style.padding = 0
    body.style.overflow = "hidden"
})