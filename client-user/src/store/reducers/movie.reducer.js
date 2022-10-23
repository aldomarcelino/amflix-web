import { SUCCESS_GET_MOVIES, SUCCESS_GET_MYMOVIES } from "../action_type";

export default function movieReducer(state = { movies: [] }, action) {
  if (action.type === SUCCESS_GET_MOVIES)
    return { ...state, movies: action.movies };
  else if (action.type === SUCCESS_GET_MYMOVIES)
    return { ...state, tmdbMovies: action.tmdbMovies };
  else return state;
}
