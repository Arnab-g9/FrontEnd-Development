// call apply bind
// call
function hello() {
  console.log("hello world");
}
hello.call();

const user1 = {
  firstName: "harshit",
  age: 8,
  about: function (hobby, favMusician) {
    console.log(this.firstName, this.age, hobby, favMusician);
  },
};

const user2 = {
  firstName: "harshita",
  age: 9,
};

// user1.about.call(user2); // call method actually set the 'this' for the user1.about method. if we don't pass any objectthe the output will be undefined

// we can pass extra parameter for the call method like this.
user1.about.call(user2, "guiter", "mazar");

// now we can declare about function outside of the object like this
function about(hobby, favMusician) {
  console.log(this.firstName, this.age, hobby, favMusician);
}
const user3 = {
  firstName: "Arnab",
  age: 22,
};
const user4 = {
  firstName: "bhim",
  age: 19,
};

//  now for the call method syntax will be
about.call(user3, "gardening", "Arjit Singh");
