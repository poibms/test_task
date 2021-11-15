import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './Components/Main/Main';
import SignIn from './Components/SignIn/SignIn';
import { mainPage, signIn } from './Config/Routes';
import requireAuthentication from './Hoc/UserStatus';

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path={mainPage} component={requireAuthentication(Main)} />

				<Route exact path={signIn} component={requireAuthentication(SignIn)} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
