var webpack = require('webpack')

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    __dirname + '/source/index'
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
      include: /source/,
      exclude: /node_modules/,
      loader: 'riotjs-loader',
      query: {
        type: 'none'
      }
    }, {
      test: /\.js|\.tag$/,
      include: /source/,
      exclude: /node_modules/,
      loader: 'eslint-loader'
    }],
    loaders: [{
      test: /\.js|\.tag$/,
      include: /source/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: 'es2015'
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