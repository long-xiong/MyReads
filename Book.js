import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BooksAPI from './BooksAPI'

  class Book extends Component {
    static propTypes = {
      books: PropTypes.array.isRequired,
      updateBookShelf: PropTypes.func.isRequired
    }
  
    render() {
      const { book, changeShelf } = this.props

  return (
    <div key={book.id} className="book">
      <div className="book-top">
      <Link to={`/details/${book.id}`}></Link>
      <div className="book-cover"
        style={{ width: 128, height: 192,
          backgroundImage: `url(${props.image})`}}>
        </div>
        <div className="book-shelf-changer">
        <select book={book} changeShelf={this.props.changeShelf}>
            <option >Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
    </div>
    )
  }
} 

Book.propTypes = {
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired
}

export default Book