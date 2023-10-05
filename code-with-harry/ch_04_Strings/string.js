// collection of character

let name1 = "raushan" //string declare using double quotw
console.log("lengt" + name1.length) // print length of string
console.log(name1[0]) // print character at respective index
console.log(name1[1])
console.log(name1[2])

let name2 = 'aman' //string declared using single quote

console.log(name2.length)

// let name3="subh' // never write like this


// Template literals
// template literal use backtick to define string
let boy1 = 'raushan'
let boy2 = 'aman'
//we want to create sentence raushan is friend of aman

let sentence = `boy1 is friend of boy2`
let sentence1 = `${boy1} is friend of ${boy2}`
// inserting variable directly in template literal is called string interpolation
console.log(sentence)
console.log(sentence1)

let a = `This is ${name2}` //using template literal
console.log("using template literal to add variable in sentence : " + a)

// Escape sequence character
let fruit = 'Ban\'ana'
let fruit2 = 'Ban\"ana'
let fruit1 = 'Ban\na'
let fruit3 = 'Ban\tna'
let fruit4 = 'abc\rde' // carriage return
console.log(fruit)
console.log(fruit.length)
console.log(fruit2)
console.log(fruit1)
console.log(fruit3)
console.log(fruit4)

// string properties and method

let state = "Bihar"
console.log(state.length) // print length of string
console.log(state.toLowerCase())
console.log(state.toUpperCase())
console.log(state.slice(2, 4)) //last index not include
console.log(state.slice(2,)) //last index include
console.log(state.replace("Bihar", "UP"))

let vegetable1 = "potato"
let vegetable2 = "onion"
let vegetable3 = "brinjal"

let vegetable4 = vegetable1.concat(" " + vegetable2, " ", vegetable3)
let vegetable5 = vegetable1 + vegetable2 + vegetable3 + "tomato"
console.log(vegetable4)
console.log(vegetable5)

let person = "    Raushan    "
console.log(person)
console.log(person.trim())

