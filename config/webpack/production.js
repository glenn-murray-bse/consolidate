'use strict'

let webpack = require('webpack')

let config = require('./common')

config.plugins.push(new webpack.optimize.UglifyJsPlugin({
  exclude: /node_modules/,
  beautify: false,
  sourceMap: true, //TODO: consider disabling on production deploy
  comments: false,
  compress: {
    drop_console: true
  },
  mangle: {
    screw_ie8 : true
  }
}))

config.output.path = __dirname + '/distribution'

config.output.filename = '[name].bundle.min.js'

module.exports = config