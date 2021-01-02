// TIPS
// use '===' operator for identitifying in objects

const myTodos = ['Buy milk packet', 'Go to college', 'Complete your project']
console.log("Wrong index: " + myTodos.indexOf('Buy milk')); // return '-1' because the element passed is not present in the array 'myTodos'
console.log("Correct index: " + myTodos.indexOf('Buy milk packet')); // return index of element
console.log();
console.log('-----------');

// array of objects
const newTodos = [{
    title: 'Buy milk packet', 
    isDone: true
}, {
    title: 'Go to college', 
    isDone: false
}, {
    title: 'Complete your project',
    isDone: true 
}]

// finding the string in array of objects
const index = newTodos.findIndex(function(todos, index){
    console.log(todos);
    return todos.title === 'Go to college'
})
console.log("Index: " + index);
console.log();
console.log('-----------');

// function for finding title using 'findIndex()'
const findIndexTodo = function(anyTodos, title){
    const index = anyTodos.findIndex(function(todo, index){
        return todo.title.toLowerCase() === title.toLowerCase()
    })
    return anyTodos[index]
}

let output = findIndexTodo(newTodos, 'GO TO COLLEGE')
console.log(output);
console.log();
console.log('-----------');

// function for finding title using 'find()'
const findTodo = function(anyTodos, title){
    const titleReturned = anyTodos.find(function(todo, index){
        return todo.title.toLowerCase() === title.toLowerCase()
    })
    return titleReturned
}

let outputFind = findTodo(newTodos, 'GO TO COLLEGE')
console.log(outputFind);
console.log();
console.log('-----------');
