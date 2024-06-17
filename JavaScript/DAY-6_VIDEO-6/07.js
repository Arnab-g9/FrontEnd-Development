const user = {
  firstName: "Harshit",
  lastName: "Vashistha",
  email: "harshitvashisth@gmail.com",
  age: 2,
  address: "House Number, Colony, pincode, state",
  about: function () {
    return `${this.firstName} is ${this.age} years old`;
  },
  is18: function () {
    return this.age >= 18;
  },
};

const userAbout = user.about();
console.log(userAbout);

// this is a normal object that we create all the time. Now let suppose we have to create 1 lakss+ data/obj of same formate. we can not the tds process. so we need a constructor function which will createthe same type of objectthatwe need.

//  steps
// 1.) function (that function create object)
// 2.) add key value pair
// 3.) object ko return krega

function createUser(firstName, lastName, email, age, address) {
  const user = {};
  user.firstName = firstName;
  (user.lastName = lastName),
    (user.email = email),
    (user.age = age),
    (user.address = address);
  user.about = function () {
    return `${this.firstName} is ${this.age} years old`;
  };
  user.is18 = function () {
    return this.age >= 18;
  };
  return user;
}

const newUser = createUser(
  "harshit",
  "vashistha",
  "abc@gmail.com",
  27,
  "Haldia"
);

const is18 = newUser.is18();
console.log(is18);
console.log(newUser.about());
