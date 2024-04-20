//closures
//

// function can return functions
function myFunc() {
  function innerFunction() {
    console.log("hello world");
  }
  return innerFunction;
}
const ans = myFunc(); // it will store the function as result
ans(); // and now we can call the result

function printFullName(firstName, lastName) {
  function printName() {
    console.log(firstName, lastName);
  }
  return printName; // what is closure? when function returns from another function then it returns with its local memory/ variables. like here firstName, and lastName is return with printName.
}
const name = printFullName("harshit", "sharma");
name();

// exmp-2
function hello(x) {
  const a = "varA";
  const b = "varB";
  return function () {
    console.log(a, b, x);
  };
}
const ans2 = hello("arg");
ans2();

// exercise when we pass any number it shoud give power value of that no
function myFunction(power) {
  return function (number) {
    return number ** power;
  };
}
const cube = myFunction(4);
const ansP = cube(3);
console.log(ansP);

//exercise - 2

function func() {
  let counter = 0;
  return function () {
    if (counter < 1) {
      console.log("Hi you called me");
      counter++;
    } else {
      console.log("mai ekbar call ho chuka hu");
    }
  };
}

const ansp2 = func(); // the function return with it local memory and local memory variable
ansp2(); // firts time counter < 1
ansp2(); // second time counter > 1
ansp2();
ansp2();
