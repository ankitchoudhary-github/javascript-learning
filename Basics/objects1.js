// Singelton Objects 

// Object Literals

const mySym = Symbol("key1")

const JsUSer = {
    name: "Ankit" ,   // Key and Values are declared
    "full name": "Ankit Choudhary",
    [mySym]: "mykey1",
    age: "18",
    location: "Delhi",
    email: "ankit@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
console.log(JsUSer.email); //Not the right way but it works
console.log(JsUSer["email"]);
console.log(JsUSer[mySym]);

JsUSer.email = "ankit@chatgpt.com"
// Object.freeze(JsUSer) //No chnages will be propagated
 
JsUSer.greeting = function() {
    console.log("Hello JS User"); 
}
JsUSer.greetingTwo = function() {
    console.log(`Hello JS User, ${this.name}`); 
}

