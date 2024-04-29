//setInterval
console.log("script start");
let id = setInterval(function () {
  console.log(Math.random());
}, 1000);
console.log(id);
// clearInterval(id);
console.log("script end");
