'use strict'

let webpack = require('webpack')

let config = require('./webpack-config-common')

config.plugins.push(new webpack.optimize.UglifyJsPlugin({
  exclude: /source|node_modules/,
  sourceMap: true
}))

config.output.path = __dirname + '/distribution'

config.output.filename = '[name].bundle.min.js'

module.exports = config