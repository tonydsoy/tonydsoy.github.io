var date = new Date();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var yarg = document.querySelector(".yarg")

yarg.innerHTML = months[date.getMonth()] + ", " + date.getDate() + " " + date.getFullYear()

if (months[date.getMonth()] + " " + date.getDate() == "January 23") {
    yarg.innerHTML = "tony's birthday! <a style='cursor:pointer; text-decoration: underline;' onClick='showdate()'>show date</a>"
}

function showdate() {
    yarg.innerHTML = months[date.getMonth()] + ", " + date.getDate() + " " + date.getFullYear()
}

console.log("set <yarg> to date")