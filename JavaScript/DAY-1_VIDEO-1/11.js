// truthy and falsy values

// falsy values - [false, "", null, undefined, 0];
// truthy values - ["abc", 1, -1,]
let firstName = undefined;
if (firstName) {
  console.log(firstName);
} else console.log("firstName is kinda empty");
