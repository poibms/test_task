import React from 'react';
import './Header.css';

import LogoutUserAccount from '../LogoutUserAccount/LogoutUserAccount';
import LocalStorageServices from '../../Services/LocalStorageServices';
import { signIn } from '../../Config/Routes';

const Headers = ({ history }) => {
	const LogOut = () => {
		LocalStorageServices.removeAccount();
		history.push(signIn);
		// loginOut(history);
	};

	return (
		<div className="header">
			<h1>Weather App</h1>
			<LogoutUserAccount onLogout={LogOut} />
		</div>
	);
};
export default Headers;
