// fetch
const URL = "https://jsonplaceholder.typicode.com/postss";

// const whatisThis = fetch(URL);

// console.log(whatisThis);

fetch(URL)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("something went wrong !!!");
    }
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("inside catch");
    console.log(error);
  });

// fetch function only reject when there is network related issue on 404 issue catch does not work in fetch
