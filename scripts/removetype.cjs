const fs = require("fs");
const {spawnSync, execSync} = require("child_process");

const _package = require("../package.json");

console.log("Removing type:module to package.json");

delete _package.type;

// eslint-disable-next-line no-magic-numbers
fs.writeFileSync("package.json", `${JSON.stringify(_package, null, 2)}\n`);

console.log("Add git tag");

try {
  // spawnSync("git", ["tag", "-a", `v${_package.version}`]);
  execSync(`git tag -a v${_package.version}`);
} catch (error) {
  console.log(error);

  throw error;
}
