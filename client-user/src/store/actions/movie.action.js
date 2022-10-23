import { SUCCESS_GET_MOVIES, SUCCESS_GET_MYMOVIES } from "../action_type";
import requests from "../../Request";
import Swal from "sweetalert2";

export function fetchMovies() {
  return async (dispatch) => {
    try {
      const data = await fetch(`${requests.myUrl}/public`);
      if (!data.ok) throw new Error("Fail to get movies");
      const movies = await data.json();
      dispatch({ type: SUCCESS_GET_MOVIES, movies });
    } catch (err) {
      errorAlert(err);
    }
  };
}

export function fetchTmdbMovies() {
  return async (dispatch) => {
    try {
      const data = await fetch(`${requests.myUrl}/public`);
      if (!data.ok) throw new Error("Fail to get movies");
      const tmdbMovies = await data.json();
      dispatch({ type: SUCCESS_GET_MOVIES, tmdbMovies });
    } catch (err) {
      errorAlert(err);
    }
  };
}

function errorAlert(msg) {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: msg,
  });
}
