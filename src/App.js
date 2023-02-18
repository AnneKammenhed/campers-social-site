import NavBar from './components/NavBar';
import styles from './App.module.css';
import Container from "react-bootstrap/Container";
import {Route, Switch} from "react-router-dom"

function App() {
  return (
    <div className={styles.App}>
      <h1>Hello campers!</h1>
      <NavBar />
      <Container className={styles.Main}>
      <Switch>
          <Route exact path="/" render={() => <h2>Home page</h2>} />
          <Route exact path="/signin" render={() => <h2>Sign in</h2>} />
          <Route exact path="/signup" render={() => <h2>Sign up</h2>} />
          <Route render={() => <p>Page not found!</p>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;