// functions -- function declaration
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

// return first character of a string
function firstChar(str) {
  //   return str.charAt(0);
  return str[0];
}
console.log(firstChar("abc"));

// find an element in index from an array if present and if not then return -1
function find(arr, ele) {
  for (let index in arr) {
    if (arr[index] === ele) return index;
  }
  return -1;
}
const arr = [1, 2, 27, 9, 6];
console.log(find(arr, 9));
