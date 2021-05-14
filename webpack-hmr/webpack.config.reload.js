module.exports = {
  mode: "development",
  entry: "./src/index0.js",
  watch: true,
  devServer: {
    contentBase: "./dist",
    open: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
}