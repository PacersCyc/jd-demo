var webpack = require('webpack')
var path = require('path')

console.log(path.resolve('./dist'))
module.exports = {
  watch: true,
  entry: {
    'jd-index': './index.js',
    'test-demo': './demo.js'
  },
  output: {
    path: path.resolve('./dist'),
    filename:'[name].js'
  },
  devtool: 'source-map'
}