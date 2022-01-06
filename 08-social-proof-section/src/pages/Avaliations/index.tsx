import React from "react";
import AvaliationCard from "../../components/AvaliationCard";
import AvaliationView from "../../components/AvaliationView";
import styles from "./styles.module.scss";

export const AvaliationsPage = () => {
  return (
    <main className={styles.pageContainer}>
      <div className={styles.productDetails}>
        <div className={styles.infoProduct}>
          <h1>10,000+ of our users love our products</h1>

          <p>
            We only provide grat products combined with excellent customer
            service. See what our satisfied customers are saying about our
            services.
          </p>
        </div>

        <div className={styles.avaliations}>
          <AvaliationView
            numberOfStars={5}
            ratedIn={`Rated 5 stars in BestTech`}
          />
          <AvaliationView
            numberOfStars={4}
            ratedIn={`Rated 5 stars in BestTech`}
          />
          <AvaliationView
            numberOfStars={3}
            ratedIn={`Rated 5 stars in BestTech`}
          />
        </div>
      </div>

      <div className={styles.cards}>
        <AvaliationCard
          icon="https://github.com/AntonyRafael.png"
          author="Antony Rafael"
          buyerCategory="Verefied Buyer"
          comment="t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as"
        />

        <AvaliationCard
          icon="https://github.com/assuncaocharles.png"
          author="Charles Assunção"
          buyerCategory="Verefied Buyer"
          comment="t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as"
        />

        <AvaliationCard
          icon="https://github.com/omariosouto.png"
          author="Mario Souto"
          buyerCategory="Verefied Buyer"
          comment="t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as"
        />
      </div>
    </main>
  );
};
