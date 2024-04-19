//  ---------- call, apply & bind methods ------
// very very very important topic for interview

const user1 = {
  firstName: "harshit",
  age: 8,
  about: function (hobby, fabMusic) {
    console.log(this.firstName, this.age, hobby, fabMusic);
  },
};
// user1.about();

const user2 = {
  firstName: "mohit",
  age: 9,
};

user1.about.call(user2, "guiter", "kabhi jo badal"); // interview specific importent
console.log(user2.info);

// if the about function declare outside the object the we can simply write this -- about.call(user1, "guiter", "kabhi jo badal")

// here what is doing in user2 obj there is no about and we use to the about prop without copying or anything else and use via the user1. then when the call method comes into picture. it will simply call the user1 about method via the call method and pass the user2 object. besically it set the this for the call method.

//syntex: user1.about.call(user2); here user2 is the 'this' for the call method. if we dont pass any this or current object then it will print undefined and undefined

//------------ apply ---------------
// internally apply use the call. it is kinda similar to call. the only difference is that when there are multiple parameter then istead of writing all of them individually, put them into a list and pass the list as parameter

function about(hobby, fabMusic) {
  console.log(this.firstName, this.age, hobby, fabMusic);
}

const user3 = {
  firstName: "harshit3",
  age: 8,
};

about.apply(user3, ["guiter", "kabhi jo badal"]);

// ----------- bind ---------------

// bind returns a function. in future if we want to call the function then we can call that.
const func = about.bind(user3, "guiter", "bach");
func();

// do not do these mistake
const user4 = {
  firstName: "harshit",
  age: 8,
  about: function () {
    console.log(this.firstName, this.age);
  },
};
const myFunc = user4.about; // it will give undefined becuse many of u think it just store the function in myFunc and if we call the myFunc then it will print the user4 value. but it will only happen when we call like this user4.about(); because it has the 'current object context' but when we store the function inside of another varible then it has no object context it's current object context will be window object. and which does not have any firsname and age property.

// const myFunc = user4.about.bind(user4); -- this is the correct version
myFunc();
