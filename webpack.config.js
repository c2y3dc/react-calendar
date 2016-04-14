var HTMLWebpackPlugin = require('html-webpack-plugin')
var path = require('path')
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: path.join(__dirname, '/app/index.html'),
  filename: 'index.html',
  inject: 'body',
})

module.exports = {
  entry: [
    'babel-polyfill',
    './app/index.js',
  ],
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index_bundle.js',
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.css$/, loader: 'style-loader!css-loader'},
    ],
  },
  plugins: [HTMLWebpackPluginConfig],
}
