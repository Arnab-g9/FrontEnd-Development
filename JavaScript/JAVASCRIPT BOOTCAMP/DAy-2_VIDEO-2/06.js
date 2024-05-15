// array destructuring
const myArray = ["value1", "value2", "value3", "value4"];
// let myvar1 = myArray[0];
// let myvar2 = myArray[1];
// console.log("value of myvar1 is ", myvar1);
// console.log("value of myvar2 is ", myvar2);

const [myvar1, myvar2, myvar3] = myArray;
// myvar1 = "value changed"; -- this is generally a constant variable
console.log("value of myvar1 is ", myvar1);
console.log("value of myvar2 is ", myvar2);
console.log("value of myvar3 is ", myvar3);

// if we want to store value in myvar2 to value3 then the syntax will be
const [var1, , , var2] = myArray;
console.log(var1);

// we want desire values in seperate variable and rest of the values we want to store/get in the form of array -- using rest operator / using slice method
let [v1, v2, ...v3] = myArray;
console.log(v1, v2, v3, typeof v3, Array.isArray(v3));
