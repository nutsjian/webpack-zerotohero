const path = require("path");

const config = {
  // mode: "development",
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "./dist/"),
    filename: "build.js"
  }
};

module.exports = config;
