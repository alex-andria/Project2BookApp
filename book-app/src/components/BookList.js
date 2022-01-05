import React from "react";

function BookList({books}) {
    const {title, author, dateFinished, finished, timeRead } = books; 
    return (
        <li>Title: {title} Author: {author} 
        {dateFinished ? "Date finished: " + dateFinished : null} &nbsp;
        {timeRead ? timeRead + "minutes " : null}       
        </li>
    )
}

export default BookList;