import React from "react";
import BookListItem from "./BookListItem";

function BookList({books}) {

    return (
            <div>
                <ul className="BookList">
                {books.map((book) => 
                    <BookListItem  
                        key={book.id} 
                        title={book.title}
                        author={book.author}
                        timeRead={book['time read']}
                        dateFinished={book['date finished']}
                    />
                    )}
                </ul>
            </div>

    );

}

export default BookList;