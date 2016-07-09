var webpack = require('webpack')

module.exports = {
  debug: true,
  devtool: 'inline-source-map',
  entry: [
    'webpack/hot/dev-server',
    __dirname + '/source/client/index'
  ],
  output: {
    path: __dirname + '/public',
    filename: 'application.js'
  },
  plugins: [
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
        presets: 'es2015-riot'
      }
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