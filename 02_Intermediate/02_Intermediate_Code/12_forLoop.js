// for loop syntax

const days = ['sun', 'mon', 'tue', 'wed', 'thur', 'fri', 'sat']

// printing in same order
for (let i = 0; i < days.length; i++) {
    console.log(days[i]);
}

console.log("---------");

// printing in reverse order
for (let i = days.length - 1; i >= 0; i--) {
    console.log(days[i]);
}

console.log("---------");

// another method of for loop to iterate over arrays
days.forEach(function(day, i){
    console.log(`Today is day ${i+1} - ${day}`);
})