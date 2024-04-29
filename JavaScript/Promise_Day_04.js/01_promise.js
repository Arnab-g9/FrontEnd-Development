// promise -- is something where in present we doesn't know it's value but will get to know in future
console.log("script start");
const bucket = ["coffee", "chips", "vegetables", "salt", "rice"];

//different type of promise status --
// pending, fullfill, reject

// how to create promise / produce
const friedRicePromise = new Promise((resolve, reject) => {
  if (
    bucket.includes("vegetables") &&
    bucket.includes("salt") &&
    bucket.includes("rice")
  ) {
    resolve("Friedrice");
  } else {
    reject("Couldn't do it");
  }
});

// consume --
friedRicePromise
  .then(
    (myFriedRice) => {
      console.log("lets eat", myFriedRice);
    }
    // (error) => {
    //   console.log(error);
    // }
  )
  .catch((error) => console.log(error));

for (let i = 0; i <= 100; i++) {
  console.log(Math.random(), i);
}
console.log("script end");
