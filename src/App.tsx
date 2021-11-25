import React, { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './Components/Main/Main';
import SignIn from './Components/SignIn/SignIn';
import { Routes } from './Config/Routes';
import requireAuthentication from './Hoc/UserStatus';

const App: FC = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route
					exact
					path={Routes.MainPage}
					component={requireAuthentication(Main)}
				/>

				<Route
					exact
					path={Routes.SignIn}
					component={requireAuthentication(SignIn)}
				/>
			</Switch>
		</BrowserRouter>
	);
};



export default App;
