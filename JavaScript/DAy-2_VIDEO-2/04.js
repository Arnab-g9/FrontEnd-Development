//  how to clone array

//  how to concatenate two array

// clone array
let array1 = ["item1", "item2"];
let array2 = ["item1", "item2"];
array1.push("item3");
console.log(array1 === array2);

// better method to clone array using slice method
let array3 = array1.slice(0);
// let array3 = array1.slice(0).concat(["item3", "item4"]) -- adding extra element to the new array using method chaining
console.log(array3);

// another method using concat
let array4 = [].concat(array1);
// let array4 = [].concat(array1, ["item3", "item4"]) -- adding extra element to the new array using method chaining;
console.log("array4 ", array4);

// another method using spread operator
let array5 = [...array1];
console.log("array5 ", array5);
// let array5 = [...array1, "item3", "item4"] -- adding extra element to the new array using spread operator;

let oneMoreArray = ["item3", "item4"];
let array6 = [...array1, ...oneMoreArray];
console.log("array6 ", array6);
