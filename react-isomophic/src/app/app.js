import React from 'react'

import Header from './layout/header'
import Footer from './layout/footer'

class App extends React.Component {
  render() {
    const { location } = this.props

    return (
      <div>
        <Header location={location}/>

        <div className="container">
          {this.props.children}
        </div>

        <Footer/>
      </div>
    )
  }
}

export default App
