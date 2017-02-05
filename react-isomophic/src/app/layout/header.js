import React from 'react'
import Nav from '../component/nav'
import Banner from '../component/banner'

class Header extends React.Component {
  render() {
    const { location } = this.props

    return (
      <header>
        <Nav location={location} />

        <Banner/>
      </header>
    )
  }
}

export default Header
