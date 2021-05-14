const path = require("path");
const config = {
  mode: "development",
  entry: "./src/index_css.js",
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "commonjs2_withcss_main.js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};

module.exports = config;
