'use strict'

var webpack = require('webpack')

let config = require('./common')

config.debug = true

config.entry.unshift('webpack/hot/dev-server')

config.plugins.unshift(new webpack.HotModuleReplacementPlugin())

module.exports = config