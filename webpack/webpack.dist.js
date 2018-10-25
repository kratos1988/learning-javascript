const merge = require('webpack-merge');
const packageJSON = require('../package.json');
const path = require('path');
const webpackConfig = require('./webpack.common.js');

const webpackDistConfig = merge(webpackConfig, {
  entry: `${packageJSON.main}`,
  mode: 'production',
  output: {
    filename: `${packageJSON.name}.min.js`,
    path: path.resolve(process.cwd(), 'dist'),
    library: ['lmn', 'widget', `${packageJSON.name}`],
    libraryTarget: 'umd',
    umdNamedDefine: true
  }
});

module.exports = webpackDistConfig;
