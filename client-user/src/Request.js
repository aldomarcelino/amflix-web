const key = "60051734f5db147c1973763519187908";
const requests = {
  requestLatest: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestUpComing: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestNowPlayig: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`,
};

export default requests;
