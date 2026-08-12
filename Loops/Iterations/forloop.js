// for loop Use a for loop when you know how many times you want to execute something.
for (let i = 0; i < 10; i++) {
    const element = i;
    console.log(element);
    if (element ==5) {
        console.log("5 is best number");
    }
    console.log(element);
    
}
// console.log(element);

for (let i = 0; i < 10; i++) {
    console.log(`Outer Loop: ${i}`);
    for (let j = 0; j < 10; j++) {
        // console.log(`Inner loop value ${j} and inner loop ${i}`);    
        console.log(i+ '*' + j +'='+ i*j);
    }
} //LIFO

//Break and Continue
// break completely stops the loop.
// continue skips the current iteration and moves to the next iteration.

for (let index = 1; index <=20; index++) {
    if (index ==5) {
        console.log(`Detected 5`);
        continue
    }
    console.log(`Value of i is ${i}`);    
}
