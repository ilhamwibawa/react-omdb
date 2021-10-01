import {
  RETRIEVE_MOVIES,
  RETRIEVE_MOVIE,
  ADD_MOVIES,
  LOADING_MOVIES,
  RESET_ALL_LOADED,
} from "../actions/types";

const initialState = {
  movies: [],
  movie: {},
  pageNumber: 1,
  loading: false,
};

function movieReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case RETRIEVE_MOVIES:
      return {
        ...state,
        movies: payload.Search,
        loading: false,
      };
    case RETRIEVE_MOVIE:
      return {
        ...state,
        movie: payload,
        loading: false,
      };
    case ADD_MOVIES:
      return {
        ...state,
        pageNumber: state.pageNumber + 1,
        movies: state.movies.concat(payload.Search),
        allLoaded: state.movies.length < payload.totalResults ? false : true,
        loading: false,
      };
    case LOADING_MOVIES:
      return {
        ...state,
        loading: true,
      };
    case RESET_ALL_LOADED:
      return {
        ...state,
        allLoaded: false,
      };
    default:
      return state;
  }
}

export default movieReducer;
