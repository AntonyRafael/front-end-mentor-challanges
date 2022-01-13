import styles from "./styles.module.scss";

type ButtonProps = {
  text: string;
  onClick: () => void;
  background?: string;
  stretched?: boolean;
};

export const Button = ({ text, background, stretched, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={styles.button}
      style={{
        width: `${stretched ? "100%" : ""}`,
        backgroundColor: `${background ? background : "var(--blue)"}`,
      }}
    >
      {text}
    </button>
  );
};
