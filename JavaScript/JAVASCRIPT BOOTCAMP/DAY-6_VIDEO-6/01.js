// methods -- function inside object

const person = {
  firstName: "harshit",
  age: 8,
  about: function () {
    console.log(`person name id ${this.firstName} and age is ${this.age}`);
  },
};

person.about();
// we get the value of 'this' at runtime not at compile time
// this === currentObject
