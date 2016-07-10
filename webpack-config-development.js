'use strict'

var webpack = require('webpack')

let config = require('./webpack-config-common')

config.debug = true

config.devtool = 'inline-source-map'

config.entry.unshift('webpack/hot/dev-server')

config.plugins.unshift(new webpack.HotModuleReplacementPlugin())

module.exports = config