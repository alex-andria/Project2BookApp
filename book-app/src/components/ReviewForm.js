import React, { useState } from "react";


function ReviewForm({ book, updateBook, setIsOpen }) {
  const [bookReview, setReview] = useState({
    ...book,
    "rating": null,
    "review": null,
  });

  function changeHandler(e) {
    setReview({
      ...bookReview,
      [e.target.name]: e.target.value
    });
    console.log(bookReview)
  }

  function handleSubmit(e) {
    e.preventDefault();
    updateBook({ ...bookReview });
    setIsOpen(false);
  }

  return (
    <div>
      <h3>{book.title} by {book.author}</h3>
      <form onSubmit={(e) => handleSubmit(e)}>

        <div>
          <label>Rating: </label>
          <select value={bookReview.rating} name="rating" onChange={(e) => changeHandler(e)}>
            <option value="⭐">⭐</option>
            <option value="⭐⭐">⭐⭐</option>
            <option value="⭐⭐⭐">⭐⭐⭐</option>
            <option value="⭐⭐⭐⭐">⭐⭐⭐⭐</option>
            <option value="⭐⭐⭐⭐⭐">⭐⭐⭐⭐⭐</option>
          </select>
        </div>
        <div>
          <label>Review: </label>
          <input type="textarea" value={bookReview.review} onChange={(e) => changeHandler(e)} name="review" />
        </div>
        <button type="submit">
          Submit
        </button>
      </form>
      <button type="button" onClick={() => setIsOpen(false)}>
        Close
      </button>
    </div>
  )
}


export default ReviewForm;