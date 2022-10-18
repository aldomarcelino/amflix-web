export default function RowsGenre(props) {
  const {
    no,
    genre: { name, createdAt, updatedAt },
  } = props;
  return (
    <tr>
      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
        {no + 1}
      </th>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
        {name}
      </td>
      <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        <i className="fas fa-arrow-up text-blue-500 mr-4">{createdAt}</i>
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        <i className="fas fa-arrow-up text-blue-500 mr-4">{updatedAt}</i>
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        <button className="text-red">Delete</button>
      </td>
    </tr>
  );
}
