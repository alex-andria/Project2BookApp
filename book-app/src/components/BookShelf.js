import React from "react";
import BookShelfItem from "./BookShelfItem";

function BookShelf(){

    return(
        <div className="BookShelf">
            <div className="BookBox">
                <BookShelfItem />
                <BookShelfItem />
                <BookShelfItem />
                <BookShelfItem />
                <BookShelfItem />
    
                
            </div>
        </div>
    )
}

export default BookShelf;