import React from "react";
import BookList from "../BookList";
import BookShelf from "../BookShelf";

function CurrentlyReading({ books, updateBook }) {
  const currentlyReading = [...books.filter((book) => book.reading === true)];
  const buttonText = "Finished Reading";

  //to be passed to booklistitem as props, will update book in list that has button clicked on
  function finishBook(finishedBook) {
    updateBook({
      ...finishedBook,
      finished: true,
      reading: false,
    });
  }

  return (
    <div>
      <BookShelf books={currentlyReading} />
      <BookList
        books={currentlyReading}
        buttonText={buttonText}
        bookChange={finishBook}
      />
    </div>
  );
}

export default CurrentlyReading;
