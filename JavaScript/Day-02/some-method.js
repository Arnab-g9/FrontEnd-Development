//some method
const numbers = [3, 5, 8, 9];
//if there is any one number that is even then some method will return true;
const ans = numbers.some((number) => {
  return number % 2 === 0;
});
console.log(ans);

//----- use ------
//-- check in userCart if there is present any item whoes price is > 20000
const userCart = [
  { productId: 1, productName: "mobile", price: 12000 },
  { productId: 2, productName: "laptop", price: 22000 },
  { productId: 3, productName: "tv", price: 15000 },
];

const ans2 = userCart.some((item) => {
  return item.price >= 20000;
});
console.log(ans2);
/**
 * some method's return type is boolean
 */
