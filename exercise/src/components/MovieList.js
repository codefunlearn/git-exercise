import { useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";
import Movie from "./Movie";

const MovieList = () => {

  const { movies } = useContext(MovieContext)

  return (
    <div>
      {movies.map((movie, i) => (
        <Movie key={i} movie={movie} />
      ))}
    </div>
  );
}
 
export default MovieList;