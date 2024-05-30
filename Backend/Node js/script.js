const fruitValues = require("./Fruits");
console.log(fruitValues[0]);

const someValue = require("./math");
console.log(someValue);

// let args = process.argv;
// for (i = 0; i < args.length; i++) {
//   console.log(args[i]);
// }
console.log(someValue.sum(2, 2));
console.log(someValue.PI);
