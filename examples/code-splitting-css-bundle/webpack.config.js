var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    bundle: path.join(__dirname, 'src'),
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[chunkhash].js',
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css'),
        include: path.join(__dirname, 'src'),
      },
      { 
        test: /\.png$/,
        loader: "file",
        include: path.join(__dirname, 'src'),
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
};