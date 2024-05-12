// how to iterate object
const person = {
  name: "harshit",
  age: 22,
  "person hobbies": ["guiter", "sleeping", "listening"],
};

// there are two ways to iterate through objects -- like (for in loop) and (Object.keys)

// for in loop
for (let key in person) {
  console.log(key, person[key]);
}

// Object.keys
console.log(Object.keys(person)); // Object.keys(person) will return an array of keys of an object
for (let key of Object.keys(person)) {
  console.log("using object.keys ", person[key]);
}
