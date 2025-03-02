//function fib(l) {
//    const a = 0
//    const b = 1
//    var wasd = {}
///    for (let i = 0; i < l; i++) {
//        wasd.push(a)
//        a = b
//        b = a+b
//    }
//    return wasd
//}
//
//document.getElementById("100").addEventListener("click", function() {
//    print(fib(100))
//});

//thanks chatgpt, for fixing my code

function fib(l) {
    let a = 0;
    let b = 1;
    let fibArray = [];  // Store Fibonacci numbers in an array
    for (let i = 0; i < l; i++) {
        fibArray.push(a);  // Add current Fibonacci number to the array
        let temp = a;
        a = b;
        b = temp + b;
    }
    return fibArray;
}

const report = document.getElementById("report")

document.getElementById("100").addEventListener("click", function() {
    console.log(fib(100));  // Use console.log() instead of print
    report.innerHTML = "check javascript console for report"
});

document.getElementById("10").addEventListener("click", function() {
    console.log(fib(10));  // Use console.log() instead of print
    report.innerHTML = "check javascript console for report"
});

document.getElementById("1000").addEventListener("click", function() {
    console.log(fib(1000));  // Use console.log() instead of print
    report.innerHTML = "check javascript console for report"
});