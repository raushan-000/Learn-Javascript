{
    // The Addition Assignment Operator adds a value to a variable.
    let x = 10;
    x += 5;
    console.log("Addition Assignment : " + x);

    let text = "Hello"; text += " World";
    console.log("Addition Assignment : " + text);
}

{
    // The Subtraction Assignment Operator subtracts a value from a variable.
    let x = 10;
    x -= 5;
    console.log("Subtraction Assignment : " + x);
}

{
    // The Multiplication Assignment Operator multiplies a variable.
    let x = 10;
    x *= 56;
    console.log(" Multiplication Assignment : " + x);
}

{
    // The Exponentiation Assignment Operator raises a variable to the power of the operand.
    let x = 10;
    x **= 5;
    console.log(" Exponential Assignment : " + x);
}

{
    // The Remainder Assignment Operator assigns a remainder to a variable.
    let x = 10;
    x %= 5;
    console.log(" Remainder Assignment : " + x);
}

{
    // The Left Shift Assignment Operator left shifts a variable.
    let x = -100;
    x <<= 5;
    console.log(" Left Shift Assignment : " + x);
}

{
    // The Right Shift Assignment Operator right shifts a variable (signed).
    let x = -100;
    x >>= 5;
    console.log(" Right Shift Assignment : " + x);
}

{
    // The Unsigned Right Shift Assignment Operator right shifts a variable (unsigned).
    let x = -100;
    x >>>= 5;
    console.log(" Unsigmned Right Shift Assignment : " + x);
}

{
    // The Bitwise AND Assignment Operator does a bitwise AND operation on two operands and assigns the result to the the variable.
    let x = 10;
    x &= 5;
    console.log(" Bitwise AND Assignment : " + x);
}

{
    // The Bitwise OR Assignment Operator does a bitwise OR operation on two operands and assigns the result to the variable.
    let x = 10;
    x |= 5;
    console.log(" Bitwise OR Assignment : " + x);
}

{
    // The Bitwise XOR Assignment Operator does a bitwise XOR operation on two operands and assigns the result to the variable.
    let x = 10;
    x ^= 5;
    console.log(" Bitwise XOR Assignment : " + x);
}

{
    // The Logical AND assignment operator is used between two values.
    // If the first value is true, the second value is assigned
    let x = 10;
    x &&= 5;
    console.log(" Logical AND Assignment : " + x);
}

{
    // The Logical OR assignment operator is used between two values.
    // If the first value is false, the second value is assigned
    let x = undefined;
    x ||= 8;
    console.log(" Logical OR Assignment : " + x);
}

{
    // The Nullish coalescing assignment operator is used between two values.

    // If the first value is undefined or null, the second value is assigned.
    let x;
    x ??= 6;
    console.log(" Nullish coalescing Assignment : " + x);
}