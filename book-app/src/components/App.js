import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import SearchBar from "./SearchBar";
import Home from "./Nav/Home";
import NavBar from "./Nav/NavBar";
import ToRead from "./Nav/ToRead";
import CurrentlyReading from "./Nav/CurrentlyReading";
import FinishedReading from "./Nav/FinishedReading";

function App() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3000/books`)
      .then((r) => r.json())
      .then((data) => setBooks(data));
  }, []);

  // adds new book and category to json
  function addBook(newBook) {
    const updatedBooks = [...books, newBook];
    setBooks(updatedBooks);
  }

  // takes book list and filters things by title or author
  const searchBooks = books.filter(
    (b) =>
      b.author.toLowerCase().includes(search.toLowerCase()) ||
      b.title.toLowerCase().includes(search.toLowerCase())
  );

  function updateBook(changedBook) {
    setBooks([
      ...books.filter((book) => book.id !== changedBook.id),
      changedBook,
    ]);
  }

  return (
    <div>
      <span></span>
      <NavBar />
      <br/>
      <br/>
      <SearchBar search={search} setSearch={setSearch} />

      <Switch>
        <Route exact path="/toread">
          <ToRead books={searchBooks} updateBook={updateBook} />
        </Route>
        <Route exact path="/currentlyreading">
          <CurrentlyReading books={searchBooks} updateBook={updateBook} />
        </Route>
        <Route exact path="/finishedreading">
          <FinishedReading books={searchBooks} updateBook={updateBook} />
        </Route>
        <Route exact path="/">
          <Home books={searchBooks} onAddBook={addBook} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
