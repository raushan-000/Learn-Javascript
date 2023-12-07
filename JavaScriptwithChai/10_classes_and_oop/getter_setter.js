class User {
    constructor(email, password) {
        this.email = email;
        this.password = password
    }
    get email() {
        return this._email.toUpperCase()
    }
    set email(value) {
        this._email = value
    }
    get password() {
        return `${this._password.toUpperCase()}raushan`
    }
    set password(value) {
        this._password = value
    }
}

const raushan = new User("raushan@fia.com", "abtrc")
console.log(raushan.email);
console.log(raushan.password);