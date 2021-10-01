import { POPUP_IMAGE, POPUP_TOGGLE } from "./types";

export const togglePopup = (isOpen) => async (dispatch, getState) => {
  dispatch({
    type: POPUP_TOGGLE,
    payload: isOpen,
  });
};

export const popupImage = (image) => async (dispatch, getState) => {
  dispatch({
    type: POPUP_IMAGE,
    payload: image,
  });
};
