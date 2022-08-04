import React, { useCallback, useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import AddMovie from "./components/AddMovie";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [newMovie, setNewMovie] = useState(0);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://hackathon-2639b-default-rtdb.firebaseio.com/movies.json"
      );
      const data = await response.json();
      console.log(data);
      if (!response.ok) throw new Error("Something went wrong!!");

      // added to get object response into array for mapping
      const loadedMovie = [];
      for (let key in data) {
        loadedMovie.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }
      setMovies(loadedMovie);
    } catch (err) {
      setIsError(err.message);
    }
    setIsLoading(false);
  }, []);

  const addMovieHandler = useCallback(async (movie) => {
    console.log(movie);
    const datas = await fetch(
      "https://hackathon-2639b-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const response = await datas.json();
    // added to get real time movie which added ATM
    setNewMovie((movie) => movie + 1);
  }, []);

  useEffect(() => {
    console.log("calling useeffect");
    fetchMoviesHandler();
  }, [fetchMoviesHandler, newMovie]);

  // Better soln below than writing Inline checks < commneted in JSX >
  let content = <p>Found no movies.</p>;
  if (movies.length > 0) content = <MoviesList movies={movies} />;
  if (isError) content = <p>{isError}</p>;
  if (isLoading) content = <p>Loading...</p>;

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
