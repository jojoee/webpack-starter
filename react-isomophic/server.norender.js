var express = require('express')
var path = require('path')
var compression = require('compression')

var app = express()
var publicPath = path.join(__dirname, 'dist')
var indexFilePath = path.join(__dirname, 'dist', 'index.html')

app.use(compression())
app.use(express.static(publicPath))

// send all requests to index.html
// so browserHistory in React Router works
app.get('*', function(req, res) {
  res.sendFile(indexFilePath)
})

var port = process.env.PORT || 3000
app.listen(port, function() {
  console.log('Production Express server running at localhost:' + port)
})
