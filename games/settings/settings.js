function undoDSA() {
    var a = document.cookie.split(";")
    for (const i of a) {
        if (i.trim() == "dsa=yep!") {
            document.cookie = "dsa=nope!; path=/"
            console.log("undone uplink DSA")
        }
    }
}