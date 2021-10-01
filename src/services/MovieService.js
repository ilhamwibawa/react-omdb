import http from "../http-common";

const getAll = (keyword, page) => {
  return http.get(
    `/?apikey=${process.env.REACT_APP_API_KEY}&s=${keyword}&page=${page}`
  );
};

const get = (id) => {
  return http.get(`/?apikey=${process.env.REACT_APP_API_KEY}&i=${id}`);
};

const MovieService = {
  getAll,
  get,
};

export default MovieService;
