const express = require("express");
const app = express();
const reqFilter = require("./middleware");
const route = express.Router();

// app.use(reqFilter);

route.use(reqFilter);
app.get("/", (req, res) => {
  res.send("Welcome to Home page");
});
route.get("/user", (req, res) => {
  res.send("Welcome to User page");
});
route.get("/about", (req, res) => {
  res.send("Welcome to about page");
});
app.get("/contact", (req, res) => {
  res.send("Welcome to contact page");
});
app.use("/", route);

app.listen(5000);
