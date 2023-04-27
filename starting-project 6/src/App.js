import React , {useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies , setMovies] = useState([]);
  const [isLoading , setIsLoading] = useState(false);
  const [error , setError] = useState(null);

  async function fetchMoviesHandler()
  {
    setIsLoading(true);
    setError(null);
    try
    {
      const response = await fetch("https://swapi.dev/api/film");
      

      if(!response.ok)
      {
         throw new Error("something went wrong");
      }
      const data = await response.json();
      const transformedMovies = data.results.map(movieData => { 
        return{
          id : movieData.episide_id,
          title : movieData.title,
          openingText : movieData.opening_crawl,
          releaseDate : movieData.release_date
        }
      })
      setMovies(transformedMovies);
      setIsLoading(false);
    }
    catch(error)
    {
      setError(error.message);
      setIsLoading(false);
    }
    
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {isLoading && <p>please wait data is loading</p>}
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && <p>No movies found</p>}
        {!isLoading && error && <p>{error}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
