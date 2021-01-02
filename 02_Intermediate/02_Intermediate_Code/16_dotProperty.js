// TIPS
// properties are accessed without parenthesis i.e. 'variable.property'
// methods are accessed with parenthesis i.e. 'variable.method()'
// see for different properties and methods in the documentation by 'mdn javascript'

let userEmail = '   arc0123 '
let password = '1234'

console.log("Password length: " + password.length); // return length of string 'password'
console.log("User email to uppercase: " + userEmail.toUpperCase()); // return string with all characters uppercased
console.log("Trim unwanted spaces: " + userEmail.trim()); // trims out all blank spaces entered in the string

let userEmailChecker = function(userEmail){
    if ((userEmail.includes(123)) && (userEmail.length > 6)) {
        return true
    } else {
        return false
    }
}

let passwordChecker = function(password){
    if ((password.includes(1234)) && (password.length > 8)) {
        return true
    } else {
        return false
    }
}

console.log("User email checking status: " + userEmailChecker(userEmail));
console.log("Password checking status: " + passwordChecker(password));
