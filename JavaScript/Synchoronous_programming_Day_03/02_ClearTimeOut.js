// setTimeOut in return give us an id

console.log("script start");
const id = setTimeout(function () {
  console.log("Inside settimeOut");
}, 2000);

for (let i = 0; i < 10; i++) {
  console.log("...");
}

console.log("setTimeout id is ", id);
console.log("clearing setTimeOut");
clearTimeout(id); // setTimeout in return give us an id which is usefull when we don't want anymore setTimeout function then we just pass the id to clearTimeout which will delete the setTimeout
console.log("script end");
