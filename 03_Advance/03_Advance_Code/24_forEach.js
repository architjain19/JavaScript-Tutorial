// TIPS
// 'for each' loops are similar to 'arrow functions'
// these are used to iterate over the 'Map' in short line of code

var person1 = {
    name: "Archit1",
    age: 20,
    isMale: true
}
var person2 = {
    name: "Archit2",
    age: 12,
    isMale: true
}
var person3 = {
    name: "Archit3",
    age: 16,
    isMale: false
}

let users = new Map() // creates an empty object

users.set('Archit1', person1) // converts object 'person1' into 'Map'
users.set('Archit2', person2) // converts object 'person2' into 'Map'
users.set('Archit3', person3) // converts object 'person3' into 'Map'
console.log(users);


// 'for each' loop for 'keys'
users.forEach((value, key) => console.log(key + " = " + value.age)); // it should be '(value, key)' compulsorily and not '(key, value)'