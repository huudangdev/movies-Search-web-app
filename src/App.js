import React, { useState } from 'react'

import MoviesTable from './components/views/MoviesTable'
import FormSearch from './components/layouts/FormSearch'

const API_KEY = '4a5a0bdfb16d0651a1fd2bca8473ef6f'

const App = () => {
  const [movies, setMovies] = useState({ results: [] })

  const getMoviesDB = async (searchTerm) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}`
    const call_api = await fetch(url)
    const data = await call_api.json()
    setMovies(data);
  }

  return (
    <div className='container'>
      <h1>Movies DB Search</h1>
      <div className='flex-row'>
        <div className='flex-large'>
          <h2>Search</h2>
          <FormSearch getMoviesDB={getMoviesDB}/>
        </div>
        <div className='flex-large'>
          <h2>Results</h2>
          <MoviesTable movies={movies}/>
        </div>
      </div>
    </div>
  )
}

export default App;
