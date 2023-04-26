const fs = require("fs");
const {spawn} = require("node:child_process");

const _package = require("../package.json");

console.log("Removing type:module to package.json");

delete _package.type;

// eslint-disable-next-line no-magic-numbers
fs.writeFileSync("package.json", `${JSON.stringify(_package, null, 2)}\n`);

const tag = spawn("git", ["tag", "-a", `v${_package.version}`]);

tag.on("close", () => {
  console.log("Add git tag");
});
