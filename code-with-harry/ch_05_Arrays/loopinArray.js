// For Loop:
// The for loop is a classic way to iterate through arrays. 
// You can specify the starting index, the ending condition, and the increment or decrement.

const numbers = [1,2,3,4,5,'a'];
for(let i=0;i<numbers.length;i++){
    console.log(numbers[i]);
}

/* For...of Loop --> The for...of loop is a more concise and readable way to iterate over the elements of an array.
 It automatically iterates through each element without the need for an index.
syntax :
for (const element of iterable) {
    // Code to be executed for each element
  }
*/
  
const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
  console.log(fruit);
}

// forEach() Method --> Arrays have a built-in forEach() method that allows you to execute a provided function once for each array element.
const colors = ["red", "green", "blue"];
colors.forEach(function(color) {
  console.log(color);
});

const fruits1 = ["apple", "banana", "cherry"];

fruits.forEach(function(fruit, index) {
  console.log(`Fruit at index ${index}: ${fruit}`);
});

// Map method --> creates new array by applying function to each element of original array

const numbers1 = [1,2,3,4]
const doubled = numbers1.map(function(number){
    return number*2;
});
console.log(doubled);
// without storing in variable
console.log(numbers1.map(function(number){
    return number*3;
}));

// Filter method --> creates a new array containing element that passes a test defined by a aprovide function

function evenNumber(num){
    return num %2===0;
}
const numbers2 = [1,2,3,4,5,6,7,8,9]
const evenNumbers = numbers2.filter(evenNumber);
console.log(evenNumbers)

const oddNumbers = numbers2.filter(function(num){
    return num %2 !==0;
});
console.log(oddNumbers)