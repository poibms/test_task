import React, { Component } from 'react';
import './Header.css';

import LogOutUserAccount from '../LogOutUserAccount/LogOutUserAccount';
import LocalStorageServices from '../../Services/LocalStorageServices';
import { AuthContext } from '../Helpers/AuthContext';

class Headers extends Component {
	// eslint-disable-next-line react/static-property-placement
	static contextType = AuthContext;

	render() {
		const { toggleAuthStatus } = this.context;
		const logOut = () => {
			LocalStorageServices.removeAccount();
			toggleAuthStatus();
		};

		return (
			<div className="header">
				<h1>Weather app</h1>
				<LogOutUserAccount onLogout={logOut} />
			</div>
		);
	}
}
export default Headers;
