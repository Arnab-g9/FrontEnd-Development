// find method
const myArray = ["hello", "cat", "dog", "lion"];

function isLength3(string) {
  return string.length === 3;
}

const ans = myArray.find(isLength3);
console.log(ans);

/**
 * so find methos search a element based on certain condition if the condition mates it will return the first value of the array and stop the search. if there are multiple element that can be possible based on the condition then it will return the first element of the array
 */

/**
 * find method will return a first and single element
 */
// ---- use ---
const user = [
  { userId: 1, userName: "harshit" },
  { userId: 2, userName: "harsh" },
  { userId: 3, userName: "arnab" },
  { userId: 4, userName: "lodu" },
  { userId: 5, userName: "lalit" },
];

const getUser = user.find((user) => {
  return user.userId === 3;
});
console.log(getUser);
