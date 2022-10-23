import { useState, useEffect } from "react";
import requests from "../Request";
import Rows from "./Rows";
export default function Main() {
  const [movies, setMovie] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];
  useEffect(() => {
    fetch(requests.requestPopular)
      .then((res) => res.json())
      .then((res) => {
        console.log("Success:", res.results);
        setMovie(res.results);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  }, []);

  const truncateString = (str, num) => {
    if (str?.length > num) return str.slice(0, num) + "...";
    else return str;
  };

  return (
    <div className="w-full h-[95vh] ">
      <div className="w-full h-full">
        <div className="absolute w-full h-[95vh] bg-gradient-to-r from-black "></div>
        <div className="absolute w-full h-[95vh] bg-gradient-to-t from-black "></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-[15%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            {movie?.title}
          </h1>
          <div className="my-4">
            <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">
              Play
            </button>
            <button className="border  text-white border-gray-300 py-2 px-5 ml-5">
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-sm">
            Released: {movie?.release_date}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {truncateString(movie?.overview, 140)}
          </p>
          <div className="mt-32">
            <Rows
              rowId="6"
              title="ORIGINAL AMFLIX"
              fetchURL={requests.requestOriginal}
              status={"origin"}
            />
            {/* <Rows
              rowId="1"
              title="Up Coming"
              fetchURL={requests.requestUpComing}
            />
            <Rows
              rowId="2"
              title="Popular"
              fetchURL={requests.requestPopular}
            />
            <Rows
              rowId="3"
              title="Tranding"
              fetchURL={requests.requestLatest}
            />
            <Rows
              rowId="4"
              title="Now Playing"
              fetchURL={requests.requestNowPlayig}
            />
            <Rows
              rowId="5"
              title="Top Rated"
              fetchURL={requests.requestTopRated}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
