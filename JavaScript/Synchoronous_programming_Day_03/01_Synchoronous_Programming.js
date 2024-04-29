//synchronous programmign vs asynchronous programming
// synchronous programming

// java script is synchronous programming and single threaded

// synchronous code
console.log("script start");
for (let i = 0; i < 1000; i++) {
  console.log("inside for loop");
}
console.log("script end");
/*
// setTimeout -- ashyncronous code
console.log("script start");
function hello() {
  console.log("hello world");
}
setTimeout(hello, 1000); // setTimeout takes one function and one time parameter in milisecond formate

console.log("script end"); */

// setTimeout with 0 second
console.log("script start");

setTimeout(() => {
  console.log("inside setTimeout");
}, 0);

for (let i = 0; i < 100; i++) {
  console.log("...");
}
console.log("script end"); // all the callback excution statement will print after all the statement print on the file
