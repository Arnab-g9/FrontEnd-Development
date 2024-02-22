function func2(name) {
  console.log("inside my func2 ", name);
}
function myFunc(callback) {
  console.log("inside myFunc");
  callback("harshit");
}

myFunc(func2);

/**
 * so call back function is a function which take fnction as a argument and call that function
 */
