// --------- arrow function ------------
//in arrow function there is no this on it's own. it takes this from it's sorrounding
// sorrounding means not user1 it's this will be one level up. in this case which is window
// we can not change the this of arraow function

const user1 = {
  firstName: "harshit",
  age: 8,
  about: () => {
    console.log(this);
    console.log(this.firstName, this.age);
  },
};
user1.about();
