// filter methods -- return the new array with the elements which meets the particular condition provided in the callback

const numbers = [1, 2, 3, 4, 5];
// filter out even number
const even = function (number) {
  return number % 2 == 0;
};

const evenArr = numbers.filter(even);
console.log(evenArr);

const oddNums = numbers.filter((number) => {
  return number % 2 == 1;
});
console.log(oddNums);
