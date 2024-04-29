/*
// understand callback
function myFunc(callback) {
  console.log("Function is doing some task 1");
  callback();
}

// function myFunc2() {
//   console.log("function is doing task 2");
// }
myFunc(function () {
  console.log("function is doing task 2");
});
*/

function getTwoNumbersAndAdd(number1, number2, onSuccess, onFail) {
  if (typeof number1 === "number" && typeof number2 === "number") {
    onSuccess(number1, number2);
  } else {
    onFail();
  }
}
function onSuccess(num1, num2) {
  console.log(num1 + num2);
}
function onFail() {
  console.log("wrong data type");
  console.log("please pass numbers only");
}
getTwoNumbersAndAdd(4, 5, onSuccess, onFail);
