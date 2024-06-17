// boolean and comparison operator

// booleans
//  true, false

let num1 = "7";
let num2 = 7;

console.log(num1 > num2);

//  == vs ===
console.log(num1 == num2); // '==' it only takes care of values not with the data types. here is the same value but different data types. like one is string and another is number.
console.log(num1 === num2); // '===' it takes care of values as well as the data types. so this is more preferable and most used one.

// != vs !==
console.log(num1 != num2); // the explanation is samfor != with ==
console.log(num1 !== num2); // the explanation is samfor !== with ===

// if else condition

let age = 17;
if (age > 18) console.log("user can play the game");
else console.log("user can not play the game");
