import React from "react";
import BookList from "../BookList"
import BookShelf from "../BookShelf";

function Home({ books }) {

    return (
        <>
            {/* search */}
            {/* category */}
            <BookShelf books={books} />
            <BookList books={books} />
        </>

    );

}

export default Home;