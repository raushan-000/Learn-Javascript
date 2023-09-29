
let a = prompt("hey whats your age") // always takes string value
a = Number.parseInt(a) //converting the string to a number
console.log(typeof a)
if (a < 0) {
    alert("This is valid age")
}
else if (a < 9) {
    alert("you are kid")
}
else if (a < 18 && a >= 9) {
    alert('you can think of driving')
}
else {
    alert("you can drive")
}
console.log('done')