import Main from "../components/Main";
import Rows from "../components/Rows";
import requests from "../Request";

const Home = () => {
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
      <Main />
      <div className="p-4 md:p-8">
        <Rows rowId="2" title="Popular" fetchURL={requests.requestPopular} />
        <Rows rowId="3" title="Tranding" fetchURL={requests.requestLatest} />
        <Rows
          rowId="4"
          title="Now Playing"
          fetchURL={requests.requestNowPlayig}
        />
        <Rows rowId="5" title="Top Rated" fetchURL={requests.requestTopRated} />
      </div>
    </div>
  );
};

export default Home;
