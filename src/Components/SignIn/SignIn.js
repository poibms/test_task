import React, { Component } from 'react';
import SignInForm from '../SignInForm/SignInForm';
import LocalStorageServices from '../../Services/LocalStorageServices';
import { wrongPassword } from '../../Config/Error';
import './SignIn.css';
import passwordValidation from '../../Services/Validation';
import { AuthContext } from '../Helpers/AuthContext';

class SignIn extends Component {
	// eslint-disable-next-line react/static-property-placement
	static contextType = AuthContext;

	signInUserAccount = (login, email, password) => {
		const { toggleAuthStatus } = this.context;
		const numbers = /[A-Z\d]/g;
		const passValid = passwordValidation(password, numbers);
		if (passValid) {
			const token = login + email + password;
			LocalStorageServices.createAccount(token);
			toggleAuthStatus();
		} else {
			alert(wrongPassword);
		}
	};

	render() {
		return (
			<>
				<div className="wrap">
					<SignInForm onSubmit={this.signInUserAccount} />
				</div>
			</>
		);
	}
}

export default SignIn;
