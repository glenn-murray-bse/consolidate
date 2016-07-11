let webpack = require('webpack')

const baseDirectory =  __dirname + '/public'

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    __dirname + '/source/client/index'
  ],
  output: {
    path: baseDirectory,
    filename: '[name].bundle.js',
    chunkFilename: '[id].bundle.js'
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
        presets: 'es2015-riot' // as of riot 2.5.x this may not be required
        //NOTE: do not revert to es2015 without checking tag compilation
        // with require, import and import from syntax i.e. npm start
      }
    }]
  },
  eslint: {
    emitErrors: true,
    failOnHint: true,
    configFile: '.eslintrc.js'
  },
  devServer: {
    contentBase: baseDirectory
  }
}
