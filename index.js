const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "crud");
const filePath = `${dirPath}/apple.txt`;

// fs.writeFileSync(filePath, "This is a simple txt file");

// fs.readFile(filePath, "utf8", (err, item) => {
//   console.log(item);
// });

fs.appendFile(filePath, " hahahahah and file name i app.txt", (err) => {
  if (err) console.log("file is updated");
});
