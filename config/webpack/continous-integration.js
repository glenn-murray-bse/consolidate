const config = require('./common')

// instanbul loader may be better only included
// in karma config using webpack-merge

// delays coverage til after tests are run
// fixing transpiled source coverage error
config.module.postLoaders = [{
  test: /\.js$|\.tag$/,
  exclude: /test|node_modules|bower_components/,
  loader: 'istanbul-instrumenter'
}]

module.exports = config
