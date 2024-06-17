// some methods
const numbers = [3, 5, 8, 9];
// there is atleast one number which is even -- if present -- then some method will return true
// if a single no not present which is even then it will return false
// long story short: there shouldbe atleast some or one element that should pass the certain condition to get the result as true else no element is there which does not pass the certain condition then it will return false.

const ans = numbers.some((number) => number % 2 == 0);
console.log(ans);

// check in the userCart if any product is there which's value is greater then 150000
const userCart = [
  { productId: 1, productName: "mobile", price: 12000 },
  { productId: 2, productName: "laptop", price: 22000 },
  { productId: 3, productName: "tv", price: 15000 },
  { productId: 4, productName: "macbook", price: 250000 },
];

const check = userCart.some((cartItem) => cartItem.price > 150000);
console.log(check);
