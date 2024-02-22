//reduce method
const numbers = [1, 2, 3, 4, 5];
/** aim: sum of all the methods in the array */
const sum = numbers.reduce((accumulator, currentvalue) => {
  return accumulator + currentvalue;
}, 100); /** in the call back function we can set the default value of the accumulator */
console.log(sum);

// accumulator, currentvalue, return
// 1          , 2           ,  3
// 3          , 3           ,  6
// 6          , 4           ,  10
// 10         , 5           ,  15 --> this is the ans (15)

/**
 * here reduce method reduce the array give us a single sum value. reduce method has return value
 */

/** get the total cart items price */
const userCart = [
  { productId: 1, productName: "mobile", price: 12000 },
  { productId: 2, productName: "laptop", price: 22000 },
  { productId: 3, productName: "tv", price: 15000 },
];

const totalPrice = userCart.reduce((totalPrice, currentProduct) => {
  return totalPrice + currentProduct.price;
}, 0);

console.log(totalPrice);
