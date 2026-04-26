import styles from './Card.module.css';

// MainCard > CardList > Card

const Card = ({ name, image, price, rating, votes, isPopular, isAvailable }) => {
  return (
    <li className={styles.card}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={image} alt={name} />
        {isPopular && <span className={styles.badge}>Popular</span>}
      </div>

      <div className={styles.info}>
        <div className={styles.titleRow}>
          <h2 className={styles.name}>{name}</h2>
          <span className={styles.price}>{price}</span>
        </div>

        <div className={styles.ratingRow}>
          <img 
            className={styles.starIcon}
            src={rating
              ? "/assets/icons/Star_fill.svg"
              : "/assets/icons/Star.svg"
            } 
            alt=""
            aria-hidden="true"
          />
          {rating 
            ? <span className={styles.ratingValue}>{rating}</span> 
            : <span className={styles.noRatings}>No ratings</span>
          }
          {votes > 0 && <span className={styles.votes}>({votes} votes)</span>}
          {!isAvailable && <span className={styles.soldOut}>Sold out</span>}
        </div>
      </div>
    </li>
  );
};

export default Card;