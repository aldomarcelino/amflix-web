import useFetch from "../hooks/useFetch";
import RowsMovie from "./RowsMovie";
import RowsGenre from "./RowsGenre";

export default function Table(props) {
  const { status, head } = props;
  const { data: movies } = useFetch("http://localhost:3000/movies");
  const { data: genre } = useFetch("http://localhost:3000/genre");
  let tBody;
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
