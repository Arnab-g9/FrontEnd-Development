// nested destructuring
const users = [
  {
    userId: 1,
    firstName: "harshit",
    gender: "male",
  },
  {
    userId: 2,
    firstName: "mohit",
    gender: "male",
  },
  {
    userId: 3,
    firstName: "nitish",
    gender: "male",
  },
];

const [{ firstName }, , { gender: g }] = users;
console.log(firstName, g);
