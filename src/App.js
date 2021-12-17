import React from 'react'

import { BrowserRouter as Router, Switch, Route   } from 'react-router-dom'
// import AppState from './contexts/AppState';
// import PageError from './pages/Error/PageError';
// import LandingPage from './pages/LandingPage/LandingPage';
import Dashboard from './Pages/DashboardPage/Dashboard';
import Apping from './Apping';
import {Typography} from '@material-ui/core';
import Login from './Pages/Login/Login';
import ResetPassword from './Pages/PasswordReset/PasswordReset'
import EmailSent from './Pages/PasswordReset/EmailSent'
import NewPassword from './Pages/PasswordReset/NewPassword'
import ResetSuccessful from './Pages/PasswordReset/ResetSuccessful';


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
      <Route exact path="/reset-password-success" component={ResetSuccessful} />

        <Route exact path="/dashboard" component={Apping} />
      {/* <Route exact path="*"  component={PageError} /> */}
      </Switch>
      </Router>
    // </AppState>
  )
}

export default App
