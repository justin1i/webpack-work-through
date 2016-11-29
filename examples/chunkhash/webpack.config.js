var path = require('path');
var webpack = require('webpack');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

module.exports = {
  entry: { 
    main: './src',
    common: ['./src/vendor'],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[chunkhash].js',
  },
  plugins: [
    new CommonsChunkPlugin({
      names: ['common', 'manifest']
    }),
    /*new CommonsChunkPlugin({
      name: 'manifest',
    }),*/
  ],
};