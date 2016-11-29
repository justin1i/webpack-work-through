var path = require('path');
var webpack = require('webpack');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

module.exports = {
  entry: {
    pageA: './src/page?A',
    pageB: './src/page?B',
    pageC: './src/page?C',
    pageD: './src/page?D',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[id].chunk.js',
  },
  plugins: [

    new CommonsChunkPlugin({
      name: 'pageA',
      children: true,
    }),
    new CommonsChunkPlugin({
      name: 'pageB',
      children: true,
      minChunks: 3,
    }),
    new CommonsChunkPlugin({
      names: ['pageC', 'pageD'],
      children: true,
      minChunks: function(module, count) {
        return /b\.js$/.test(module.identifier());
      },
    }),
  ],
};