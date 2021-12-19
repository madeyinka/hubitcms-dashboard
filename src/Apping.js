<<<<<<< HEAD
// import React, { Fragment } from "react";

// /// Components
// import Markup from "./jsx";

// /// Style
// import "./css/style.css";
// import "./vendor/bootstrap-select/dist/css/bootstrap-select.min.css";

// import { withResizeDetector } from "react-resize-detector";

// const App = ({ width }) => {
//    const body = document.querySelector("body");

//    width >= 1300
//       ? body.setAttribute("data-sidebar-style", "full")
//       : width <= 1299 && width >= 767
//       ? body.setAttribute("data-sidebar-style", "mini")
//       : body.setAttribute("data-sidebar-style", "overlay");
//    return (
//       <Fragment>
//          <Markup />
//       </Fragment>
//    );
// };

// export default withResizeDetector(App);

import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import AppState from './contexts/AppState';
// import PageError from './pages/Error/PageError';
// import LandingPage from './pages/LandingPage/LandingPage';

import Apping from "./Apping";

import Login from "./Pages/Login/Login";
import ResetPassword from "./Pages/PasswordReset/PasswordReset";
import EmailSent from "./Pages/PasswordReset/EmailSent";
import NewPassword from "./Pages/PasswordReset/NewPassword";
import ResetSuccessful from "./Pages/PasswordReset/ResetSuccessful";

const App = () => {
  return (
    // <AppState>
    <Router>
      <Switch>
        {/* <Route exact path="/landing" component={LandingPage} /> */}
        <Route exact path="/" component={Login} />
        <Route exact path="/forget-password" component={ResetPassword} />
        <Route exact path="/emailsent" component={EmailSent} />
        <Route exact path="/update-password" component={NewPassword} />
        <Route
          exact
          path="/reset-password-success"
          component={ResetSuccessful}
        />

        <Route exact path="/dashboard" component={Apping} />
      </Switch>
    </Router>
    // </AppState>
  );
};

export default App;
=======
import React, { Fragment } from "react";

/// Components
import Markup from "./jsx";

/// Style
import "./css/style.css";
import "./vendor/bootstrap-select/dist/css/bootstrap-select.min.css";

import { withResizeDetector } from "react-resize-detector";

const App = ({ width }) => {
   const body = document.querySelector("body");

   width >= 1300
      ? body.setAttribute("data-sidebar-style", "full")
      : width <= 1299 && width >= 767
      ? body.setAttribute("data-sidebar-style", "mini")
      : body.setAttribute("data-sidebar-style", "overlay");
   return (
      <Fragment>
         <Markup />
      </Fragment>
   );
};

export default withResizeDetector(App);
>>>>>>> 38521fd1fce42ac763ecf8c0322f35e31910096f
