import styles from "./styles.module.scss";
import IconArrow from "../../assets/images/icon-arrow.svg";

type input = {
  placeholder?: string;
  id?: string;
  value: string;
  error: string;
  sucess?: string;
  validate: () => void;
  onChange: any;
};

export const Input = ({
  placeholder,
  value,
  error,
  sucess,
  id,
  validate,
  onChange,
}: input) => {
  return (
    <div>
      <div className={styles.buttonInside}>
        <input
          placeholder={placeholder}
          type="email"
          id={id}
          value={value}
          className={`${styles.label}  ${error ? styles.labelError : ''}`}
          onChange={onChange}
        />
        <button className={`${styles.button}  ${error ? styles.buttonError : ''}`} onClick={validate}>
          <img src={IconArrow} alt="arrow" />
        </button>
      </div>
      {error && <p className={styles.error}>{error}</p>}
      {sucess && <p className={styles.sucess}>{sucess}</p>}
    </div>
  );
};
