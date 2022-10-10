import React, { useContext } from 'react';
import Book from '../Book/Book';
import { BooksContext } from '../Main/Main';

const Books = () => {
    const books = useContext(BooksContext)

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-[95%] mx-auto my-12'>
                {
                    books.books.map(book => <Book key={book.isbn13}
                        book={book}
                    ></Book>)
                }
            </div>
        </div>
    );
};

export default Books;