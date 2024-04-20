// new keyword
function createUser(firstName, age) {
  this.firstName = firstName;
  this.age = age;
}
createUser.prototype.about = function () {
  console.log(this.firstName, this.age);
};
const user1 = new createUser("harshit", 6);
// new keyword -- here done three things
// 1. empty object this = {}. like-- this = {}
// 2. return this/empty object
// 3. const user = Object.create(createUser.prototype) -- actually build the link
console.log(user1);
user1.about();
