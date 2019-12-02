import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from './Header';
import SignupUser from '../containers/SignupUser';
import LoginUser from '../containers/LoginUser';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/login" component={LoginUser} />
        <Route path="/signup" component={SignupUser} />
      </Switch>
    </Router>
  );
}
