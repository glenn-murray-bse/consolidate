const webpackConfig = require('./config/webpack/test')

module.exports = config => {
  config.set({
    basePath: '',
    autoWatch: true,
    frameworks: [
      'mocha',
      'chai',
      'dirty-chai',
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
    // TODO: fix sourcemaps in riot (best but not yet implemented)
    // or make coveralls use compiled riotjs files as source
    // (which may require them being included in the repo undesirable)
    reporters: ['progress', 'coverage', 'coveralls', 'junit'],
    coverageReporter: {
      dir: 'coverage/',
      reporters: [{
        type: 'json',
        dir: 'json'
      }, {
        type: 'lcov',
        subdir: 'lcov'
      }],
      instrumenterOptions: {
        istanbul: {
          noCompact: true
        }
      }
    },
    webpack: webpackConfig,
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