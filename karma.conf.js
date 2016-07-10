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
    reporters: ['mocha', 'coverage', 'coveralls'],
    // coverageReporter: {
    //   type: 'lcov', // lcov or lcovonly are required for generating lcov.info files 
    //   dir: 'coverage/'
    // },
    webpack: require('./webpack.config')
  })
}