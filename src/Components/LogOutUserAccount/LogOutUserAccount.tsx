import React from 'react';
import './LogOutUserAccount.css';

type Props = {
	onLogout: React.MouseEventHandler<HTMLButtonElement>;
};

function LogOutUserAccount({ onLogout }: Props) {
	// const { onLogout } = props;

	return (
		<div>
			<button type="button" className="login-button" onClick={onLogout}>
				Log Out
			</button>
		</div>
	);
}

export default LogOutUserAccount;
