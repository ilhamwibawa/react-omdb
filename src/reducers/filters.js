import { FILTER_BY_KEYWORD, SUGGESTIONS } from "../actions/types";

const initialState = {
  keyword: "",
  suggestions: [],
};

function filterReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case FILTER_BY_KEYWORD:
      return {
        ...state,
        keyword: payload,
      };
    case SUGGESTIONS:
      return {
        ...state,
        suggestions: payload,
      };
    default:
      return state;
  }
}

export default filterReducer;
