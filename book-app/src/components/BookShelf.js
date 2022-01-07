import React from "react";
import BookShelfItem from "./BookShelfItem";
import BookAddForm from "./BookAddForm";

function BookShelf({ onAddBook, books }) {
  return (
    <div className="BookShelf">
      <div className="BookBox">
        <BookAddForm onAddBook={onAddBook} />
        {books.map((book) => {
          return <BookShelfItem key={book.id} book={book} />;
        })}
      </div>
    </div>
  );
}

export default BookShelf;
