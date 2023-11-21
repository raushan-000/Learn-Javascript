const user = {
    username: "raushan",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`)
        //console.log(this)
    }
}

user.welcomeMessage();
user.username = "aman"
user.welcomeMessage();
console.log(this); // empty output

function one() {
    let username = "asdf"
    //console.log(this);
    console.log(this.username) // gives output undefined
}
one();

const two = function () {
    let username = "asdf"
    //console.log(this);
    console.log(this.username) // gives output undefined
}
two();

// using arrow
const three = () => {
    let username = "sam"
    console.log(this.username) // gives output undefined
    console.log(this) // gives empty output
}
three();

// pure arrow function
// explicit arrow function
// if we use {}, use return keyword
const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(3, 4));

// implicit arrow function
// if we use  () , no need to use return keyword

const multiplyTwo = (num1, num2) => (num1 * num2)

console.log(multiplyTwo(3, 4));

const multiplyTwo1 = (num1, num2) => ({username:"raushan"})

console.log(multiplyTwo1(3, 4));

