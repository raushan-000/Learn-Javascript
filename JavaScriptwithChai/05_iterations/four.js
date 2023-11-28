const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    py: 'python'
}

// for in loop
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

// for in loop on array
const programming = ["js", "rb", "py", "cpp"]
for (const key in programming) {
    console.log(programming[key]);
}

// for in loop on map
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
for (const key in map) {
    console.log(key); // nothing printed, cannot iterate on map
}