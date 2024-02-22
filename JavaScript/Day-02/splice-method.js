//splice method
//start, delete, insert

const myArray = ["item1", "item2", "item3"];

//delete
const deletedItem = myArray.splice(1, 1);
console.log(myArray);
console.log(deletedItem);

// insert
myArray.splice(1, 0, "item4");
console.log(myArray);

// insert and delete simulteniously
const deletedItem2 = myArray.splice(1, 2, "inserted item1", "inserted item2");
console.log(myArray);
console.log(deletedItem);
