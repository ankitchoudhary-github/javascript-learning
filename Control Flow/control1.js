// If Statement
const isUserloggedin = true;
const temperature = 41;
if (isUserloggedin) {
}
if (temperature === 41) {
  console.log("less than 50");
} else {
  console.log("Temoerature is greater than 50");
}

const score = 200;
if (score > 100) {
  const power = "fly";
  console.log(`User power: ${power}`);
}
console.log(`User Power: ${power}`);

const balance = 1000;
if (balance > 500) console.log("Implicit Scope");

if (balance > 500) {
  console.log("Less than");
} else if (balance < 750) {
  console.log("Less than 750");
} else if (balance < 900) {
  console.log("Less than 900");
} else {
  console.log("Less than 2000");
}


const userLoggedIn = true;
const debitCatd = true;
if (userLoggedIn && debitCatd && 2 == 2) {
  console.log("Allow to but the things");
}
if (loggedInFromGoogle || loggedInFromEmail) { // || used to check multiple conditions
  console.log("User logged in");
}
