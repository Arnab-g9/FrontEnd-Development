// rest Parameter
function myFunc(a, b, c, ...d) {
  console.log(`a is ${a}`);
  console.log(`b is ${b}`);
  console.log(`c is ${c}`);
  console.log(`d is ${d}`);
}
myFunc(3, 4, 5, 6, 7, 8, 9);

// so rest parameter in return will give you an array of rest of the unwanted elements

// -- practiece hoisting + rest parameter
console.log(addAll(3, 4, 5, 6, 7, 8, 9, 10));

function addAll(...a) {
  let sum = 0;
  for (let ele of a) {
    sum += ele;
  }
  return sum;
}
