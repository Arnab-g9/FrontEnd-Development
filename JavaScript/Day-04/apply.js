// apply method
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

hobby.apply(user6, ["guiter", "bach"]);

// apply method is same as call method here in this apply method  we pass a list of arguments instead of single paramter
