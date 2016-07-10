'use strict'

var webpack = require('webpack')

let config = require('./common')

// instanbul loader may be better only included in karma config using webpack-merge
config.module.postLoaders = [{ //delays coverage til after tests are run, fixing transpiled source coverage error
  test: /\.js$|\.tag$/,
  exclude: /test|node_modules|bower_components/,
  loader: 'istanbul-instrumenter'
}]

module.exports = config