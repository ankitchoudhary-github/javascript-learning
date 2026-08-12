// The for...in loop is mainly used to iterate over the properties/keys of an object.
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "Ruby",
    swift: "Swift by Apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programminf = ["js","rb","py","cpp"]
for (const key in programming) {
    console.log(programming[key]);
}