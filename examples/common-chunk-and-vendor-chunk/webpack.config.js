var path = require('path');
var webpack = require('webpack');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

var PATHS = {
  vendor1: path.join(__dirname, 'src', 'vendor1'),
  vendor2: path.join(__dirname, 'src', 'vendor2'),
  pageA: path.join(__dirname, 'src', 'pageA'),
  pageB: path.join(__dirname, 'src', 'pageB'),
  pageC: path.join(__dirname, 'src', 'pageC'),
};

module.exports = {
  entry: {
    vendor: [PATHS.vendor1, PATHS.vendor2],
    pageA: PATHS.pageA,
    pageB: PATHS.pageB,
    pageC: PATHS.pageC,
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  plugins: [
    new CommonsChunkPlugin({
      names: ["common","vendor"],
      //names: ["vendor","common"],
      //names: ["common"],
      minChunks: 2,
    }),
  ],
};