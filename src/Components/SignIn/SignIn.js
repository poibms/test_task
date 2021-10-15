import React, { Component } from "react";
import { userAccount} from '../../Config/Storage';
import SignInForm from "../signInForm/SignInForm";

import "./SignIn.css";

export default class SignIn extends Component {
	componentDidMount() {
		if (localStorage.getItem(userAccount)) {
			this.props.history.push('/');
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
			this.props.history.push('/');
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
