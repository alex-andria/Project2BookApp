import React, { useState } from "react";

function ReviewForm({ book, updateBook, setIsOpen }) {
  const [bookReview, setReview] = useState({
    rating: null,
    review: "",
  });

  function changeHandler(e) {
    setReview({
      ...book,
      [e.target.name]: e.target.value,
    });
    console.log(bookReview);
  }

  function handleSubmit(e) {
    e.preventDefault();
    updateBook(bookReview);
    setIsOpen(false);
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label for="rating">Rating: </label>
          <select
            value={bookReview.rating}
            name="rating"
            onChange={(e) => changeHandler(e)}
          >
            <option value={null} disabled>
              Select
            </option>
            <option value="⭐">1</option>
            <option value="⭐⭐">2</option>
            <option value="⭐⭐⭐">3</option>
            <option value="⭐⭐⭐⭐">4</option>
            <option value="⭐⭐⭐⭐⭐">5</option>
          </select>
        </div>

        <div>
          <label for="review">Review: </label>
          <input
            type="text"
            value={bookReview.review}
            onChange={(e) => changeHandler(e)}
            name="review"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ReviewForm;
