const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "crud");
const filePath = `${dirPath}/apple.txt`;

// fs.writeFileSync(filePath, "This is a simple txt file");

// how to red file

// fs.readFile(filePath, "utf8", (err, item) => {
//   console.log(item);
// });

// how to updated files

// fs.appendFile(filePath, " hahahahah and file name i app.txt", (err) => {
//   if (err) console.log("file is updated");
// });

// how to rename file name dynamically

fs.rename(filePath, `${dirPath}/fruit.txt`, (err) => {
  if (err) console.log("file name is updated");
});
