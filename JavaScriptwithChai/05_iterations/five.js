// for each loop

const coding = ["js", "ruby", "java", "cpp", "python"]
// using normal function
// coding.forEach( function (item){
//     console.log(item);
// })

// // using arrow function

// coding.forEach( (value) =>{
//     console.log(value);
// })
// // using custom function

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "C++",
        languageFileName: "cpp"
    },
    {
        languageName: "python",
        languageFileName: ".py"
    },
    {
        languageName: "java",
        languageFileName: "java"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName);
})