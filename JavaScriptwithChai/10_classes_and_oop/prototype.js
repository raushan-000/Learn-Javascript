let myName = "raushan     ";

console.log(myName.length);
//console.log(myName.truelength);

let myHeros = ["thor", "spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`);
    },
};

Object.prototype.raushan = function () {
    console.log(`raushan is present in all object`);
};
// this ptototype gives access onlt to array
Array.prototype.heyRaushan = function () {
    console.log("Raushan says hello");
};

heroPower.raushan();
myHeros.raushan();
//heroPower.heyRaushan()
myHeros.heyRaushan();

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com",
};

const Teacher = {
    makeVideo: true,
};

const TeachingSupport = {
    isAvailable: false,
};

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    // TAsupport can access property of Teaching support
    __proto__: TeachingSupport,
};
// teacher can access property of user
Teacher.__proto__ = User;

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "ChaiAurCode     ";

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
};

anotherUsername.trueLength();
"raushan".trueLength();
"iceTea".trueLength();
"javascript inheritance".trueLength();
