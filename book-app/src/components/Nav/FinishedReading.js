import React, { useState } from "react";
import BookList from "../BookList";
import BookShelf from "../BookShelf";
import Modal from "../Modal";
import ReviewForm from "../ReviewForm";

function FinishedReading({ books, updateBook }) {
  const finishedBooks = [...books.filter((book) => book.finished === true)];
  const buttonText = "Rate & Review!";
  const [chosenBook, setBook] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  function rateBook(pickedBook) {
    setBook({ ...pickedBook });
    setIsOpen(true);
  }

  return (
    <div>
      <BookShelf books={finishedBooks} />
      <BookList
        books={finishedBooks}
        buttonText={buttonText}
        bookChange={rateBook}
      />
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <ReviewForm
          book={chosenBook}
          updateBook={updateBook}
          setIsOpen={setIsOpen}
        />
      </Modal>
    </div>
  );
}

export default FinishedReading;
