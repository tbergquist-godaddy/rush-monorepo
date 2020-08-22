// @flow

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: (path.resolve(__dirname, 'dist') /*: string */),
  },
  plugins: [
    (new CleanWebpackPlugin() /*: CleanWebpackPlugin */),
    (new HtmlWebpackPlugin({
      title: 'My app',
      hash: true,
      scriptLoading: 'defer',
      template: 'src/index.html',
    }) /*: HtmlWebpackPlugin */),
  ],
  devServer: {
    contentBase: (path.join(__dirname, 'dist') /*: string */),
    compress: true,
    port: 9000,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: (/\.(?:js)$/ /*: RegExp */),
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: (/\.css$/i /*: RegExp  */),
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
