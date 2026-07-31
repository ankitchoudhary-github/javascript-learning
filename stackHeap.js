// Stack (Primitive) and Heap (Non - Primitive)
let myYoutubename= "Ankit" 
let anotherName= myYoutubename
anotherName= "Choudhary"
console.log(anotherName);
console.log(myYoutubename);

let userOne = {
    email: "ankit@google.com",
    upi: "user@hdfc"
}

let userTwo= userOne

userTwo.email = "choudhary@google.com"
console.log(userOne);
console.log(userTwo);
