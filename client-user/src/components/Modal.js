import { XIcon } from "@heroicons/react/outline";
import MuiModal from "@mui/material/Modal";
import YouTube from "react-youtube";

export default function Modal(props) {
  const { open, setOff, opts, trailerUrl, movie } = props;
  let genres;
  console.log(open, "<<<<<<<<");

  return (
    <MuiModal
      open={open}
      onClose={setOff}
      className="fixex !top-7 left-0 right-0 z-50 mx-auto w-full max-w-5xl overflow-hidden rounded-md overflow-y-scroll scroll-smooth"
    >
      <>
        <button
          onClick={setOff}
          className=" flex absolute right-5 top-5 !z-40 h-11 w-11 border-none bg-[#181818] hover:bg-[#181818] items-center justify-center rounded-full border-2 border-[gray] bg-[#2a2a2a]/60 transition hover:border-white hover:bg-white/10"
        >
          <XIcon className="h-6 w-6 text-white" />
        </button>
        <YouTube videoId={trailerUrl} opts={opts} />
        <div className="flex space-x16 rounded-b-md bg-[#181818] px-10 py-8">
          <div className="space-y-6 text-lg">
            <div className="flex items-center space-x-2 text-sm">
              <p className="font-semibold text-green-400">
                {movie?.vote_average * 10}% Match
              </p>
              <p className="font-light">
                {movie?.release_date || movie?.first_air_date}
              </p>
              <div className="flex h-4 items-center justify-center rounded border border-white/40 px-1.5 text-xs text-white">
                HD
              </div>
            </div>
            <div className="flex flex-col gap-x-10 gap-y-4 font-light">
              <p className="w-5/6">{movie?.overview}</p>
              <div className="flex flex-col space-y-3 text-sm">
                <div>
                  <span className="text-[gray]">Genres:</span>
                  {genres?.map((el) => el.name).join(", ")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </MuiModal>
  );
}
