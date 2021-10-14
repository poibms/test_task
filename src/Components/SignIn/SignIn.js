import React, { Component } from "react";
import { urlLocal, userAccount } from "../../config";
import SignInForm from "../signInForm/SignInForm";

import "./SignIn.css";

export default class SignIn extends Component {
	componentDidMount() {
		if (localStorage.getItem(userAccount)) {
			window.location.assign(urlLocal);
		}
	}

	SignIn = (login, email, password) => {
		const numbers = /[A-Z\d]/g;

		if (password.length > 5 && numbers.test(password)) {
			console.log(login);
			console.log(email);
			console.log(password);
			const token = login + email + password;
			localStorage.setItem(userAccount, token);
			window.location.assign(urlLocal);
		} else {
			alert("the minimum password length should be 15 characters");
		}
	}

	render() {
		return (
			<>
				<div className="wrap">
					<SignInForm onSubmit={this.SignIn} />
				</div>
			</>
		);
	}
}
