// console.log(window)
// "use strict";
function myFunc() {
  console.log(this);
}
myFunc(); // myFunc is get added inside the window object
// now we can call it via window.myfunc()
window.myFunc();
