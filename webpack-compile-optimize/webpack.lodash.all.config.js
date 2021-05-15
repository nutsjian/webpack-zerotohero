var webpack = require('webpack')
const CompressionPlugin = require('compression-webpack-plugin');
const { merge } = require('webpack-merge')
const common = require('./webpack.common.config')

module.exports = merge(common, {
  entry: {
    'example-lodash-all': './src/example-lodash-all.js',
  },
  // plugins: [
  //   // gzipped 压缩后的大小是 26KB
  //   // https://webpack.js.org/plugins/compression-webpack-plugin
  //   new CompressionPlugin({
  //     filename: "[path][base].gz",
  //     algorithm: 'gzip'
  //   })
  // ]
})