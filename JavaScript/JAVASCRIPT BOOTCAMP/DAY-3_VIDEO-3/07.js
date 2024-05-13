// block scope vs  function scope

//  let and const are block scope
// var is function scope
let firstName = "harshit";

{
  // block1
  let firstName = "harshit";
  //   in case of let and const we can access the variables inside the block, can't use outside the block
  //   in this case outside let variable with same name is unique to the outside scope. it is not same as the inside one
}

// let firstName = "harshit"; // if we again declareit it will give error because now it is same as previous one

// console.log(firstName); -- here we can access only the outside block firstName not the inside one

// [Nb: so every block the variable which is create via let and const with same name are unique]

// in case of const it is also same
{
  const lName = "Vasistha";
  console.log(lName); // this is unique with same name -- block scope -- inside block
}
{
  const lName = "Ghorai";
  console.log(lName); // this is unique with same name -- block scope -- inside block
}
const lName = "Maity";
console.log(lName); // this is also block scope and unique with same name -- this is present in global block scope -- inside global scope

// ------------ var --------------
//  in case of carwe can use the var anywhere we want
// var is function scope
{
  var fName = "harshit";
}
{
  {
    console.log(fName);
  }
}
// one more example
function myApp() {
  if (true) {
    let firstName = "harshit";
    console.log(firstName);
  }
  console.log(firstName);
}
myApp();
console.log("outside myApp ", firstName);
