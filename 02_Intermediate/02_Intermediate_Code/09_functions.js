// TIPS
// 'console.log();' is a pre-defined function
// functions that we define ourselves are called as user defined functions

// defining/declaring a user defined function
let fullNameMaker = function (firstName, lastName) {
    let id = 1
    console.log("Welcome!");
    console.log(`Happy to have you ${firstName} ${lastName}`);
    return id
}

let id = fullNameMaker("Archit", "Jain") // calling the function 'fullNameMaker' and storing return value in variable 'id'
console.log("Returned id: " + id);