import React from "react";
import "./Header.css";

import LogoutButton from "../Logout-button/Logout-button";

const Headers = (props) => {
	
	return (
		<div className="header">
			<h1>Weather App</h1>
			<LogoutButton props={props} />
		</div>
	);
};
export default Headers;
