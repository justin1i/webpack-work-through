var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    bundle: path.join(__dirname, 'src'),
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
  ]
};