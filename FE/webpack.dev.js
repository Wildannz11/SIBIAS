/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const { merge } = require('webpack-merge');
const { cleanWebpackPlugin, CleanWebpackPlugin } = require('clean-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    open: true,
    port: 5000,
    client: {
      overlay: {
        errors: true,
        warnings: true,
      },
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
});
