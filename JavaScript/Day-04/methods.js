//methods -- function inside object

function personInfo() {
  console.log(`person name is ${this.firstName} and age is ${this.age}`);
  // here this will initialize the current object
}

const person1 = {
  firstName: "Harshit",
  age: 8,
  // about: function () {
  //   console.log(
  //     `person name is ${this.firstName} and person age is ${this.age}`
  //     // we can not simply write the firstName we have to use this.firstName. here 'this' is the 'object'
  //   );
  // },
  about: personInfo,
};
const person2 = {
  firstName: "Arnab",
  age: 21,
  about: personInfo,
};
const person3 = {
  firstName: "Aritra",
  age: 18,
  about: personInfo,
};

console.log(person1.about); //-- it will print the whole function
person2.about();
person3.about(); // here about method called by 'person'object so the 'this' will be person object

console.log(this); // in browser 'this' is window object if we want to print 'this' then it will print 'window' object
