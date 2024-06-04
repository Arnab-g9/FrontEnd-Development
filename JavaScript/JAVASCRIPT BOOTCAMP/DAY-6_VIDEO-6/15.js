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

for (let key in newUser1) {
  if (newUser1.hasOwnProperty(key)) {
    console.log(key); // this will just print it's own property not all the property that it get from the prototype and proto
  }
  // console.log(key);
}
