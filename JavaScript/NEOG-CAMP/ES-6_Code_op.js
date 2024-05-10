// ex-1 ----------
// if (true) {
//   //   var a = 42;
//   let a = 42;
// }
// console.log(a); // op- a is not defined. because let is block scope. if it was var then we can access

// ex-2 ----------
// let a = 42;
// {
//   let a = 100;
// }
// console.log(a); op-100

// ex-3 -------------
// let a = 100;
// function App() {
//   console.log("1", a); // this line will give error because let is block scope. and block scope veriable should be decleared on top of the block nut it is declared bottom so it will give error and the code will not run.
//   let a = 42;
//   console.log("2", a);
//   {
//     let a = 100;
//   }
//   console.log("3", a);
// }
// App();

// concept-02 --TDZ. Temporal Dead Zone
// function something() {
//   console.log(a);
//   let a = 32;
// }
// something(); // always initialize the variable before use it.
// The TDZ ia an important concept in JavaScript because it helps prevent accidental access to uninitialized variables. ehich can lead to unexpected behaviour in your code.

// concept-03: hoisting
// function something() {
//   console.log(a);
//   var a = 2; // in var variable it will give undefined but in case of const and let it will give error
// }
// something();
// understanding: in this code the variable a is declared within the something function using the var keyword which makes it function-scoped in javaScrip,. variable declared with var are hoisted to the top of their scope and are intialized with a value of undefined when they aredeclared.
