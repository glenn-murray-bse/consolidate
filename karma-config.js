module.exports = function(config) {
  config.set({
    basePath: '',
    autoWatch: true,
    frameworks: [
      'mocha',
      'chai',
      'riot'
    ],
    files: [
      'test/index.js',
      {
        pattern: 'source/client/*.tag',
        served: true,
        included: false
      }
    ],
    preprocessors: {
      'test/index.js': [
        'webpack',
        'sourcemap',
        'coverage'
      ]
    },
    concurrency: 2,
    browsers: ['PhantomJS'],
    //TODO: fix sourcemaps in riot (best but not yet implemented)
    // or make coveralls use compiled riotjs files as source
    // (which may require them being included in the repo undesirable)
    reporters: ['progress', 'coverage', 'coveralls', 'junit'],
    coverageReporter: {
      dir: 'coverage/',
      reporters: [{
        type: 'json', // lcov or lcovonly are required for generating lcov.info files 
        dir: 'json',
      }, {
        type: 'lcov',
        subdir: 'lcov'
      }],
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
    },
    captureTimeout: 300000,
    browserNoActivityTimeout: 300000,
    browserDisconnectTolerance: 2,
    singleRun: true
  })
}