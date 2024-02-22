// hoisting

//------ in case of function --------
hello();

function hello() {
  console.log("hello world");
} /**
in this case we can call the function before it's declaration. but in the case of function expression we can not call the function before it's declaration.
*/

good();

var good = function () {
  console.log(
    "good morning"
  ); /** in this case it will give error. in case of var, let and const it will give error*/
};

//------ in case of var -------
console.log(name);
var name = "Arnab";
console.log(name);

//---- function inside function ------
const app = () => {
  const myFunc = () => {
    console.log("hello form myFunc");
  };
  const addTwo = (num1, num2) => {
    return num1 + num2;
  };
  const mul = (num1, num2) => {
    return num1 * num2;
  };
  console.log("inside app");
  myFunc();
  console.log(addTwo(2, 3));
  console.log(mul(2, 3));
};
