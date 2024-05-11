// VVI - primive vs reference data types
let num1 = 6;
let num2 = num1;
console.log("value of num1 is ", num1);
console.log("value of num2 is ", num2);

// after incrementing num1
num1++;
console.log("value of num1 is ", num1);
console.log("value of num2 is ", num2);

// reference types
// array
let array1 = ["item1", "item2"];
let array2 = array1;
console.log("array1: ", array1);
console.log("array2: ", array2);
// push an element in the array1
array1.push("item3");
console.log("array1: ", array1);
console.log("array2: ", array2);
array2.push("item4");
console.log("array1: ", array1);
console.log("array2: ", array2);

// array1 = [];
// console.log("array1: ", array1);
// console.log("array2: ", array2);
