

function add(n1: number, n2: number): number {
    return n1 + n2
}

function printResult(num: number): void {
    console.log(`Result: ${num}`)
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2
    cb(result)
}

printResult(add(10, 5))


// let sum: Function; // <-- too general
let sum: (a: number, b: number) => number

sum = add
// sum = printResult
console.log(typeof sum)
console.log(sum(20, 8))


addAndHandle(30, 6, (res) => {
    console.log(res)
})