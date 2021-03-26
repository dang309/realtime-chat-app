import Login from './Container/Login';
import Register from "./Container/Register";

import Dashboard from './Components/Dashboard'
import Messenger from "./Components/Messenger";

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

function App() {
    const isAuth = window.sessionStorage.getItem('isAuth');
  return (
      <Router>
          <Switch>
              <Route exact path="/">
                  {!isAuth ? <Redirect to="/sign-in" /> : <Dashboard />}
              </Route>
              <Route path="/sign-up" component={Register} />
              <Route path="/sign-in" component={Login} />
              <Route path="/message/:id">
                  {!isAuth ? <Redirect to="/sign-in" /> : <Messenger />}
              </Route>
          </Switch>
      </Router>
  );
}

export default App;
