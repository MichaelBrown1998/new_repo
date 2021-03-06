import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";
import Home from './Home';
import ToDoList from './forms/ToDoList';
import Root from './tree/Root';
import Pokedex from './Pokedex';
import './Main.css';

function Main() {

    return (
        <main className="container">
            <Router>
                <nav className="nav">
                    <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
                    <NavLink to="/todo" className="nav-link" activeClassName="active">ToDo</NavLink>
                    <NavLink to="/tree" className="nav-link" activeClassName="active">A Tree</NavLink>
                    <NavLink to="/pokedex" className="nav-link" activeClassName="active">Pokedex</NavLink>
                </nav>
                {/* When the `exact` prop isn't used, Routes should be ordered
                from most specific to least. If the least specific is first,
                it matches all routes that start with /. */}
                <Switch>
                    <Route path="/todo">
                        <ToDoList />
                    </Route>
                    <Route path="/tree">
                        <Root />
                    </Route>
                    <Route path="/pokedex">
                        <Pokedex />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router >
        </main>
    );
}

export default Main;