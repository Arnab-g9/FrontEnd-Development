const sum = (a, b) => {
  return a + b;
};
const mul = (a, b) => {
  return a * b;
};
const PI = 3.14;
const g = 9.8;

// Exporting the object
// let obj = {
//   sum: sum,
//   mul: mul,
//   PI,
//   g,
// };
// module.exports = obj;

// Different way of exporting object
module.exports = {
  sum: sum,
  mul: mul,
  PI,
  g,
};

// Another way of exporting something
// module.exports.sum = (a, b) => a + b;
// module.exports.mul = (a, b) => a * b;
// module.exports.PI = 3.14;
// module.exports.g = 9.8;
// now we can exclude module and also export like this export.sum = (a,b)=>a+b;
