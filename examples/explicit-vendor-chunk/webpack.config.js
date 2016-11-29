var path = require('path');
var webpack = require('webpack');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

var PATHS = {
  vendor: path.join(__dirname, 'src', 'vendor'),
  pageA: path.join(__dirname, 'src', 'pageA'),
  pageB: path.join(__dirname, 'src', 'pageB'),
  pageC: path.join(__dirname, 'src', 'pageC'),
};

module.exports = {
  entry: {
    vendor: [PATHS.vendor],
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
      names: ['vendor'],
      minChunks: Infinity,
    }),
  ],
};