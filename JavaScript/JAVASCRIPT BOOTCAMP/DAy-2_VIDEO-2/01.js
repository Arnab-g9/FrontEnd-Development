// intro to arrays
//  reference type
// how to create arrays

// Array - ordered collection of items

let fruits = ["apple", "mango", "grapes"];
console.log(fruits);
console.log(fruits[1]);

let mixed = [1, 2, 3, 4, "string", null, undefined];
console.log(mixed);

// change element in an particular index
fruits[1] = "banana";
console.log(fruits);

// [NB: All the reference type type is Object]. like array is object

// check type of array
console.log(typeof fruits);

// check that it is an array
console.log(Array.isArray(fruits));
// console.log(Array.isArray(Object));
let obj = {};
console.log(Array.isArray(obj));

// array Indexing
