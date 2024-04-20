class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    // return `${this.name} is wating`;
    return "eating";
  }
  isSuperCute() {
    return this.age <= 12;
  }
  isCute() {
    return true;
  }
}
const animal1 = new Animal("cat", 12);
console.log(animal1);
console.log(animal1.eat());

// inheritance -- IMP
class Dog extends Animal {
  constructor(name, age, speed, height) {
    super(name, age);
    this.speed = speed;
    this.height = height;
  }
  //method overriding
  eat() {
    return "modified eating";
  }
  run() {
    return `${this.name} is running in ${this.speed}kmph`;
  }
}
const tommy = new Dog("tommy", 12, 25, 6);
console.log(tommy);
console.log(tommy.run(), tommy.eat());
