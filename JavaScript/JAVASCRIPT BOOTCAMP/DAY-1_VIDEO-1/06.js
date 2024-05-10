//  string useful methods
//  trim()
//  toUpperCase()
// toLowerCase()
// slice()

// Strings are immutable so what ever the method we apply on the string it will not change the original string. These methods just return the other string and that we have to store inside the same variable or other variable

// trim()
let firstName = "    harshit    ";
console.log(firstName.length);
let newString = firstName.trim(); //"harshit"
console.log(newString.length);
// console.log(firstName.trim().length);

//  toUpperCase()
let newUpperCaseString = firstName.toUpperCase();
console.log(newUpperCaseString);

//  toLowerCase()
let newLowerCaseString = firstName.toLowerCase();
console.log(newLowerCaseString);

//  slice method -- it islike substring in Java
let newSliceString = newString.slice(0, 4);
console.log(newSliceString);
