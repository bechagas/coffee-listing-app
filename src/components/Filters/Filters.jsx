import styles from './Filters.module.css';

const Filters = ({ handleFilter, currentFilter }) => {
  return (
    <div className={styles.container}>
      <button
        className={`${styles.btn} ${currentFilter === 'all' ? styles.active : ''}`}
        onClick={() => handleFilter('all')}
        aria-pressed={currentFilter === 'all'}
      >
        All Products
      </button>

      <button
        className={`${styles.btn} ${currentFilter === 'available' ? styles.active : ''}`}
        onClick={() => handleFilter('available')}
        aria-pressed={currentFilter === 'available'}
      >
        Available Now
      </button>
    </div>
  );
};

export default Filters;