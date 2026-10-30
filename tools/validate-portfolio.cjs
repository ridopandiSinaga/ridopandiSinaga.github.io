"use strict";
const fs = require("node:fs");
const path = require("node:path");
const { validate } = require("../assets/js/portfolio-data.js");
const root = path.resolve(__dirname, "..");
try {
  const data = JSON.parse(fs.readFileSync(path.join(root, "_data/portfolio.json"), "utf8"));
  const errors = validate(data, {
    assetExists: asset => fs.existsSync(path.join(root, asset.slice(1)))
  });
  if (errors.length) {
    errors.forEach(error => console.error(`::error::${error.replace(/[\r\n]/g, " ")}`));
    process.exitCode = 1;
  } else console.log(`Portfolio valid: ${data.projects.length} projects; referenced local files exist.`);
} catch (error) {
  console.error(`::error::Tidak bisa membaca _data/portfolio.json: ${error.message}`);
  process.exitCode = 1;
}
