import React, { useState, useEffect } from 'react';
import { Route } from "react-router-dom";
import SimpleCard from './components/Card/'
import './App.css';
import { request } from './helpers/api'
import { ICard } from './helpers/type'

const App:React.FC = () => {
  const [books, getBooks] = useState<ICard[]>([])

  useEffect(() => {
    request.then(response => getBooks(response))
  }, []);

  return (
    <Route path="/">
      <div className="App">
        <article className="wrapper">
        {books.map(book => <SimpleCard book={book} key={Math.random()}/>)}
      </article>
      </div>
    </Route>
  )
}

export default App;
