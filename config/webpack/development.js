const webpack = require('webpack')
const config = require('./common')

config.debug = true

config.entry.unshift('webpack/hot/dev-server')

config.output.publicPath = 'https://localhost:8080/'

config.plugins.unshift(new webpack.HotModuleReplacementPlugin())

module.exports = config
