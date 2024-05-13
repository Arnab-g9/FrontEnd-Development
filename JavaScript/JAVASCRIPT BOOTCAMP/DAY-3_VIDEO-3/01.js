// functions
function sum(a, b) {
  return a + b;
}
const returnValue = sum(10, 11);
console.log(returnValue);

// odd or even
// input:1 number
// op: true, false

function isEvenOrODD(num) {
  return num % 2 == 0;
}
console.log(isEvenOrODD(5) == true ? "EVEN" : "ODD");
