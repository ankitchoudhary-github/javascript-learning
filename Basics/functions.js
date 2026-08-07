const { use } = require("react");

function sayMyName () {
    console.log("A");
    console.log("N");
    console.log("K");
    console.log("I");
    console.log("T");
}

// sayMyName()

// function AddTwoNumbers(number1,number2){
//     console.log(number1+number2);    
// }
// const result= AddTwoNumbers(3,4)
// console.log("Result:" result);

// Function will not work after Return Statement

function loginUserMessage(username) {
    return `${username} Just Logged in`
}
loginUserMessage("Ankit")
// If no value is being passed then it will be undefined





function calculateCartPrice (...num1) { //... is Rest Operator for multiple Parameters
    return num1
}
console.log(calculateCartPrice(200, 400, 500));

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}
// handleObject(user)
handleObject( {
    username: "Ankit",
    price: 399
})

const myNewArry = [200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArry));
console.log(returnSecondValue([200, 400, 500, 1000]));

function returnSecondValue(getArray) {
    return getArray[1]
}
