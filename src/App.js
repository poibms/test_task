import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './Components/Main/Main';
import SignIn from './Components/SignIn/SignIn';
import { mainPage, signIn } from './Config/Routes';
import { AuthContext } from './Components/Helpers/AuthContext';
import requireAuthentication from './Hoc/UserStatus';

class App extends Component {
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
