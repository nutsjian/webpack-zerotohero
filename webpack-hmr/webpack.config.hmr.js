module.exports = {
  mode: "development",
  entry: "./src/index_hmr.js",
  devServer: {
    contentBase: "./dist",
    open: true,
    // hot: true，当修改 index_hmr.js 后，浏览器重新刷新，input 中的内容会重置
    // 那是因为 index_hmr.js 自身没有模块热更新功能
    hot: true,
  },
  module: {
    rules: [
      {
        // .css 文件通过 stlye-loader css-loader 处理
        // 当 hot: true，由于 style-loader css-loader 对 module.hot 做了处理
        // 所以当修改 assets/css/index.css 后，浏览器会热更新，input 表单中的内容
        // 不会被重置，只会热更新 css 文件样式
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
}