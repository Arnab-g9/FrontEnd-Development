// const user1 = {
//   firstName: "harshit",
//   lastName: "Vashistha",
//   email: "harshitvashisth@gmail.com",
//   age: 2,
//   address: "House Number, Colony, Pincode, State",
//   about: function () {
//     return `${this.firstName} is ${this.age} years old.`;
//   },
//   is18: function () {
//     return this.age >= 18;
//   },
// };
// const aboutUser = user.about();
// console.log(aboutUser);

// we can not create these type of object multiple type istead of that we can create object constructor function

// functio to create multiple object return that
//steps: 1> function(that function create object) 2> add key value pair 3> object ko return karega

function createUser(firstName, lastName, email, age, address) {
  const user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  (user.email = email), (user.age = age), (user.address = address);
  user.about = function () {
    return `${this.firstName} is ${this.age} years old.`;
  };
  user.is18 = function () {
    return this.age >= 18;
  };
  return user;
}

const user1 = createUser(
  "harshit",
  "vashisth",
  "hashit@gmail.com",
  3,
  "my address"
);
console.log(user1);
const is18 = user1.is18();
const about = user1.about();
console.log(is18);
console.log(about);

// now here is some flaws because if we craete the object 1 millon time or greater, then the two methods 1s18 and about will create in the memory that many time so there is no need to create multiple no of times, we can enhance that via create a seperate object and put those methods into this object and use there references like--
const userMethods = {
  about: function () {
    return `${this.firstName} is ${this.age} years old.`;
  },
  is18: function () {
    return this.age >= 18;
  },
};
function createUser2(firstName, lastName, email, age, address) {
  const user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  user.about = userMethods.about;
  user.is18 = userMethods.is18;
  return user;
}

const user2 = createUser(
  "harshit",
  "vashisth",
  "hashit@gmail.com",
  3,
  "my address"
);
const user3 = createUser(
  "Arnab",
  "Ghorai",
  "hashit@gmail.com",
  15,
  "my address"
);
console.log(user2.about());
console.log(user3.about());

// --- but here is also flaws -----
// see the next file
