// This code assigns a simple value (Fiat) to a variable named car:

let car = "Range Rover";

// Objects are variables too. But objects can contain many values.

// This code assigns many values (Fiat, 500, white) to a variable named car:

const car1 = {type:"Fiat", model:"500", color:"white"};
console.log(car1);

// The values are written as name:value pairs (name and value separated by a colon).

// You define (and create) a JavaScript object with an object literal:

const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

console.log(person.firstName + " is " + person.age + " years old.");

// Spaces and line breaks are not important. An object definition can span multiple lines:

const country = {
    countryName : "INDIA",
    language : "Hindi, English",
    State: 28,
    UT:4,    
};
console.log(country.language);
console.log(country['countryName']);

/*
Objects can also have methods.

Methods are actions that can be performed on objects.

Methods are stored in properties as function definitions.

A method is a function stored as a property.

You access an object method with the following syntax:

objectName.methodName()
*/
const country1 = {
    countryName : "INDIA",
    language : "Hindi, English",
    State: 28,
    UT:4,    
    countryLanguage : function() {
        return this.countryName + " " + this.language;
    }
};
console.log(country1.language);
console.log(country1['countryName']);
console.log(country1.countryLanguage());
// If you access a method without the () parentheses, it will return the function definition:
console.log(country1.countryLanguage);

// Do Not Declare Strings, Numbers, and Booleans as Objects!
// When a JavaScript variable is declared with the keyword "new", the variable is created as an object:

x = new String();        // Declares x as a String object
y = new Number();        // Declares y as a Number object
z = new Boolean();       // Declares z as a Boolean object

// Avoid String, Number, and Boolean objects. They complicate your code and slow down execution speed.