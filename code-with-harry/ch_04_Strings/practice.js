console.log("har\"".length);

let fruit = "pomegranate";
console.log(fruit.includes('g'));
console.log(fruit.startsWith('pome'));
console.log(fruit.endsWith('e'));
console.log(fruit.startsWith('ome'));
console.log(fruit.endsWith('t'));
console.log(fruit.split("a"));
console.log(fruit.split("", 3));
console.log(fruit.split("", 4));
// print 100 from this sentence
let sentence = "Please give Rs 100";
let s3 = Number.parseInt(console.log(sentence.slice("Please give Rs".length)));
let amount1 = sentence.slice(15);
console.log(typeof (amount1));
let amount = Number.parseInt(sentence.slice(15));
console.log(amount);
console.log(typeof (amount));

// change 4th character 
let friend = "Deepika";
friend[3] = "R";
console.log(friend); // friend is not changed because string is immutable

console.log(friend.replace("p", "r"));