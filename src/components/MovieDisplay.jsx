// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
export default function MovieDisplay({ movie }) {
  // function to return loaded JSX
  const loaded = () => {
    return (
      <div className="MovieDisplay container">
        <h1>Movie Info</h1>
        <div className="MovieGrid grid">
          <ul className="MovieInfo">
            <h2>{movie.Title}</h2>
            <h3>{movie.Genre}</h3>
            <h3>{movie.Year}</h3>
          </ul>
          <ul className="MoviePoster">
            <img src={movie.Poster} alt={movie.Title} />
          </ul>
        </div>
      </div>
    );
  };

  const loading = () => {
    return <h1>No Movie to Display</h1>;
  };

  return movie ? loaded() : loading();
}
