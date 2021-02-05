import React, { useState, useEffect } from 'react';
import { Route } from "react-router-dom";
import BookCard from './components/BookCard'
import './App.css';
import { request } from './helpers/api'
import { ICard } from './helpers/type'

const App:React.FC = () => {
  const [books, setBooks] = useState<ICard[]>([])

  useEffect(() => {
    request.then(response => setBooks(response))
  }, []);

  return (
    <Route path="/">
      <div className="App">
        <article className="wrapper">
        {books.map(book => <BookCard book={book} key={book.isbn}/>)}
      </article>
      </div>
    </Route>
  )
}

export default App;
