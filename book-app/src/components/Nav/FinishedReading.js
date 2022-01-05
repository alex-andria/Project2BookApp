import React from "react";
import BookList from "../BookList"

function FinishedReading({books}) {
    
    return (
        <div>
            <ul>
            {books.map((book) => 
                <BookList  key={book.id} books={book}/>
                )}
            </ul>
        </div>

    );

}

export default FinishedReading;