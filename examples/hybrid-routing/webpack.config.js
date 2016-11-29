var path = require('path');
var webpack = require('webpack');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;


module.exports = {
  entry: {
    pageA:'./src/aEntry',
    pageB:'./src/bEntry',

   'commons': './src/router',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist/',
    filename: '[name].bundle.js',
    chunkFilename: '[id].chunk.js',
  },
  plugins: [
    new CommonsChunkPlugin({
      name: 'commons',
      filename: 'commons.js',
    }),
  ]
};