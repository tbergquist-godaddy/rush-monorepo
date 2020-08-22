// @flow

const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: (path.resolve(__dirname, 'dist') /*: string */),
  },
  plugins: [
    (new CopyPlugin({
      patterns: [
        {
          from: path.join(__dirname, 'src', 'index.html'),
          to: path.join(__dirname, 'dist', 'index.html'),
        },
      ],
    }) /*: CopyPlugin */),
  ],
  devServer: {
    contentBase: (path.join(__dirname, 'dist') /*: string */),
    compress: true,
    port: 9000,
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
