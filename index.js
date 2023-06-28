const express = require("express");
const app = express();

let dataa = [
  {
    name: "sagar",
    email: "sagarmj@gmail.com",
  },
  {
    name: "sagar",
    email: "sagarmj@gmail.com",
  },
  {
    name: "sagar",
    email: "sagarmj@gmail.com",
  },
];

app.get("", (req, res) => {
  console.log("data sent by client", req.query.name);
  res.send(
    `Hello ${req.query.name} <input type='text' placeholder="user name"/>
    <button>Click me</button>
    <a href="/about">go to about</a>
    `
  );
});
app.get("/about", (req, res) => {
  res.send(`<a href="/">go to home</a> <br/> ${JSON.stringify(dataa)}`);
});

app.listen(5000);
