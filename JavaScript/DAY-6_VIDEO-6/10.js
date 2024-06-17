const obj1 = {
  key1: "value1",
  key2: "value2",
};

// const obj2 = {
//   key3: "value3",
// };

// console.log(obj2.key1);
// Here we want that if we call obj2.key1 then it will check first obj2 and check that the key1 is present or not. if present then it will simply print the value. And if not then it should go to the obj1 and take the value from there and print that

// Now that can be happen in this way
const obj2 = Object.create(obj1);
console.log(obj2.key1); // now here we can achieve our end gole. Here in obj2 there is no key1 property but it goes to / copy the value of key1 and collect the value
obj2.key3 = "value3";
obj2.key2 = "unique";
console.log(obj2.key2);
console.log(obj1.key2);
console.log(obj2); // when we print the whole object obj2 then we can see there is a __proto__ or [[prototype]] which store the reference of the object that we create via object.create method. here in this case it store the key value pair of obj1.

//  __proto__
// official ecmascript documentation proto is written as [[prototype]]
// __proto__, [[prototype]]

// there is another thing in javascript which is prototype
console.log(obj2.__proto__); // it will print the obj1 or the reference

// so the solution of the previous problem is solved here

const userMethods = {
  about: function () {
    return `${this.firstName} is ${this.age} years old`;
  },
  is18: function () {
    return this.age >= 18;
  },
  sing: function () {
    return "toon na na la la";
  },
};

function createUser(firstName, lastName, email, age, address) {
  const user = Object.create(userMethods); // this line gives the empty object and set the proto to userMethods
  user.firstName = firstName;
  (user.lastName = lastName),
    (user.email = email),
    (user.age = age),
    (user.address = address);
  return user;
}

const newUser1 = createUser(
  "harshit",
  "vashistha",
  "abc@gmail.com",
  27,
  "Haldia"
);
const newUser2 = createUser(
  "harshit",
  "vashistha",
  "abc@gmail.com",
  27,
  "Haldia"
);
const newUser3 = createUser(
  "harshit",
  "vashistha",
  "abc@gmail.com",
  27,
  "Haldia"
);

console.log(newUser1); // Now here when create the object for newUser1 then the proto of the object or the reference of the object is set to the userMethods object

const is18 = newUser1.is18();
console.log(is18);
console.log(newUser1.about());
console.log(newUser3.sing());
