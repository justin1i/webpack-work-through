var path = require('path');
var webpack = require('webpack');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

module.exports = {
  entry: path.join(__dirname, 'src'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  plugins: [
    new CommonsChunkPlugin({
      name: 'main',
      async: 'async1',
    }),
    new CommonsChunkPlugin({
      name: 'main',
      async: 'async2',
      minChunks: 2,
    }),
    new CommonsChunkPlugin({
      async: true,
    }),
  ],
};