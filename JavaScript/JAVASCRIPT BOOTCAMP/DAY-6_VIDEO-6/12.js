// const userMethods = {
//   about: function () {
//     return `${this.firstName} is ${this.age} years old`;
//   },
//   is18: function () {
//     return this.age >= 18;
//   },
//   sing: function () {
//     return "toon na na la la";
//   },
// };

// now for the extramethods we don't have to use an extra object like userMethods. here in creteUser is a function. And in every function in javascript has prototype. which give us an free space to add something in the function. And use the function as an object.

//  Link in proto and prototype
function createUser(firstName, lastName, email, age, address) {
  const user = Object.create(createUser.prototype);
  user.firstName = firstName;
  (user.lastName = lastName),
    (user.email = email),
    (user.age = age),
    (user.address = address);
  return user;
}

createUser.prototype.about = function () {
  return `${this.firstName} is ${this.age} years old`;
};
createUser.prototype.is18 = function () {
  return this.age >= 18;
};
createUser.prototype.sing = function () {
  return "toon na na la la";
};

const newUser1 = createUser(
  "harshit",
  "vashistha",
  "abc@gmail.com",
  27,
  "Haldia"
);
const newUser2 = createUser(
  "harshit",
  "vashistha",
  "abc@gmail.com",
  27,
  "Haldia"
);
const newUser3 = createUser(
  "harshit",
  "vashistha",
  "abc@gmail.com",
  27,
  "Haldia"
);

const is18 = newUser1.is18();
console.log(is18);
console.log(newUser1.about());
console.log(newUser3.sing());
