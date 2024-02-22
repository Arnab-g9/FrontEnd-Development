//clone using Object.assign
//memory

const obj = {
  key1: "v1",
  key2: "v2",
};

//const obj2 = {...obj1}; cloning using spred operator
const obj2 = Object.assign({}, obj); // old process object cloning using assign method
obj.key3 = "value3";
console.log(obj);
console.log(obj2);
