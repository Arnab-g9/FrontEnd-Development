//default-parameters
function addTwo(a, b) {
  if (typeof b === "undefined") {
    /** if only one parameter is pass then we can check the secend parameter type and based on that it will set the default value of the parameter as 0 */
    b = 0;
  }
  return a + b;
}

// const ans = addTwo(4, 5);
const ans = addTwo(4); /** here we pass only one parameter */
console.log(ans);

/**
 * -------------- But here is a simple way --------------
 */

function addTwoNum(a, b = 0) {
  return a + b;
}
const res = addTwoNum(4);
console.log();
