import React from "react";
import BookList from "../BookList"

function Home({books}) {
    
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

export default Home;