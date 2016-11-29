var path = require('path');
var webpack = require('webpack');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

module.exports = {
  entry: { 
    main: path.join(__dirname, 'src'),
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  plugins: [
    new CommonsChunkPlugin({
      //name: 'main',
      async: true,
    }),
  ],
};