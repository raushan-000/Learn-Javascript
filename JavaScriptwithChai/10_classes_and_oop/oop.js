const user = {
    username: "raushan",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function () {
        console.log("got user details");
        console.log(`username : ${this.username}`);
        console.log(this);
    },
};
//console.log(user.username);
//console.log(user.getUserDetails());
//console.log(this);

// constructor function

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.gretting = function () {
        console.log(`Welcome ${this.username}`);
    };
    // it is implicitily defined , so it is not must to return this
    //return this
}

//const userOne = User("abc",7,true)
//const usertTwo = User("qwer",11,false)
// here we have printed userOne but value is override by userTwo
//console.log(userOne);

// we overcome this problem by adding "new" keyword which creates new instance each time

const userOne = new User("abc", 7, true);
const usertTwo = new User("qwer", 11, false);
console.log(userOne.constructor);
//console.log(usertTwo);

console.log(usertTwo instanceof User);
