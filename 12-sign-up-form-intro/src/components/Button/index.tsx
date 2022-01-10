import styles from "./styles.module.scss";

type buttonType = {
  bgColor?: string;
  textBold?: string;
  text?: string;
  onClick?: () => void;
};

export const Button = ({ bgColor, textBold, text, onClick }: buttonType) => {
  return (
    <button
      onClick={onClick}
      className={styles.button}
      style={{ backgroundColor: bgColor || "var(--green)" }}
    >
      <span className={styles.bold}>{textBold}</span>
      <span className={styles.text}>{text}</span>
    </button>
  );
};
