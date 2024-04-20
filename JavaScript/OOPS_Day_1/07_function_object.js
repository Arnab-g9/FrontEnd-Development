function hello() {
  console.log("hello world");
}

// javascript function ===> function + object

console.log(hello.name);

// you can add your own properties
// hello.myOwnProperty = "very unique value"
// console.log(hello.myOwnProperty);
// name property ---> tells function name;
// function provides more usefull properties

console.log(hello.prototype); //{} prototype provides free space if we need to add any key value pair in function in future then we can simply add via prototype property

// only functions provide prototype property

// now how to add property let's see
hello.prototype.abc = "abc";
hello.prototype.xyz = "xyz";
hello.prototype.sing = function () {
  return "lalalla";
};
console.log(hello.prototype);
console.log(hello.prototype.sing());
