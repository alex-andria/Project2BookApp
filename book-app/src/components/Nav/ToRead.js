import React from "react";
import BookList from "../BookList";

function ToRead({ books }) {
    const unfinishedBooks=[...books.filter((book) => book['to-read'] == true)];

    return (
        <BookList books={unfinishedBooks} />
    );
}

export default ToRead;