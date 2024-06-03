// here are some flaws in this code -- let's point out

// now if we want to add many more methods in userMethods then we have to add those methods in createUser as well. And some times we can forget to add the methods. so the solution is given in 10.js file

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
  const user = {};
  user.firstName = firstName;
  (user.lastName = lastName),
    (user.email = email),
    (user.age = age),
    (user.address = address);
  user.about = userMethods.about;
  user.is18 = userMethods.is18;
  user.sing = userMethods.sing;
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

const is18 = newUser1.is18();
console.log(is18);
console.log(newUser1.about());
console.log(newUser3.sing());
