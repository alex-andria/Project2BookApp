import React from "react";

function BookShelfItem({ book }) {
  const bookImage = "./blankbook.png";

  return (
    <div className="BookBoxItem">
      <span>{book.title}</span>
      <div>
        <img src={bookImage} />
      </div>
      <span>{book.rating}</span>
    </div>
  );
}

export default BookShelfItem;
