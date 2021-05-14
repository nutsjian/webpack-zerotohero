module.exports = {
  mode: "development",
  entry: "./src/index_hmr2.js",
  devServer: {
    contentBase: "./dist",
    open: true,
    // hot: false，修改 text.js 后，自动刷新浏览器，并且 input 中输入的内容会被重置
    // hot: true，修改 text.js 后，模块热替换，这里的模块就是指 text.js，热替换并不会让 input 组件的内容重置，这里能做到
    // text.js 模块热更新，是因为 index_hmr2.js 中有如下代码：
    /*
      if (module.hot) {
        module.hot.accept("./text.js", function() {
          render();
        })
      }
    */
    hot: true
  }
}