const obj1 = {
  key1: "value1",
  key2: "value2",
};
const obj2 = Object.create(obj1); //{}
// there is one more way to create empty object
obj2.key3 = "value3";
// console.log(obj2.key1); // it will access the obj1 key2 value property if there is no key1 property in obj 2
console.log(obj2);

// __proto__, [[prototype]] are the same in browser it is shown __proto__ but in official ecmascript it is written [[prototype]]

// but prototype is a different thing

console.log(obj2.__proto__);

// so what is happening when we write const obj2 = Object.create(obj1) it actually set the reference of the obj1 in obj2 __proto__. __proto__ besically holds the reference of the obj1. when any property not found in object2 then it simply check in obj1 if the property is present if it is present then it acually use that

// here we understand what is happen and now lets go to 05_obj_constructor1.js file and solve the problem there
