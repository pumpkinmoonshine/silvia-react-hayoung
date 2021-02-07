import axios from "axios";

export const viewMovieList = () =>
  axios({
    method: "get",
    url: "https://yts.mx/api/v2/list_movies.json?limit=50",
    responseType: "json",
  });
