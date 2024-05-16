// Map
// map is an iterable
// store data in ordered fashion

// store key value pair(like object)
// duplicate keys are not allowed like objects

// different between maps and objects

// objects can only have strig or symbol as key

// in maps you can use anything as key like array, number, string

const person = {
  firstName: "harshit",
  age: 7,
  1: "one",
};
console.log(person.firstName);
console.log(person["firstName"]);
const keys = Object.keys(person);
for (let key of keys) {
  console.log(typeof key);
}

//  map store like key-value pair
const map = new Map();

// how to add key value pair
map.set("firstName", "harshit");
map.set("age", 7);
map.set(1, "one"); // the differnce between map and objects is we can set the keys datatype however we want

// how to get value from map
console.log("firstName is: ", map.get("firstName"));
console.log(map);

// how to get all the keys
console.log(map.keys());

// how to access the all values using all the keys
for (let key of map.keys()) {
  console.log(map.get(key));
}

//  apply for of loop in map
for (let [key, value] of map) {
  console.log(key, value);
}

// how to store key value pair inside the map in different ways
const personMap = new Map([
  ["firstName", "harshit"],
  ["age", 7],
]);
console.log(personMap);

// store some extra information for person1 in map

const person1 = {
  id: 1,
  firstName: "harshit",
};
const person2 = {
  id: 3,
  firstName: "Vanita",
};
const extraInfo = new Map();
extraInfo.set(person1, { age: 8, gender: "male" });
extraInfo.set(person2, { age: 22, gender: "female" });
// console.log(extraInfo);
// console.log(person1.id);
console.log(extraInfo.get(person1).gender);
console.log(extraInfo.get(person2).gender);
