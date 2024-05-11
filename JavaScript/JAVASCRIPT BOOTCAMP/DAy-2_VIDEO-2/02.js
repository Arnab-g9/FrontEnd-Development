// array push pop
//  array shift unshift

let fruits = ["apple", "mango", "grapes"];
console.log(fruits);

// push - push the element at the end of the array - this is mutable, it can change the original array
fruits.push("banana");
console.log(fruits);

// pop - it will remove the element from the last from an array, it can change the original array
fruits.pop(); // it will also return the remove element. and we can store the value inside a variable
console.log(fruits);

//  unshift - this method will add the element in the first position of the array
fruits.unshift("jackle");
fruits.unshift("banana");
console.log(fruits);

// shift - this method will remove the element from thefirst position of the array
fruits.shift();
console.log(fruits);

// [NB: push and pop method is fast compareto shift and unshift - because push pop add or remove the element at the last of the array but shift and unshift add or remove the element from the firstand it required to shift all the element first in the memory then add or remove the first element then again adjust the elements. so it takes time]
