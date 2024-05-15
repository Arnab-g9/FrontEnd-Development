// splice method -- mutated method. it will change the original array
// start, delete count -- how many no of element you want to delete, insert

const myArray = ["item1", "item2", "item3"];
// delete -- in return give deleted element inside of new Array
const deletedItem = myArray.splice(1, 1);
console.log("deleted item ", deletedItem);

// insert
// myArray.splice(1, 1, "value2");

// insert and delete
const deleteItemArray = myArray.splice(
  1,
  2,
  "inserted Item1",
  "inserted Item2"
);

console.log(myArray);
console.log(deleteItemArray);
