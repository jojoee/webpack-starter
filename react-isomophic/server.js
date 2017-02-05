import React from 'react'
// we'll use this to render our app to an html string
import { renderToString } from 'react-dom/server'
// and these to match the url to routes and then render
import { match, RouterContext } from 'react-router'
import routes from './src/route'

var express = require('express')
var path = require('path')
var compression = require('compression')

var app = express()
var publicPath = path.join(__dirname, 'dist')
var indexFilePath = path.join(__dirname, 'dist', 'index.html')

app.use(compression())

// serve our static stuff like index.css
app.use(express.static(publicPath, {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html'],
  index: false,
  maxAge: '1d',
  redirect: false,
  setHeaders: function(res, path, stat) {
    res.set('x-timestamp', Date.now());
  }
}))

function renderPage(appHtml) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Do Dating - Index</title>
      <link rel="shortcut icon" href="/favicon.ico">
      <link href="/css/style.css" rel="stylesheet">
    </head>
    <body>
      <div id="app" class="app">${appHtml}</div>
      <script type="text/javascript" src="/bundle.js"></script>
    </body>
    </html>
  `
}

// send all requests to index.html
// so browserHistory in React Router works
app.get('*', function(req, res) {

  match({ routes: routes, location: req.url }, (err, redirect, props) => {
    // in here we can make some decisions all at once
    if (err) {
      // there was an error somewhere during route matching
      res.status(500).send(err.message)

    } else if (redirect) {
      // we haven't talked about `onEnter` hooks on routes, but before a
      // route is entered, it can redirect. Here we handle on the server.
      res.redirect(redirect.pathname + redirect.search)

    } else if (props) {
      // `RouterContext` is the what `Router` renders. `Router` keeps these
      // `props` in its state as it listens to `browserHistory`. But on the
      // server our app is stateless, so we need to use `match` to
      // get these props before rendering.
    
      // if we got props then we matched a route and can render
      const appHtml = renderToString(<RouterContext {...props}/>)

      //----------------------------------------------------------------
      // console.log('appHtml', appHtml)
      //----------------------------------------------------------------

      // dump the HTML into a template, lots of ways to do this, but none are
      // really influenced by React Router, so we're just using a little
      // function, `renderPage`
      res.send(renderPage(appHtml))

    } else {
      // no errors, no redirect, we just didn't match anything
      res.status(404).send('Not Found')
    }
  })
})

var port = process.env.PORT || 3000
app.listen(port, function() {
  console.log('Production Express server running at localhost:' + port)
})
