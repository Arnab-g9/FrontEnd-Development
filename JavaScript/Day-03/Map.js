/**
 * Maps
 * Maps is an iterable
 * store data in ordered fashion
 *
 *store key value pair(like object)
 duplicate keys are not allowed like objects

 different betwwen maps and objects

 objects can only have string or symbol
 as key

 in maps you can use anything as key
 like aray, number, string
 */

// const person = {
//   firstName: "harshit",
//   age: 7,
//   1: "one",
// };

// for (let key in person) {
//   console.log(typeof key);
// }

//-- map ---
const person = new Map();
person.set("firstName", "Harshit");
person.set("age", 7);
person.set(1, "one");
person.set([1, 2, 3], "oneTwoThree");
console.log(person);
console.log(person.get("firstName"));
console.log(person.get("age"));
console.log(person.get(1));

// print all keys

console.log(person.keys());

//we can use for of loop on map iterator
for (let key of person.keys()) {
  console.log(key, typeof key);
}

// direct use for of loop on map
for (let [key, value] of person) {
  console.log(key, value);
}

//another way of create map
const person2 = new Map([
  ["firstName", "harshit"],
  ["age", 7],
]);
console.log(person2);

//task --  create a object and store some of its value in another place not in the same object

const person3 = {
  id: 1,
  firstName: "harshit",
};
const extraInfo = new Map();
extraInfo.set(person3, { age: 8, gender: "male" });
console.log(person.id);
console.log(extraInfo.get(person3).age);
