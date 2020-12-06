import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Radar from "../../pages/Radar";
import Bar from "../../pages/Bar";

export default function NavBar() {
  return (
    <Router>
      <Link to="/radar">
        <button>Radar</button>
      </Link>
      <Link to="/bar">
        <button>Bar</button>
      </Link>
      <Switch>
        <Route path="/radar" component={Radar} />
        <Route path="/bar" component={Bar} />
      </Switch>
    </Router>
  );
}
