/*
JavaScript has 8 Datatypes
1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object

The Object Datatype
The object data type can contain:

1. An object
2. An array
3. A date
*/

// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = { firstName: "John", lastName: "Doe" };

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");

{
    // JavaScript has dynamic types. This means that the same variable can be used to hold different data types:
    let x;       // Now x is undefined
    x = 5;       // Now x is a Number
    x = "John";  // Now x is a String

}

{
    // Strings are written with quotes. You can use single or double quotes:
    // Using double quotes:
    let carName1 = "Volvo XC60";

    // Using single quotes:
    let carName2 = 'Volvo XC60';

    // You can use quotes inside a string, as long as they don't match the quotes surrounding the string:
    // Single quote inside double quotes:
    let answer1 = "It's alright";

    // Single quotes inside double quotes:
    let answer2 = "He is called 'Johnny'";

    // Double quotes inside single quotes:
    let answer3 = 'He is called "Johnny"';
}

{
    // All JavaScript numbers are stored as decimal numbers (floating point).

    // Numbers can be written with, or without decimals:

    // With decimals:
    let x1 = 34.00;

    // Without decimals:
    let x2 = 34;
}

{
    // Exponential Notation
    // Extra large or extra small numbers can be written with scientific (exponential) notation:
    let y = 123e5;    // 12300000
    let z = 123e-5;   // 0.00123

}

{
    // JavaScript BigInt
    // All JavaScript numbers are stored in a a 64-bit floating-point format.

    /* JavaScript BigInt is a new datatype (ES2020) that can be used to store integer values that
     are too big to be represented by a normal JavaScript Number. */
    let x = BigInt("123456789012345678901234567890");
}

{
    // JavaScript Booleans
    // Booleans can only have two values: true or false.
    let x = 5;
    let y = 5;
    let z = 6;

    console.log(x == y, x == z);
}

{
    // JavaScript Arrays
    // JavaScript arrays are written with square brackets.
    // Array items are separated by commas.

    const cars = ['saab', 'volvo', 'BMW'];
}

{
    //     JavaScript Objects
    // JavaScript objects are written with curly braces {}.

    // Object properties are written as name:value pairs, separated by commas.
    const person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
}

{
    //     console.log(typeof Operator
    // You can use the JavaScript operator to find the type of a JavaScript variable.

    // The console.log(typeof operator r);eturns the type of a variable or an expression:
    console.log(typeof "");     // Returns "string"
    console.log(typeof "John");     // Returns "string"
    console.log(typeof "John Doe");     // Returns "string"
    console.log(typeof 0);     // Returns "number"
    console.log(typeof 314);     // Returns "number"
    console.log(typeof 3.14);     // Returns "number"
    console.log(typeof (3));     // Returns "number"
    console.log(typeof (3 + 4));     // Returns "number"
}

{
    // Undefined
    // In JavaScript, a variable without a value, has the value undefined. The type is also undefined.
    let car;    // Value is undefined, type is undefined
    console.log(car, typeof car);

    // Any variable can be emptied, by setting the value to undefined. The type will also be undefined.
    car = undefined;    // Value is undefined, type is undefined
    console.log(car, typeof car);
}

{
    // Empty Values
    // An empty value has nothing to do with undefined.

    // An empty string has both a legal value and a type.
    let car = "";    // The value is "", the typeof is "string"
    console.log(car, typeof car);
}