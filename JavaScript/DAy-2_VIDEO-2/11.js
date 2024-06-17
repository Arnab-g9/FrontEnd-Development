// spread operator
const array1 = [1, 2, 3];
const array2 = [5, 6, 7];

const newArray = [...array1, ...array2];
console.log(newArray);

// how to spread string inside of an array
const newArr = [..."abc"];
console.log(newArr);

// spread operator in object
const obj1 = {
  key1: "value1",
  key2: "value2",
};
const obj2 = {
  key1: "valueOverride",
  key3: "value3",
  key4: "value4",
};

const newObject = { ...obj1, ...obj2, key69: "value69" };
console.log(newObject);

const newObj = { ..."abc" };
console.log(newObj);

const objArray = { ...["item1", "item2"] };
console.log(objArray);
