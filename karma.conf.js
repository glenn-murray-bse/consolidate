module.exports = function(config) {
  config.set({
    frameworks: ['mocha', 'chai', 'riot'],
    files: [
      'test/index.js'
    ],
    preprocessors: {
      'test/index.js': ['webpack', 'sourcemap', 'coverage']
    },
    browsers: ['PhantomJS'],
    //TODO: fix sourcemaps in riot (best but not yet implemented)
    // or make coveralls use compiled riotjs files as source
    // (which may require them being included in the repo undesirable)
    reporters: ['mocha', 'coverage', 'coveralls'],
    coverageReporter: {
      type: 'lcov', // lcov or lcovonly are required for generating lcov.info files 
      dir: 'coverage/'
    },
    webpack: require('./webpack.config'),
    webpackServer: {
      noInfo: true // silence console when running in karma
    },
  })
}