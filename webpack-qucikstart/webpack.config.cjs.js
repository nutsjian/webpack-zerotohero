const path = require("path");
const config = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "commonjs2_main.js",
    // library: "myLib",
    libraryTarget: "commonjs2"
  }
};

module.exports = config;
