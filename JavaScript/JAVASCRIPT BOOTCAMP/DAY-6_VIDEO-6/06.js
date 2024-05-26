// arrow functions -- behaviour in 'this' keyword

const user1 = {
  firstName: "harshit",
  age: 8,
  about: () => {
    console.log(this);
    console.log(this.firstName, this.age);
  },
};

// user1.about();

// arrow function has not it's own 'this' it take the 'this' from it's sorrounding. In this case the 'this' will not be the user1 object. It takes this from it's sorrounding which is in tis case is window object

const personInfo = () => {
  console.log(this.firstName, this.age, "user2");
};

const user2 = {
  firstName: "Harshit",
  age: 22,
};

personInfo.call(user2);

// for this example the result will be the same. because personInfo is a function expression and it is used arrow function internally. except arrow function it will print the details with other functions.

// ------ We can writethe methods in object like this also ------
const user3 = {
  firstName: "harshit",
  age: 8,
  about() {
    console.log(this.firstName, this.age);
  },
};
user3.about();
