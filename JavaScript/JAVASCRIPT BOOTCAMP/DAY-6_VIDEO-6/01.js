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

function personInfo() {
  console.log(`person name is ${this.firstName} and age is ${this.age}`);
}

const person1 = {
  firstName: "Arnab",
  age: 22,
  about: personInfo,
};

const person2 = {
  firstName: "Gita",
  age: 23,
  about: personInfo,
};

const person3 = {
  firstName: "Bhabani",
  age: 20,
  about: personInfo,
};

person1.about();
person2.about();
person3.about();

console.log(this); // it will print window object
console.log(this === window);
