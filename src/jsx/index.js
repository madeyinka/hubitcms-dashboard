import React from "react";

/// React router dom
import { Switch, Route } from "react-router-dom";
/// Style
import "../css/style.css";
import "../vendor/bootstrap-select/dist/css/bootstrap-select.min.css";
import { withResizeDetector } from "react-resize-detector";

/// Css
import "./index.css";
import "./chart.css";

/// Layout
import Nav from "./layouts/nav";
import Footer from "./layouts/Footer";

/// Pages
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import LockScreen from "./pages/LockScreen";
import Error400 from "./pages/Error400";
import Error403 from "./pages/Error403";
import Error404 from "./pages/Error404";
import Error500 from "./pages/Error500";
import Error503 from "./pages/Error503";
import ForgotPassword from "./pages/ForgotPassword";

import AllPublisher from "./pages/allpublisher/AllPublisher";

import CreatePublisher from "./pages/createpublisher/CreatePublisher";

const Dashboard = () => <h1>Dashboard</h1>;
const AllPages = () => <h1>Pages/AllPages</h1>;
const EditPages = () => <h1>Pages/EditPages</h1>;
const CreatePages = () => <h1>Pages/CreatePages</h1>;
const Posts = () => <h1>Posts</h1>;
const Commerce = () => <h1>Commerce</h1>;
// const AllPublisher = () => <h1>Publisher/AllPublisher</h1>;
const EditPublisher = () => <h1>Publisher/EditPublisher</h1>;
const Newsletter = () => <h1>Newsletter</h1>;
const Settings = () => <h1>Settings</h1>;

const Markup = ({ width }) => {
  const body = document.querySelector("body");

  width >= 1300
    ? body.setAttribute("data-sidebar-style", "full")
    : width <= 1299 && width >= 767
    ? body.setAttribute("data-sidebar-style", "mini")
    : body.setAttribute("data-sidebar-style", "overlay");

  const routes = [
    /// Deshborad
    // { url: "", component: Home },
    // { url: "companies", component: Companies },
    // { url: "analytics", component: Analytics },
    { url: "dashboard", component: Dashboard },
    { url: "all-pages", component: AllPages },
    { url: "edit-pages", component: EditPages },
    { url: "create-pages", component: CreatePages },
    { url: "posts", component: Posts },
    { url: "commerce", component: Commerce },
    { url: "all-publisher", component: AllPublisher },
    { url: "create-publisher", component: CreatePublisher },
    { url: "edit-publisher", component: EditPublisher },
    { url: "newsletter", component: Newsletter },
    { url: "settings", component: Settings },

    ///login
    { url: "page-lock-screen", component: LockScreen },
    { url: "page-login", component: Login },
    { url: "page-register", component: Registration },
    { url: "page-error-400", component: Error400 },
    { url: "page-error-403", component: Error403 },
    { url: "page-error-404", component: Error404 },
    { url: "page-error-500", component: Error500 },
    { url: "page-error-503", component: Error503 },
    { url: "page-forgot-password", component: ForgotPassword },
  ];

  return (
    <div id="main-wrapper" className="show mainBody">
      <Nav />
      <div className="content-body">
        <div className="container-fluid">
          <Switch>
            {routes.map((data, i) => (
              <Route
                key={i}
                exact
                path={`/${data.url}`}
                component={data.component}
              />
            ))}
          </Switch>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default withResizeDetector(Markup);
