import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Book from './Book'

class BookShelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  render() {
    const { books, changeBookself } = this.props

    return (    
        <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            console.log(this.prop.book.maps(book =>
              <li key={book.id}>
                    <Book book={book}
                      BookShelf={BookShelf}
                      changeBookShelf={changeBookShelf}
                    />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  changeBookself: PropTypes.func.isRequired
}

export default BookShelf