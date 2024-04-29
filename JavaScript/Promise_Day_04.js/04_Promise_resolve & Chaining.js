// promise resolving
// promise chaining

const myPromise = Promise.resolve(5);
myPromise.then((value) => {
  console.log(value);
});
//then() -- then method always return promise

function myPromiseChain() {
  return new Promise((resolve, reject) => {
    resolve("foo");
  });
}

myPromiseChain()
  .then((value) => {
    console.log(value);
    value += "bar";
    return value; // internally it returns promise
  })
  .then((value) => {
    console.log(value);
    value += "baaz";
    return value;
  })
  .then((value) => {
    console.log(value);
  });
