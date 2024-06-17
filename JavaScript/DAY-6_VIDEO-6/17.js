// 2015/es6
//  class keyword
//  class are fake

class CreateUser {
  constructor(firstName, lastName, email, age, address) {
    (this.firstName = firstName),
      (this.lastName = lastName),
      (this.email = email),
      (this.age = age),
      (this.address = address);
  }
  about() {
    return `${this.firstName} is ${this.age} years old`;
  }
  is18() {
    return this.age >= 18;
  }
  sing() {
    return "la la la";
  }
}

const user1 = new CreateUser(
  "Arnab",
  "Ghorai",
  "abc@gmail.com",
  22,
  "Haldia, West Bengal"
);
console.log(user1.about());
console.log(Object.getPrototypeOf(user1));

// class ChildUser extends CreateUser {}
