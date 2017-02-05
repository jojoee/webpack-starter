import React from 'react'

class Search extends React.Component {
  render() {
    return (
      <div className="col-xs-12 search">
        <div className="col-xs-10">
          <input type="text" placeholder="Search"/>
        </div>

        <div className="col-xs-2">
          <input type="submit"/>
        </div>
      </div>
    )
  }
}

export default Search
