// A JavaScript function is a block of code designed to perform a particular task.

// A JavaScript function is executed when "something" invokes it (calls it).

// Function to compute the product of p1 and p2
function myFunction(p1, p2) {
  return p1 * p2;
}
let result = myFunction(5, 3);
console.log(result);

/*
JavaScript Function Syntax
A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

The parentheses may include parameter names separated by commas:
(parameter1, parameter2, ...)

The code to be executed, by the function, is placed inside curly brackets: {}

function name(parameter1, parameter2, parameter3) {
  // code to be executed
}

Function parameters are listed inside the parentheses () in the function definition.

Function arguments are the values received by the function when it is invoked.

Inside the function, the arguments (the parameters) behave as local variables.
*/

/*
Function Return
When JavaScript reaches a return statement, the function will stop executing.

If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.

Functions often compute a return value. The return value is "returned" back to the "caller":

*/

//Calculate the product of two numbers, and return the result:

// Function is called, the return value will end up in x
let x = myFunction(4, 8);
console.log(x);
function myFunction(a, b) {
  // Function returns the product of a and b
  return a * b;
}

// The () operator invokes (calls) the function:

function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}

let value = toCelsius(67);
console.log(value);

// Accessing a function with incorrect parameters can return an incorrect answer:

function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}

let value1 = toCelsius();
console.log(value1);

// Accessing a function without () returns the function and not the function result:

function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}

let value2 = toCelsius;
console.log(value2);

// from above example " toCelsius " refers to the function object, and " toCelsius() "" refers to the function result.

//  Functions can be used the same way as you use variables, in all types of formulas, assignments, and calculations.

// Instead of using a variable to store the return value of a function:

let t = toCelsius(77);
let text = "The temperature is " + t + " Celsius";
console.log(text);
// we can use the function directly, as a variable value:

let temp = "the temperature is " + toCelsius(97) + " Celsius";
console.log(temp);


/*
Variables declared within a JavaScript function, become LOCAL to the function.

Local variables can only be accessed from within the function.
*/

// code here can NOT use carName
let text1 = "Outside: " + typeof carName;
console.log(text1);
function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
  let text1 = "Inside: " + typeof carName + " " + carName;
  console.log(text1);

}

// code here can NOT use carName
let text3 = "Outside: " + typeof carName;