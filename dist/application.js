
(function(tagger) {
  if (typeof define === 'function' && define.amd) {
    define(function(require, exports, module) { tagger(require('riot'), require, exports, module)})
  } else if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    tagger(require('riot'), require, exports, module)
  } else {
    tagger(window.riot)
  }
})(function(riot, require, exports, module) {
riot.tag2('loan', '<h3>{title}</h3>', '', '', function(opts) {
    this.title = 'Loan ' + this.opts.loan
});

riot.tag2('loans', '<h2>{title}</h2> <loan each="{loan in loans}" loan="{loan}"></loan>', '', '', function(opts) {
    this.loans = [1,2,3,4,5]
    this.title = 'Loans'
});

riot.tag2('application', '<h1>{title}</h1> <loans></loans>', '', '', function(opts) {
    this.title = 'Consolidate'
});});