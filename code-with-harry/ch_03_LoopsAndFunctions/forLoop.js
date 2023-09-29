// Program to add first n natural number

let sum = 0;
//let n = prompt("Enter the value of n");
let n = 12;
n = Number.parseInt(n)
for (let i = 0; i < n; i++) {
    sum += (i + 1)
    console.log((i + 1), "+")
}
console.log("sum of first " + n + " natural number is " + sum);


let obj = {
    harry: 90,
    shubh: 45,
    shivika: 23,
    ritika: 89,
    shiv: 56
}

// for in loop
for (let b in obj) {
    console.log("Marks of " + b + "are" + obj[b])
}

/* //for of loop
for (let c of obj) {
    console.log("Marks of " + c + "are" + obj[b])
}
// gives error object is not iterable */

for (let c of "raushan") {
    console.log(c)
}
