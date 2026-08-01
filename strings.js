const name= "Ankit"
const repoCount = 54

console.log(name + repoCount + "Value"); //Oudated Syntax
console.log(`Hello my name is ${name} amd my repo count is ${repoCount}`);
// Modern way to write in this way, it is called String Interpolation

const gameName= new String('AnkitChoudhary') // This will not work on Browser Console.
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase);


//Slicing
const newString= gameName.substring(0,4) // Doesn't obeys Negative values
console.log(newString);


const anotherString = gameName.slice(-8,4)
console.log(anotherString);

// Trim - Only Works in whitespace and line terminators
const newStringOne = "   Ankit   "
console.log(newStringOne.trim());


//Replace
const url= "https://ankit.com/ankit%20choudhary"
console.log(url.replace('%20','-'));

console.log(url.includes ('ankit'))