import React from 'react';
import './Header.css';

import LogoutButton from '../Logout-button/Logout-button';
import { loginOut } from '../../Services/RoutingServices';

const Headers = (props) => {
	const LogOut = () => {
		loginOut(props.props);
	};

	return (
  <div className="header">
		<h1>Weather App</h1>
  	<LogoutButton onLogout={LogOut} />
	</div>
	);
};
export default Headers;
