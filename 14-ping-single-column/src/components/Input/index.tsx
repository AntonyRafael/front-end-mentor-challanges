import styles from "./styles.module.scss";

type input = {
  placeholder?: string;
  id?: string;
  value: string;
  error: string | null;
  type?: string;
  validate: () => void;
  onChange: any;
};

export const Input = ({
  placeholder,
  value,
  error,
  id,
  type,
  validate,
  onChange,
}: input) => {
  return (
    <div>
      <div className={styles.inputContainer}>
        <input
          placeholder={placeholder}
          type={type}
          id={id}
          value={value}
          className={`${styles.input}  ${error ? styles.inputError : ""}`}
          onChange={onChange}
        />
      </div>
      {error ? (
        <p className={styles.error}>{error}</p>
      ) : (
        <p className={styles.error} style={{opacity: 0}}>a</p>
      )}
    </div>
  );
};