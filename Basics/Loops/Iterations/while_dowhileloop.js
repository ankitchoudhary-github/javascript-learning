// A while loop is useful when you don't know exactly how many times the loop will run.
let index = 0;
while (index <= 10) {
  console.log(`Value of index is ${index}`);
  index = index + 2;
}
let myArray = ["flash", "batman", "superman"];

let arr = 0;
while (arr < myArray.length) {
  console.log(`Value is ${myArray[arr]}`);
  arr = arr + 1;
}
// The do...while loop is different because it executes the code at least once, even if the condition is false
let score = 1

do {
    console.log(`Score is ${score}`);
    score++
} while (score <=10);