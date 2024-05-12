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
