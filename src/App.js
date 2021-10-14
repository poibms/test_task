import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './Components/Main/Main';
import SignIn from './Components/SignIn/SignIn';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/signin" component={SignIn} />
    </Switch>
  </Router>
);
export default App;
