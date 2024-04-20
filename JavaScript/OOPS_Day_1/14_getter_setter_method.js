// getter setter method
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  //    fullName() {
  //     return `${this.firstName} ${this.lastName}`;
  //   }
  set fullName(fullName) {
    // fullName.split(" ")
    //["mohit", "vasistha"]
    const [firstName, lastName] = fullName.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person1 = new Person("harsh", "sharma", 5);
// console.log(person1.fullName());
console.log(person1.fullName); // in getter method call dont use parantheses it treats as property in js.

person1.fullName = "Mohit Vasistha";
console.log(person1.firstName, person1.lastName);
