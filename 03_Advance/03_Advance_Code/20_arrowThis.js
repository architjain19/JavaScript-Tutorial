// TIPS
// never use arrow functions in methods and constructor

// normal function in object
console.log("Normal function in object: ");
const cameras = {
    price: 700,
    weight: 2300,
    description: function(){
        return `This canon camera is of ${this.price}`
    }
}

console.log(cameras.description());
console.log('---------------------');

// arrow function in object
console.log("Arrow function in object: ");
const undefCameras = {
    price: 700,
    weight: 2300,
    description: () => {
        return `This canon camera is of ${this.price}`
    }
}

console.log(undefCameras.description());
console.log('---------------------');