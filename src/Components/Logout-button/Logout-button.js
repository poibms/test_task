import React from 'react';
import { userAccount} from '../../Config/Storage';
import './Logout-button.css';

function LogoutButton(props) {
  // const {history} = props
  console.log(props)
  const LogOut = () => {
    if (localStorage.getItem(userAccount)) {
      localStorage.removeItem(userAccount);
      
      props.history.push('/signin'); // not working 
      
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
