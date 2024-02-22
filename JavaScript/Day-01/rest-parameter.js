//rest-parameter

function myFunc(a, b, c, ...d) {
  console.log(`a is ${a}`);
  console.log(`b is ${b}`);
  console.log(`c is ${c}`);
  console.log(`d is ${d}`);
}
myFunc(3, 4, 5, 6, 7, 8);

// task - add all the parameter
function addAll(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total = total + number;
  }
  return total;
}

const ans = addAll(1, 2, 3, 4, 5, 6, 7, 8);
console.log(ans);
