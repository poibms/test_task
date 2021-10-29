import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './Components/Main/Main';
import SignIn from './Components/SignIn/SignIn';
import { mainPage, signIn } from './Config/Routes';
import { AuthContext } from './Components/Helpers/AuthContext';
import requireAuthentication from './Hoc/UserStatus';
import { checkLogin } from './Services/RoutingServices';

class App extends Component {
	constructor() {
		super();
		this.onChangeAuthStatus = () => {
			this.setState({
				// eslint-disable-next-line react/no-unused-state
				isLoggin: checkLogin(),
			});
		};
		this.state = {
			// eslint-disable-next-line react/no-unused-state
			isLoggin: checkLogin(),
			// eslint-disable-next-line react/no-unused-state
			toggleAuthStatus: this.onChangeAuthStatus,
			// signInUser: this.signInUser,
		};
	}

	render() {
		return (
			<AuthContext.Provider value={this.state}>
				<BrowserRouter>
					<Switch>
						<Route
							exact
							path={mainPage}
							component={requireAuthentication(Main)}
						/>

						<Route
							exact
							path={signIn}
							component={requireAuthentication(SignIn)}
						/>
					</Switch>
				</BrowserRouter>
			</AuthContext.Provider>
		);
	}
}

export default App;
