
// TIPS
// functions and methods are the same. If it's inside object or class then we call it as a method or else it's a  function

// object
let myTodos = {
    day: 'Monday',
    meetings: 0,
    meetDone: 0,
}

// function
let addMeeting = function(objTodo, meetNos = 0){
    objTodo.meetings = objTodo.meetings + meetNos
}

// function
let meetingsDone = function(objTodo, meetNos = 0){
    objTodo.meetDone = objTodo.meetDone - meetNos
}

// function
let resetDay = function(objTodo){
    objTodo.meetings = 0
    objTodo.meetDone = 0
}

// function
let getSummaryOfDay = function(objTodo){
    let meetingsLeft = objTodo.meetings + objTodo.meetDone
    return `You have ${meetingsLeft} meetings today!`
}

addMeeting(myTodos, 4)
addMeeting(myTodos, 2)

meetingsDone(myTodos, 5)

let summary = getSummaryOfDay(myTodos)
console.log(summary);

// -----------------------------------------------------------------------------------------------------------------------

// OR ELSE YOU CAN MAKE FUNCTIONS INSIDE THE OBJECT TO USE THE COMANDS EASILY AS:
// myTodos.addMeeting() 
// AND NOT AS 
// addMeeting(myTodos, 4)   for which passing the object in function and whole stuff

// let myTodos = {
//     day: 'Mondays',
//     meetings: 0,
//     meetDone: 0,

//     addMeeting: function(){
//         console.log('Hey, i\'m in the function');
//         console.log(this); // 
//     }

// }

// myTodos.addMeeting() // calling function inside an object