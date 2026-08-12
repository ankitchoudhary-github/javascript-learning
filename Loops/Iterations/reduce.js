// Array.reduce()
// reduce() is used when you want to combine all elements of an array into one final value.
const people = [
  { name: 'Alice', age: 21 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 21 }
];

const groupedByAge = people.reduce((acc, person) => {
  const age = person.age;
  if (!acc[age]) {
    acc[age] = [];
  }
  acc[age].push(person);
  return acc;
}, {});



const myNums = [1,2,3]
const myTotal =  myNums.reduce(function(acc,currval){
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
},0)
console.log(myTotal);


const myTotal = myNums.reduce ((acc, curr) => acc+curr,0)
console.log(myTotal);

