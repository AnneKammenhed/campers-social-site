import NavBar from './components/NavBar';
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.App}>
      <h1>Hello campers!</h1>
      <NavBar />
    </div>
  );
}
export default App;