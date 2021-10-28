import React from 'react';
import './Header.css';

import LogOutUserAccount from '../LogOutUserAccount/LogOutUserAccount';
import LocalStorageServices from '../../Services/LocalStorageServices';
import { signIn } from '../../Config/Routes';

const Headers = ({ history }) => {
	const logOutUser = () => {
		LocalStorageServices.removeAccount();
		history.push(signIn);
	};

	return (
		<div className="header">
			<h1>Weather App</h1>
			<LogOutUserAccount onLogout={logOutUser} />
		</div>
	);
};
export default Headers;
