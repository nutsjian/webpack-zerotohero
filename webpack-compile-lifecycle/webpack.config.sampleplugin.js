var SamplePlugin = require('./SamplePlugin.js');

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  devtool: false,
  plugins: [
    new SamplePlugin()
  ]
}