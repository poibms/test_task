import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './Components/Main/Main';
import SignIn from './Components/SignIn/SignIn';
import { mainPage, signIn } from './Config/Routes';
import { AuthContext } from './Components/Helpers/AuthContext';
import { checkLogin } from './Services/RoutingServices';
import requireAuthentication from './Hoc/UserStatus';

class App extends Component {
	constructor(props) {
		super(props);
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
							// component={Main}
							component={requireAuthentication(Main)}
						/>

						<Route
							exact
							path={signIn}
							// component={SignIn}
							component={requireAuthentication(SignIn)}
						/>
					</Switch>
				</BrowserRouter>
			</AuthContext.Provider>
		);
	}
}

export default App;
