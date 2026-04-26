import { useEffect, useState } from 'react';
import styles from './MainCard.module.css';
import Header from '../Header/Header.jsx';
import CardList from '../CardList/CardList.jsx';

// MainCard > CardList > Card

const MainCard = () => {
  const [coffeeData, setCoffeeData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all');

  const handleFilter = (type) => {
    setFilter(type);
  };

  useEffect(() => {
    const fetchCoffeeData = async () => {
      const url = "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json";

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCoffeeData(data);
      } catch (err) {
        console.error(err.message);
        setError("Oops! We couldn't load the coffee list at this moment. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchCoffeeData();
  }, []);

  if (isLoading) return <p className={styles.loading}>Loading coffees...</p>;
  if (error) return <p className={styles.error}>{error}</p>;

  return (
      <section className={styles.card}>
        <Header 
          handleFilter={handleFilter}
          currentFilter={filter}
        />
        <CardList 
          coffees={coffeeData}
          currentFilter={filter}
        />
      </section>
  );
};

export default MainCard;