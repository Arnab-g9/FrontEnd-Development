//filter-method
const array = [1, 3, 2, 6, 4, 8];

function isEven(number) {
  return (
    number % 2 == 0
  ); /** filter method's callback function always must return boolean value */
}

const numbers = array.filter(isEven);
console.log(numbers);
/**
 * so filter method also return an array based on valid condition. if the condition is satisfy then it will add the element into the new array and return it. else it will ignore the element. That's why it's call back function should return the boolean value.
 */
const evennumber = array.filter((number) => {
  return number % 2 == 0;
});
console.log(evennumber);
