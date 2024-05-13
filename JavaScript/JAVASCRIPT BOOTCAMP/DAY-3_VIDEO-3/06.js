// lexical scope

// const myVar = 0;
function myApp() {
  const myVar = "value1";
  function myFunc() {
    const myVar = "value59"; // const variable with same name can be declare on different level of code block but not on the same level
    console.log("inside myFunc ", myVar);
  }
  //   const myFunc2 = function () {};
  //   const muFunc3 = () => {};
  console.log(myVar);
  myFunc();
}
myApp();

// lexical scope: so inside myFunc there is myVar variable and outside of myFunc and inside of myApp there is myVar. now when we call the myFunc which value will print? the myVar which is declare inside the myFunc will print(value59). if any case the myVar is not present inside the myFunc then it will print the value69 which is present inside the myApp. Because the lexical scope of myFunc is myApp because the myFunc is declare inside of myApp.And if any case the myVar is not declare inside the myApp and declared on global scope then it will print that value which is declare on the global scope.

// so long story short if we want to access any variable/function which is not present in it's scope it will check that is present in it's lexical scope or one upper level if not it will check upper one and so on. And one time come when it will recah global scope if then the variable is not found on the global scope then it will print error/undefined
