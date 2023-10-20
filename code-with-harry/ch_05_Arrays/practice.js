// create an array of numbers and take input from the user to add numbers to this array
/*
let number = [1,2,3,4,5];
let num = prompt("enter number to add ");
// num = Number.parseInt(num); // change string to number
number.push(num);
console.log(number);

// keep adding number to the array in 1 until 0 is added to the array
let number1 = [1,2,3,4,5];
let num1;
do{
num = prompt("enter number to add ");
num = Number.parseInt(num); // change string to number
number.push(num);}
    while(num!=0);
console.log(number);
*/
// filter for number divisible by 10 from given array
// using arrow function
let number3 = [1, 20, 30, 45, 67, 80, 110]
let f = number3.filter((x) => {
    return x % 10 == 0;
})

console.log(f);

// using function in console

let number4 = [2, 30, 40, 50, 60, 45, 67, 89]
console.log(number4.filter(function (a) {
    return a % 10 == 0;
}))

// using normal function
let number5 = [2, 30, 40, 50, 60, 45, 67, 89,200]
let f1 = (number5.filter(function (a) {
    return a % 10 == 0;
}))

console.log(f1);

// create an array of square of given numbers

let number = [1,2,3,4,5,6,7]
let squared  = number.map(function(x){
    return x*x;
})
console.log(squared);
console.log(number);

// using reduce calculate factorial of number

let factorial1 = [3,4,5]
function factorial(x1,x2){
return x1*x2;
}
console.log(factorial1.reduce(factorial));
// using arrow function
console.log(factorial1.reduce((x1,x2)=>{
    return x1*x2;
}))
