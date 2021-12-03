import React, { FC } from 'react';
import './Header.css';
import { useDispatch } from 'react-redux';
import LogOutUserAccount from '../LogOutUserAccount/LogOutUserAccount';
import LocalStorageServices from '../../Services/LocalStorageServices';
import { checkUserStatus } from '../../Actions/UserStatusAction';

const Headers: FC = () => {
	const dispatch = useDispatch();
	const logOut = () => {
		LocalStorageServices.removeAccount();
		dispatch(checkUserStatus());
	};

	return (
		<div className="header">
			<h1>Weather app</h1>
			<LogOutUserAccount onLogout={logOut} />
		</div>
	);
};
export default Headers;
