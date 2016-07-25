const webpack = require('webpack')
const config = require('./common')
const constants = require('../constants')

config.plugins.push(new webpack.optimize.UglifyJsPlugin({
  exclude: /node_modules/,
  beautify: false,
  sourceMap: true,
  comments: false,
  compress: {
    drop_console: true // eslint-disable-line camelcase
  },
  mangle: {
    screw_ie8: true // eslint-disable-line camelcase
  }
}))

config.output.path = `${constants.baseDirectory}distribution`
config.output.filename = '[name].bundle.min.js'
config.devtool = 'source-map'

module.exports = config
