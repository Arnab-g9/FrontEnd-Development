// lexcal scope
const myVar = "value1";

function myApp() {
  //   const myVar = "value1";
  function myFunc() {
    // const myVar = "value59";
    console.log("inside myFunc", myVar);
  }
  const myFunc2 = function () {};
  const myFunc3 = () => {};
  console.log(myVar);
  myFunc();
}

myApp();

/** so lexical scope is that in myFunc we print myVar, so it first check is myVar is present it's own scope if yes then it will print the value of it's own scope and if not then it will go one level up and check is present myVar in this scope if not it will go above for every step eventuall it can go to the block scope and if present then it will take the value of that and print that */
