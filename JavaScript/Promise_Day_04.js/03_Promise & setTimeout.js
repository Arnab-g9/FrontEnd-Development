// promise and setTimeout

// I want to resolve / reject promise after  2 seconds

function myPromise() {
  return new Promise((resoleve, reject) => {
    const value = true;
    setTimeout(() => {
      if (value) {
        resoleve();
      } else {
        reject();
      }
    }, 2000);
  });
}

myPromise()
  .then(() => console.log("resolved"))
  .catch(() => console.log("rejected"));
