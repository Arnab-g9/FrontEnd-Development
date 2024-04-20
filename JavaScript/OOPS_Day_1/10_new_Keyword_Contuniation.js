function CreateUser(firstName, lastName, email, age, address) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.age = age;
  this.address = address;

  return this;
}
console.log(CreateUser.prototype);
CreateUser.prototype.about = function () {
  return `${this.firstName} is ${this.age} years old.`;
};
CreateUser.prototype.is18 = function () {
  return this.age >= 18;
};
CreateUser.prototype.sing = function () {
  return "toon la la la";
};

const user1 = new CreateUser("harshit", "vashisth", "harshit@gmail.com");
const user2 = new CreateUser("Arnab", "Ghorai", "harshit@gmail.com");

const user3 = new CreateUser("Bikas", "kathiar", "harshit@gmail.com");

console.log(user1);

for (let key in user1) {
  //   console.log(key, "=", user1[key]); // it will actually print all the property it has including prototype's property.

  // and if we dont want to print that we can simply write linke this

  if (user1.hasOwnProperty(key)) {
    console.log(key); // it will not print prototype's property
  }
}
