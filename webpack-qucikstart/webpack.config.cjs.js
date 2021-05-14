const path = require("path");
const config = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "./dist/library/"),
    filename: "target_var_myLib.js",
    // library: "myLib",
    libraryTarget: "commonjs"
  }
};

module.exports = config;
