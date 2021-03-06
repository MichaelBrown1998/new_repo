import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    useRouteMatch
} from "react-router-dom";
import Pokemon from './Pokemon.js';

function Pokedex() {

    const { path, url } = useRouteMatch();

    return (
        <Router>
            <nav className="nav nav-pills">
                <NavLink to={`${url}/1`} className="nav-link" activeClassName="active">Bulbasaur</NavLink>
                <NavLink to={`${url}/2`} className="nav-link" activeClassName="active">Ivysaur</NavLink>
                <NavLink to={`${url}/3`} className="nav-link" activeClassName="active">Venusaur</NavLink>
                <NavLink to={`${url}/4`} className="nav-link" activeClassName="active">Charmander</NavLink>
            </nav>

            <Switch>
                <Route exact path={path}>
                    <h2>Select a Pokemon.</h2>
                </Route>
                <Route path={`${path}/:dexNumber`}>
                    <Pokemon />
                </Route>
            </Switch>
        </Router >
    );
}

export default Pokedex;