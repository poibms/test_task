import React from 'react';
import './LogOutUserAccount.css';

interface ILogoutProps {
	onLogout: React.MouseEventHandler<HTMLButtonElement>;
};

function LogOutUserAccount({ onLogout }: ILogoutProps) {
	return (
		<div>
			<button type="button" className="login-button" onClick={onLogout}>
				Log Out
			</button>
		</div>
	);
}

export default LogOutUserAccount;
