// loops
// while loop
let i = 10;
let sum = 0;
while (i > 0) {
  sum += i;
  i--;
}
console.log(sum);

// for loop
let s = 0;
for (let i = 0; i <= 10; i++) {
  s += i;
  console.log(s);
}
console.log(s);

//  do-while loop
do {
  console.log("inside do while loop " + i);
  i++;
} while (i <= 9);
