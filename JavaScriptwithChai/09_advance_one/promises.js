// 1st Promise
const promiseOne = new Promise(function (resolve, reject) {
    // Do an async await
    // Db calls, cryptography, network call
    setTimeout(function () {
        console.log("async task is completed");
        resolve();
    }, 1000);
});

promiseOne.then(function () {
    console.log("Promise consumed");
});

// 2nd Promise
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2");
        resolve();
    }, 1000);
}).then(function () {
    console.log("Async 2 resolve");
});

// 3rd Promise
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        // pass dta
        resolve({ username: "chai", email: "abc@z.com" });
    }, 1000);
});

promiseThree.then(function (user) {
    console.log(user);
});

// 4th Promise
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({ username: "raushan", password: "234" });
        } else {
            reject("ERROR: something went wrong");
        }
    }, 1000);
});
// to get data this will not work
// const userName = promiseFour.then((user)=> {
//     console.log(user);
//     return user.username
// })
// console.log(userName);

promiseFour
    .then((user) => {
        console.log(user);
        return user.username;
    })
    .then((userName1) => {
        console.log(userName1);
    })
    .catch(function (err) {
        console.log(err);
    }).finally(() => console.log('promise is either resolve or rejected'));

// 5th Promise

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "aman", password: "23fgr4" });
        } else {
            reject("ERROR: JS went wrong");
        }

    }, 1000)
});

async function consumePromiseFive() {
    // const response = await promiseFive
    // console.log(response);

    // handling error from above code
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()
/*
async function getAllUsers(){
    try{
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    //console.log(response);
     const data = await response.json()
     console.log(data);
    }catch(error){
        console.log("E:", error);
    }
}
  getAllUsers()
*/

// getALlUsers function in .then format

fetch('https://api.github.com/users/raushan-000')
    .then((response, reject) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.log(error));

