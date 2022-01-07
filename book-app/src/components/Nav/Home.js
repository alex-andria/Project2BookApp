import React from "react";
import BookList from "../BookList";
import BookShelf from "../BookShelf";

function Home({ books, onAddBook, onDeleteBook }) {
  return (
    <>
        <BookShelf books={books} onAddBook={onAddBook} />
        <BookList books={books} onDeleteBook={onDeleteBook} />
    </>
  );
}

export default Home;
