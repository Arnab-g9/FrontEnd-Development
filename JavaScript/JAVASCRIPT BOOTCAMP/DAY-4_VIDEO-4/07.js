//  every method -- it will check in the array all the elements pass the particular condition. if all the elements pass the certain condition then it will return true else return false;

const numbers = [2, 4, 6, 8, 10];
const evenNums = numbers.every((number) => number % 2 === 0);
console.log(evenNums);
