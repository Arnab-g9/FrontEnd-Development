// clone using Object.assign
const obj = {
  key1: "value1",
  key2: "value2",
};
// clone of obj to obj2 using spread operator
const obj2 = { ...obj };
obj.key3 = "value3";
console.log(obj);
console.log(obj2);

// there is another way of cloning object that is object.assign

const obj3 = Object.assign({}, obj);
obj.key4 = "value4";
console.log(obj);
console.log(obj3);
