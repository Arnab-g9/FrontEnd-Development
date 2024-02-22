// every method
const number = [2, 4, 6, 8, 10];
const ans = number.every((number) => number % 2 === 0);

/**
 * every method: as the name suggest it will return true if the call back functions condition apply on every element and get passed then it will return true.
 * if any element faild to passthen it will return false
 */

//------ use -------
//------- check wheather the cart item's price are less then 30000
const userCart = [
  { productId: 1, productName: "mobile", price: 12000 },
  { productId: 2, productName: "laptop", price: 22000 },
  { productId: 3, productName: "tv", price: 15000 },
];

const ans2 = userCart.every((cartItem) => {
  return cartItem.price <= 30000;
});
console.log(ans2);
