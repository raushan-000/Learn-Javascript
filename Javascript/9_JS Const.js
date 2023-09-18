/* The const keyword was introduced in ES6 (2015)

Variables defined with const cannot be Redeclared

Variables defined with const cannot be Reassigned

Variables defined with const have Block Scope */

// A const variable cannot be reassigned:

const PI = 3.141592653589793;
//PI = 3.14; // This will give an error
//PI = PI + 10; // This will give an error
console.log(PI);

{
    // JavaScript const variables must be assigned a value when they are declared:

    const PI = 3.14159265359;
    console.log(PI);

    // const PI1; --> This will give an error
    PI1 = 3.14159265359;
}

{
    //     Constant Arrays
    // You can change the elements of a constant array:

    /// You can create a constant array:
    const cars = ["Saab", "Volvo", "BMW"];
    console.log(cars);
    // You can change an element:
    cars[0] = "Toyota";
    console.log(cars);
    // You can add an element:
    cars.push("Audi");
    console.log(cars);

    // you can NOT reassign the array:

    const cars1 = ["Saab", "Volvo", "BMW"];

    //cars1 = ["Toyota", "Volvo", "Audi"];    // ERROR

}

{
    // Constant Objects
    // You can change the properties of a constant object:

    // You can create a const object:
    const car = { type: "Fiat", model: "500", color: "white" };
    console.log(car);
    // You can change a property:
    car.color = "red";
    console.log(car);
    // You can add a property:
    car.owner = "Johnson";
    console.log(car);

    // you can NOT reassign the object:

    const car1 = { type: "Fiat", model: "500", color: "white" };

    // car1 = {type:"Volvo", model:"EX60", color:"red"};    // ERROR
}

{
    // Redeclaring a JavaScript var variable is allowed anywhere in a program:

    var x = 2;     // Allowed
    var x = 3;     // Allowed
    x = 4;         // Allowed
}

// Redeclaring an existing var or let variable to const, in the same scope, is not allowed:

var p = 2;     // Allowed
const p = 2;   // Not allowed

{
    let x = 2;     // Allowed
    const x = 2;   // Not allowed
}

{
    const x = 2;   // Allowed
    const x = 2;   // Not allowed
}

// Reassigning an existing const variable, in the same scope, is not allowed:

const x = 2;     // Allowed
x = 2;           // Not allowed
var x = 2;       // Not allowed
let x = 2;       // Not allowed
const x = 2;     // Not allowed

{
    const x = 2;   // Allowed
    x = 2;         // Not allowed
    var x = 2;     // Not allowed
    let x = 2;     // Not allowed
    const x = 2;   // Not allowed
}

// Redeclaring a variable with const, in another scope, or in another block, is allowed:

const x = 2;       // Allowed

{
    const x = 3;   // Allowed
}

{
    const x = 4;   // Allowed
}