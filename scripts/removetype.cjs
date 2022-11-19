const fs = require("fs");
const _package = require("../package.json");

console.log("Removing type:module to package.json");

delete _package.type;

// eslint-disable-next-line no-magic-numbers
fs.writeFileSync("package.json", JSON.stringify(_package, null, 2));
