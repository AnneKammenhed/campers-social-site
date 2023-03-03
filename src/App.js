import NavBar from './components/NavBar';
import styles from './App.module.css';
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from './pages/auth/SignUpForm';
import SignInForm from "./pages/auth/SignInForm";

function App() {
  return (
        <div className={styles.App}>
          <h1>Hello campers!</h1>
          <NavBar />
          <Container className={styles.Main}>
            <Switch>
              <Route exact path="/" render={() => <h2>Home page</h2> } />
              <Route exact path="/signin" render={() => <SignInForm />} />
              <Route exact path="/signup" render={() => <SignUpForm />} />
              <Route render={() => <p>Page not found!</p>} />
            </Switch>
          </Container>
        </div>
  );
}

export default App;