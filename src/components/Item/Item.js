import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { popupImage, togglePopup } from "../../actions/popup";
import styles from "./Item.module.css";

function Item({ target, thumbnail, title }) {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(togglePopup(true));
    dispatch(popupImage(thumbnail));
  };

  return (
    <div className={styles.item}>
      <div className={styles.itemThumbnail} onClick={onClickHandler}>
        <img src={thumbnail} alt={title} />
      </div>
      <div className={styles.action}>
        <h4 className={styles.itemTitle}>{title}</h4>
        <Link to={target} className={styles.link}>
          <button>Detail</button>
        </Link>
      </div>
    </div>
  );
}

export default Item;
