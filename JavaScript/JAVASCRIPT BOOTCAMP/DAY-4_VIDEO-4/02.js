// map method
const numbers = [3, 4, 6, 1, 8];

const arr = numbers.map((number, index) => {
  console.log(index);
  return number * 2;
});

console.log(arr);

// square ecah and every element of numbers array using map method using outside callback

const square = (number) => {
  return number * number;
};

const sqarr = numbers.map(square);
console.log(sqarr);

// print the firstName of all the user obj
const users = [
  { firstName: "harshit", age: 23 },
  { firstName: "mohiy", age: 21 },
  { firstName: "nitish", age: 22 },
  { firstName: "garima", age: 20 },
];

const fNameArr = users.map((user) => {
  return user.firstName;
});

console.log(fNameArr);
