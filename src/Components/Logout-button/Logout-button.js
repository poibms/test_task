import React from 'react';
import { urlLocal, userAccount } from '../../config';
import './Logout-button.css';

function LogoutButton() {
	const LogOut = () => {
		if (localStorage.getItem(userAccount)) {
			localStorage.removeItem(userAccount);
			window.location.assign(`${urlLocal}signin`);
		}
  };

return (
  <div>
    <button type="button" className="login-button" onClick={LogOut}>
      Log Out
    </button>
  </div>
  );
}

export default LogoutButton;
