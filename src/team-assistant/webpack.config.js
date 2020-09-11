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
    chunkFilename: '[contenthash].bundle.js',
    path: (path.resolve(__dirname, 'dist') /*: string */),
  },
  plugins: [
    (new CleanWebpackPlugin() /*: Object */),
    (new HtmlWebpackPlugin({
      title: 'My app',
      hash: true,
      scriptLoading: 'defer',
      template: 'src/index.html',
    }) /*: Object */),
  ],
  devServer: {
    contentBase: (path.join(__dirname, 'dist') /*: string */),
    compress: true,
    port: 9000,
  },
  resolve: {
    extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  module: {
    rules: [
      {
        type: 'javascript/auto',
        test: (/\.mjs$/ /*: RegExp */),
      },
      {
        test: (/\.(?:js)$/ /*: RegExp */),
        use: {
          loader: 'babel-loader',
          options: {
            sourceType: 'unambiguous',
          },
        },
      },
      {
        test: (/\.css$/i /*: RegExp  */),
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
