import React from 'react';
import './Logout-button.css';

function LogoutButton(props) {
	const { onLogout } = props;

	return (
		<div>
			<button
				type="button"
				className="login-button"
				onClick={() => {
					onLogout();
				}}>
				Log Out
			</button>
		</div>
	);
}

export default LogoutButton;
