const express = require("express");
const app = express();

app.get("", (req, res) => {
  console.log("data sent by client", req.query.name);
  res.send(`Hello ${req.query.name}`);
});
app.get("/about", (req, res) => {
  res.send("Hello this is About page");
});

app.listen(5000);
