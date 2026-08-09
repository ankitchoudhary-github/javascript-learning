// Immediately Invoked Function Expressions (IIFE)
// An IIFE is a JavaScript function that is created and executed immediately.
// Global Scope Pollution
function tea () {
    console.log(`DB Connected`);
}
tea();

(function tea() {
    console.log(`DB CONNECTED`); 
})();

(  (name) => {
    console.log(`DB CONNECTED TWO ${name}`); 
} ) ('Ankit') //IIFE with parameters and arrow functions