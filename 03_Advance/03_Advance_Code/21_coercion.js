// TIPS
// never let javascript predict for your commands
// always keep you code with same entities i.e. ('5' + '5') and not ('5' + 5)
// 'false', '0', '', 'null' and 'undefined' are considered as false conditions
// if empty object '{}' or empty array '[]' is passed them javascript accepts it as true value
// except for empty string '' and others mentioned above, everything is considered as true value

console.log("'5' - 5: " + ('5' - 5)); // js predicts this whole logic as an integer and hence, wrong combination so, output is '0'
console.log("'5' + 5: " + ('5' + 5)); // js predicts this whole logic as a string and hence, combination comes with output as '55'
console.log("true + 5: " + (true + 5)); // true is considered as '1' and output is (1 + 5) i.e. '6'
console.log("false + 5: " + (false + 5)); // false is considered as '0' and output is (0 + 5) i.e. '5'

const type = typeof '5'
console.log("Type of: " + type);

let numFalse = 0 // bydefault if statement considers number '0' as 'false' and '1' as 'true'
if (numFalse) {
    console.log("I'm in IF block because condition is true");
} else {
    console.log("I'm in ELSE block because condition is false");
}