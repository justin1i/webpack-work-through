var path = require('path');

module.exports = {
  entry: {
    bundle: path.join(__dirname, 'src'),
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[chunkhash].js',
  },
};