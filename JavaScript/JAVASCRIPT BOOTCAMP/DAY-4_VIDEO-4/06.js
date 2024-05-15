// find Method
const myArray = ["hello", "cat", "dog", "lion"];

function isLength3(string) {
  return string.length === 3;
}

const ans = myArray.find(isLength3);
console.log(ans);

// find method is the method which will find the element in the array on the certain condition and if the condition is met it will return the first element on the array which met the condition first.like here is two condition is met like cat and dog but cat is first so cat will be return. if no suitable ans found then the result will be undefined

const users = [
  { userId: 1, userName: "harshit" },
  { userId: 2, userName: "harshita" },
  { userId: 3, userName: "Bhuban" },
  { userId: 4, userName: "Bhabna" },
  { userId: 5, userName: "Lalit" },
];

const user = users.find((user) => {
  return user.userId === 3;
});

console.log(user.userName);
