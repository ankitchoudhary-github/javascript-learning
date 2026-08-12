// forEach() is an array method used to execute a function once for every element in an array.
const coding = ["js", "ruby", "java", "python"]

coding.forEach( function (val) {
    console.log(val);
})
coding.forEach(greet =(item) => {
    console.log(item);
})

function printMe(item) {
    console.log(item);
}
// for...in → keys/indexes
// for...of → values
// forEach() → perform an action for every array element