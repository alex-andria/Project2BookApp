import React from "react";
import BookList from "../BookList";
import BookShelf from "../BookShelf";

function FinishedReading({ books }) {
    const finishedBooks = [...books.filter((book) => book.finished === true)];

    return (
        <div>
            <BookShelf books={finishedBooks} />
            <BookList books={finishedBooks} />
        </div>
    );

}

export default FinishedReading;