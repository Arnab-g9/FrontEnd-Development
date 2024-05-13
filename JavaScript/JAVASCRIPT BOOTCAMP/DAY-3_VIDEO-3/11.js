// callback function
function myFunc2(name) {
  console.log("inside myFunc2");
  console.log(`your name is ${name}`);
}

function myFunc(callback, name) {
  console.log(callback);
  callback(name);
}

myFunc(myFunc2, "arnab");

// so what is callback function ? - when we take function as a input and call that input function inside the other function then it is called the callback function
