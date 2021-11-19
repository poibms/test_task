import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './Components/Main/Main';
import SignIn from './Components/SignIn/SignIn';
import { routes } from './Config/Routes';
import requireAuthentication from './Hoc/UserStatus';

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route
					exact
					path={routes.mainPage}
					component={requireAuthentication(Main)}
				/>

				<Route
					exact
					path={routes.signIn}
					component={requireAuthentication(SignIn)}
				/>
			</Switch>
		</BrowserRouter>
	);
};

export default App;
