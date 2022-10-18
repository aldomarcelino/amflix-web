export default function RowsTable(props) {
  if (props.from === "movies")
    return (
      <tr>
        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
          {props.no + 1}
        </th>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
          {props.movie.title}
        </td>
        <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          Action
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <i className="fas fa-arrow-up text-emerald-500 mr-4">
            {props.movie.rating}
          </i>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <i className="fas fa-arrow-up text-blue-500 mr-4">
            aldo115marcelino@gmail.com
          </i>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <div className="items-center w-40 rounded">
            <img src={props.movie.imgUrl} alt={props.movie.title} />
          </div>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <button className="bg-emerald-500 h-8 w-24 rounded text-yellow-50 font-bold">
            Show images
          </button>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <button className="text-blue-600">Edit</button>
          <button className="text-red ml-2">Delete</button>
        </td>
      </tr>
    );
  else
    return (
      <tr>
        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
          {props.no + 1}
        </th>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
          {props.genre.name}
        </td>
        <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <i className="fas fa-arrow-up text-blue-500 mr-4">
            {props.genre.createdAt}
          </i>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <i className="fas fa-arrow-up text-blue-500 mr-4">
            {props.genre.updatedAt}
          </i>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <button className="text-red">Delete</button>
        </td>
      </tr>
    );
}
