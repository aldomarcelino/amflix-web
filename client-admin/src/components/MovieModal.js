import { useState } from "react";
import { useSelector } from "react-redux";

export default function MovieModal({ open, setOff }) {
  const { genre } = useSelector((state) => state.genre);
  const [images, setImages] = useState([""]);
  const [newMovie, setNewMovie] = useState({
    title: "",
    synopsis: "",
    trailerUrl: "",
    rating: "",
    imgUrl: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    const theMovie = {
      ...newMovie,
    };
    theMovie[name] = value;
    setNewMovie(theMovie);
  };
  const handleImages = () => {
    setImages([...images, ""]);
  };
  const handleRemove = (index) => {
    let temp = images.filter((el, i) => i !== index);
    setImages(temp);
  };
  if (open)
    return (
      <div
        className="py-12 bg-gray-700 bg-opacity-50 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0"
        id="modal"
      >
        <div
          role="alert"
          className=" container mx-auto w-11/12 md:w-2/3 max-w-[40rem]"
        >
          <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
            <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">
              Create New Movie
            </h1>
            <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
              Title
            </label>
            <input
              type="text"
              name="title"
              className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder="Tenggelamnya kapal vander wick"
              value={newMovie.title}
              onChange={handleChange}
            />
            <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
              Synopsis
            </label>
            <textarea
              type="text"
              name="synopsis"
              className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-20 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder="write something..."
              value={newMovie.synopsis}
              onChange={handleChange}
            ></textarea>
            <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
              Rating
            </label>
            <input
              name="rating"
              type="number"
              className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder="8.9"
              value={newMovie.rating}
              onChange={handleChange}
            />
            <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
              Genre
            </label>
            <fieldset className="mb-1">
              {genre?.map((el) => (
                <div className="flex items-center mb-4" key={el.id}>
                  <input
                    type="radio"
                    name={"genre-" + el.id}
                    className="h-4 w-4 border-gray-300 focus:ring-1 focus:ring-indigo-700 ring-rounde-full"
                    value={el.id}
                    onChange={handleChange}
                  />
                  <label className="text-sm font-medium text-gray-900 ml-2 block">
                    {el.name}
                  </label>
                </div>
              ))}
            </fieldset>
            <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
              Casts
            </label>
            <input
              type="text"
              name="imgUrl"
              className="mb-2 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder="Main image URL"
              value={newMovie.imgUrl}
              onChange={handleChange}
            />
            {images.map((el, i) => (
              <div className="flex" key={i + "i"}>
                <input
                  type="text"
                  className="mb-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  placeholder="Additional image URL"
                />
                <button className="ml-5" onClick={() => handleRemove(i)}>
                  <i className="fas fa-arrow-up text-red mr-4">remove</i>
                </button>
              </div>
            ))}
            <div className="flex items-center justify-between w-full mt-3">
              <div>
                <button
                  onClick={handleImages}
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition duration-150 ease-in-out hover:bg-emerald-500 bg-emerald-500 rounded text-white px-8 py-2 text-sm"
                >
                  Add Image
                </button>
              </div>
              <div className="flex">
                <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red transition duration-150 ease-in-out hover:bg-rose-700 bg-red rounded text-white px-8 py-2 text-sm">
                  Submit
                </button>
                <button
                  onClick={setOff}
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
            <div
              className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
              aria-label="close modal"
              role="button"
              onClick={setOff}
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
