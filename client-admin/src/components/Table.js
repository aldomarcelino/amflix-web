import RowsMovie from "./RowsMovie";
import RowsGenre from "./RowsGenre";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMovies, fetchGenre } from "../store/actions/movies";

export default function Table(props) {
  const { status, head } = props;
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.movies);
  const { genre } = useSelector((state) => {
    console.log(state, "<<<<<");
    return state.genre});
  let tBody;

  useEffect(() => {
    dispatch(fetchMovies("http://localhost:3000/movies"));
    dispatch(fetchGenre("http://localhost:3000/genre"));
  }, []);

  const tHead = head.map((e, i) => {
    return (
      <th
        key={i + "x"}
        className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
      >
        {e}
      </th>
    );
  });
  if (status === "dashboard") {
    tBody = movies.map((e, i) => <RowsMovie key={e.id} movie={e} no={i} />);
  } else {
    tBody = genre.map((e, i) => <RowsGenre key={e.id} genre={e} no={i} />);
  }
  return (
    <table className="items-center bg-transparent w-full border-collapse ">
      <thead>
        <tr>{tHead}</tr>
      </thead>
      <tbody>{tBody}</tbody>
    </table>
  );
}
