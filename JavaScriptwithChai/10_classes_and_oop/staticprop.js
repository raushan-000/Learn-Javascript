class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username: ${this.username}`);
    }

    static createId() {
        return `123`
    }
}

const raushan = new User("raushan")
//console.log(raushan.createId()) // after adding static to createID function , it is not accessible here

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
iphone.logMe() // accessible
//console.log(iphone.createId()); // createId not accessible here