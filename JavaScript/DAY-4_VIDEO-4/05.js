// sort method -- this method is mutable method. this will change the original array
const numbers = [4, 7, 5, 6, 10, 2, 1];
numbers.sort((a, b) => {
  return a - b; //aesc sort
  //   return b-a; // desc sort
}); //this method will chenge the original array and will not return any modified array
console.log(numbers);

const products = [
  { productId: 1, productName: "p1", price: 300 },
  { productId: 2, productName: "p2", price: 3000 },
  { productId: 3, productName: "p3", price: 200 },
  { productId: 4, productName: "p4", price: 500 },
];

const sorted = products.slice(0).sort((a, b) => {
  return a.price - b.price;
});

console.log(sorted);
