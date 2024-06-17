// hoisting
hello(); // in function declaration case we can call the function before the function body/declaration. In case of function expression it will not work.
function hello() {
  console.log("hello world");
}
hello();

//Hi(); // in case of function expression we can not do this it will give error. And same will happen for arrow function
const Hi = function () {
  console.log("HI");
};

// this behaviour is called hoisting

// in case of variable ---------
// var
console.log(helloVar); // it will give undefine
var helloVar = "hello world";

// let & const
// console.log(var1); it will give reference error & same will happen for const
let var1 = "hello";
