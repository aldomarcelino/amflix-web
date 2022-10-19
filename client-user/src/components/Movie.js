import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

function Movie(props) {
  const { movie, status } = props;
  const [like, setLike] = useState(false);
  let imgUrl = movie?.backdrop_path;
  let myClass =
    "w-[160px] sm:w-[200px] md:w-[240px] lg:w-[300px] inline-block cursor-pointer relative p-2";
  if (status) {
    imgUrl = movie?.poster_path;
    myClass =
      "w-[160px] sm:w-[200px] md:w-[240px] lg:w-[260px] inline-block cursor-pointer relative p-2";
  }
  return (
    <div className={myClass}>
      <img
        className="w-full h-auto block"
        src={`https://image.tmdb.org/t/p/w500/${imgUrl}`}
        alt={movie?.title}
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white m-1">
        <p className="white-opacity-normal text-sm md:text-sm font-bold flex justify-center items-center h-full text-center">
          {movie?.title}
        </p>
        <p>
          {like ? (
            <FaHeart className="absolute top-4 left-4 text-gray-300" />
          ) : (
            <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
          )}
        </p>
      </div>
    </div>
  );
}

export default Movie;
