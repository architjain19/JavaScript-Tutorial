// TIPS
// javascript is smart enough to know the variable as an integer or a float
// it's not necessary to put semicolon after a command everytime. It's totally dependent on yourself.
// always declare a variable before using them. Also can define variable with declaring
// variables are defined using keyword "let"
// never redeclare a variable again, therefore to change a variable type it again without 'let'


let myName = "Archit" // here the variable 'myName' is of type string
let lastName = "Jain" // here the variable 'lastName' is of type string

let intScore_1 = 107 // here the variable 'intScore_1' is of type integer
let intScore_2 = 20 // here the variable 'intScore_2' is of type integer
let strScore_1 = "107" // here the variable 'strScore_1' is of type string and not integer
let strScore_2 = "20" // here the variable 'strScore_2' is of type string and not integer

let intScore = intScore_1 + intScore_2 // adding two integers
let strScore = strScore_1 + strScore_2 // adding two strings

console.log("myName: " + myName) // prints value of variable 'myName'
console.log("\"name\": " + "name") // this will print as 'myName' and not 'Archit' as we've passed a string and not variable.
console.log("Full name: " + myName + " " + lastName) // printing two strings with space character in between 

myName = "Java" // redeclaring/renaming variable 'myName'
lastName = "Script" // redeclaring/renaming variable 'lastName'
console.log("Renamed : " + myName + " " + lastName) // printing renamed variables 

console.log("intScore: " + intScore) // integers when added results in summing themselves
console.log("strScore: " + strScore) // strings when added results in appending themselves

