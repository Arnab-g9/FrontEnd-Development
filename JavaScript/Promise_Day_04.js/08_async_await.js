// async await
const url = "https://jsonplaceholder.typicode.com/posts";
// const data = fetch(url)
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => console.log(data));

async function getPosts() {
  const response = await fetch(url);
  const data = await response.json();
  //   console.log(data);
  return data;
}

// const returned = getPosts();
// console.log(returned);

getPosts()
  .then((myData) => {
    console.log(myData);
  })
  .catch((error) => {
    console.log(error);
  });
