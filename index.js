const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "files");
console.log(dirPath);
for (i = 0; i < 5; i++) {
  fs.writeFileSync(`${dirPath}/hello${i}.txt`, "a simple text file");
}
