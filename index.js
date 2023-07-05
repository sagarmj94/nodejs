const express = require("express");
const app = express();
const reqFilter = require("./middleware");

// app.use(reqFilter);

app.get("/", (req, res) => {
  res.send("Welcome to Home page");
});
app.get("/user", reqFilter, (req, res) => {
  res.send("Welcome to User page");
});
app.get("/about", (req, res) => {
  res.send("Welcome to about page");
});

app.listen(5000);
