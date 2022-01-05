import React from "react";

function BookListItem({title, author, timeRead,  dateFinished}) {
    return (
        <div>
            <li className="BookList">
                <span className="BookInfo"> Title:</span>
                <span className="BookInfoValue">{title}</span>
                <span className="TimeReadData">{timeRead} minutes</span>
                <span className="TimeRead">Total Time Read: </span> 
                <br></br>
                <span className="BookInfo"> Author:</span>
                <span className="BookInfoValue">{author}</span>
                <span className="DateFinishedData">{dateFinished}</span>
                <span className="DateFinished">Date Finished:</span> 
                <br></br><br></br>
                <span className="BookInfo">Rating:</span>
                <span className="BookInfoValue">⭐⭐⭐</span>
                <br></br>
                <span className="BookInfo">Review: </span>
                <span className="BookInfoValue">review goes here...</span>
                <br></br>
            </li> 
        </div>
    )
}

export default BookListItem;