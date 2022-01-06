import { useState } from "react";

import styles from "./styles.module.scss";
import OpenIcon from "../../assets/images/icon-arrow-down.svg";

function Accordion({ title, description, opened }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.accordionContainer}>
      <div className={styles.titleInfo} onClick={handleClick}>
        <div className={styles.titleContainer}>
          <h1 className={`${isOpen ? styles.titleActive : ""}`}>{title ? title : "Default"}</h1>
          <img
            src={OpenIcon}
            alt="Open Icon"
            className={`${isOpen ? styles.closeIcon : ""}`}
          />
        </div>
      </div>

      <div className={`${isOpen ? styles.showContent : styles.closeContent}`}>
        <p>{description ? description : "description default"}</p>
      </div>
    </div>
  );
}

export default Accordion;
