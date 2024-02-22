// param destructuring

//object
//react

const person = {
  firstName: "Arnab",
  lastName: "Ghorai",
  age: 20,
};
function printDetails(obj) {
  console.log(
    obj.firstName
  ); /** through which we can access the perameter of the object */
  console.log(obj.gender);
}

// but this can be done in another way -- this is parameter de-structuring
function printDetails({ firstName, lastName, age }) {
  console.log(firstName, lastName, age);
}
printDetails(person);
