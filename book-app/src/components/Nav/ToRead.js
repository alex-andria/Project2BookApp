import React from "react";
<<<<<<< Updated upstream
import BookList from "../BookList"

function ToRead({ books }) {
    
    return (
        <div>
            <ul>
                {books.map((book) =>
                    <BookList key={book.id} books={book} />
                )}
            </ul>
        </div>

import BookList from "../BookList";
import BookShelf from "../BookShelf";

function ToRead({ books }) {
    const toRead = [...books.filter((book) => book.toRead === true)];

    return (
        <div>
            <BookShelf books={toRead} />
            <BookList books={toRead} />
        </div>
>>>>>>> Stashed changes
    );

}

export default ToRead;