const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    'javascripts/build.js': './src/index.jsx',
  },
  output: {
    filename: '[name]', // [name].[chunkhash].js is for production!!!
    path: path.resolve(__dirname, 'public'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components|public\/)/,
        loader: 'babel-loader',
      },
      {
        test: /\.pug$/,
        use: 'pug-loader',
      },
    ],
  },
};
