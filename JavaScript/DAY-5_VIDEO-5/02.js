// Sets (it is iterable)
// store data
//  sets also have its own methods
// No index-based access
// Order is not guaranteed
// Unique items only (no duplicates allowed)
// set is iterable

const arr = [2, 3, 4, 5, 6];
const numbers = new Set([1, 2, 3, 3]);

//  how to add element
numbers.add(4);
numbers.add(5);

//  how to delete element
numbers.delete(3);
numbers.add(arr);

// numbers.add(arr); thereis no duplicasy because the array reference is same but if we store like this
numbers.add([1, 2]);
numbers.add([1, 2]);
// then the two array will save in the set because inspite of having same values it will store them because the reference is different because they were create seperately inside the memory
console.log(numbers);

// how to check if the element present inside the set or not
console.log(numbers.has(1));

// set is iterable
const set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(4);
console.log(set.size);
for (let item of set) {
  console.log(item);
}
