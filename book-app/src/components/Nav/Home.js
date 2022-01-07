import React from "react";
import BookList from "../BookList";
import BookShelf from "../BookShelf";
import BookAddForm from "../BookAddForm";

function Home({books, onAddBook}) {

    return (
        <>
            {/* search */}
            {/* category */}
            <BookShelf  books={books} onAddBook={onAddBook}/>
            <BookList books={books} />
        </>

    );

}

export default Home;