import React from "react";
import BookList from "../BookList";

function CurrentlyReading({books}) {
    const unfinishedBooks=[...books.filter((book) => book.reading == true)];

    return (
        <BookList books={unfinishedBooks} />
    );
}

export default CurrentlyReading;