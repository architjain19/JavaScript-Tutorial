// TIPS
// global variables can be accessed everywhere
// local variables can only be accessed in it's scope(block)
// 'var' is used for global variables 
// 'let' is used for normal variable which can be accessed as global by defining it outside the block(in top)

let iAmGlobal = 'globalValue'

if (true) {
    let iAmLocal = 'localValue'
    // var iAmLocal = 'localValue' // 'var' will make the variable 'iAmLocal' as global variable
    iAmGlobal = 'updatedGlobalValue'
    console.log(iAmGlobal + " inside if"); // global variable can be accessed everywhere
    console.log(iAmLocal + " inside if"); // can access local variable as know it's in the scope
}

// console.log(iAmLocal); // gives an error as it's an local variable
console.log(iAmGlobal + " outside if");