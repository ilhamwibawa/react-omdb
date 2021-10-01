import { POPUP_IMAGE, POPUP_TOGGLE } from "../actions/types";

const initialState = {
  isOpen: false,
  image: "",
};

function popupReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case POPUP_TOGGLE:
      return {
        ...state,
        isOpen: payload,
      };
    case POPUP_IMAGE:
      return {
        ...state,
        image: payload,
      };
    default:
      return state;
  }
}

export default popupReducer;
