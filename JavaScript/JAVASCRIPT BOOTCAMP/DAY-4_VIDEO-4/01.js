// important array methods -- these are not mutated method

// forEach
// map
// filter
// reduce

const numbers = [4, 2, 5, 8];

function multiplyBy2(number, index) {
  console.log("index is ", index);
  console.log(number * 2);
}

// traditional for loop
// for (let i = 0; i < numbers.length; i++) {
//   multiplyBy2(numbers[i], i);
// }

// forEach -- it takes call back and pass the element as the argument and pass index as second argument
numbers.forEach(multiplyBy2);

// inline callback
numbers.forEach(function (number, index) {
  console.log("index is ", index);
  console.log(number * 2);
});

numbers.forEach((number) => {
  // first argument as a number
  console.log("multiply by 4 ", number);
  console.log("multiply by 4 ", number * 4);
});

const users = [
  { firstName: "harshit", age: 23 },
  { firstName: "mohiy", age: 21 },
  { firstName: "nitish", age: 22 },
  { firstName: "garima", age: 20 },
];

users.forEach(function (user) {
  console.log(user.firstName);
});
users.forEach((user, i) => {
  console.log(user.firstName, i);
});
// for (let user of users) {
//   console.log(user.firstName);
// }
