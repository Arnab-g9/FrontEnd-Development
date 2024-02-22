// fill method
// use -----
// if we want a array od size 10 and fill that array with -1, then how we will do?

const myArray = new Array(10).fill(-1);

console.log(myArray);

/**
 * fill method take 3 parameters: fill(value, startIndex, endIndex);
 */

const myArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
myArray2.fill(0, 2, 5);
console.log(myArray2);
