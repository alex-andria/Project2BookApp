import React from "react";

function BookList({books, buttonText, bookChange }) {

    return (
            <div>
                <ul className="BookList">
                {books.map((book) => 
                    <BookListItem  
                        key={book.id} 
                        book={book}
                        buttonText={buttonText}
                        bookChange={bookChange}
                    />
                    )}
                </ul>
            </div>

    );

}

export default BookList;