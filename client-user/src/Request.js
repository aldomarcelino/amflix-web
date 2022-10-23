const key = process.env.REACT_APP_TMDBKEY;
const requests = {
  myUrl: "https://amflix-clone.herokuapp.com",
  baseUlr: `https://api.themoviedb.org/3/movie/`,
  requestLatest: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestUpComing: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestOriginal: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=2`,
  requestNowPlayig: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`,
};

export default requests;
