// reduce method
const numbers = [1, 2, 3, 4, 5];
// aim: sum of all the numbers in array
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
console.log(sum);

// accumulator, currentValue, return
//    1             2            3
//    3             3            6
//    6             4            10
//    10            5            15

// const sum = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
//   }, 100); // here we can pass the initial value of the accumulator which is 100. then we can get 115 value
//   console.log(sum);

// accumulator, currentValue, return
//    100           1            101
//    101           2            103
//    103           3            106
//    106           4            110
//    110           5            115

const userCart = [
  { productId: 1, productName: "mobile", price: 12000 },
  { productId: 2, productName: "laptop", price: 22000 },
  { productId: 3, productName: "tv", price: 15000 },
];

const totalAmount = userCart.reduce((totalPrice, currentProduct) => {
  return totalPrice + currentProduct.price;
}, 0);
console.log(totalAmount);
