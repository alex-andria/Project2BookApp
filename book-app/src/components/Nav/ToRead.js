import React from "react";
import BookList from "../BookList"
import BookShelf from "../BookShelf";

function ToRead({ books }) {
    const toRead = [...books.filter((book) => book.toRead === true)];

    return (
        <div>
            <BookShelf books={toRead} />
            <BookList books={toRead} />
        </div>
    );

}

export default ToRead;