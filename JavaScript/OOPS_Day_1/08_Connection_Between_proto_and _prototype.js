// userMethods Object
// const userMethods = {
//   about: function () {
//     return `${this.firstName} is ${this.age} years old.`;
//   },
//   is18: function () {
//     return this.age >= 18;
//   },
//   sing: function () {
//     return "toon na lala";
//   },
// };
//  function for create multiple create object of users
function createUser(firstName, lastName, email, age, address) {
  //   const user = Object.create(userMethods);
  const user = Object.create(createUser.prototype);
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  // user.about = userMethods.about;
  // user.is18 = userMethods.is18;
  // user.sing = userMethods.sing;
  return user;
}
console.log(createUser.prototype);
createUser.prototype.about = function () {
  return `${this.firstName} is ${this.age} years old.`;
};
createUser.prototype.is18 = function () {
  return this.age >= 18;
};
createUser.prototype.sing = function () {
  return "toon la la la";
};
// calling the createUser function and store the value of the function which is a object store in a variable
const user2 = createUser(
  "harshit",
  "vashisth",
  "hashit@gmail.com",
  3,
  "my address"
);
const user3 = createUser(
  "Arnab",
  "Ghorai",
  "hashit@gmail.com",
  15,
  "my address"
);

console.log("user2 is singing", user2.sing());
console.log(user3.is18());
