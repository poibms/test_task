import React from 'react';
import './Header.css';

import LogOutUserAccount from '../LogOutUserAccount/LogOutUserAccount';
import LocalStorageServices from '../../Services/LocalStorageServices';
import { signIn } from '../../Config/Routes';

const Headers = ({ history }) => {
	const LogOutUser = () => {
		LocalStorageServices.removeAccount();
		history.push(signIn);
	};

	return (
		<div className="header">
			<h1>Weather App</h1>
			<LogOutUserAccount onLogout={LogOutUser} />
		</div>
	);
};
export default Headers;
