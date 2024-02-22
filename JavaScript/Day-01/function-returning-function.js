//function returning function
function myFunc() {
  function hello() {
    return "hello world";
  }
  return hello;
}
const ans = myFunc();
console.log(ans());

/** higher order function, when we accept function as input, or return function or doing both then it is called higher order function */
