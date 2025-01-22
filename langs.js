var cookie = document.cookie;

// thanks chatgpt for getcookie()

function getCookie(name) {
    let cookieArr = document.cookie.split(";");

    for (let i = 0; i < cookieArr.length; i++) {
        let cookie = cookieArr[i].trim();
        if (cookie.startsWith(name + "=")) {
            return cookie.substring(name.length + 1);  // Return the value of the cookie
        }
    }
    return null;  // Return null if the cookie doesn't exist
}

if (getCookie("lang") == "fr") {
    window.location.href="/fr-fr/"
}