import './image/dummy-img.jpg'

import './sass/style.scss'

import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import route from './route'

render(
  <Router routes={route} history={browserHistory}>
  </Router>,
  document.getElementById('app')
)
