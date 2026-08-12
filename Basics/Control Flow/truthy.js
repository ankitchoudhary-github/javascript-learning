const userEmail = [];

if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Don't have user email");
}
// Falsy Values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy Values
// true, "0", 'false', " ", [], {}, function(){}

if (userEmail.length === 0) {
  console.log("Array is empty");
}

const emotyObject = {};
if (Object.keys(emptyObject).length === 0) {
  console.log("Object is empty");
}

// false ==0
// true

// false ==''
// true

// 0 ==''
// true

// Nullish Coalescing Operator (??) : null undefined: The Nullish Coalescing Operator (??) is mainly used in JavaScript to provide a default value when a variable is null or undefined.
let val1;
val1 = 5 ?? 10; //Database and Firebase
val1 = null ?? 10;
val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);


// Terniary Operator
condition ? true: false
const iceTea = 100
iceTea <=80 ? console.log("Less than 80") : console.log("More than 80");


