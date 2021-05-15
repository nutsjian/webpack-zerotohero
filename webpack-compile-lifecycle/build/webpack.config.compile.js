// 基于代码的方式构建
var webpack = require('webpack')
var config = require('../webpack.config.basic.js')
webpack(config, (err, stats) => {})