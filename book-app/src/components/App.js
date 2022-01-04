import React, {useState, useEffect } from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import Home from "./Home";

function App() {
  const [books, setBooks] =useState([]);

  useEffect( () => {
  
    fetch(`http://localhost:3000/books`)
      .then((r)=>(r.json()))
      .then((data) => setBooks(data));
  
  }, []);

  console.log(books);

  return(
    <div>
      <Home books={books}/>
    </div>
  )
}



export default App;
