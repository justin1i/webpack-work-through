var path = require('path');
var webpack = require('webpack');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

module.exports = {
  entry: {
    pageA: './src/pageA',
    pageB: './src/pageB',
    pageC: './src/pageC',
    vendor1: ['./src/vendor1'],
    vendor2: ['./src/vendor2'],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  plugins: [
    new CommonsChunkPlugin({
      names: ['vendor2', 'vendor1'],
      minChunks: Infinity,
    }),
  ],
};