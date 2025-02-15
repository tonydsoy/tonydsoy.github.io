var a = document.cookie.split(";")
for (const i of a) {
    if (i.trim() == "lang=fr") {
        document.location.href = "fr-fr/"
    }
}