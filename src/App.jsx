import styles from './App.module.css';
import MainCard from './components/MainCard/MainCard.jsx';

const App = () => {
  return (
    <main className={styles.wrapper}>
      <MainCard />
    </main>
  );
};

export default App;