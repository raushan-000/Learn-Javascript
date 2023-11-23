// Immediately Invoked Function Expressions (IIFE)
// to remove problem from global scope we use iife

(function chai(){
    console.log('db connected');
})();

// if we don't use ; before IIFE, it will give error
(function chai(){
    console.log('db connected1');
})();

function chai(){
    // named iife
    console.log('db connected3');
}
chai();

// umnamed iife with parameter
( (name) => {
    console.log(`db connected ${name}`);
})('raushan')