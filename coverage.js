const istanbul = require('istanbul');
const collector = new istanbul.Collector();
const reporter = new istanbul.Reporter();
 
const remappedJson = require('./coverage/coverage-remapped.json');
const coverage = Object.keys(remappedJson).reduce((result, source) => {
  // only keep js files under src/ 
  if (source.match(/^source\/.*$/)) {
    result[source] = remappedJson[source];
  }
 
  return result;
}, {});
 
collector.add(coverage);
 
reporter.add('html');
reporter.write(
  collector,
  true,
  () => console.log('open coverage/index.html to see the coverage report.')
);
