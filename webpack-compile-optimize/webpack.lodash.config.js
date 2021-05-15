var webpack = require('webpack')
const CompressionPlugin = require('compression-webpack-plugin');
const { merge } = require('webpack-merge')
const common = require('./webpack.common.config')

module.exports = merge(common, {
  entry: {
    'example-lodash': './src/example-lodash.js',
  },
  plugins: [
    new CompressionPlugin({
      filename: "[path][base].gz",
      algorithm: 'gzip'
    })
  ]
})