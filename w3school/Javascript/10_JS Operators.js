{
    // Assignment Operator ( = ) --> assigns value to variable

    // Assign the value 5 to x
    let x = 5;
    // Assign the value 2 to y
    let y = 2;
    // Assign the value x + y to z:
    let z = x + y;
}

{
    // Addition Operator ( + ) --> adds number
    let x = 5;
    let y = 2;
    let z = x + y;
    console.log(z);
}

{
    // Multiplication Operator ( * ) --> multiplies number
    let x = 5;
    let y = 2;
    let z = x * y;
    console.log(z);
}

{
    // Arithmetic Operator --> perform arithmetic on number
    let a = 3;
    let x = (100 + 50) * a;
    console.log(x);
}

{
    // Addition Assignment Operator (+=) --> adds a value to a variable.
    let x = 10;
    x += 5;
    console.log(x);
}

{
    // All the comparison operators above can also be used on strings:
    let text1 = "A";
    let text2 = "B";
    let result = text1 < text2;
    console.log(result);

    // strings are compared alphabetically:
    let text3 = "20";
    let text4 = "5";
    let result1 = text3 > text4;
    console.log(result1);
}

{
    // The + can also be used to add (concatenate) strings:
    let text1 = "John";
    let text2 = "Doe";
    let text3 = text1 + " " + text2;
    console.log(text3);
    // The += assignment operator can also be used to add (concatenate) strings:
    let line1 = "What a very ";
    line1 += "nice day";
    console.log(line1);
}

{
    /*  Adding two numbers, will return the sum, 
     but adding a number and a string will return a string:*/
    let x = 5 + 5;
    let y = "5" + 5;
    let z = "Hello" + 5;
    console.log(x,y,z);
}