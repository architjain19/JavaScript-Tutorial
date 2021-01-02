// TIPS
// in arrow function, providing '{}' braces is not compulsory. It totally depends on yourself 

// normal function
console.log("Normal function: ");
const hello = function(name){
    return `Hey there, ${name}!`
}
console.log(hello("Archit"));
console.log('---------------------');

// arrow function
console.log("Arrow function: ");
const arrowHello = (name) => `Hey there, ${name}!`  
console.log(arrowHello("Archit"));
console.log('---------------------');

// array of objects
const todos = [{
    title: 'Buy milk packet', 
    isDone: true
}, {
    title: 'Go to college', 
    isDone: true
}, {
    title: 'Complete your project',
    isDone: false 
}]

// checking with normal function
console.log("Normal function: ");
const thingsDone = todos.filter(function(todo){
    return todo.isDone === true
})
console.log(thingsDone);
console.log('---------------------');

// checking with arrow function
console.log("Arrow function: ");
const arrowThingsDone = todos.filter((todo) => todo.isDone === true)
console.log(arrowThingsDone);
console.log('---------------------');