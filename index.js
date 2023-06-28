const fs = require("fs");
const color = require("colors");
const input = process.argv;
if (input[2] == "add") {
  fs.writeFileSync(input[3], input[4]);
} else if (input[2] == "remove") {
  fs.unlinkSync(input[3]);
} else {
  console.log("invalid o/p".red);
}

// cmd_add_file:_node index.js add orange.txt "this is a color"
// cmd_add_file:node index.js remove apple.txt
//cmd_remove_file: node index.js remove orange.txt
