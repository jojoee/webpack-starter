import React from 'react'
import Article from '../component/article'
import SearchBar from '../component/search-bar'

class Blog extends React.Component {
  render() {
    const { postId } = this.props.params
    const articles = [
      'Some Article',
      'Some Other Article',
      'Yet Another Article',
      'Still More',
      'Fake Article',
      'Partial Article',
      'American Article',
      'Mexican Article'
    ].map((title, i) =>
      <Article key={i} postId={i} title={title}/>)

    const result = (articles[postId]) ? articles[postId] : articles

    return (
      <div>
        <h1>Blog</h1>

        <SearchBar/>

        <div className="col-xs-12 article-list">
          {result}
        </div>
      </div>
    )
  }
}

export default Blog
