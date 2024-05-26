import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Snack from './Snack';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink exact activeClassName="active" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink exact activeClassName="active" to="/snacks/chips">
                Chips
              </NavLink>
            </li>
            <li>
              <NavLink exact activeClassName="active" to="/snacks/candy">
                Candy
              </NavLink>
            </li>
            <li>
              <NavLink exact activeClassName="active" to="/snacks/soda">
                Soda
              </NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={VendingMachine} />
          <Route exact path="/snacks/:name" component={Snack} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
