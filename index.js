const express = require("express");
const path = require("path");
const app = express();
const publicPath = path.join(__dirname, "public");

// app.use(express.static(publicPath));

app.get("/about", (req, res) => {
  res.sendFile(`${publicPath}/about.html`);
});
app.get("", (req, res) => {
  res.sendFile(`${publicPath}/index.html`);
});
app.get("/help", (req, res) => {
  res.sendFile(`${publicPath}/help.html`);
});
app.get("*", (req, res) => {
  res.sendFile(`${publicPath}/404.html`);
});

app.listen(5000);
