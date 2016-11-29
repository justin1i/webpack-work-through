var path = require('path');
var webpack = require('webpack');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

module.exports = {
  entry: {
    pageA: './src/pageA',
    pageB: './src/pageB',
    pageC: './src/pageC',
    adminPageA: './src/adminPageA',
    adminPageB: './src/adminPageB',
    adminPageC: './src/adminPageC',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    publicPath: 'dist/',
  },
  plugins: [
    new CommonsChunkPlugin({
      name: 'admin-commons',
      chunks: ['adminPageA', 'adminPageB'],
    }),
    new CommonsChunkPlugin({
      name: 'commons',
      chunks: ['pageA', 'pageB', 'admin-commons'],
      //minChunks: 2,
    }),
    new CommonsChunkPlugin({
      name: 'c-commons',
      chunks: ['pageC', 'adminPageC'],
    }),
  ],
};