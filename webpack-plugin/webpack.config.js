const path = require("path");
const HelloWorldPlugin = require("./build/plugins/helloworld-plugin.js");

const config = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  plugins: [
    new HelloWorldPlugin()
  ]
};

module.exports = config;
