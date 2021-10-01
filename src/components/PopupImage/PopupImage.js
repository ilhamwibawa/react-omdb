import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { togglePopup } from "../../actions/popup";
import styles from "./PopupImage.module.css";

function PopupImage() {
  const isOpen = useSelector((state) => state.popup.isOpen);
  const image = useSelector((state) => state.popup.image);
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(togglePopup(false));
  };

  return (
    <div className={`${styles.popup} ${isOpen ? styles.show : ""}`}>
      <div className={styles.popupContent}>
        <button className={styles.popupClose} onClick={onClickHandler}>
          x
        </button>
        <div className={styles.popupContent}>
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
}

export default PopupImage;
