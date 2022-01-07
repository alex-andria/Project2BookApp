import React, { useState } from "react";
import CurrentlyReading from "./Nav/CurrentlyReading";

function BookListItem({ book, buttonText, bookChange }) {

    // calls bookChange function, passed into 
    function clickHandler() {
        bookChange(book);
    }



    return (
        <div>
            <li className="BookList">
                <span className="BookInfo"> Title:</span>
                <span className="BookInfoValue">{book.title}</span>

                {book.timeRead ?
                    <div>
                        <span className="TimeReadData">{book.timeRead} minutes</span>
                        <span className="TimeRead">Total Time Read: </span>
                    </div> : null
                }

                <br />

                <span className="BookInfo"> Author:</span>
                <span className="BookInfoValue">{book.author}</span>

                {book.dateFinished ?
                    <div>
                        <span className="DateFinishedData">{book.dateFinished}</span>
                        <span className="DateFinished">Date Finished:</span>
                    </div> : null
                }

                <br />
                {buttonText ? 
                    <button className="updateButtons" onClick={()=>clickHandler()}>{buttonText}</button> : null
                    }
                <br />
                <span className="BookInfo">Rating:</span>
                <span className="BookInfoValue">{book.rating}</span>

                <br />

                <span className="BookInfo">Review: </span>
                <span className="BookInfoValue">{book.review}</span>
            </li>
        </div>
    )
}

export default BookListItem;