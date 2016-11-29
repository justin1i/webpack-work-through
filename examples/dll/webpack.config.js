var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    alpha: ['./src/alpha', './src/a'],
    beta: ['./src/beta', './src/b'],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'MyDll.[name].js',
    library: '[name]_[hash]',
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, 'dist', '[name]-manifest.json'),
      name: '[name]_[hash]',
    }),
  ]
};