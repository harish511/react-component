'use strict';

var argv = require('yargs').argv;
var webpack = require('webpack');
var baseConfig = require('./webpack.config.base.js');
var path = require('path');
var pkg = require('../package.json');
var R = require('ramda');

var config = R.clone(baseConfig);
config.devtool = 'source-map';
config.context = path.join(__dirname, "/../src");
config.output.path = path.join(__dirname, "/../dist");
config.output.path = path.join(__dirname, "/../dist");
config.output.filename = `[name].min.js`;

config.plugins = [
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.AggressiveMergingPlugin(),
  new webpack.optimize.OccurenceOrderPlugin(true),
  new webpack.DefinePlugin({
    'process.env.PKG_VERSION': JSON.stringify(pkg.version),
    'process.env.NODE_ENV': JSON.stringify('production'),
  }),
  new webpack.optimize.UglifyJsPlugin({
    output: {comments: false},
    compressor: { warnings: false },
    compress: {
      dead_code: true,
      screw_ie8: true,
      warnings: false
    },
    mangle: true,
    sourcemap: false,
    beautify: false,
    dead_code: true
  })
];

module.exports = config;
