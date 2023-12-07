class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

const raushan = new Teacher("raushan", "chai@teacher.com", "123")

raushan.logMe()
raushan.addCourse()
const aman = new User("aman")

aman.logMe()
console.log(raushan === aman);
console.log(raushan === Teacher);
console.log(raushan instanceof User);
console.log(aman instanceof Teacher);