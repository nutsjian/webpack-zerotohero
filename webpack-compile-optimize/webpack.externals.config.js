const { merge } = require('webpack-merge')
const common = require('./webpack.common.config')

module.exports = merge(common, {
  entry: {
    'example-externals': './src/example-externals.js',
  },
  externals: {
    // Webpack 配置中的 externals 是将依赖的框架等模块从构建过程中移除。
    // 可能我们的 jquery 是通过 <script /> 标签来引入的，而我们在编写前端代码的时候会使用到 $，所以这里安装了
    // jquery 依赖，方便我们 import $ from "jquery";
    // 需要注意的是：externals 配置的依赖包需要单独制定依赖模块的加载方式：全局对象、CommonJS、AMD 等
    // jquery: 'jquery',
  },
})