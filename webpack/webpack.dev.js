const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('./webpack.common.js');

const sassVars = {
  rootClass: '.wci',
  color: 'white',
};

const webpackDevConfig = merge(webpackConfig, {
  entry: './index.js',
  devtool: 'inline-source-map',
  mode: 'development',
  devServer: {
    contentBase: './',
    open: true,
    watchContentBase: true
  },
  output: {
    filename: '[name].js',
    path: path.resolve(process.cwd(), 'dev'),
    publicPath: '/dev',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              includePaths: ['node_modules'],
              'get($keys)': function(keys) {
                keys = keys.getValue().split('.');
                let result = sassVars;
                let i;
                for (i = 0; i < keys.length; i++) {
                  result = result[keys[i]];
                }
                result = sassUtils.castToSass(result);
                return result;
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});

module.exports = webpackDevConfig;
