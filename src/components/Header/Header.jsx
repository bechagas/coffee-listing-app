import styles from './Header.module.css';
import Filters from '../Filters/Filters.jsx';

const Header = ({ handleFilter, currentFilter }) => {
  return (
    <header className={styles.header}>
      <img 
        className={styles.vector}
        src="/assets/icons/vector.svg" 
        alt="" 
        aria-hidden="true"
      />
      <h1 className={styles.title}>Our Collection</h1>
      <p className={styles.description}>
        Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.
      </p>
      <Filters
        handleFilter={handleFilter}
        currentFilter={currentFilter}
      />
    </header>
  );
};

export default Header;