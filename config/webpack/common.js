'use strict'

var webpack = require('webpack')

const baseDirectory =  __dirname + '/../../'

const outputDirectory = baseDirectory + 'public'

module.exports = {
  cache: true,
  devtool: 'inline-source-map',
  entry: [
    baseDirectory + 'source'
  ],
  output: {
    path: outputDirectory,
    filename: '[name].bundle.js',
    chunkFilename: '[id].bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      riot: 'riot'
    }),
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'main', /* filename= */'main.bundle.js'),
  ],
  module: {   
    preLoaders: [{
      test: /\.tag$/,
      exclude: /node_modules/,
      loader: 'riotjs',
      query: {
        type: 'none'
      }
    }, {
      test: /\.js$|\.tag$/,
      exclude: /node_modules|vendor/,
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
  babel: {
    presets: ['es2015'],
  },
  eslint: {
    emitErrors: true,
    failOnHint: true,
    configFile: baseDirectory + '.eslintrc.js'
  },
  devServer: {
    contentBase: outputDirectory,
    compress: true
  }
}
