// let numbers = [1,2,3]
// internally javascript create array like this
let numbers = new Array(1, 2, 3);
// and it has a prototype and all the methods of array is linked in this prototype. that's how we get all the array methods.

console.log(Array.prototype); // this will givethe object / free space {}, where all the array methods are linked.

// or we can get the same thing via this -
console.log(Object.getPrototypeOf(numbers));

// prototype of array is Array.

// how to changethe prototype type - by default it is object but we can set the prototype of function is array. like this-
function hello() {
  console.log("hello");
}
// console.log(hello.prototype); by default is = {}
hello.prototype = []; // setting prototype of hello is array.
console.log(hello.prototype);
hello.prototype.push("1");
function add() {
  return 2 + 4;
}
hello.prototype.push(add);
console.log(hello.prototype[1]());
