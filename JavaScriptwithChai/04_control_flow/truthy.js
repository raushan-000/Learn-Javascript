const userEmail = "abc@gmail.com"
const userEmail1 = ""

if (userEmail) {
    console.log("Got user Email");
}
else {
    console.log("Don't have user email");
}

if (userEmail1) {
    console.log("Got user Email");
}
else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values

// "0", 'false', " ", [], {}, function(){} --> Empty function

// to check array is empty or not
const emptyArr = []


if (emptyArr.length === 0) {
    console.log("array is empty");
}
else {
    console.log("not empty");
}

// to check object is empty or not
const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty");
}
else {
    console.log("object not empty");
}

console.log(false == 0);
console.log(false == '');
console.log(0 == '');

// Nullish Coalescing Operator (??): null undefined

let val1;
let val2;
val1 = 5 ?? 10
val2 = null ?? 10
val3 = undefined ?? 23
val4 = null ?? 10 ?? 24
console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);


// Terniary operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >=80 ? console.log("less than 80") : console.log("more than 80")