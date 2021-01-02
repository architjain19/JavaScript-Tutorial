// TIPS
// '&&' is the AND operator where both sides to be true
// '||' is the OR operator where either of the sides to be true


// 'Welcome to your courses'
let verified = true
let isLoggedIn = true
let hasPaymentToken = true
let isGuest = true

if (verified && isLoggedIn && hasPaymentToken) {
    // Executes only if all three conditions are TRUE
    console.log('Welcome to your courses');
} else if (verified || isGuest) {
    // Executes if either of two conditions are TRUE
    console.log('Welcome to free courses');
} else {
    // Executes if all three conditions are FALSE
    console.log('Please buy a course of have a guest account');
}

// 'Welcome to free courses'
verified = false
isLoggedIn = true
hasPaymentToken = true
isGuest = true

if (verified && isLoggedIn && hasPaymentToken) {
    // Executes only if all three conditions are TRUE
    console.log('Welcome to your courses');
} else if (verified || isGuest) {
    // Executes if either of two conditions are TRUE
    console.log('Welcome to free courses');
} else {
    // Executes if all three conditions are FALSE
    console.log('Please buy a course of have a guest account');
}

// 'Please buy a course of have a guest account'
verified = false
isLoggedIn = true
hasPaymentToken = true
isGuest = false

if (verified && isLoggedIn && hasPaymentToken) {
    // Executes only if all three conditions are TRUE
    console.log('Welcome to your courses');
} else if (verified || isGuest) {
    // Executes if either of two conditions are TRUE
    console.log('Welcome to free courses');
} else {
    // Executes if all three conditions are FALSE
    console.log('Please buy a course of have a guest account');
}
