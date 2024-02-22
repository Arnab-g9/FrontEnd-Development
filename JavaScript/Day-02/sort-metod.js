//sort-method -- mutate method
/** sort the numbers 5,9,1200,400,3000 */
const numbers = [5, 9, 1200, 400, 3000];
numbers.sort(); /** sort method change the array or modify the array that's why it is called mutate method */

/** here only numbers.sort did not give us the expected output because internally sort method convert the every element into a string and takes every elements first characater and compare it's every elemnt's first character na dbased upon that it sort the array. like--
 * ["5", "9", "1200", "400", "3000"] --> and it's first character ascii codes are -> [53, 57, 49, 52, 51].
 */

/**
 * but in case of string array it will sort the array in lexographically sorted order/dictionary order or correct order just write arrayname.sort();
 */
console.log(numbers);

/** ----- correct way ------ */
numbers.sort((a, b) => {
  return (
    a - b // a-b for aescending order
    // for descending order write b-a
  ); /** if a-b==+ve then put b first then put a, if a-b==-ve then keep a first then b */
});
console.log(numbers);

/**
 * ------------------ use-------------------
 * filter price low to high
 *
 */

const products = [
  { productId: 1, productName: "p1", price: 300 },
  { productId: 2, productName: "p2", price: 3000 },
  { productId: 3, productName: "p3", price: 200 },
  { productId: 4, productName: "p4", price: 8000 },
  { productId: 5, productName: "p5", price: 500 },
];

products.sort((a, b) => {
  return (
    a.price - b.price
  ); /** but it will actually modify the products array so to prevent the murtation of the array we can clone the array and then we can apply the sort method on  cloned array */
});
console.log(products);
/** how to do it */
const lowTohigh = products.slice(0).sort((a, b) => {
  return a.price - b.price;
});
console.log("low to high sorted ", lowTohigh);

const highToLow = products.splice(0).sort((a, b) => {
  return b.price - a.price;
});
console.log(highToLow);
