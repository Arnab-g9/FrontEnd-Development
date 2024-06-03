function hello() {
  console.log("hello world");
}

//  javascript function ===> function + object
console.log(hello.name); // here we can get the function name by using the function as a object and it's name as a property.

//  you can add your own properties
hello.myOwnProperty = "very unique value";
console.log(hello.myOwnProperty);

// name property ---> tells function name;

//  function provides more usefull properties.

// console.log(hello.prototype) //{}
//  only function provides prototype property

if (hello.prototype) {
  console.log("prototype is present");
} else {
  console.log("prototype is not present");
}

// so only the function has prototype property. And other than it nothing have prototype property.

console.log(hello.prototype);
hello.prototype.abc = "abc";
hello.prototype.xyz = "xyz";
hello.prototype.sing = function () {
  return "lalala";
};
console.log(hello.prototype);
console.log(hello.prototype.sing());
