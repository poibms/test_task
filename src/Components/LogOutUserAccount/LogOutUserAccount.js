import React from 'react';
import './LogOutUserAccount.css';

function LogOutUserAccount(props) {
	const { onLogout } = props;

	return (
		<div>
			<button type="button" className="login-button" onClick={onLogout}>
				Log Out
			</button>
		</div>
	);
}

export default LogOutUserAccount;
