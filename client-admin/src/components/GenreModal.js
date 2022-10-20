import { useState } from "react";

export default function GenreModal({ open, setOff }) {
  const [genre, setGenre] = useState({ name: "" });
  const handleChange = (e) => {
    e.preventDefault();
    setGenre({ name: e.target.value });
  };
  const hangleClose = () => {
    setOff();
    setGenre({ name: "" });
  };

  if (open)
    return (
      <div
        className="py-12 bg-gray-700 bg-opacity-50 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0 "
        id="modal"
      >
        <div
          role="alert"
          className="container mx-auto w-11/12 md:w-2/3 max-w-lg mt-[15%]"
        >
          <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
            <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">
              Create New Category
            </h1>
            <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
              Category Name
            </label>
            <input
              name="name"
              className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder="James"
              value={genre.name}
              onChange={handleChange}
            />
            <div className="flex items-center justify-start w-full">
              <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red transition duration-150 ease-in-out hover:bg-rose-700 bg-red rounded text-white px-8 py-2 text-sm">
                Submit
              </button>
              <button
                onClick={hangleClose}
                className="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
              >
                Cancel
              </button>
            </div>
            <div
              className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
              aria-label="close modal"
              role="button"
              onClick={hangleClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-x"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  else return "";
}
