const { execSync } = require("child_process");
const fs = require("fs");

const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));
const tauriPath = "src-tauri/tauri.conf.json";
const tauri = JSON.parse(fs.readFileSync(tauriPath, "utf8"));

tauri.version = pkg.version;

fs.writeFileSync(
  tauriPath,
  JSON.stringify(tauri, null, 2)
);

execSync(`git add ${tauriPath}`);

console.log(`Synced version to ${pkg.version}`);