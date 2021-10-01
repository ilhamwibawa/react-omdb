import {
  ADD_MOVIES,
  LOADING_MOVIES,
  RESET_ALL_LOADED,
  RETRIEVE_MOVIE,
  RETRIEVE_MOVIES,
} from "./types";

import MovieService from "../services/MovieService";

export const retrieveMovies =
  (keyword, pageNumber) => async (dispatch, getState) => {
    dispatch(loadingMovies());

    try {
      const res = await MovieService.getAll(keyword, pageNumber);

      dispatch({
        type: RETRIEVE_MOVIES,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

export const getMovie = (id) => async (dispatch) => {
  dispatch(loadingMovies());

  try {
    const res = await MovieService.get(id);

    dispatch({
      type: RETRIEVE_MOVIE,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const addMovies = (keyword) => async (dispatch, getState) => {
  dispatch(loadingMovies());

  try {
    const res = await MovieService.getAll(
      keyword,
      getState().movies.pageNumber
    );

    dispatch({
      type: ADD_MOVIES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const loadingMovies = () => {
  return {
    type: LOADING_MOVIES,
  };
};

export const resetAllLoaded = () => {
  return {
    type: RESET_ALL_LOADED,
  };
};
