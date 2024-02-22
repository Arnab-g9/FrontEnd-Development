//map method
const numbers = [3, 4, 6, 1, 8];

const squars = function (number) {
  return number * number;
};

const squareNumber = numbers.map(squars);
console.log(squareNumber);
/**
 * so map method perform the operation on numbers and return the new array. so always use return in map method
 */
const squareNumber2 = numbers.map((number, index) => {
  return `index: ${index} and element: ${number * number}`;
});
console.log(squareNumber2);
// console.log(typeof squareNumber2[0]);

const users = [
  { firstName: "harshit", age: 23 },
  { firstName: "mohit", age: 21 },
  { firstName: "nitish", age: 22 },
  { firstName: "garima", age: 20 },
];

const userNames = users.map((user) => {
  return user.firstName;
});
console.log(userNames);

/**
 * so map method always return an array
 */
