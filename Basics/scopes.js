var c = 300 // Global Scope
if (true) { // Block Scope
    let a = 10
const b = 20
var c = 30 
console.log("INNER:", a);

} //Scope of The Program

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
} 

console.log(a);
console.log(b);
console.log(c);
// The Reason why we are not using var



function one() {
    const username = 'Ankit'

    function two() {
        const website = "COursera"
        console.log(username);
    }
    console.log(website);

    two() 
}
// smaller functions can ask for access from bigger one but not vice versa
one()

if (true) {
    const username = "Ankit"
    if (username == "Ankit") {
        const website = " Coursera"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// +++++++++++++++++++++++++++++++++++++++++++++++++

function addone(num) {
    return num + 1
}
addone(5)


const addTwo = function(num) {
    return num + 2
} // Expression , variables in java are powerful, Function Hosting
addTwo(5)
