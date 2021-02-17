import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { MovieContext } from "../contexts/MovieContext";
import { inputs, formContainer } from "../styles/MovieForm.module.css"

const MovieForm = () => {
  const { handleSubmit } = useContext(MovieContext)
  const [title, setTitle] = useState('')
  const [director, setDirector] = useState('')
  const [year, setYear] = useState('')
  const [genre, setGenre] = useState('')
  const history = useHistory()

  const movie = {
    title,
    director,
    year,
    genre
  }

  return (
    <form className={formContainer} onSubmit={(e) => handleSubmit(e, movie, history)}>
      <h3>Add New Movie: </h3>
      <div className={inputs}>
        <input type="text" placeholder="title..." onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="director..." onChange={(e) => setDirector(e.target.value)} />
        <input type="text" placeholder="release year..." onChange={(e) => setYear(e.target.value)} />
        <input type="text" placeholder="genre..." onChange={(e) => setGenre(e.target.value)} />
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default MovieForm;