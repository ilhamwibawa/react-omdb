import React from "react";
import styles from "./LoadingState.module.css";

function LoadingState() {
  return (
    <div className={styles.loading}>
      <p>Loading...</p>
    </div>
  );
}

export default LoadingState;
