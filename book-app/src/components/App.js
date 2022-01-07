import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import SearchBar from "./SearchBar";
import Home from "./Nav/Home";
import NavBar from "./Nav/NavBar";
import ToRead from "./Nav/ToRead";
import CurrentlyReading from "./Nav/CurrentlyReading";
import FinishedReading from "./Nav/FinishedReading";

function App() {
  const [books, setBooks] = useState([]);
  const [sortedBooks, setSortBooks] = useState([]);

  function addBook(newBook){
    const updatedBooks = [...books, newBook];
    setBooks(updatedBooks);
  }

  useEffect(() => {

    fetch(`http://localhost:3000/books`)
      .then((r) => (r.json()))
      .then((data) => setBooks(data));

  }, []);

  console.log(books);

  return (
    <div><span></span>
      <NavBar />

      <Switch>
        <Route exact path="/toread">
          <ToRead books={books}/>
        </Route>
        <Route exact path="/currentlyreading">
          <CurrentlyReading books={books}/>
        </Route>
        <Route exact path="/finishedreading">
          <FinishedReading books={books}/>
        </Route>
        <Route exact path="/">
          <Home 
            books={books} 
            onAddBook={addBook}
          />
        </Route>
      </Switch>
    </div>
  );
}



export default App;
