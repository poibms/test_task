import React from 'react';
import './Logout-button.css';

function LogoutButton(props) {
  // const {history} = props
  
  const LogOut = () => {
    LogOut(props)// not working
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
