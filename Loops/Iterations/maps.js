// map() creates a new array by applying a function to every element.
const myNumbers = [1,2,3,4,5,6,7,8,9,10]

const NewNums = myNumbers
              .map( (num)=> num * 10)
               .map((num) => num +1)
               .filter ((num) => num >=40)

console.log(NewNums);
// filter() creates a new array containing only the elements that satisfy a condition.