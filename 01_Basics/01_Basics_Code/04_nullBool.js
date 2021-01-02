// TIPS
// 'undefined', and '0' are totally different from each other. But 'null' and 'undefined' are the same
// boolean operations are either 'true' or 'false'
// Can use any of the paraenthesis ('''---'''), ("---") and ('---'). Can use depending on the parent quotes used in console.log()


var temp
console.log("Temperature when 'temp' is not defined: " + temp) // when variable is not defined. parent("")-child('') quotes used 

temp = 2 // updated temp
console.log("Temperature when \"temp\" is defined: " + temp) // when variable is defined. use '\' to escape characters 

let marks = 7

// returns a boolean value as it's an expression
let grade = (marks < 7) // less than 
console.log("marks < 7: " + grade)

grade = (marks <= 7) // less than operator
console.log("marks <= 7: " + grade)

grade = (marks == 7) // comparison operator for exactly equal condition
console.log("marks <= 7: " + grade)

