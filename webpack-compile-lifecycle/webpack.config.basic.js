module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  output: {
    // filename: "source-map.main.js",
    filename: "main.js",
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/,
  //       use: {
  //         loader: 'babel-loader',
  //         options: {
  //           presets: ['@babel/preset-env']
  //         }
  //       }
  //     }
  //   ]
  // }
}