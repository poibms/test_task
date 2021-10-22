import React from 'react';
import './LogoutUserAccount.css';

function LogoutUserAccount(props) {
	const { onLogout } = props;

	return (
		<div>
			<button type="button" className="login-button" onClick={onLogout}>
				Log Out
			</button>
		</div>
	);
}

export default LogoutUserAccount;
