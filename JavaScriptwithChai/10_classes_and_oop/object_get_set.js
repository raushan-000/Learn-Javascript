const user = {
    _email: 'asd@g.com',
    _password: "jjhwfh",

    get email() {
        return this._email.toUpperCase()
    },

    set email(value) {
        this._email = value
    }
}

const abc = Object.create(user)
console.log(abc);
console.log(abc.email);