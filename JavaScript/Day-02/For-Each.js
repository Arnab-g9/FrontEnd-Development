const numbers = [4, 2, 5, 8];

function multiply(number, index) {
  console.log("index is ", index);
  console.log(`${number}*2 = ${number * 2}`);
}

// for (let i = 0; i < numbers.length; i++) {
//   multiply(numbers[i], i);
// }

/**
 * ----------------- for each -------------------
 * so foreach method take a callback function as argument. For each when run every time it will pick the element of the array one by one and pick the index one by one and pass to the call back function
 */
numbers.forEach(multiply);

const names = ["Arnab", "Harshit", "jadav"];
function showNames(name) {
  console.log(
    name
  ); /** here we only take the name as argument so the index is ignored */
}
names.forEach(showNames);

/**
 * so forEcah as the name sujjest for each element it will take the each element and call the function and pass the element and it's index to the function. in foreach call back function the first argument will be the element and the second will be the index. we can/can not take the index as we wish
 */

names.forEach((name, index) => {
  console.log(name, index + 1);
});
/**
 * we can declare the callback function in the same line
 */

//--- use----
const users = [
  { firstName: "harshit", age: 23 },
  { firstName: "mohit", age: 21 },
  { firstName: "nitish", age: 22 },
  { firstName: "garima", age: 20 },
];
users.forEach((user, index) => {
  console.log(user.firstName, index);
});

users.forEach(function (user, index) {
  console.log(user.firstName, index);
});

/**
 * we can return anything or nothing in foreach method
 */
