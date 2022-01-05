import React from "react";
import BookList from "../BookList";

function FinishedReading({books}) {
    const finishedBooks=[...books.filter((book) => book.finished == true)];

    return (
        <BookList books={finishedBooks} />
    );
}

export default FinishedReading;