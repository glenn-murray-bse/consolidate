// faster but prevents executing individual tests
// see https://github.com/webpack/karma-webpack
const testsContext = require.context('.', true, /test$/)

testsContext.keys().forEach(testsContext)
