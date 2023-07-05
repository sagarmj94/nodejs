const express = require("express");
const app = express();

const reqFilter = (req, res, next) => {
  console.log("reqFilter");
  if (!req.query.age) {
    res.send("Please Provide age");
  } else if (req.query.age < 18) {
    res.send("You can not access this");
  } else {
    next();
  }
};

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
