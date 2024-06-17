// bind method
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

const func = about.bind(user3, "guiter", "bach");
func();
// binad actually return a function. in future if we want to call the function we can do that.

const user5 = {
  firstName: "Gargh",
  age: 38,
  personInfo: function (hobby, salary) {
    console.log(this.firstName, this.age, hobby, salary);
  },
};
const user6 = {
  firstName: "Arnab",
  age: 38,
};
const myFunc = user5.personInfo.bind(user6, "trading", 60000000);

myFunc();

// so bind method set the 'this' for the function and return the function. if we want to call the function in future then we can easily call that via the return function
