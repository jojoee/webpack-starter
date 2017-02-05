import React from 'react'
import NavLink from '../component/nav-link'

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.object
  },

  handleSubmit(event) {
    event.preventDefault()
    const param1 = event.target.elements[0].value
    const param2 = event.target.elements[1].value
    const path = `/search/${param1}/${param2}`
    
    this.context.router.push(path)
  },

  render() {
    return (
      <div>
        <h2>Repos</h2>
        <ul>
          <li><NavLink to="/search/reactjs/react-router">React Router</NavLink></li>
          <li><NavLink to="/search/facebook/react">React</NavLink></li>
          
          <li>
            <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="param1"/> / {' '}
              <input type="text" placeholder="param2"/>{' '}
              <button type="submit">Go</button>
            </form>
          </li>
        </ul>

        {this.props.children}
      </div>
    )
  }
})
