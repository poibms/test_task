import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './Components/Main/Main';
import SignIn from './Components/SignIn/SignIn';
import { mainPage, signIn } from './Config/Routes';

const App = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path={mainPage} component={Main} />
			<Route exact path={signIn} component={SignIn} />
		</Switch>
	</BrowserRouter>
);
export default App;
