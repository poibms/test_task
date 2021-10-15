import React from "react";
import "./Header.css";

import LogoutButton from "../Logout-button/Logout-button";

const Headers = () => {
	
	return (
		<div className="header">
			<h1>Weather App</h1>
			<LogoutButton />
		</div>
	);
};
export default Headers;
