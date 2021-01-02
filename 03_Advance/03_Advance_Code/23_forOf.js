// TIPS
// printing object directly with concatenation will print '[object object]' so, write 'myObj.propTitle' to avoid this

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


// 'for of' loop for 'keys'
for (const key of users.keys()) {
    console.log(key);    
}

// 'for of' loop for 'values'
for (const value of users.values()) {
    console.log(value.age);    
}

// 'for of' loop for '[key, values]'
for (const [key, values] of users.entries()) {
    console.log(key + ' = ' + values.isMale);    
}