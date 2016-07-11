// faster but prevents executing individual tests
// see https://github.com/webpack/karma-webpack
var testsContext = require.context('.', true, /test$/)
testsContext.keys().forEach(testsContext)
//# sourceMappingURL=index.js.map