const fruits = ["banana", "apple", "orange"];
const a = [7, "raushan", true]; // can contain different types

console.log(fruits);
console.log(a);

// accessing values
let numbers = [a, 3, 4, 5];
console.log(numbers[0]);
console.log(numbers[3]);

// finding the length

console.log(numbers.length);

// changing the values
let num = [3, 5, 6, 8, 9];
console.log(num);
num[2] = 10; // array are mutable , array can be changed
num[3] = "asf";
console.log(num);

// In javascript, aarays are objects
console.log(typeof num);

// Array can hold many values inder a single name

//array method
// to string --> convert an array to a string of comma separated values

let n = [1, 5, 6, 7, 8, 4];
console.log(n);
console.log(n.toString());

// join --> join all array element using separator

console.log(n.join());
console.log(n.join("-"));

// pop --> removes last element from array and return it

console.log(n.pop());

// push --> add a new element at the end of array and returns new array length
console.log(n.push(a));
console.log(n);

let z = [1, 2, 3, 4, 5];
console.log(z.push("q"));
console.log(z);

// shift --> removes first element and returns it

console.log(z.shift());
console.log(z);

// unshift --> add element to begining and return new array length
console.log(z.unshift("x"));
console.log(z);

// delete --> array element can be deleted using delete operator

let d = [1, 2, 3, 4, 5, 6, 7];
//console.log(delete d[2])
let g = delete d[1];
console.log(g);

// concat --> used to join arrays tto given arrays

let a1 = [1, 2, 3];
let a2 = [4, 5, 6];
let a3 = [7, 8, 9];

let a4 = a1.concat(a2, a3);
console.log(a4);
let a5 = a1 + a2 + a3;
console.log("using + :" + a5);

// sort --> sort array alphabetically, modifies original array

let array = ["b", "g", "a", "x", "m", "z", "r", "f"];
console.log(array.sort());

// splice --> used to add new item to array,return deleted item, modifies original array

const number = [1, 2, 3, 4, 56, 7, 8];
console.log(number.splice(2, 3, 23, 24));
console.log(number);

// slice --> slice out piece from array ,creates new array

const num1 = [1, 2, 3, 4, 5, 6, 7];
console.log(num1.slice(1, 4));
console.log(num1.slice(3));
console.log(num1);

// reverse --> reverse element in source array

let r = ["a", "b", "c", "d", "e", "f", "g"];
console.log(r.reverse());
console.log(r);

// Looping through array 

// reduce method --> reduce an array to a single value
function add(a, b) {
    return a + b;
}
const x = [1, 2, 3, 4, 5];

// using function in syntax
let sum = x.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log(sum);
// using function define outside
let sum1 = x.reduce(add);
console.log(sum1);

// Array.from --> used to create array from any other object

// creating array from a string
const str = "Hello";
const strArray = Array.from(str);
console.log(strArray);

// creating an array from an iterable like onject

const iterableLike = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
const arr = Array.from(iterableLike);
console.log(arr);

// Mapping element while creating array

const numbers1 = [2, 3, 4];
const squared = Array.from(numbers1, x => x * x);
console.log(squared);