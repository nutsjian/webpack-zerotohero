var webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  // 在上面的示例中，我们将 devtool 设为 false，而直接使用 EvalSourceMapDevToolPlugin，
  // 通过传入 module: true 和 column:false，达到和预设 eval-cheap-module-source-map 一样的质量，
  // 同时传入 exclude 参数，排除第三方依赖包的 source map 生成。保存设定后通过运行可以看到，在文件体积减小
  //（尽管开发环境并不关注文件大小）的同时，再次构建的速度相比上面表格中的速度提升了将近一倍，达到了最快一级。
  devtool: 'eval-cheap-module-source-map',
  // devtool: false,
  // plugins: [
  //   new webpack.EvalSourceMapDevToolPlugin({
  //     exclude: /node_modules/,
  //     module: true,
  //     columns: false
  //   })
  // ],
  devServer: {
    contentBase: 'dist',
    open: true
  },
  output: {
    // filename: "source-map.main.js",
    filename: "eval-cheap-module-source-map.main.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}