const express = require("express");
const path = require("path");
const app = express();
const publicPath = path.join(__dirname, "public");

// app.use(express.static(publicPath));

app.set("view engine", "ejs");

app.get("/about", (req, res) => {
  res.sendFile(`${publicPath}/about.html`);
});
app.get("", (req, res) => {
  res.sendFile(`${publicPath}/index.html`);
});

app.get("/profile", (req, res) => {
  const user = {
    name: "sagar JAdhav",
    email: "sagarmj1502@gmail.com",
    city: "noida",
    skils: ["php", "css", "javascript"],
  };

  res.render("profile", { user });
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/help", (req, res) => {
  res.sendFile(`${publicPath}/help.html`);
});

app.get("*", (req, res) => {
  res.sendFile(`${publicPath}/404.html`);
});

app.listen(5000);
