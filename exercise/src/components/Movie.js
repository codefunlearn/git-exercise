import { useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";
import { movieInfo, movieTitle, wrapper, trashCan } from "../styles/Movie.module.css"

const Movie = ({ movie }) => {

  const { handleDelete } = useContext(MovieContext)

  return (
    <div className={wrapper}>
      <div className={movieInfo}>
        <h2 className={movieTitle}>{movie.title}</h2>
        <p>Director: {movie.director}</p>
        <p>Release Year: {movie.releaseYear}</p>
        <p>Genre: {movie.genre}</p>
        <p className={trashCan} onClick={() => handleDelete(movie)}>🗑️</p>
      </div>
    </div>
  );
}

export default Movie;
