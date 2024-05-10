// undefined
//  null

let firstName; // incase of let and var we can use undefine but in case of const it will give error. in case of const variable we have to initialize the const variable
console.log(firstName);

// null
let myVariable = null;
console.log(myVariable);
console.log(typeof myVariable); // object
// type of null is object -- this is a bug/error in javascript

//  BigInt
let myNumber = 123;
console.log(myNumber);
console.log(Number.MAX_SAFE_INTEGER);

let newNumber = BigInt(12344455567584933644783636372);
//this is also bigint and 123n this is also bigint
// BigInt operation done on BigInt data type not with other data type
console.log(typeof newNumber);
