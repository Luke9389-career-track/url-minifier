import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getSessionId, getSessionLoading } from '../selectors/sessionSelectors';
import { sessionVerify } from '../actions/sessionActions';
import Header from './Header';
import SignupUser from '../containers/SignupUser';
import LoginUser from '../containers/LoginUser';
import UrlCard from '../components/url/UrlCard';

const PrivateRoute = ({ ...rest }) => {
  const sessionId = useSelector(getSessionId);
  const loading = useSelector(getSessionLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    if(!sessionId) dispatch(sessionVerify());
  }, []);

  if(loading) {
    return <h1>Loading...</h1>;
  }

  if(!loading && !sessionId) {
    return <Redirect to="/login" />;
  }

  return <Route {...rest} />;
};

export default function App() {
  return (
    <Router>
      <Header />
      <UrlCard
        longUrl={'longlonglonglonglonglonglonglonglonglong'}
        shortUrl={'shortshortshort'}
        hits={1003}
        dateCreated={'December 3rd 2019'}
      />
      <UrlCard
        longUrl={'longlonglonglonglonglonglonglonglonglong'}
        shortUrl={'shortshortshort'}
        hits={1003}
        dateCreated={'December 3rd 2019'}
      />
      <UrlCard
        longUrl={'longlonglonglonglonglonglonglonglonglong'}
        shortUrl={'shortshortshort'}
        hits={1003}
        dateCreated={'December 3rd 2019'}
      />
      <UrlCard
        longUrl={'longlonglonglonglonglonglonglonglonglong'}
        shortUrl={'shortshortshort'}
        hits={1003}
        dateCreated={'December 3rd 2019'}
      />
      <Switch>
        <Route path="/login" component={LoginUser} />
        <Route path="/signup" component={SignupUser} />
      </Switch>
    </Router>
  );
}
