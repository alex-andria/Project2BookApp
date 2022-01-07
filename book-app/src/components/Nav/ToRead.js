import React from "react";
import BookList from "../BookList";
import BookShelf from "../BookShelf";

function ToRead({ books, updateBook }) {
  const toRead = [...books.filter((book) => book.toRead === true)];
  const buttonText = "Start Reading";

  function startReading(readingBook) {
    updateBook({
      ...readingBook,
      toRead: false,
      reading: true,
    });
  }

  return (
    <div>
      <BookShelf books={toRead} />
      <BookList
        books={toRead}
        buttonText={buttonText}
        bookChange={startReading}
      />
    </div>
  );
}

export default ToRead;
