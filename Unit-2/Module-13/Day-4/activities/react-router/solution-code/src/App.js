import Encounters from './Encounters.js';
import Library from './Library.js';
import Bees from './Bees.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <main className="container">
      <Router>
        <nav className="nav">
          <NavLink exact to="/" className="nav-link" activeClassName="active">Library</NavLink>
          <NavLink to="/paranormal" className="nav-link" activeClassName="active">Paranormal Encounters</NavLink>
          <NavLink to="/bees" className="nav-link" activeClassName="active">Bees</NavLink>
        </nav>

        <Switch>
          <Route path="/paranormal">
            <Encounters />
          </Route>
          <Route path="/bees">
            <Bees />
          </Route>
          <Route path="/">
            <Library />
          </Route>
        </Switch>
      </Router >
    </main>
  );
}

export default App;
