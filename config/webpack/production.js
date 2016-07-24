'use strict'

let webpack = require('webpack')

let config = require('./common')

const baseDirectory =  __dirname + '/../../' //TODO: DRY common variables

config.plugins.push(new webpack.optimize.UglifyJsPlugin({
  exclude: /node_modules/,
  beautify: false,
  sourceMap: false,
  comments: false,
  compress: {
    drop_console: true
  },
  mangle: {
    screw_ie8 : true
  }
}))

config.output.path = baseDirectory + 'distribution'

config.output.filename = '[name].bundle.min.js'

config.devtool = 'source-map'

module.exports = config