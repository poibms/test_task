import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './Components/Main/Main';
import SignIn from './Components/SignIn/SignIn';

const App = () => (
	<BrowserRouter >
		<Switch>
			<Route exact path="/" component={Main}/>
			<Route exact path="/signin" component={SignIn} />
			
  		</Switch>
		  
  </BrowserRouter>
);
export default App;
