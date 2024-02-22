//block scope vs function scope

//let and const are block scope
//var is function scope

//--------------------- let & const -----------------
const LastName = "Ghorai";
{
  let firstName = "harshit";
  console.log(firstName); //we can access here
  /**
   * let and const can be accessible inside block can not acccess outside of the block where it is declared
   */
}
// console.log(firstName); here we can not access
{
  let firstName = "Mohit";
  console.log(firstName);
}
{
  console.log(LastName);
  /**
   * here we can access the lastName because the whole file is a global scope or block scope so any variable we can declare in the file we can access in any block
   */
}

//----------------- Var ------------------------

{
  var LastAndFirstName = "Arnab Ghorai";
  console.log(LastAndFirstName);
  /**
   * var is function scope. if create var in any scope and wnat to access outside block we can access it in ease. That's why people prefer most let and const over var.
   */
}
{
  console.log(LastAndFirstName);
}
