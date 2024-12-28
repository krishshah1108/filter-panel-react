import React from 'react'
import BookCard from './BookCard'

const BookList = ({bookData}) => {
  return (
    <div>
        <BookCard bookData = {bookData} />
    </div>
  )
}

export default BookList