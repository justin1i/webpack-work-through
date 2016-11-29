var path = require('path');
var webpack = require('webpack');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    A: './src/a',
    B: './src/b',
    C: './src/c',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css'),
        include: path.join(__dirname, 'src'),
      },
      { 
        test: /\.(jpg|png)$/,
        loader: "file",
        include: path.join(__dirname, 'src'),
      }
    ]
  },
  plugins: [
    new CommonsChunkPlugin({
      names: 'commons',
      filename: 'commons.js',
      chunks: ['A', 'B'],
    }),
    new ExtractTextPlugin('[name].css'),
  ]
};