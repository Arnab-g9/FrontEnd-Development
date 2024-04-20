let numbers = [1, 2, 3];
// prototype
// prototype -- functions

// internally how js create array is --
let number = new Array(1, 2, 3);
console.log(numbers); // internally js create the array using Array constructor function and it has all the methods that we use daily in our life
console.log(Object.getPrototypeOf(numbers));
