import { SUCCESS_GET_MOVIES, SUCCESS_GET_GENRE } from "../action_types/movies";

export function fetchMovies(fetchUrl) {
  return async (dispatch) => {
    try {
      const data = await fetch(fetchUrl);
      if (!data.ok) throw new Error("Fail to get movies");
      const movies = await data.json();
      dispatch({ type: SUCCESS_GET_MOVIES, movies });
    } catch (err) {
      console.log(err);
    }
  };
}

export function fetchGenre(fetchUrl) {
  return async (dispatch) => {
    try {
      const data = await fetch(fetchUrl);
      if (!data.ok) throw new Error("Fail to get genre");
      const genre = await data.json();
      dispatch({ type: SUCCESS_GET_GENRE, genre });
    } catch (err) {
      console.log(err);
    }
  };
}
