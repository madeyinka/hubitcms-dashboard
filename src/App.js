import React, { Fragment } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Daniel pages
// import Login from "./Pages/Login/Login";

/// Components
import Markup from "./jsx";
import Login from "./jsx/pages/Login";

const App = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Markup />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
