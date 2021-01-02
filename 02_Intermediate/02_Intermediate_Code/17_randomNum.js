let numOne = 22
let numTwo = 7

let result = 22/7
result = result.toFixed(2) // 'toFixed(2)' method formats the result of decimal value upto 2 digits
console.log(result); 

console.log(Math.floor(result)); // return the bottom most integer value
console.log(Math.ceil(result)); // return the top most integer value

console.log(Math.random()); // gives a random number between '0.00' and '0.99'
console.log(Math.random() * 10); // gives a random number between '0.00' to '9.99'

let lowerBound = 20
let upperBound = 25

let randomNum = lowerBound + Math.floor(Math.random() * (upperBound - lowerBound + 1)) // number between 20 to 25
console.log(randomNum);