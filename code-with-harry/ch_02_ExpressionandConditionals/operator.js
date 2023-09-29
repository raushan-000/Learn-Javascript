let a=23;
let b=4;
console.log("a+b",a+b)
console.log("a-b",a-b)
console.log("/b",a/b)
console.log("a*b",a*b)
console.log("a%b",a%b)
console.log(a)
console.log("a++",a++)
console.log("after a++",a)
console.log("++a",++a)
console.log('after ++a',a)

// assignment operator
let assignment = 1;
console.log(assignment)
assignment += 5; //same as assignment = assignment+5
console.log("a is now",assignment)


assignment -= 5; //same as assignment = assignment-5
console.log("a is now",assignment)

// compariosn operator
let comp1=5;
let comp2=3;
let comp3='3';
console.log("comp1==comp2is", comp1==comp2)
console.log("comp1!=comp2is", comp1!=comp2)
console.log("comp1===comp2is", comp1===comp2)
console.log("comp1!==comp2is", comp1!==comp2)
console.log("comp2===comp3is", comp2===comp3) //compare  type
console.log("comp2!==comp3is", comp2!==comp3)

//logical operator
let x=5;
let y=6;
console.log(x<y&&x==5) //return true if both statement is true
console.log(x>y&& x==5)
console.log(x>y|| x==5) 
console.log(x<y|| x==5) //return true if any one statement is true 
console.log(x>y|| x==6)
console.log(!true)
console.log(!false)