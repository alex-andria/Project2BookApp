import React from "react";

function BookShelfItem(){

    const bookImage = './blankbook.png';

    return(
    <div className="BookBoxItem">
        <span>title</span>
        <div>
            <img src={bookImage}/>
        </div>
        <span>ratings</span>
    </div>
    )
}

export default BookShelfItem;