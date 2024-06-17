// new keyword
function createUser(firstName, age) {
  this.firstName = firstName;
  this.age = age;
}

createUser.prototype.about = function () {
  console.log(this.firstName, this.age);
};

const user1 = new createUser("harshit", 6);
console.log(user1);
// new keyword done three things here
// 1.> empty object '{}' create and this keyword refers the empty object
// 2.> return this/empty object
// 3.> Object.create(createUser.prototype) work will done this keyword here. we don't have to write manually.
user1.about();
