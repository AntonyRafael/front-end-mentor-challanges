import styles from "./styles.module.scss";

type Card = {
  icon: string;
  author: string;
  buyerCategory: string;
  comment: string;
};

const AvaliationCard = ({ icon, author, buyerCategory, comment }: Card) => {
  return (
    <div className={styles.card}>
      <div className={styles.userInfo}>
        <div className={styles.userImage}>
          <img src={icon} alt="user photo" />
        </div>

        <div className={styles.detailsUser}>
          <p>{author}</p>
          <p>{buyerCategory}</p>
        </div>
      </div>

      <div className={styles.userComment}>
        <p>"{comment}"</p>
      </div>

    </div>
  );
};

export default AvaliationCard;
