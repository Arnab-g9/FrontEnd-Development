// default parameters
function addTwo(a, b = 1) {
  // this is the default parameter syntax. Here default value of 'b' will be '1'

  return a + b;
}
const ans = addTwo(4); // if we don't pass the second value then it will give NaN. Because the 2nd value is Undefined and undefine+any intger = NaN
console.log(ans);
