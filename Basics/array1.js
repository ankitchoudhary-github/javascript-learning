// Array
// Has Prototype access
const myArray = [0, 1, 2, 3, 4, 5]; //javascript array are resizables
console.log(myArray[0]);
// Array copy operations create shallow copies
// A shallow copy of an object is a copy whose properties share the same refrences

const myHeroes = ["Nagraj", "Spiderman"];
const myArray2 = new Array(1, 2, 3, 4);
console.log(myArray[1]);

// Array Methods

myArray.push(6)
myArray.push(7)
myArray.pop (7)

myArray.unshift(9) // will be inserted on start of the Array
myArray.shift(9) // will remove the first element in the array

const newArray = myArray.join()

console.log(myArray);
console.log(newArray);
console.log(typeof newArray);


console.log(myArray.includes(9));
console.log(myArray.includes(9));
console.log(myArray.indexOf(9));


// Slice, Splice
// slice() → Creates a new array and does not modify the original array.
// splice() → Modifies the original array by adding, removing, or replacing elements
console.log("A", myArray);

const myn1 = myArray.slice(1,3)

console.log(myn1);
console.log("B", myArray);

const myn2 = myArray.splice(1,3)
console.log("C", myArray);
console.log(myn2); 

