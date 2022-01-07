import React from "react";
import BookList from "../BookList";
import BookShelf from "../BookShelf";

function Home({ books, onAddBook }) {
  return (
    <>
      <BookShelf books={books} onAddBook={onAddBook} />
      <BookList books={books} />
    </>
  );
}

export default Home;
