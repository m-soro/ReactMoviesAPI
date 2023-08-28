import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import MovieDisplay from "./components/MovieDisplay";

export default function App() {
  // api key
  const apiKey = "57483d04";
  // state
  const [movie, setMovie] = useState(null);

  //Function to getMovies
  const getMovie = async (searchTerm) => {
    // make fetch request and store response
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    );
    // Parse JSON response into a javascript object
    const data = await response.json();
    //set the Movie state to the movie
    setMovie(data);
  };
  console.log(movie);

  useEffect(() => {
    getMovie("White Chicks");
  }, []);

  return (
    <div className="App container">
      <nav className="Header container">
        <ul>
          <h1>
            <span className="material-symbols-outlined">movie</span>
          </h1>
        </ul>
        <ul>
          <h1>React Movie</h1>
        </ul>
      </nav>

      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}
