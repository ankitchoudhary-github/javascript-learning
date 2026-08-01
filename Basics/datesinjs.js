// Dates
let myDate = new Date()
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);  // object

// let myCreatedDate = new Date(2023,0,23)
let myCreatedDate = new Date(2023,0,23,5,3)
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

`${newDate.getDay()} and the time`

newDate.toLocaleString ('default', {
    weekday: "long",
})

