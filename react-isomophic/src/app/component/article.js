import React from 'react'
import { Link } from 'react-router'

class Article extends React.Component {
  render() {
    const { title } = this.props
    const { postId } = this.props
    const url = `/post/${postId}`

    return (
      <article className="article">
        <header className="article-header">
          <span className="author-name">
            Josephine Kshlerin
          </span>
        </header>

        <div className="article-body">
          <Link to={url} className="title">
            {title}
          </Link>

          <div className="content">
            Eius laborum saepe quia nam itaque laboriosam magni. Ea et illum et autem ut sunt. Quis eos amet consequatur qui a et nihil et. Architecto vero incidunt ullam qui facere aut. Et et neque rerum veniam iusto facere ut velit possimus. Laborum velit est eveniet ad quidem non dolorem aut dolorem.
          </div>
        </div>

        <Link to={url} className="btn btn-default">
          More Info
        </Link>
      </article>
    )
  }
}

export default Article
