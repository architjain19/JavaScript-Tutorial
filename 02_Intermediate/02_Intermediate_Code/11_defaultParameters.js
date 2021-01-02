// TIPS
// whenever the parameters for a variables are not defined then it will take it's value as 'undefined'

// function with undefined parameters
let guestUser_01 = function (name, courseCount) {
    return "Hello " + name + " and your course count is " + courseCount
}
// undefined parameter passed
console.log("Output: " + guestUser_01()); // 'Output: Hello undefinedand your course count isundefined' as the variables is not defined

// function with defined parameters
let guestUser_02 = function (name = 'Unknown', courseCount = 0) {
    return "Hello " + name + " and your course count is " + courseCount
}
// only one parameter passed
console.log("Output: " + guestUser_02('Archit')); // 'Output: Hello undefinedand your course count isundefined' as the variables is not defined
