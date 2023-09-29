let a = 1;
let b = 2;
let c = 3;

console.log("One plus Average of a and b is", 1 + (a + b) / 2)
console.log("Done")
console.log("One plus Average of b and c is", 1 + (b + c) / 2)
console.log("Done")
console.log("One plus Average of c and a is", 1 + (c + a) / 2)
console.log("Done")

//using function
console.log("using function")
function onePlusAvg(x, y) {
    console.log("done")
    return 1 + (x + y) / 2
}
console.log("One plus Average of a and b is", onePlusAvg(a, b))

console.log("One plus Average of b and c is", onePlusAvg(b, c))

console.log("One plus Average of c and a is", onePlusAvg(c, a));

// arrow function
const sum = (p, q) => {
    return p + q;
}
console.log("sum of 9 and 7 is ", sum(9, 7))

// function without argument
const hello = () => {
    console.log("hello")
}
hello();

// function without argument with return
const hello1 = () => {
    console.log("hello1")
    return "hii"
}
hello1();
let r = hello1();
console.log(r)