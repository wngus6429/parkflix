import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: { api_key: "6fb2ddee38097eab9545787dc742e164", language: "en-US" },
});

//https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
//이 주소를 보면 알겠지만 뒤에 api_key와 language가 있기 때문에
//api.get("tv/popular");
//밑에 append_to_response 는 예고편 유튜브 같은거. www.youtube.com/watch?v= 에다가 key를 뒤에 붙이면 나옴.

export const moviesApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upcoming: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular"),
  movieDetail: (id) => api.get(`movie/${id}`, { params: { append_to_response: "videos" } }),
  search: (term) => api.get("search/movie", { params: { query: encodeURIComponent(term) } }),
};
//encodeURIComponent는 string으로 바꾸기 위해서 하는것임. URL에서 인코딩을 해줘야해서.

export const tvApi = {
  topRated: () => api.get("tv/top_rated"),
  popular: () => api.get("tv/popular"),
  airingToday: () => api.get("tv/airing_today"),
  showDetail: (id) => api.get(`tv/${id}`, { params: { append_to_response: "videos" } }),
  search: (term) => api.get("search/tv", { params: { query: encodeURIComponent(term) } }),
};
