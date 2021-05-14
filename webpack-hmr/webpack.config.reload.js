module.exports = {
  mode: "development",
  entry: "./src/index_reload.js",
  devServer: {
    contentBase: "./dist",
    open: true
  }
}