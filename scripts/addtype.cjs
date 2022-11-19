const fs = require("fs");
const _package = require("../package.json");

console.log("Adding type:module to package.json");

_package.type = "module";

console.log(_package);

// eslint-disable-next-line no-magic-numbers
fs.writeFileSync("package.json", JSON.stringify(_package, null, 2));
