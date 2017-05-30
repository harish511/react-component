'use strict';

var argv = require('yargs').argv;

module.exports = {
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(bower_components|node_modules)/,
      loader: 'babel',
    }],
  },
  output: {
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: [
      '',
      '.js',
    ],
  },
};
