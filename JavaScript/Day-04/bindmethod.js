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

const func = hobby.bind(user6, ["guiter", "bach"]);
func();
