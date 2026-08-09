const user = {
    username: "Ankit",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, Welcome to Website`);
        console.log(this);
        
    } //when reffering current context this keyword is used when the function is called.
}
user.welcomeMessage()
user.username = "Choudhary"
user.welcomeMessage()
console.log(this);

function tea (){
    console.log(this);
    
}
tea()

const tea = () => {
    let username = "Ankit"
    console.log(this.username);
}

const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(3,4));

const addTwo = (num1, num2) => (num1 + num2)
console.log(addTwo(3,4));
