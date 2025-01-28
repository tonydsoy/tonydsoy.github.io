let cookie = document.cookie
document.getElementById("text").innerHTML = document.cookie

function set() {
    document.cookie = document.getElementById("input").value
}

function get() {
    location.reload()
}