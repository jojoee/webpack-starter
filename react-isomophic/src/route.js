import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './app/app'
import Search from './app/template/search'
import About from './app/template/about'
import Blog from './app/template/blog'
import E404 from './app/template/e404'
import Gallery from './app/template/gallery'
import Home from './app/template/home'

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}></IndexRoute>
    
    <Route path="/search(/:param1/:param2)" component={Search}/>
    <Route path="/post(/:postId)" component={Blog}></Route>
    <Route path="/about" component={About}/>
    <Route path="/gallery" component={Gallery}/>
    <Route path="/404" component={E404}/>
  </Route>
)
