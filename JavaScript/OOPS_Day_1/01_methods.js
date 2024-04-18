//methods
//function inside object

const person = {
  firstName: "harshit",
  age: 8,
  about: function () {
    console.log(
      `person name is ${this.firstName} and person age is ${this.age}`
    );
    console.log(this); //we get the value of this on runtime not when we write
  },
};

console.log(person.firstName, person.age);
person.about();

// ------------------------

function peopleInfo() {
  console.log(`people name is ${this.firstName} and age is ${this.age}`);
} // now we dont know what is the value of this

const people1 = {
  firstName: "Harsh",
  age: 8,
  about: peopleInfo,
};
const people2 = {
  firstName: "Arnab",
  age: 8,
  about: peopleInfo,
};
const people3 = {
  firstName: "Soumya",
  age: 8,
  about: peopleInfo,
};

people2.about();
