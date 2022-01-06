import React from "react";
import BookList from "../BookList";
import BookShelf from "../BookShelf";

function FinishedReading({ books,  updateBook }) {
    const finishedBooks = [...books.filter((book) => book.finished === true)];
    const buttonText = "Re-read Book"

    function startReading(readingBook) {
        updateBook({
            ...readingBook,
            reading: true
        })
    }

    return (
        <div>
            <BookShelf books={finishedBooks} />
            <BookList books={finishedBooks} buttonText={buttonText} bookChange={startReading} />/>
        </div>
    );

}

export default FinishedReading;