'use strict';

var argv = require('yargs').argv;
var webpack = require('webpack');
var baseConfig = require('./webpack.config.base.js');
var path = require('path');
var pkg = require('../package.json');
var R = require('ramda');

var config = R.clone(baseConfig);
config.devtool = 'eval-source-map';
config.context = path.join(__dirname, "/../src");
config.output.path = path.join(__dirname, "/../dist");
config.output.filename = `[name].js`;

config.plugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.DefinePlugin({
    'process.env.AMEX_PKG_VERSION': JSON.stringify(pkg.version),
    'process.env.NODE_ENV': JSON.stringify('development'),
  }),
];

module.exports = config;
