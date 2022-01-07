import React from "react";
import BookListItem from "./BookListItem";

function BookList({books, buttonText, bookChange, onDeleteBook}) {

    return (
            <div>
                <ul className="BookList">
                {books.map((book) => 
                    <BookListItem  
                        key={book.id} 
                        book={book}
                        buttonText={buttonText}
                        bookChange={bookChange}
                        dateFinished={book.dateFinished}
                        onDeleteBook={onDeleteBook}
                    />
                    )}
                </ul>
            </div>

    );

}

export default BookList;