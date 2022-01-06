import styles from "./styles.module.scss";
import IconStar from "../../assets/images/icon-star.svg";

type AvaliationView = {
  numberOfStars: number;
  ratedIn: string;
};

const AvaliationView = ({ numberOfStars, ratedIn }: AvaliationView) => {
  return (
    <div className={styles.avaliationContainer}>
      <div className={styles.stars}>
        {Array.from(Array(numberOfStars), (e, index) => (
          <img src={IconStar} alt="Star" key={index} />
        ))}
      </div>
      <div className={styles.ratedIn}>
        <p>{ratedIn}</p>
      </div>
    </div>
  );
};

export default AvaliationView;
