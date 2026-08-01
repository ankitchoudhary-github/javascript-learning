const score = 400
console.log(score);

const balance= new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2)); //Precison Value

const otherNumber = 23.8996
console.log(otherNumber.toPrecision()); //Precise Value, Priority is to the decimal value before

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // commas according to US string by default but can be changed


// ++++++++++++++++ Maths ++++++++++++++++++++++
// Library comes default

console.log(Math); // Math is an object
console.log(Math.abs(-4)); // -ve value becomes positive because of absolute
console.log(Math.round(4.7));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(2,5,1,6));
console.log(Math.max(45,6,7,12));

console.log(Math.random()); // Value will only comes between 0 to 1 by default
console.log((Math.random()*10) + 1);



const min = 10
const max= 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);












