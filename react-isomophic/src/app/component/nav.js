import React from 'react'
import { IndexLink, Link } from 'react-router'
import NavLink from './nav-link'

class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true
    }
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed
    this.setState({collapsed})
  }

  render() {
    const { location } = this.props
    const { collapsed } = this.state
    const navClass = collapsed ? 'collapse' : 'collapsed'

    return (
      <nav className="nav navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button type="button"
              className="navbar-toggle"
              onClick={this.toggleCollapse.bind(this)}>
              {navClass}
            </button>
          </div>

          <a className="logo" href="#">
            React Redux - Universal Starter Kit
          </a>

          <ul className="nav navbar-nav main-menu">
            <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
            <li><NavLink to="/search">Search</NavLink></li>
            <li><NavLink to="/post">Blog</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/gallery">Gallery</NavLink></li>
            <li><NavLink to="/404">404</NavLink></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Nav
