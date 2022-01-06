import React from "react";
import BookShelfItem from "./BookShelfItem";

function BookShelf({books}) {

    return (
        <div className="BookShelf">
            <div className="BookBox">
                {books.map((book) =>
                    <BookShelfItem
                        key={book.id}
                        book={book}
                    />
                )}
            </div>
        </div>
    )
}

export default BookShelf;
