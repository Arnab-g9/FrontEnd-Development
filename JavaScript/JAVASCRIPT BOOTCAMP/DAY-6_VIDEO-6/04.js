// apply
// apply and call arelike same. apply internally use call

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

about.apply(user3, ["painting", "Arijit Singh"]);

//  the difference between apply and call is insted of pass seperate arguments like call method in apply we use multiple parameters inside of a list.
