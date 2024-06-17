// for loops in array
let fruits = ["apple", "mango", "grapes", "banana"];
//  [use const for creating array]

// for of loop in array
for (let fruit of fruits) {
  console.log(fruit);
}

// for in loop -- using for in loop we can primarily access the index of element. And if we get the index then we can access the element indirectly
for (let index in fruits) {
  console.log(index, fruits[index]);
}
