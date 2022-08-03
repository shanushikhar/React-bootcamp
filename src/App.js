import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  async function fetchMoviesHandler() {
    setIsLoading(true);

    try {
      const response = await fetch("https://swapi.dev/api/films/");
      if (!response.ok) throw new Error("Something went wrong!!");
      const data = await response.json();

      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setMovies(transformedMovies);
    } catch (err) {
      setIsError(err.message);
    }
    setIsLoading(false);
  }

  // Better soln below than writing Inline checks < commneted in JSX >
  let content = <p>Found no movies.</p>;
  if (movies.length > 0) content = <MoviesList movies={movies} />;
  if (isError) content = <p>{isError}</p>;
  if (isLoading) content = <p>Loading...</p>;

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {/* {!isLoading && movies.length > 0 && !isError && (
          <MoviesList movies={movies} />
        )}
        {!isLoading && movies.length === 0 && !isError && (
          <p>Found no movies.</p>
        )}
        {isError && <p>{isError}</p>}
        {isLoading && <p>Loading...</p>} */}
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
