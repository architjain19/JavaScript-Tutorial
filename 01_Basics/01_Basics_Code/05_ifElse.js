// TIPS
// '=' is an assignment operator
// '==' is a comparision operator
// '===' is comparision operator with datatype

// if-else condition 
if (1=='1') {
    // (1=='1') is equal as there's == operator
    console.log("I'm in the IF block")
} else {
    console.log("I'm in the ELSE block")
}

// if-else-if condition 
if (1==='1') {
    // (1==='1') is not equal as there's === operator for checking value as well as datatype
    console.log("I'm in the IF block")
} else if (1=='1') {
    // (1=='1') is equal as there's == operator for checking only value and not the datatype
    console.log("I'm in the ELSE IF block")
} else {
    console.log("I'm in the ELSE block")
}

// Example
var whoIsHere = 'unknown'

if (whoIsHere==='user') {
    console.log('Welcome User');    
} else if (whoIsHere==='teacher') {
    console.log('Welcome Teacher');    
} else {
    console.log('Please verify yourself');
}