// difference between dot and bracket notation
const key = "email";
const person = {
  name: "harshit",
  age: 22,
  "person hobbies": ["guiter", "sleeping", "listening"], // if there is a space in between the key prop of an object then we have to use double cotation like this.
};

console.log(person["person hobbies"]); //and if we want to access this prop, then we have to use bracket notation.

person[key] = "abc@gmail.com";
console.log(person[key]);
console.log(person.email);

// [N.B. so the main difference between dot notation and bracket notation is that bracket notation can compute the key value but dot notation can not compute the key value]
