// new keyword
// new keyword done three things here
// 1.> empty object '{}' create and this keyword refers the empty object
// 2.> return this/empty object
// 3.> Object.create(createUser.prototype) work will done this keyword here. we don't have to write manually.

// here createUser function is Constructor function
function CreateUser(firstName, lastName, email, age, address) {
  //   const user = Object.create(createUser.prototype); -- now we dont need this, because new keyword will do.
  this.firstName = firstName;
  (this.lastName = lastName),
    (this.email = email),
    (this.age = age),
    (this.address = address);
  //   return this; -- we can/can't write return this here. because by default new keyword return the object
}

CreateUser.prototype.about = function () {
  return `${this.firstName} is ${this.age} years old`;
};
CreateUser.prototype.is18 = function () {
  return this.age >= 18;
};
CreateUser.prototype.sing = function () {
  return "toon na na la la";
};

const newUser1 = new CreateUser(
  "harshit",
  "vashistha",
  "abc@gmail.com",
  27,
  "Haldia"
);
const newUser2 = new CreateUser(
  "harshit",
  "vashistha",
  "abc@gmail.com",
  27,
  "Haldia"
);
const newUser3 = new CreateUser(
  "harshit",
  "vashistha",
  "abc@gmail.com",
  27,
  "Haldia"
);
console.log(newUser1);

// those function which will call after the new keuword those function's name will start with capital letter.
