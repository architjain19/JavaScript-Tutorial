// TIPS
// pre-defined elements of an array can be replaced if once declared
// 'shift' is used to eliminate the first element of array
// 'unshift' is used to append any element at the first position of array
// 'pop' is used to eliminate the element present at the end of array
// 'push' is used to append any element at the end of array 
// 'slice' is used to eliminate 'numberOf' elements starting from 'startNumber' and replacing them by a single string string 'string'

const numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven']

// replacing
numbers[1] = 'SOMETHING' // replacing a pre-defined element of an array
console.log(numbers);

// 'shift'
let eliminate = numbers.shift() // eliminates the first element of the array and stores eliminated element in variable 'eliminate'
console.log("eliminate: " + eliminate);
console.log("shift: " + numbers);

// 'unshift'
numbers.unshift('NEW') // appends the string 'NEW' at the first position(index '0') of the array
console.log("unshift: " + numbers);

// 'pop'
let poped = numbers.pop() // eliminates the last element of the array and stores eliminated element in variable 'poped'
console.log("poped: " + poped);
console.log("pop: " + numbers);

// 'push'
numbers.push('NEW') // appends the string 'NEW' at the last position of the array
console.log("push: " + numbers);

// 'splice
numbers.splice(2, 3, "SPLICE") // eliminates '3' elements starting from '2' and replacing them all by a single string string 'SPLICE'
console.log("splice: " + numbers);