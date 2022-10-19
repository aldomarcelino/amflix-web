import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export default function Rows(props) {
  const { title, fetchURL, rowId, status } = props;
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(fetchURL)
      .then((res) => res.json())
      .then((res) => {
        console.log("Success:", res.results);
        setMovies(res.results);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  }, [fetchURL]);

  const slideLeft = () => {
    var slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          className="left-0 bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
        <div
          id={"slider" + rowId}
          className="w-full h-full overflow-x-scroll  whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies?.map((el, id) => (
            <Movie movie={el} key={id} status={status} />
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="right-0 bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
      </div>
    </>
  );
}
