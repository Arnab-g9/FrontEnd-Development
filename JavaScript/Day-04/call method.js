// call method
const user1 = {
  firstName: "harshit",
  age: 8,
  about: function () {
    console.log(this.firstName, this.age);
  },
};

// user1.about();

const user2 = {
  firstName: "Arnab",
  age: 21,
};

user1.about.call(user2);

/* NB. so what happend in the call method is there are 2 objects user1 and user2 and only the user1 has the property about but if we want use the same property in the user 2 then we can use call method. 

how -- 
the syntax is whoes have the property use that first, here user1 havee the property about, then use property via the dot operator and the use call method like -> user1.about.call(user2). and then in the parameter of the call method we can set the this value or the object means whoes should it call. here user2 will callthe about property using user1's about property

NB: but if we dont pass any parameter in the call method then it will give undefined

like user1.about.call(). op-- undefined
*/

const user3 = {
  name: "Arnab",
  age: 21,
  about: function (hobby, favMusic) {
    console.log(this.name, this.age, hobby, favMusic);
  },
};

const user4 = {
  name: "mohit",
  age: 9,
};

user3.about.call(user4, "gaming", "chamak chalo");

// another type use
function hobby(hobby, favMusic) {
  console.log(this.name, this.age, hobby, favMusic);
}
const user5 = {
  name: "Arnab",
  age: 21,
};

const user6 = {
  name: "mohit",
  age: 9,
};

hobby.call(user5, "guiter", "kabhi jo badal");
