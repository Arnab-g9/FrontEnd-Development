// class
class CreateUser {
  // constructor and assign property value
  constructor(firstName, lastName, email, age, address) {
    console.log("constructor call");
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
  }

  //methods
  about() {
    return `${this.firstName} is ${this.age} years old`;
  }
  is18() {
    return this.age >= 18;
  }
  sing() {
    return "la la la";
  }
  func(a) {
    console.log(a);
  }
}

const user1 = new CreateUser(
  "hasrshit",
  "vasistha",
  "abc@gmail.com",
  21,
  "address"
);

console.log(user1, user1.firstName);
console.log(Object.getPrototypeOf(user1));
user1.func(12);
