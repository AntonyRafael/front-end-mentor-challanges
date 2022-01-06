import styles from "./styles.module.scss";

type CardProps = {
  title: string;
  description: string;
  icon: string;
  iconAlt?: string;
  borderColor?: string;
};

const Card = ({
  title,
  description,
  icon,
  iconAlt,
  borderColor,
}: CardProps) => {
  return (
    <div
      className={styles.cardContainer}
      style={{ borderTop: `4px solid ${borderColor ? borderColor : "#333"}` }}
    >
      <div className={styles.content}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className={styles.image}>
        <img src={icon} alt={`${iconAlt ? iconAlt : "icon card"}`} />
      </div>
    </div>
  );
};

export default Card;
