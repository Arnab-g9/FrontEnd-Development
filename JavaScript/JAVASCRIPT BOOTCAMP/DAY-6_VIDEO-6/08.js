// here are some flaws in this code -- let's point out

// solution to the problem no-1
const userMethods = {
  about: function () {
    return `${this.firstName} is ${this.age} years old`;
  },
  is18: function () {
    return this.age >= 18;
  },
};

function createUser(firstName, lastName, email, age, address) {
  const user = {};
  user.firstName = firstName;
  (user.lastName = lastName),
    (user.email = email),
    (user.age = age),
    (user.address = address);
  //   user.about = function () {
  //     return `${this.firstName} is ${this.age} years old`;
  //   };
  //   user.is18 = function () {
  //     return this.age >= 18;
  //   };
  user.about = userMethods.about;
  user.is18 = userMethods.is18;
  return user;
}

// flaw no -1: when we create multiple user from it then in the user object there are two methods which will create every time and it will use memory every time and it will fill the memory. But we need just only one copy
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
