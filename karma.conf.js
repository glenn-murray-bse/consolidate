module.exports = function(config) {
  config.set({
    frameworks: ['mocha', 'chai', 'riot'],
    files: [
      // './source/**/*.js',
      './source/**/*.tag',
      './test/**/*.js'
    ],
    preprocessors: {
      // './source/**/*.js': ['riot', 'babel', 'coverage'],
      './source/**/*.tag': ['riot', 'babel', 'coverage'],
      './test/**/*.js': ['babel']
    },
    browsers: ['PhantomJS'],
    reporters: ['mocha', 'coverage', 'coveralls'],
    // coverageReporter: {
    //   type: 'lcov', // lcov or lcovonly are required for generating lcov.info files 
    //   dir: 'coverage/'
    // },
    babelPreprocessor: {
      options: {
        presets: ['es2015'],
        sourceMap: 'inline'
      },
      filename: function (file) {
        return file.originalPath.replace(/\.js$/, '.es5.js')
      },
      sourceFileName: function (file) {
        return file.originalPath
      }
    }
  })
}