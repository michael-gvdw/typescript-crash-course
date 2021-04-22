function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result: " + num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
printResult(add(10, 5));
// let sum: Function; // <-- too general
var sum;
sum = add;
// sum = printResult
console.log(typeof sum);
console.log(sum(20, 8));
addAndHandle(30, 6, function (res) {
    console.log(res);
});
