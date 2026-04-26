import styles from './CardList.module.css';
import Card from "../Card/Card.jsx";

// MainCard > CardList > Card

const CardList = ({ coffees, currentFilter }) => {
  const filteredCoffees = currentFilter === 'all'
    ? coffees
    : coffees.filter((coffee) => coffee.available);

  return (
    <ul className={styles.grid}>
      {filteredCoffees.map((coffee) => (
        <Card 
          key={coffee.id}
          {...coffee}
          isPopular={coffee.popular}
          isAvailable={coffee.available}
        />
      ))}
    </ul>
  );
};

export default CardList;