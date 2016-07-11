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
    reporters: ['mocha', 'coverage', 'coveralls', 'junit'],
    coverageReporter: {
      type: 'json', // lcov or lcovonly are required for generating lcov.info files 
      dir: 'coverage/',
      instrumenterOptions: {
        istanbul: { noCompact: true }
      }
    },
    webpack: require('./config/webpack/test'),
    webpackServer: {
      noInfo: true // silence console when running in karma
    },
    junitReporter: {
      outputDir: 'junit',
      outputFile: 'test-results.xml',
      useBrowserName: false
    }
  })
}