import MovieService from "../services/MovieService";
import { FILTER_BY_KEYWORD, SUGGESTIONS } from "./types";

export const filterByKeyword = (keyword) => async (dispatch, getState) => {
  dispatch({
    type: FILTER_BY_KEYWORD,
    payload: keyword,
  });
};

export const suggestion = (keyword) => async (dispatch, getState) => {
  try {
    const res = await MovieService.getAll(keyword, 1);

    dispatch({
      type: SUGGESTIONS,
      payload: res.data.Search,
    });
  } catch (err) {
    console.log(err);
  }
};
