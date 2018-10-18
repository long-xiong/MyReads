import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import Book from './Book'

class SearchBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    changeBookself: PropTypes.func.isRequired
  }

  render() {
    const { query, results, changeBookself } = this.props

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <div className="search-books-input-wrapper">
          <Link className="close-search" to="/"> &gt; Close</Link>
            <input type="text" value={query} onChange={(event) => this.updateQuery(event.target.value)} placeholder="Search by title or author"/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {results.length > 0 && (results.map((result) =>
              <li key={result.id} className="contact-list-item">>
                <Book Book={Book} onShelfChange={changeBookself} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

SearchBooks.propTypes = {
  updateQuery: PropTypes.func.isRequired,
  results: PropTypes.array,
  query: PropTypes.string,
  changeBookself: PropTypes.func.isRequired,
}

export default SearchBooks