import React from "react";
import styles from "./styles.module.scss";

const Loading = () => {
  return (
    <div className={styles.loaderContainer}>
      <span className={styles.loader}></span>
      <span className={styles.loader}></span>
      <span className={styles.loader}></span>
    </div>
  );
};

export default Loading;
