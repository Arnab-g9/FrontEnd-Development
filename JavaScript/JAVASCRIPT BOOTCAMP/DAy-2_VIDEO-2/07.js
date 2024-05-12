//  objects - are reference type
// array are good but not sufficient
// for real world data
// objects store key and value pairs
// objects don't have index

//  how to create objects

const person = {
  name: "Harshit",
  age: 22,
  hobbies: ["guiter", "sleeping", "listening music"],
};
console.log(person);
console.log(typeof person);

// how to access data from objects
// using dot notaion
console.log(person.name);
console.log(person.age);
console.log(person.hobbies);
// using bracket notation
console.log(person["name"]);
console.log(person["age"]);

// how to add key value pair to objects
// using dot notation
person.gender = "male";
// using bracket notation
person["salary"] = 100000;
console.log(person);


