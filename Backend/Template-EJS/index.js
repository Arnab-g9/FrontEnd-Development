const express = require("express");
const app = express();
const path = require("path");

const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.listen(PORT, (req, res) => {
  console.log(`The port is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.render("home.ejs");
});
