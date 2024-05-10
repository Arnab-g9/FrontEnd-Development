// typeof operator

//  data types (primitive data types)
//  string "harshit"
//  number 2,4,5,6
//  booleans
//  undefined
//  null
//  bigInt
//  Symbol

let age = 22;
let firstName = "harshit";
console.log(typeof age);
console.log(typeof firstName);

// convert number to String.
// trick
console.log(typeof (age + " "));
// another--
let newAge = String(age);
console.log("type of newAge is ", typeof newAge);

// convert String to number
let myStr = "34";
console.log(typeof myStr);
// trick
myStr = +"34"; // just add + before the String
console.log(typeof myStr);
// another --
let newNum = Number(myStr);
console.log(typeof newNum);
