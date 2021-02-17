import { createContext, useState } from "react"

export const MovieContext = createContext()


const MovieProvider = (props) => {
  return (
    <MovieContext.Provider>
      {props.children}
    </MovieContext.Provider>
  );
}
 
export default MovieProvider;