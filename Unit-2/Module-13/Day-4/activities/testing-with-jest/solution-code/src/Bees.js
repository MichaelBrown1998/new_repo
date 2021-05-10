import Bee from './Bee.js';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    useRouteMatch
} from "react-router-dom";

function Bees() {

    const { path, url } = useRouteMatch();

    return (
        <Router>
            <nav className="nav nav-pills">
                <NavLink to={`${url}/Apidae`} className="nav-link" activeClassName="active">Apidae</NavLink>
                <NavLink to={`${url}/Halictidae`} className="nav-link" activeClassName="active">Halictidae</NavLink>
                <NavLink to={`${url}/Melittidae`} className="nav-link" activeClassName="active">className</NavLink>
            </nav>

            <Switch>
                <Route exact path={path}>
                    <h2>Select a Bee Family.</h2>
                </Route>
                <Route path={`${path}/:family`}>
                    <Bee />
                </Route>
            </Switch>
        </Router >
    );
}

export default Bees;