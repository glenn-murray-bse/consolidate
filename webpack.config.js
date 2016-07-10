var webpack = require('webpack')

module.exports = {
  debug: true,
  devtool: 'inline-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8080/',
    'webpack/hot/dev-server',
    __dirname + '/source/client/index'
  ],
  output: {
    path: __dirname + '/public',
    filename: '[name].bundle.js',
    chunkFilename: '[id].bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      riot: 'riot'
    })
  ],
  module: {   
    preLoaders: [{
      test: /\.tag$/,
      exclude: /node_modules/,
      loader: 'riotjs-loader',
      query: {
        type: 'none'
      }
    }, {
      test: /\.js$|\.tag$/,
      exclude: /node_modules/,
      loader: 'eslint-loader'
    }],
    loaders: [{
      test: /\.js$|\.tag$/,
      exclude: /node_modules|server/,
      loader: 'babel',
      query: {
        presets: 'es2015-riot' // as of riot 2.5.x this may not be required
        //NOTE: do not revert to es2015 without checking tag compilation
        // with require, import and import from syntax i.e. npm start
      }
    }],
    // instanbul loader may be better only included in karma config using webpack-merge
    postLoaders: [ { //delays coverage til after tests are run, fixing transpiled source coverage error
      test: /\.js$|\.tag$/,
      exclude: /(test|node_modules|bower_components)\//, //TODO: remove test runner (webpacked) file from coverage
      loader: 'istanbul-instrumenter'
    }]
  },
  devServer: {
    contentBase: __dirname + '/public'
  },
  eslint: {
    emitErrors: true,
    failOnHint: true,
    configFile: '.eslintrc.js'
  }
}
