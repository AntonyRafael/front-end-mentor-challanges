import styles from "./styles.module.scss";

type ButtonType = {
  text?: string;
  callbackFunction: () => void;
}

const Button = ({ text , callbackFunction}: ButtonType) => {
  return (
    <button className={styles.button} onClick={callbackFunction}>
      {text ? text : 'Default Button'}
    </button>
  )
}

export default Button;
