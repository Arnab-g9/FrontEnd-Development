const obj1 = {
  key1: "value1",
  key2: "value2",
};
const obj2 = Object.create(obj1); //{}
// there is one more way to create empty object
obj2.key3 = "value3";
console.log(obj2.key2); // it will access the obj1 key2 value property if there is no key1 property in obj 2
