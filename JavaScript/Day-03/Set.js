//iterables
// jispe hum for off loop laga sake
//string, array are iterable

//const firstName = "harshit";
// for(let char of firstName){
//     console.log(char);
// }

// const items = ["item1", "item2", "item3"];
// for (let item of items) console.log(item);

// but object is not iterable

// array like object
//jinke pas length property hoti hay
//aur jisko hum index se access kar sakte hai
//example:- string

/** Set */
// set is somewhat like array
//sets -- it is iterable
// stores data
// sets also have it's own methods
//No index-based access
//Order is not guaranteed
//unique items only (no duplicassy allowed)

// const numbers = new Set();
// numbers.add(1);
// numbers.add(2);
const numbers = new Set([1, 2, 3]);
numbers.add(4);
numbers.add(5);
numbers.add(["item1", "item2"]);
numbers.add(["item1", "item2"]);
console.log(numbers.has(1));
// here both will add in the set because here both the arrays are different
console.log(numbers);

// -- but if we do like this
const ele = [1, 2, 3, 4, 5];
const eleset = new Set();
eleset.add("h");
eleset.add("A");
eleset.add(ele);
eleset.add(ele);
// here only one ele will include because the ele array address is same
console.log(eleset);

const name = new Set("harshit");
console.log(name);

// set is iterable we can use for of loop
for (let number of numbers) {
  console.log(number);
}
console.log(numbers.size);
