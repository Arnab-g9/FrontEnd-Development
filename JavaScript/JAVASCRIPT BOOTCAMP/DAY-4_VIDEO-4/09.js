//  fill method
// value, start, end

// if we wnat to make a array full of same elements then we can use fill method. or we want the same elements from a particular range to till a particular range then we use fill method

const myArray = new Array(10).fill(-1);
console.log(myArray);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.fill(0, 2, 4); // value, startIndex, lastIndex
console.log(arr);
