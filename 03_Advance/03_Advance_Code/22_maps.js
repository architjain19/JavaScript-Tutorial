// TIPS
// using 'set' property converts object into 'Map'
// we can find how many objects/entities are inside the map with the help of 'size' property. This doesn't works in objects 

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
console.log("Type of: " + typeof users); // type of 'Map' is an 'object'

users.set('Archit1', person1) // converts object 'person1' into 'Map'
users.set('Archit2', person2) // converts object 'person2' into 'Map'
users.set('Archit3', person3) // converts object 'person3' into 'Map'
console.log(users);
console.log("Number of objects: " + users.size); // returns size of 'Map'
console.log(users.get('Archit2')); // finds object having word 'Archit2'
console.log(users.keys()); // we can use this method to iterate over the keys(objects) in 'Map'
console.log(users.values()); // we can use this method to iterate over the values(objects properties) in 'Map'

// Also 'Map' can be made using arrays
var array = [['one', 1], ['two', 2], ['three', 3]]
var newMap = new Map(array)
console.log(newMap);