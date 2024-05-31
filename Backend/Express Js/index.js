const express = require("express");

const app = express();

// console.log(app);

const port = 3000;

app.listen(port, () => {
  console.log(`your app is running on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("you are connected with your root path");
});

app.get("/anchal", (req, res) => {
  res.send("tum anchal bale path se connected ho geye ho");
});

// * for all the paths that does not exist so for all of those path we can return a common page or something.
app.get("*", (req, res) => {
  res.send("<h3>This page does not exist</h3>");
});

// post request
app.post("/apple", (req, res) => {
  res.send("i am post request");
});

// sending request and response
app.use((req, res) => {
  console.log(req);
  console.log("is request received?");
  //   res.send({
  //     name: "Arnab ghorai",
  //     roll: 234,
  //   });
  let code =
    "<h1>Names</h1> <ul><li>Naina</li><li>Anchal</li><li>Suraya</li></ul>";
  res.send(code);
});
// app.use work on every request likeget post patch delete
