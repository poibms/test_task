import React, { Component } from 'react';
import { checkLogin } from '../../Services/RoutingServices';
import SignInForm from '../SignInForm/SignInForm';
import LocalStorageServices from '../../Services/LocalStorageServices';
import { wrongPassword } from '../../Config/Error';
import { mainPage } from '../../Config/Routes';
import './SignIn.css';

export default class SignIn extends Component {
	componentDidMount() {
		checkLogin(this.props);
	}

	SignInUserAccount = (login, email, password) => {
		const numbers = /[A-Z\d]/g;

		if (password.length > 5 && numbers.test(password)) {
			const token = login + email + password;
			LocalStorageServices.createAccount(token);
			this.props.history.push(mainPage);
		} else {
			alert(wrongPassword);
		}
	};

	render() {
		return (
			<>
				<div className="wrap">
					<SignInForm onSubmit={this.SignInUserAccount} />
				</div>
			</>
		);
	}
}
