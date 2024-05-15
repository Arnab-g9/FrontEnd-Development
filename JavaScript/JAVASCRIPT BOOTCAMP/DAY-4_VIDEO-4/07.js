//  every method -- it will check in the array all the elements pass the particular condition. if all the elements pass the certain condition then it will return true else return false;

const numbers = [2, 4, 6, 8, 10];
const isAllEven = numbers.every((number) => number % 2 === 0);
console.log(isAllEven);

// check every products price < 30000
const userCart = [
  { productId: 1, productName: "mobile", price: 12000 },
  { productId: 2, productName: "laptop", price: 22000 },
  { productId: 3, productName: "tv", price: 15000 },
];

const check = userCart.every((item) => item.price < 30000);

console.log(check);
