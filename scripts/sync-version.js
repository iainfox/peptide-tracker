const fs = require("fs");

const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));
const tauri = JSON.parse(fs.readFileSync("src-tauri/tauri.conf.json", "utf8"));

tauri.package.version = pkg.version;

fs.writeFileSync(
  "src-tauri/tauri.conf.json",
  JSON.stringify(tauri, null, 2)
);

console.log(`Synced version to ${pkg.version}`);