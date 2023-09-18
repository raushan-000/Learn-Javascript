{
    //  A typical arithmetic operation operates on two numbers.

    // The two numbers can be literals:

    let x = 100 + 90;
    // or variables
    let a = 123;
    let b = 23;
    let c = a + b;

    // or expression
    let m = (100 + 50) * a;
    console.log(x, c, m);
}

{
    // addition operator
    let x = 23;
    let y = 12;
    let z = x + y;
    console.log("addition : " + z);
}

{
    // subtraction operator
    let x = 5;
    let y = 2;
    let z = x - y;
    console.log("subtraction : " + z);
}

{
    // multiplication operator (*) multiplies numbers.
    let x = 5;
    let y = 2;
    let z = x * y;
    console.log("Multiplication : " + z);
}

{
    // division operator (/) divides numbers.
    let x = 5;
    let y = 2;
    let z = x / y;
    console.log("division : " + z);
}

{
    // The modulus operator (%) returns the division remainder.
    let x = 5;
    let y = 2;
    let z = x % y;
    console.log("modulus : " + z);
}

{
    // The increment operator (++) increments numbers.
    let x = 5;
    x++;
    let z = x;
    console.log("increment : " + z);
}

{
    // The decrement operator (--) decrements numbers.
    let x = 5;
    x--;
    let z = x;
    console.log("decrementm : " + z);
}

{
    // The exponentiation operator (**) raises the first operand to the power of the second operand.
    let x = 5;
    let z = x ** 2;
    console.log("Exponent : " + z);

    // x ** y produces the same result as Math.pow(x,y):
    let a = 5;
    let b = Math.pow(a, 2);
    console.log("using pow function : " + z);
}
