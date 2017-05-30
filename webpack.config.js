'use strict';

const webpackDev = require('./tools/webpack.config.dev');
const webpackProd = require('./tools/webpack.config.prod');

function snakeToCamel(s){
  return s.replace(/(\-\w)/g, function(m){return m[1].toUpperCase();});
}

function buildConfig(webpackConfig, options) {
  const config = Object.create(webpackConfig);
  config.entry = {
    [options.name || options.filename]: `./${options.filename}.js`
  };
  config.output.libraryTarget = `umd`;
  config.output.library = options.library || options.name || snakeToCamel(options.filename);
  return config;
}

module.exports = [
  {
    filename: 'index',
    name: 'browserStorage',
  },
  {
    filename: 'polyfills',
    name: 'browserStorage-es5-polyfills',
  },
].map(function(filename){
  const options = typeof(filename) === 'string' ? {
    filename: filename,
    library: filename
  } : filename;
  return process.env['NODE_ENV'] === 'dev' ? buildConfig(webpackDev, options) : buildConfig(webpackDev, options);
});
