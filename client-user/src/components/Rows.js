import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import movieTrailer from "movie-trailer";
import useToggle from "../hooks/useToggle";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, fetchTmdbMovies } from "../store/actions/movie.action";

export default function Rows(props) {
  const { title, fetchURL, rowId, status } = props;
  const dispatch = useDispatch();
  const { myMovies } = useSelector((state) => state);
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const { open, setOn, setOff } = useToggle();
  const [theMovie, settheMovie] = useState({});
  useEffect(() => {
    // if (title === "ORIGINAL AMFLIX") {
    //   dispatch(fetchMovies(fetchURL));
    //   setMovies(myMovies);
    // } else {
    fetch(fetchURL)
      .then((res) => res.json())
      .then((res) => {
        console.log("Succes:", res.results);
        setMovies(res.results);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
    // }
  }, [fetchURL]);

  const opts = {
    height: "600",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const slideLeft = () => {
    var slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const handleClick = (movie) => {
    setOn();
    settheMovie(movie);
    console.log("Masuk bang", movie);
    if (!trailerUrl) {
      movieTrailer(movie?.title || "")
        .then((url) => {
          const ulrParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(ulrParams.get("v"));
        })
        .catch((error) => console.log(error));
    } else setTrailerUrl("");
  };

  return (
    <>
      <Modal
        open={open}
        setOff={setOff}
        opts={opts}
        trailerUrl={trailerUrl}
        movie={theMovie}
      />
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
            <button onClick={() => handleClick(el)} key={id}>
              <Movie movie={el} status={status} />
            </button>
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
