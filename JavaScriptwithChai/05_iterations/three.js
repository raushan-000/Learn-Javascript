// for of 

// const arr = [1,2,3,4,5,6,7,8,9,0]

// for (const iterator of arr) {
//     console.log(iterator);
// }

// const greetings = "hello world!"
// for (const greet of greetings) {
//     console.log( `${greet}`);
// }


// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('IN', "India") // only unique value, cannot be duplicated
console.log(map);

// for of

for (const key of map) {
    console.log(key);
}

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

const myObject = {
    'game1': 'NFS',
    'game2': 'world of warship'
}
for (const [key, value] of myObject) {
    console.log(key, ':-', value); // object is not iterable
}
