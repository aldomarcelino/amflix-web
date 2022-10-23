import { SUCCESS_GET_MOVIES, SUCCESS_GET_MYMOVIES } from "../action_type";
import requests from "../../Request";
import Swal from "sweetalert2";

export function fetchMovies(url) {
  return async (dispatch) => {
    try {
      const data = await fetch(`${url}/public`);
      if (!data.ok) throw new Error("Fail to get movies");
      const myMovies = await data.json();
      dispatch({ type: SUCCESS_GET_MOVIES, myMovies });
    } catch (err) {
      errorAlert(err);
    }
  };
}

export function fetchTmdbMovies(url) {
  return async (dispatch) => {
    try {
      const data = await fetch(url);
      if (!data.ok) throw new Error("Fail to get movies");
      const tmdbMovies = await data.json();
      dispatch({ type: SUCCESS_GET_MYMOVIES, tmdbMovies });
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
