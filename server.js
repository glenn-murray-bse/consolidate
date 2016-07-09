var express = require('express'),
  swig = require('swig'),
  riot = require('riot'),
  application = require('./application.tag'),
  app = express()

app.engine('html', swig.renderFile)

app.set('view engine', 'html')
app.set('views', __dirname + '/')

app.use(express.static(__dirname + '/'))

app.get('/', (req, res) => {
  var mode = 'Pre-Rendered'
  var tagContent = riot.render(application, {
    mode
  })
  res.render('index', {
    tagContent,
    mode
  })
})

app.listen(3000, () => {
  console.log('server listening on port 3000')
})