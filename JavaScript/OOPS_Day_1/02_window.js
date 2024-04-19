console.log(this); // it will give window object on browser console. and if you type 'this' === 'window' then it will give true

function myFunc() {
  console.log(this);
}

myFunc(); // see oops at 18:00 min -- interview importent
