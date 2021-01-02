// TIPS
// to reference an property(element) of an object inside the same object we use 'this' keyword
// if function is defined inside object then we don't need to pass object to the function for updating it

let myTodosOne = {
    day: 'Mondays',
    meetings: 0,
    meetDone: 0,

    addMeeting: function(num){
        console.log('Hey, i\'m in the function object one');
        console.log(this); // 'this' keyword will refer to only 'myTodoOne' object properties 
        this.meetings = this.meetings + num
    },

    summary: function(){
        return `You have ${this.meetings} meetings today`
    }

}

myTodosOne.addMeeting(4) // calling function inside an object
console.log(myTodosOne.summary());
